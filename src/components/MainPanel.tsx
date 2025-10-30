import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Document } from '@/pages/IDE';
import { X } from 'lucide-react';

interface MainPanelProps {
  openDocuments: Document[];
  activeDocument: string | null;
  onCloseFile: (docId: string) => void;
  onSetActiveDocument: (docId: string) => void;
}

const MainPanel: React.FC<MainPanelProps> = ({ openDocuments, activeDocument, onCloseFile, onSetActiveDocument }) => {
  if (openDocuments.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>No documents are open.</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <Tabs value={activeDocument || ''} onValueChange={onSetActiveDocument} className="h-full flex flex-col">
        <TabsList>
          {openDocuments.map(doc => (
            <TabsTrigger key={doc.id} value={doc.id} className="relative pr-8">
              {doc.title}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCloseFile(doc.id);
                }}
                className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full p-0.5 hover:bg-muted-foreground/20"
              >
                <X className="h-3 w-3" />
              </button>
            </TabsTrigger>
          ))}
        </TabsList>
        {openDocuments.map(doc => (
          <TabsContent key={doc.id} value={doc.id} className="flex-grow bg-muted/20">
            {doc.type === 'pdf' && doc.url ? (
               <iframe src={doc.url} className="w-full h-full" title={doc.title} />
            ) : (
              <pre className="p-4 text-sm whitespace-pre-wrap">{doc.content}</pre>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MainPanel;
