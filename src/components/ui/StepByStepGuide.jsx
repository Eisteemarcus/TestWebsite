import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { DetailsPopup } from './DetailsPopup.jsx';
import { useProgress } from '../context/ProgressContext.jsx';

/**
 * Step-by-step guide component for interactive learning
 * Now supports video integration and teacher-focused content
 */
export function StepByStepGuide({ steps, theoryContent, onNavigateToNext, projectTitle, projectDescription }) {
  const [currentStep, setCurrentStep] = useState(0);
  const { toggleComplete } = useProgress();

  // Ensure steps is an array with at least one element
  const validSteps = Array.isArray(steps) && steps.length > 0 ? steps : [];
  
  // Ensure theoryContent is an array and filter out undefined/null elements
  const validTheoryContent = Array.isArray(theoryContent) 
    ? theoryContent.filter(section => section && typeof section === 'object' && section.title)
    : [];

  const nextStep = () => {
    if (currentStep < validSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const completeLesson = () => {
    // This will be handled by the parent component to mark the correct section as completed
    if (onNavigateToNext) {
      onNavigateToNext();
    } else {
      alert('Lektion abgeschlossen! Gut gemacht!');
    }
  };

  // If no valid steps, show a message
  if (validSteps.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Keine Schritte verfügbar.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Project overview section */}
      {projectTitle && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-800 mb-3">🎯 Praxisprojekt: {projectTitle}</h2>
          {projectDescription && (
            <div className="prose prose-green max-w-none">
              <ReactMarkdown>{projectDescription}</ReactMarkdown>
            </div>
          )}
        </div>
      )}

      {/* Progress indicator */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-indigo-800">Schritt-für-Schritt Anleitung</h2>
          <span className="text-sm text-gray-600">
            Schritt {currentStep + 1} von {validSteps.length}
          </span>
        </div>
        
        {/* Step progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / validSteps.length) * 100}%` }}
          />
        </div>

        {/* Step navigation dots */}
        <div className="flex justify-center space-x-2 mb-6">
          {validSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                index === currentStep
                  ? 'bg-indigo-600 text-white'
                  : index < currentStep
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {index < currentStep ? '✓' : index + 1}
            </button>
          ))}
        </div>

        {/* Current step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">
              {validSteps[currentStep]?.title || 'Schritt ohne Titel'}
            </h3>
            
            {/* Video section if available */}
            {validSteps[currentStep]?.video && (
              <div className="mb-6">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-auto"
                    poster={validSteps[currentStep].video.poster}
                  >
                    <source src={validSteps[currentStep].video.src} type="video/mp4" />
                    <p className="text-white p-4">
                      Ihr Browser unterstützt keine Videos. 
                      <a href={validSteps[currentStep].video.src} className="text-blue-300 underline">
                        Video direkt ansehen
                      </a>
                    </p>
                  </video>
                </div>
                {validSteps[currentStep].video.description && (
                  <p className="text-sm text-gray-600 mt-2 italic">
                    {validSteps[currentStep].video.description}
                  </p>
                )}
              </div>
            )}
            
            <div className="prose prose-indigo max-w-none">
              <ReactMarkdown>{validSteps[currentStep]?.content || 'Kein Inhalt verfügbar.'}</ReactMarkdown>
            </div>
            
            {/* Step-specific actions or tips */}
            {validSteps[currentStep]?.tip && (
              <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <p className="text-sm text-yellow-800">
                  <strong>💡 Tipp für Lehrkräfte:</strong> {validSteps[currentStep].tip}
                </p>
              </div>
            )}

            {/* Teacher-specific notes */}
            {validSteps[currentStep]?.teacherNote && (
              <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg">
                <p className="text-sm text-purple-800">
                  <strong>👩‍🏫 Hinweis für den Unterricht:</strong> {validSteps[currentStep].teacherNote}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            ← Zurück
          </button>

          <div className="flex space-x-2">
            {currentStep === validSteps.length - 1 ? (
              <button
                onClick={completeLesson}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                ✓ Lektion abschließen & weiter
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Weiter →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Theory content section - only show if there's valid content */}
      {validTheoryContent.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">
            📚 Hintergrundwissen & Theorie
          </h2>
          <div className="space-y-4">
            {validTheoryContent.map((section, index) => (
              <DetailsPopup
                key={index}
                summary={section.title}
                className="border-indigo-200"
              >
                <div className="prose prose-indigo max-w-none">
                  <ReactMarkdown>{section.content || 'Kein Inhalt verfügbar.'}</ReactMarkdown>
                </div>
              </DetailsPopup>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}