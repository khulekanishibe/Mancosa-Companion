
import React from 'react';
import { Trash2 } from 'lucide-react';

interface Assessment {
  id: string;
  name: string;
  score: string;
  outOf: string;
  weight: string;
}

interface AssessmentRowProps {
  assessment: Assessment;
  onUpdate: (id: string, field: keyof Assessment, value: string) => void;
  onRemove: (id: string) => void;
  canRemove: boolean;
  errors: Record<string, boolean>;
}

const AssessmentRow: React.FC<AssessmentRowProps> = ({
  assessment,
  onUpdate,
  onRemove,
  canRemove,
  errors
}) => {
  return (
    <div className="assessment-row grid grid-cols-1 md:grid-cols-12 gap-2 items-center p-4 md:p-3 bg-white rounded-lg border md:border-none shadow-sm md:shadow-none">
      <div className="md:col-span-4">
        <label className="md:hidden text-xs font-medium text-gray-600 block mb-1">Assessment Name</label>
        <input
          type="text"
          value={assessment.name}
          onChange={(e) => onUpdate(assessment.id, 'name', e.target.value)}
          className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          placeholder="e.g., Midterm Exam"
        />
      </div>
      
      <div className="md:col-span-2">
        <label className="md:hidden text-xs font-medium text-gray-600 block mb-1">Your Score</label>
        <input
          type="number"
          value={assessment.score}
          onChange={(e) => onUpdate(assessment.id, 'score', e.target.value)}
          step="0.01"
          className={`w-full p-2 border rounded-md text-center focus:ring-2 focus:ring-indigo-500 transition-colors ${
            errors[`${assessment.id}-score`] ? 'border-red-500' : 'border-gray-200 focus:border-indigo-500'
          }`}
          placeholder="Leave blank"
        />
      </div>
      
      <div className="md:col-span-2">
        <label className="md:hidden text-xs font-medium text-gray-600 block mb-1">Out Of</label>
        <input
          type="number"
          value={assessment.outOf}
          onChange={(e) => onUpdate(assessment.id, 'outOf', e.target.value)}
          className={`w-full p-2 border rounded-md text-center focus:ring-2 focus:ring-indigo-500 transition-colors ${
            errors[`${assessment.id}-outOf`] ? 'border-red-500' : 'border-gray-200 focus:border-indigo-500'
          }`}
          placeholder="e.g., 50"
        />
      </div>
      
      <div className="md:col-span-3">
        <label className="md:hidden text-xs font-medium text-gray-600 block mb-1">Weight (%)</label>
        <input
          type="number"
          value={assessment.weight}
          onChange={(e) => onUpdate(assessment.id, 'weight', e.target.value)}
          className={`w-full p-2 border rounded-md text-center focus:ring-2 focus:ring-indigo-500 transition-colors ${
            errors[`${assessment.id}-weight`] ? 'border-red-500' : 'border-gray-200 focus:border-indigo-500'
          }`}
          placeholder="e.g., 20"
        />
      </div>
      
      <div className="md:col-span-1 flex justify-end">
        {canRemove && (
          <button
            onClick={() => onRemove(assessment.id)}
            className="text-red-500 hover:text-red-700 p-2 rounded-full transition-colors duration-200 hover:bg-red-50"
            title="Remove Assessment"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AssessmentRow;
