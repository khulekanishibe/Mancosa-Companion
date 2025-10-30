import { useState } from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import Sidebar from "@/components/Sidebar";
import MainPanel from "@/components/MainPanel";
import AgentConsole from "@/components/AgentConsole";
import StatusBar from "@/components/StatusBar";
import ApiKeyModal from "@/components/ApiKeyModal";

export interface Document {
  id: string;
  title: string;
  type: 'pdf' | 'text' | 'component';
  content?: string; // For text files
  url?: string; // For PDFs
}

const initialFiles: Document[] = [
    { id: 'curriculum', title: 'curriculum.ts', type: 'text', content: 'export const curriculum = {};' },
    { id: 'feedback-pdf', title: 'Feedback - Principles of E-Commerce (1).pdf', type: 'pdf', url: '/Feedback-Principles-of-E-Commerce-(1).pdf' },
    { id: 'modules', title: 'Modules.tsx', type: 'component', content: 'const Modules = () => <div>Modules Page</div>;' },
];


const IDE = () => {
  const [documents, setDocuments] = useState<Document[]>(initialFiles);
  const [openDocuments, setOpenDocuments] = useState<Document[]>([]);
  const [activeDocument, setActiveDocument] = useState<string | null>(null);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);

  const handleOpenFile = (docId: string) => {
    const docToOpen = documents.find(d => d.id === docId);
    if (docToOpen && !openDocuments.some(d => d.id === docId)) {
      setOpenDocuments(prev => [...prev, docToOpen]);
    }
    setActiveDocument(docId);
  };

  const handleCloseFile = (docId: string) => {
    setOpenDocuments(prev => prev.filter(d => d.id !== docId));
    if (activeDocument === docId) {
      const newActive = openDocuments.length > 1 ? openDocuments[openDocuments.length - 2].id : null;
      setActiveDocument(newActive);
    }
  };

  const handleSaveApiKey = (key: string) => {
    console.log("API Key Saved:", key); // Placeholder
    setIsApiKeyModalOpen(false);
  };


  return (
    <div className="h-screen w-screen bg-background text-foreground overflow-hidden flex flex-col">
      <ResizablePanelGroup direction="horizontal" className="flex-grow">
        <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
          <Sidebar documents={documents} onOpenFile={handleOpenFile} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={65} minSize={40}>
              <MainPanel
                openDocuments={openDocuments}
                activeDocument={activeDocument}
                onCloseFile={handleCloseFile}
                onSetActiveDocument={setActiveDocument}
              />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={35} minSize={20}>
              <AgentConsole />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
      <StatusBar onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)} />
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onSave={handleSaveApiKey}
      />
    </div>
  );
};

export default IDE;
