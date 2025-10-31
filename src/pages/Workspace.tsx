import { useState, useCallback } from 'react';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';
import MainPanel from '@/components/MainPanel';
import AgentConsole from '@/components/AgentConsole';
import StatusBar from '@/components/StatusBar';
import ApiKeyModal from '@/components/ApiKeyModal';
import { Document } from '@/types';

// Mock initial documents
const initialDocuments: Document[] = [
    { id: '1', title: 'MANCOSA_Spec_Kit_V2.pdf', type: 'pdf', url: '/MANCOSA_Spec_Kit_V2.pdf', content: '' },
    { id: '2', title: 'Implementation_Plan.md', type: 'markdown', content: '## Phase 1: Foundation...' },
];

const Workspace = () => {
    const [isApiKeyModalOpen, setApiKeyModalOpen] = useState(false);
    const [openDocuments, setOpenDocuments] = useState<Document[]>([]);
    const [activeDocument, setActiveDocument] = useState<string | null>(null);

    const handleOpenFile = useCallback((docId: string) => {
        if (!openDocuments.find(doc => doc.id === docId)) {
            const docToOpen = initialDocuments.find(doc => doc.id === docId);
            if (docToOpen) {
                setOpenDocuments(prev => [...prev, docToOpen]);
            }
        }
        setActiveDocument(docId);
    }, [openDocuments]);

    const handleCloseFile = useCallback((docId: string) => {
        setOpenDocuments(prev => prev.filter(doc => doc.id !== docId));
        if (activeDocument === docId) {
            const remainingDocs = openDocuments.filter(doc => doc.id !== docId);
            setActiveDocument(remainingDocs.length > 0 ? remainingDocs[remainingDocs.length - 1].id : null);
        }
    }, [activeDocument, openDocuments]);

    return (
        <div className="flex flex-col h-screen bg-background text-foreground font-sans">
            <Navigation />
            <div className="flex-grow flex flex-col">
                <div className="flex-grow">
                    <PanelGroup direction="horizontal">
                        <Panel defaultSize={20} minSize={15} className="bg-muted/20">
                            <Sidebar documents={initialDocuments} onOpenFile={handleOpenFile} />
                        </Panel>
                        <PanelResizeHandle className="w-1 bg-muted hover:bg-primary" />
                        <Panel>
                            <PanelGroup direction="vertical">
                                <Panel defaultSize={75} minSize={50} data-testid="main-panel">
                                    <MainPanel
                                        openDocuments={openDocuments}
                                        activeDocument={activeDocument}
                                        onCloseFile={handleCloseFile}
                                        onSetActiveDocument={setActiveDocument}
                                    />
                                </Panel>
                                <PanelResizeHandle className="h-1 bg-muted hover:bg-primary" />
                                <Panel>
                                    <AgentConsole />
                                </Panel>
                            </PanelGroup>
                        </Panel>
                    </PanelGroup>
                </div>
                <StatusBar onOpenApiKeyModal={() => setApiKeyModalOpen(true)} />
            </div>
            <ApiKeyModal isOpen={isApiKeyModalOpen} onClose={() => setApiKeyModalOpen(false)} />
        </div>
    );
};

export default Workspace;
