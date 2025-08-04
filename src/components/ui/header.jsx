import React, { useRef, useEffect, useState } from 'react';
// Import progress tracking context
import { useProgress } from '/src/components/context/ProgressContext.jsx';
// Import helper functions to determine which chapters are tracked
import { useCourseData } from '/src/hooks/useCourseData.js';
// Import tooltip component for user guidance
import { Tooltip } from './Tooltip';

/**
 * Header component that displays course title, section tabs and progress bar
 * Shows overall completion percentage based on tracked chapters only
 */
export function Header({ activeSection, onSectionChange }) {
  const { completedSections } = useProgress();
  const { courseData } = useCourseData();
  const headerRef = useRef(null);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    function updateHeaderHeight() {
      if (headerRef.current) {
        document.documentElement.style.setProperty('--header-height', headerRef.current.offsetHeight + 'px');
      }
    }
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Header-Höhe auch bei Änderung von activeSection oder minimized neu setzen
  useEffect(() => {
    if (headerRef.current) {
      document.documentElement.style.setProperty('--header-height', headerRef.current.offsetHeight + 'px');
    }
  }, [activeSection, minimized]);

  // Sticky & Minimize on Scroll
  useEffect(() => {
    function handleScroll() {
      setMinimized(window.scrollY > 60);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Alle getrackten Abschnitte
  const trackedSections = Object.entries(courseData?.kursStruktur || {})
    .filter(([chapter]) => courseData?.progressTracking?.[chapter])
    .flatMap(([chapter, sections]) =>
      sections.map(section => ({ chapter, section, key: `${chapter}-${section}` }))
    );

  // Steps: Abschnitte + Slides aus eingebundenen Slideshows mit progressBar: true
  let allStepKeys = [];
  trackedSections.forEach(({ chapter, section, key }) => {
    allStepKeys.push(key); // Abschnitt selbst
    // Slideshows im Abschnitt-Content suchen
    const contentObj = courseData?.content?.[key];
    if (contentObj && typeof contentObj.content === 'string') {
      const SLIDESHOW_TAG_REGEX = /:::slideshow id=(\w+) :::/g;
      let match;
      while ((match = SLIDESHOW_TAG_REGEX.exec(contentObj.content)) !== null) {
        const slideshowId = match[1];
        const slideshow = courseData?.slideshows?.[slideshowId];
        if (slideshow && Array.isArray(slideshow.slides) && slideshow.progressBar) {
          slideshow.slides.forEach(slide => {
            allStepKeys.push(`${chapter}-${section}-slide-${slide.id}`);
          });
        }
      }
    }
  });

  const total = allStepKeys.length;
  const completed = allStepKeys.filter(key => completedSections[key]).length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    // Sticky Header mit animierter Höhe und Minimierungszustand
    <header
      ref={headerRef}
      className={`bg-indigo-800 text-white shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        minimized ? 'py-2' : 'py-4'
      }`}
    >
      {/* Titel & Untertitel nur wenn nicht minimiert */}
      {!minimized && (
        <div className="px-6">
          <h1 className="text-2xl font-bold">360°-Lernumgebungen im Klassenzimmer: Ein Einstieg für den schlischen Einsatz</h1>
          <p className="text-sm text-indigo-200 mt-1">Ein interaktiver Kurs zur Medienbildung für Lehrpersonen</p>
        </div>
      )}
      {/* Section Navigation Tabs und Progress Bar in einer Zeile (volle Breite) */}
      <div className={`grid grid-cols-2 w-full items-center transition-all duration-300 ${minimized ? 'mt-0' : 'mt-4'}`}>
        {/* Buttons in Spalte 1 */}
        <div className="flex gap-2 ml-6">
          <button
            onClick={() => onSectionChange('Grundlagen')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeSection === 'Grundlagen'
                ? 'bg-indigo-600 text-white'
                : 'bg-indigo-700 text-indigo-200 hover:bg-indigo-600 hover:text-white'
            }`}
          >
            Grundlagenwissen zu 360°-Umgebungen
          </button>
          <button
            onClick={() => onSectionChange('Kurs')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeSection === 'Kurs'
                ? 'bg-indigo-600 text-white'
                : 'bg-indigo-700 text-indigo-200 hover:bg-indigo-600 hover:text-white'
            }`}
          >
            Selbstlernkurs für Lehrpersonen
          </button>

        </div>
        {/* Progress Bar in Spalte 2 */}
        {activeSection === 'Kurs' && (
          <Tooltip content="Ihr Fortschritt in den Hauptkapiteln des Kurses">
            <div className="flex flex-col justify-center ml-8 pr-8">
              <div className="bg-indigo-700 h-3 w-full rounded-full">
                <div
                  className="bg-green-400 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-right mt-1 text-indigo-200">{progress}% abgeschlossen</p>
            </div>
          </Tooltip>
        )}
      </div>
    </header>
  );
}