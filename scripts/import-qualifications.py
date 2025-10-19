#!/usr/bin/env python3
import json
import re
from pathlib import Path

# Read the JSON file
json_path = Path(__file__).parent.parent / 'src' / 'data' / 'mancosa_qualifications.json'
with open(json_path, 'r') as f:
    json_data = json.load(f)

nqf_level_map = {
    5: 'Higher Certificate',
    6: 'Advanced Certificate',
    7: 'Undergraduate Degree',
    8: 'Postgraduate Diploma',
    9: 'Masters Degree',
    10: 'Doctoral Degree'
}

def infer_faculty(title):
    title_lower = title.lower()
    if 'business administration' in title_lower:
        return 'Business Management'
    if 'public administration' in title_lower:
        return 'Public Management'
    if 'accounting' in title_lower:
        return 'Accounting and Finance'
    if 'marketing' in title_lower or 'digital marketing' in title_lower or 'social media' in title_lower or 'corporate communication' in title_lower:
        return 'Marketing and Communication'
    if 'human resource' in title_lower:
        return 'Human Resources'
    if 'information' in title_lower or 'technology' in title_lower or 'coding' in title_lower or 'artificial intelligence' in title_lower:
        return 'Information Technology'
    if 'project management' in title_lower:
        return 'Project Management'
    if 'supply chain' in title_lower or 'logistics' in title_lower:
        return 'Supply Chain Management'
    if 'financial' in title_lower or 'tax' in title_lower:
        return 'Accounting and Finance'
    if 'entrepreneurship' in title_lower or 'retail' in title_lower or 'family business' in title_lower:
        return 'Business Management'
    if 'tourism' in title_lower or 'hospitality' in title_lower or 'events' in title_lower:
        return 'Tourism and Hospitality'
    if 'education' in title_lower:
        return 'Education'
    if 'paralegal' in title_lower:
        return 'Legal Studies'
    return 'Business and Commerce'

def generate_id(title):
    replacements = [
        ('Bachelor of Commerce', 'BCOM'),
        ('Bachelor of Business Administration', 'BBA'),
        ('Bachelor of Public Administration', 'BPA'),
        ('Bachelor of Education', 'BED'),
        ('Master of Business Administration', 'MBA'),
        ('Master of Public Administration', 'MPA'),
        ('Master of Commerce', 'MCOM'),
        ('Doctor of Business Administration', 'DBA'),
        ('Postgraduate Diploma', 'PGDIP'),
        ('Advanced Diploma', 'ADIP'),
        ('Advanced Certificate', 'ACERT'),
        ('Higher Certificate', 'HC'),
        ('Honours', 'HONS'),
    ]

    clean = title
    for old, new in replacements:
        clean = re.sub(old, new, clean, flags=re.IGNORECASE)

    clean = re.sub(r'\s+in\s+', '_', clean, flags=re.IGNORECASE)
    clean = re.sub(r'\s+', '_', clean)
    clean = re.sub(r'[^A-Z0-9_]', '', clean, flags=re.IGNORECASE)

    return clean.upper()

def parse_duration(duration_str):
    if not duration_str:
        return 1
    match = re.search(r'(\d+)', duration_str)
    return int(match.group(1)) if match else 1

# Check if NQF Level 8 is Honours or Postgraduate Diploma
def determine_level_8_type(title):
    if 'honours' in title.lower():
        return 'Honours Degree'
    else:
        return 'Postgraduate Diploma'

qualifications = []
for q in json_data:
    nqf_level = q.get('NQF_Level')

    # Determine level
    if nqf_level == 8:
        level = determine_level_8_type(q['Title'])
    else:
        level = nqf_level_map.get(nqf_level, 'Undergraduate Degree')

    qual_id = generate_id(q['Title'])
    duration = parse_duration(q.get('Duration'))
    faculty = infer_faculty(q['Title'])

    career_paths = q.get('CareerPaths', [])

    description = q.get('ShortDescription', '')
    if not description and q.get('About'):
        description = q['About'][:200] + '...' if len(q['About']) > 200 else q['About']

    qualifications.append({
        'id': qual_id,
        'name': q['Title'],
        'level': level,
        'nqf_level': nqf_level,
        'saqa_id': q.get('SAQA_ID', 'TBD'),
        'total_credits': q.get('Credits', 120),
        'duration_years': duration,
        'faculty': faculty,
        'description': description,
        'coordinator': q.get('AcademicProgrammeManager') or None,
        'career_outcomes': career_paths,
        'programme_url': q.get('ProgrammeURL'),
        'saqa_url': q.get('SAQA_QualificationURL')
    })

# Generate TypeScript content
ts_content = '''/**
 * MANCOSA Qualification Catalogue
 * Comprehensive database of all MANCOSA qualifications and programmes
 * Auto-generated from mancosa_qualifications.json
 */

export interface Qualification {
  id: string;
  name: string;
  level: 'Higher Certificate' | 'Advanced Certificate' | 'Undergraduate Degree' | 'Advanced Diploma' | 'Postgraduate Diploma' | 'Honours Degree' | 'Masters Degree' | 'Doctoral Degree';
  nqf_level: 5 | 6 | 7 | 8 | 9 | 10;
  saqa_id: string;
  total_credits: number;
  duration_years: number;
  faculty: string;
  description: string;
  coordinator?: string;
  school?: string;
  career_outcomes?: string[];
  entry_requirements?: string;
  programme_url?: string;
  saqa_url?: string;
}

export const QUALIFICATIONS: Qualification[] = ''' + json.dumps(qualifications, indent=2) + ''';

export function getQualificationById(id: string): Qualification | undefined {
  return QUALIFICATIONS.find(q => q.id === id);
}

export function getQualificationsByLevel(level: Qualification['level']): Qualification[] {
  return QUALIFICATIONS.filter(q => q.level === level);
}

export function getQualificationsByNQF(nqf_level: number): Qualification[] {
  return QUALIFICATIONS.filter(q => q.nqf_level === nqf_level);
}

export function getQualificationsByFaculty(faculty: string): Qualification[] {
  return QUALIFICATIONS.filter(q => q.faculty === faculty);
}

export function searchQualifications(query: string): Qualification[] {
  const lowerQuery = query.toLowerCase();
  return QUALIFICATIONS.filter(q =>
    q.name.toLowerCase().includes(lowerQuery) ||
    q.description.toLowerCase().includes(lowerQuery) ||
    q.faculty.toLowerCase().includes(lowerQuery)
  );
}

export function getAllFaculties(): string[] {
  return Array.from(new Set(QUALIFICATIONS.map(q => q.faculty))).sort();
}

export function getAllLevels(): Qualification['level'][] {
  return Array.from(new Set(QUALIFICATIONS.map(q => q.level)));
}
'''

# Write the TypeScript file
output_path = Path(__file__).parent.parent / 'src' / 'data' / 'qualifications.ts'
with open(output_path, 'w') as f:
    f.write(ts_content)

print(f"Successfully imported {len(qualifications)} qualifications")
print("\nQualifications by level:")
by_level = {}
for q in qualifications:
    level = q['level']
    by_level[level] = by_level.get(level, 0) + 1
for level, count in sorted(by_level.items()):
    print(f"  {level}: {count}")

print("\nQualifications by faculty:")
by_faculty = {}
for q in qualifications:
    faculty = q['faculty']
    by_faculty[faculty] = by_faculty.get(faculty, 0) + 1
for faculty, count in sorted(by_faculty.items()):
    print(f"  {faculty}: {count}")
