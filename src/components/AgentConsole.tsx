import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const AgentConsole: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-2">
      <div className="flex-grow bg-muted/20 rounded-md p-2 overflow-y-auto">
        {/* Chat messages will go here */}
        <p className="text-sm text-muted-foreground">AI Agent Console</p>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Textarea placeholder="Type your message..." className="flex-grow" />
        <Button>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AgentConsole;
