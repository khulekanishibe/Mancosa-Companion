
import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface ResultDisplayProps {
  result: {
    type: 'success' | 'warning' | 'error' | 'info';
    title: string;
    content: string;
    details?: string[];
  } | null;
  show: boolean;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, show }) => {
  if (!result) {
    return (
      <div className="result-card p-6 bg-gray-50 rounded-lg text-center">
        <p className="text-gray-600">Your result will be shown here.</p>
      </div>
    );
  }

  const getIcon = () => {
    switch (result.type) {
      case 'success':
        return <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />;
      case 'warning':
        return <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />;
      case 'error':
        return <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />;
      default:
        return null;
    }
  };

  const getBackgroundColor = () => {
    switch (result.type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-orange-50 border-orange-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div 
      className={`result-card p-6 rounded-lg text-center border transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${getBackgroundColor()}`}
    >
      {getIcon()}
      <h2 className="text-2xl font-bold mb-3" dangerouslySetInnerHTML={{ __html: result.title }} />
      <div className="space-y-2" dangerouslySetInnerHTML={{ __html: result.content }} />
      {result.details && result.details.length > 0 && (
        <div className="mt-4 space-y-1">
          {result.details.map((detail, index) => (
            <p key={index} className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: detail }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
