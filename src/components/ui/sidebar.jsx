import React, { useState, useEffect } from 'react';
// Import animation library for smooth transitions
import { motion, AnimatePresence } from 'framer-motion';
// Import progress tracking context
import { useProgress } from '/src/components/context/ProgressContext.jsx';
// Import helper functions for chapter structure and tracking
import { useCourseData } from '/src/hooks/useCourseData.js';
// Import tooltip component for user guidance
import { Tooltip } from './Tooltip';

/**
 * Sidebar navigation component
 * Displays course chapters and sub-sections with progress tracking
 * Now with fixed positioning and own scrollbar to always stay visible
 */
// Hilfsfunktion: Header-Höhe immer aktuell halten (auch bei dynamischer Änderung)
function useHeaderHeightObserver() {
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    const setHeaderHeight = () => {
      document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
    };
    setHeaderHeight();
    const observer = new window.ResizeObserver(setHeaderHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);
}

// Hilfsfunktion: Footer-Offset dynamisch setzen, wenn Footer sichtbar ist
function useFooterOffsetObserver() {
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer || !window.IntersectionObserver) return;
    const setFooterOffset = (offset) => {
      document.documentElement.style.setProperty('--footer-offset', offset + 'px');
    };
    setFooterOffset(0);
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setFooterOffset(entry.boundingClientRect.height);
        } else {
          setFooterOffset(0);
        }
      },
      { root: null, threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
}

export function Sidebar({ 
  kapitelStruktur,        // Struktur der Kapitel und Unterpunkte (dynamisch)
  aktuellesKapitel,       // Currently selected chapter
  aktuellerUnterpunkt,    // Currently selected sub-section
  onKapitelChange,        // Function to change chapter
  onUnterpunktChange,     // Function to change sub-section
  activeSection           // Current section (Grundlagen or Kurs)
}) {
  useHeaderHeightObserver();
  useFooterOffsetObserver();
  // State to track which chapter is expanded in the sidebar
  const [expandedKapitel, setExpandedKapitel] = useState(aktuellesKapitel);

  // Debug-Ausgaben
  console.log('Sidebar: kapitelStruktur', kapitelStruktur);
  console.log('Sidebar: aktuellesKapitel', aktuellesKapitel);
  console.log('Sidebar: aktuellerUnterpunkt', aktuellerUnterpunkt);
  
  // Get progress tracking functions from context
  const { completedSections, toggleComplete } = useProgress();
  const { courseData } = useCourseData();

  // Fallback, falls Struktur noch nicht geladen ist
  if (!kapitelStruktur || Object.keys(kapitelStruktur).length === 0) {
    return <div className="p-6 text-gray-500">Keine Struktur gefunden oder wird geladen...</div>;
  }

  /**
   * Handle clicking on a chapter title
   * Expands/collapses the chapter and navigates to it
   */
  const handleKapitelClick = (kapitel) => {
    // Toggle expansion: if already expanded, collapse it; otherwise expand it
    setExpandedKapitel(expandedKapitel === kapitel ? null : kapitel);
    
    // Navigate to the clicked chapter
    onKapitelChange(kapitel);
    
    // Navigate to the first sub-section of that chapter
    onUnterpunktChange(kapitelStruktur[kapitel][0]);
  };

  /**
   * Check if all sub-sections in a chapter are completed
   * Used to show visual indication of chapter completion
   */
  const isKapitelComplete = (kapitel, unterpunkte) => {
    return unterpunkte.every(unterpunkt => completedSections[`${kapitel}-${unterpunkt}`]);
  };

  return (
    // Fixed sidebar that stays in place and takes full height with own scrollbar
    <motion.nav 
      initial={false}
      animate={{ width: '384px' }}
      className="bg-white shadow-lg overflow-hidden fixed left-0 z-40 flex flex-col border-r border-gray-200"
      style={{
        top: 'var(--header-height, 144px)',
        bottom: 'var(--footer-offset, 0px)',
        height: `calc(100vh - var(--header-height, 144px) - var(--footer-offset, 0px))`,
        maxHeight: `calc(100vh - var(--header-height, 144px) - var(--footer-offset, 0px))`
      }}
    >
      
      {/* Main sidebar content with proper scrolling */}
      <div className="p-6 flex-1 overflow-y-auto">
        
        {/* Course title (only shown when not collapsed) */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-indigo-800">VR Lehrkurs</h2>
          <p className="text-sm text-indigo-600 mt-1">{activeSection}</p>
        </div>

        {/* List of chapters */}
        <ul className="space-y-3">
          {Object.entries(kapitelStruktur).map(([kapitel, unterpunkte]) => {
            // Check if this chapter is tracked for progress (only in Kurs section)
            const isTracked = activeSection === 'Kurs' && courseData?.progressTracking?.[kapitel];
            
            // Check if all sub-sections in this chapter are completed
            const isComplete = isKapitelComplete(kapitel, unterpunkte);
            
            // Check if this is the currently selected chapter
            const isCurrent = aktuellesKapitel === kapitel;

            return (
              <li key={kapitel} className="w-full">
                
                {/* Chapter container with special styling for tracked chapters */}
                <div className={`w-full ${
                  isTracked 
                    ? 'bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-400 rounded-r-lg' 
                    : ''
                }`}>
                  
                  {/* Chapter title button (only shown when not collapsed) */}
                  <Tooltip content={isTracked ? "Dieser Abschnitt wird für den Fortschritt getrackt" : "Einführender Abschnitt"}>
                    <button
                      onClick={() => handleKapitelClick(kapitel)}
                      className={`text-left w-full px-4 py-4 rounded-lg transition-all duration-200
                                hover:bg-indigo-50 hover:text-indigo-700
                                focus:outline-none focus:ring-2 focus:ring-indigo-500
                                font-medium text-sm leading-tight min-h-[60px] flex items-center ${
                                  isCurrent ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700'
                                }`}
                    >
                      <span className="block w-full">{kapitel}</span>
                    </button>
                  </Tooltip>
                </div>

                {/* Sub-sections list (immer sichtbar, wenn Kapitel expanded) */}
                {expandedKapitel === kapitel && (
                  <AnimatePresence initial={false}>
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-3 mb-2 space-y-2 ml-4 pr-2">
                        {unterpunkte.map((unterpunkt) => (
                          <li key={unterpunkt}>
                            <div className="flex items-center gap-2 w-full">
                              <button
                                onClick={() => onUnterpunktChange(unterpunkt)}
                                className={`text-left flex-1 px-3 py-3 rounded-lg transition-all duration-200
                                          hover:bg-indigo-50 hover:text-indigo-700
                                          focus:outline-none focus:ring-2 focus:ring-indigo-500
                                          text-sm min-h-[44px] flex items-center overflow-hidden ${
                                            aktuellerUnterpunkt === unterpunkt
                                              ? 'bg-indigo-50 text-indigo-600'
                                              : 'text-gray-600'
                                          }`}
                              >
                                <span className="block w-full leading-tight break-words">{unterpunkt}</span>
                              </button>
                              {isTracked && (
                                <Tooltip content={completedSections[`${kapitel}-${unterpunkt}`] ? "Als unerledigt markieren" : "Als erledigt markieren"}>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleComplete(kapitel, unterpunkt);
                                    }}
                                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors
                                              ${
                                                completedSections[`${kapitel}-${unterpunkt}`]
                                                  ? 'bg-green-100 text-green-600 hover:bg-green-200'
                                                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                                              }`}
                                  >
                                    <span className="text-lg">
                                      {completedSections[`${kapitel}-${unterpunkt}`] ? '✓' : '○'}
                                    </span>
                                  </button>
                                </Tooltip>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}