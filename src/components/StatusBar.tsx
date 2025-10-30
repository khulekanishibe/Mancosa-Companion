import React from 'react';
import { Button } from '@/components/ui/button';
import { KeyRound } from 'lucide-react';

interface StatusBarProps {
  onOpenApiKeyModal: () => void;
}

const StatusBar: React.FC<StatusBarProps> = ({ onOpenApiKeyModal }) => {
  return (
    <div className="flex items-center justify-between h-8 px-4 bg-muted border-t text-sm">
      <div className="flex items-center gap-4">
        <p>Ready</p>
      </div>
      <div className="flex items-center">
        <Button variant="ghost" size="sm" onClick={onOpenApiKeyModal}>
          <KeyRound className="h-4 w-4 mr-2" />
          Set API Key
        </Button>
      </div>
    </div>
  );
};

export default StatusBar;
