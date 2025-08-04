import React, { useState } from 'react';
// Import all the UI components that make up the website
import { Sidebar } from '/src/components/ui/sidebar.jsx';
import { KapitelContent } from '/src/components/KapitelContent.jsx';
import { Header } from '/src/components/ui/header.jsx';
import { Footer } from '/src/components/ui/footer.jsx';
import { useCourseData } from '/src/hooks/useCourseData.js';

/**
 * Main component for the VR Learning Course Website
 * This is the root component that manages the overall layout and state
 */
export default function VRLehrkursWebsite() {
  // State to track which main section is active (Grundlagen or Kurs)
  const [activeSection, setActiveSection] = useState('Grundlagen');
  
  // State to track which chapter is currently selected
  // Starts with 'Startseite' (Homepage) as the default
  const [aktuellesKapitel, setAktuellesKapitel] = useState('Startseite');
  
  // State to track which sub-section within a chapter is currently selected
  // Also starts with 'Startseite' to match the initial chapter
  const [aktuellerUnterpunkt, setAktuellerUnterpunkt] = useState('Startseite');
  
  // Get course data for media files
  const { courseData } = useCourseData();
  
  // Get the appropriate chapter structure based on active section
  const currentKapitelStruktur = activeSection === 'Grundlagen'
    ? courseData.grundlagenStruktur || {}
    : courseData.kursStruktur || {};
  
  // Handle section change and reset to first chapter
  const handleSectionChange = (section) => {
    setActiveSection(section);
    const struktur = section === 'Grundlagen'
      ? courseData.grundlagenStruktur || {}
      : courseData.kursStruktur || {};
    const firstChapter = Object.keys(struktur)[0];
    const firstSubsection = firstChapter && struktur[firstChapter] && struktur[firstChapter][0];
    if (firstChapter && firstSubsection) {
      setAktuellesKapitel(firstChapter);
      setAktuellerUnterpunkt(firstSubsection);
    }
  };
  
  // Render content
  const renderContent = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <KapitelContent 
          kapitel={aktuellesKapitel}
          unterpunkt={aktuellerUnterpunkt}
        />
      </div>
    );
  };
  
  return (
    // Main container mit Padding für Header und Sidebar, damit nichts überlappt
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header component */}
      <Header 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      {/* Main content area */}
      <div
        className="flex flex-1 h-0"
        style={{
          paddingTop: 'var(--header-height, 144px)',
          paddingLeft: 'var(--sidebar-width, 384px)',
          marginTop: '24px', // 24px Lücke zwischen Header und Inhaltsframe
        }}
      >
        {/* Sidebar bleibt fixiert, Content bekommt Padding */}
        <div className="flex-shrink-0 h-full">
          <Sidebar 
            kapitelStruktur={currentKapitelStruktur}
            aktuellesKapitel={aktuellesKapitel}
            aktuellerUnterpunkt={aktuellerUnterpunkt}
            onKapitelChange={setAktuellesKapitel}
            onUnterpunktChange={setAktuellerUnterpunkt}
            activeSection={activeSection}
          />
        </div>
        {/* Main content area */}
        <main className="flex-1 p-8 overflow-auto min-w-0">
          {renderContent()}
        </main>
      </div>
      {/* Footer und weitere Komponenten bleiben wie gehabt */}
      <Footer />
    </div>
  );
}