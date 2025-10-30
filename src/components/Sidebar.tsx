import React from 'react';
import { Document } from '@/pages/IDE';
import { FileText, FilePdf } from 'lucide-react';

interface SidebarProps {
  documents: Document[];
  onOpenFile: (docId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ documents, onOpenFile }) => {
  return (
    <div className="flex flex-col h-full bg-muted/40 p-2 text-sm">
      <div className="flex-grow">
        <h2 className="text-base font-semibold mb-2 px-2">AI Agents</h2>
        {/* Placeholder for AI agents */}
        <ul>
          <li className="mb-1 p-2 rounded-md bg-muted cursor-pointer hover:bg-muted/80">Architect</li>
          <li className="mb-1 p-2 rounded-md bg-primary text-primary-foreground cursor-pointer">Code</li>
          <li className="mb-1 p-2 rounded-md bg-muted cursor-pointer hover:bg-muted/80">Ask</li>
          <li className="mb-1 p-2 rounded-md bg-muted cursor-pointer hover:bg-muted/80">Debug</li>
        </ul>
      </div>
      <div>
        <h2 className="text-base font-semibold mb-2 px-2">Explorer</h2>
        <ul>
          {documents.map(doc => (
            <li
              key={doc.id}
              className="flex items-center p-2 rounded-md cursor-pointer hover:bg-muted/80"
              onClick={() => onOpenFile(doc.id)}
            >
              {doc.type === 'pdf' ? <FilePdf className="h-4 w-4 mr-2 text-red-500" /> : <FileText className="h-4 w-4 mr-2 text-blue-500" />}
              {doc.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
