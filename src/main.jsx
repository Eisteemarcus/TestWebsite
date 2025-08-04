import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import VRLehrkursWebsite from '/src/VRLehrkursWebsite.jsx';
import { ProgressProvider } from '/src/components/context/ProgressContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProgressProvider>
      <VRLehrkursWebsite />
    </ProgressProvider>
  </React.StrictMode>
);
