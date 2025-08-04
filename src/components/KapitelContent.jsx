import React from 'react';
import ReactMarkdown from 'react-markdown';
import { kursinhalt } from './Inhalte/index.js';

/**
 * Component that displays the content for a specific chapter and subsection
 * Now loads content directly from static imports instead of API
 */
export function KapitelContent({ kapitel, unterpunkt }) {
  // Get content directly from imported content object
  const contentObj = kursinhalt[kapitel]?.[unterpunkt];
  
  if (!contentObj) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center text-gray-500">
          <h2 className="text-2xl font-bold mb-4">Inhalt wird geladen...</h2>
          <p>Kapitel: {kapitel}</p>
          <p>Abschnitt: {unterpunkt}</p>
        </div>
      </div>
    );
  }

  // If content is a React component (like StepByStepGuide), render it
  if (typeof contentObj.content === 'function') {
    const ContentComponent = contentObj.content;
    return <ContentComponent />;
  }

  // If content is a string (markdown), render it with ReactMarkdown
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">
        {contentObj.title}
      </h1>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{contentObj.content}</ReactMarkdown>
      </div>
    </div>
  );
}