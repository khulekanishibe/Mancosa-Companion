// src/types.ts

export type DocumentType = "pdf" | "note" | "weblink" | "image" | "markdown";

export interface Document {
  id: string;
  title: string;
  type: DocumentType;
  content: string;
  url?: string; // Optional URL for PDFs
}
