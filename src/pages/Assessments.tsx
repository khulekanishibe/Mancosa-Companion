import React from 'react';
import { BookOpen, FileText, PenTool, Target } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Assessments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Assessments & Marking Information
          </h1>
          <p className="text-gray-600 text-lg">
            Comprehensive guide to MANCOSA module assessments and grading criteria
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Assessment Types Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-indigo-600" />
            Assessment Types
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* KCQ Card */}
            <div className="p-5 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-800">Knowledge Check Quiz (KCQ)</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Weight:</strong> 10%
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Format:</strong> Multiple choice quiz
              </p>
              <p className="text-sm text-gray-600">
                Tests foundational understanding of module concepts.
              </p>
            </div>

            {/* Case Study Card */}
            <div className="p-5 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <PenTool className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-gray-800">Case Study / Assignment</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Weight:</strong> 30%
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Format:</strong> Written assignment
              </p>
              <p className="text-sm text-gray-600">
                Application of theory to practical scenarios.
              </p>
            </div>

            {/* OSA Card */}
            <div className="p-5 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold text-gray-800">Online Summative Assessment (OSA)</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Weight:</strong> 60%
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Format:</strong> Online examination
              </p>
              <p className="text-sm text-gray-600">
                Comprehensive assessment of module learning outcomes.
              </p>
            </div>
          </div>
        </section>

        <Separator className="mb-8" />

        {/* Grading Criteria */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Grading Criteria & Classification
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">Fail (&lt;50%)</h3>
              <p className="text-sm text-gray-700">
                Did not meet minimum module requirements. Module must be repeated.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Pass (50-69%)</h3>
              <p className="text-sm text-gray-700">
                Successfully met module learning outcomes and requirements.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Condoned Distinction (70-74%)</h3>
              <p className="text-sm text-gray-700">
                High performance demonstrating strong understanding and application of concepts.
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Distinction (75%+)</h3>
              <p className="text-sm text-gray-700">
                Exceptional performance showing mastery of module content and advanced application.
              </p>
            </div>
          </div>
        </section>

        <Separator className="mb-8" />

        {/* Sub-minimum Requirements */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sub-minimum Requirements
          </h2>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              To pass a module, students must meet the following sub-minimum requirements:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold mt-1">•</span>
                <div>
                  <strong className="text-gray-800">Formative Assessment Sub-minimum:</strong>
                  <span className="text-gray-700 ml-2">
                    Combined KCQ and Case Study scores must reach at least 50% 
                    (i.e., 20 out of 40 marks)
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold mt-1">•</span>
                <div>
                  <strong className="text-gray-800">OSA Sub-minimum:</strong>
                  <span className="text-gray-700 ml-2">
                    Must achieve at least 30% on the Online Summative Assessment
                  </span>
                </div>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded border border-orange-300">
              <p className="text-sm text-orange-800 font-semibold">
                Important: Failure to meet either sub-minimum results in an automatic fail, 
                regardless of overall module percentage.
              </p>
            </div>
          </div>
        </section>

        <Separator className="mb-8" />

        {/* Placeholder for Future Content */}
        <section>
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">
              📚 More Information Coming Soon
            </h3>
            <p className="text-sm text-gray-600">
              Additional handbook-derived content including detailed marking rubrics, 
              assessment schedules, submission guidelines, and special circumstances policies 
              will be added in future updates.
            </p>
          </div>
        </section>

        {/* Back to Calculator Link */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block text-indigo-600 hover:text-indigo-700 font-semibold hover:underline"
          >
            ← Back to Calculator
          </a>
        </div>
      </div>
    </div>
  );
};

export default Assessments;
