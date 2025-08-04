import { useState } from 'react';

const tabs = [
  { id: 'tab1', 
  label: '1. Virtuelle Küchenpraxis: Hygiene & Arbeitssicherheit', 
  content: (
  <div className="space-y4">
    <h1>Arbeitsschutz und Hygiene in der Küche</h1>
    <p>Lernszenario:</p>
    <p>In einer interaktiven 360°-Tour durch eine Lehrküche können Schüler:innen typische Gefahrenquellen entdecken. Über Hotspots lassen sich Aufgaben abrufen wie:</p>
    <p> – „Finde die fünf Hygiene-Verstöße in diesem Bild.“</p>
    <p>  – „Klicke auf die Stelle, an der ein rutschfester Bodenbelag fehlt.“</p>
    <p>  – „Was ist beim Umgang mit rohem Fleisch zu beachten?“</p>
    <p>Ziel</p>
    <p>Förderung der Handlungskompetenz im Bereich Haushaltsführung und Sicherheit, Stärkung der Problemlösefähigkeit.</p>
    <p>Vorteil durch VR</p>
    <p>Authentische Lernsituation ohne reale Gefährdung, besonders wirksam in Klassen mit wenig Praxiszugang.</p>
  </div>)
},

  { id: 'tab2', 
  label: 'Didaktik', 
  content: 'Hier geht es um didaktische Grundlagen.' },
  { id: 'tab3', 
  label: '3. Haushaltsführung & Lebensplanung: Wohnungseinrichtung planen', 
  content: 'Praxisbeispiele aus dem Unterricht.' },
  { id: 'tab4', 
  label: 'Technik', 
  content: 'Technische Voraussetzungen und Tools.' },
];

export default function TabbedContent() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-xl bg-white">
      <div className="flex space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded ${
              activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded bg-gray-50">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}