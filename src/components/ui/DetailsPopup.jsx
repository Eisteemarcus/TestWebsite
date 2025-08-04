import React from 'react';

/**
 * DetailsPopup component for collapsible content sections
 * Uses HTML5 details/summary elements for accessibility
 */
export function DetailsPopup({ summary, children, className = "" }) {
  return (
    <details className={`group border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      <summary className="cursor-pointer bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-3 font-medium text-indigo-800 hover:bg-indigo-100 transition-colors select-none">
        <span className="flex items-center justify-between">
          {summary}
          <span className="ml-2 transform transition-transform group-open:rotate-180">
            ▼
          </span>
        </span>
      </summary>
      <div className="px-4 py-3 bg-white border-t border-gray-100">
        {children}
      </div>
    </details>
  );
}