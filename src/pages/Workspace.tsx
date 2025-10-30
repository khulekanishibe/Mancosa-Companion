import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FileText, Bot, Folder, KeyRound } from 'lucide-react';
import ApiKeyModal from '@/components/ApiKeyModal';

const documents = [
  { id: 1, name: 'Module_Guide.pdf', content: 'This is the content of the Module Guide.' },
  { id: 2, name: 'Case_Study_1.pdf', content: 'This is the content of Case Study 1.' },
  { id: 3, name: 'Lecture_Notes.docx', content: 'These are the lecture notes.' },
];

const Workspace = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiKeyStatus, setApiKeyStatus] = useState('No API Key Set');
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleSaveApiKey = (newApiKey: string) => {
    // TODO: This is a temporary client-side mock.
    // In the final implementation, this key will be sent immediately to a
    // secure Azure Function proxy and will NOT be stored in the client.
    setApiKey(newApiKey);
    setApiKeyStatus(`API Key ends with ...${newApiKey.slice(-4)}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-grow grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {/* Explorer Sidebar */}
        <Card className="md:col-span-1 lg:col-span-1 h-full">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Folder className="h-5 w-5" />
              <span>Explorer</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {documents.map((doc) => (
                <li
                  key={doc.id}
                  className="flex items-center space-x-2 cursor-pointer hover:text-primary"
                  onClick={() => setSelectedDoc(doc)}
                >
                  <FileText className="h-4 w-4" />
                  <span>{doc.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Document Editor */}
        <div className="md:col-span-3 lg:col-span-3 h-full flex flex-col space-y-4">
          <Card className="flex-grow">
            <CardHeader>
              <CardTitle>Document Viewer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none text-muted-foreground">
                {selectedDoc ? (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{selectedDoc.name}</h3>
                    <p>{selectedDoc.content}</p>
                  </div>
                ) : (
                  <p>Select a document from the explorer to view its content here.</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* AI Agent Bar */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="h-5 w-5" />
                  <span>AI Agent</span>
                </CardTitle>
                <ApiKeyModal onSave={handleSaveApiKey}>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <KeyRound className="h-4 w-4" />
                    <span>Set API Key</span>
                  </Button>
                </ApiKeyModal>
              </div>
              <p className="text-sm text-muted-foreground pt-2">{apiKeyStatus}</p>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
                <Textarea placeholder="Ask a question about the document..." />
                <Button>Submit</Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Workspace;
