import React from 'react';

const AgentConsole = () => {
  return (
    <div className="flex flex-col h-full bg-muted/40 p-2">
      <h2 className="text-lg font-semibold mb-4">AI Agent Console</h2>
      <div className="flex-grow bg-muted rounded-md p-2">
        {/* Placeholder for AI agent interaction */}
        <p className="text-sm text-muted-foreground">AI agent output will appear here.</p>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Send a message to the AI agent..."
          className="w-full p-2 rounded-md bg-background border"
        />
      </div>
    </div>
  );
};

export default AgentConsole;
