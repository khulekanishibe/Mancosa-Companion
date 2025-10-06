import React from 'react';
import { Award, TrendingUp, AlertCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface DistinctionPanelProps {
  canAchieveDistinction: boolean;
  canAchieveCondonedDistinction: boolean;
  distinctionRequiredOSA?: number;
  condonedDistinctionRequiredOSA?: number;
  osaOutOf: number;
}

const DistinctionPanel: React.FC<DistinctionPanelProps> = ({
  canAchieveDistinction,
  canAchieveCondonedDistinction,
  distinctionRequiredOSA,
  condonedDistinctionRequiredOSA,
  osaOutOf,
}) => {
  return (
    <div className="mt-6 p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg border border-emerald-200 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Award className="h-6 w-6 text-emerald-600" />
        <h3 className="text-xl font-bold text-gray-800">Distinction Strategy</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        See what you need to achieve distinction or condoned distinction status.
      </p>

      <Separator className="mb-4" />

      {/* Distinction (75%+) */}
      <div className="mb-4">
        <div className="flex items-start gap-2">
          {canAchieveDistinction ? (
            <TrendingUp className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
          )}
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">
              Distinction (75%+)
            </h4>
            {canAchieveDistinction && distinctionRequiredOSA ? (
              <div>
                <p className="text-sm text-gray-700 mb-2">
                  To achieve a distinction, you need to score at least:
                </p>
                <div className="bg-white rounded-md p-3 border border-emerald-200">
                  <p className="text-2xl font-bold text-emerald-700">
                    {distinctionRequiredOSA}%
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Raw mark: {Math.ceil((distinctionRequiredOSA / 100) * osaOutOf)} / {osaOutOf} on OSA
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Unfortunately, distinction is not achievable with your current formative scores.
              </p>
            )}
          </div>
        </div>
      </div>

      <Separator className="mb-4" />

      {/* Condoned Distinction (70-74%) */}
      <div>
        <div className="flex items-start gap-2">
          {canAchieveCondonedDistinction ? (
            <TrendingUp className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
          )}
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">
              Condoned Distinction (70-74%)
            </h4>
            {canAchieveCondonedDistinction && condonedDistinctionRequiredOSA ? (
              <div>
                <p className="text-sm text-gray-700 mb-2">
                  To achieve a condoned distinction, you need to score at least:
                </p>
                <div className="bg-white rounded-md p-3 border border-blue-200">
                  <p className="text-2xl font-bold text-blue-600">
                    {condonedDistinctionRequiredOSA}%
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Raw mark: {Math.ceil((condonedDistinctionRequiredOSA / 100) * osaOutOf)} / {osaOutOf} on OSA
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Unfortunately, condoned distinction is not achievable with your current formative scores.
              </p>
            )}
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="text-xs text-gray-500 space-y-1">
        <p>
          <strong>Note:</strong> All calculations enforce integer OSA requirements.
        </p>
        <p>
          Formative assessments must reach 50% sub-minimum (20/40).
        </p>
        <p>
          OSA must achieve at least 30% sub-minimum.
        </p>
      </div>
    </div>
  );
};

export default DistinctionPanel;
