// Import React hooks for creating context and state management
import React, { createContext, useContext, useState } from 'react';

// Create a context for sharing progress state across components
const ProgressContext = createContext();

/**
 * Progress Provider component
 * Wraps the entire app to provide progress tracking functionality
 * @param {React.ReactNode} children - Child components that need access to progress state
 */
export function ProgressProvider({ children }) {
  // State to track which sections have been completed
  // Structure: { "chapter-subsection": true/false }
  // Example: { "360°-Aufnahmen & Stitching-Aufnahmetechniken": true }
  const [completedSections, setCompletedSections] = useState({});

  /**
   * Markiert einen Abschnitt oder Slide als abgeschlossen
   * @param {string} kapitel - Kapitelname
   * @param {string} unterpunkt - Abschnittsname
   * @param {string} [slideId] - Optional: Slide-ID
   */
  const toggleComplete = (kapitel, unterpunkt, slideId) => {
    // Key für Abschnitt oder Slide
    const key = slideId ? `${kapitel}-${unterpunkt}-slide-${slideId}` : `${kapitel}-${unterpunkt}`;
    setCompletedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Provide the state and functions to all child components
  return (
    <ProgressContext.Provider value={{ completedSections, toggleComplete }}>
      {children}
    </ProgressContext.Provider>
  );
}

/**
 * Custom Hook for easier access to progress context
 * This hook can be used in any component that needs progress functionality
 * @returns {Object} - Object containing completedSections state and toggleComplete function
 */
export function useProgress() {
  // Get the context value (will be null if used outside of ProgressProvider)
  const context = useContext(ProgressContext);
  
  // Throw error if hook is used outside of provider (helps catch bugs)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  
  return context;
}