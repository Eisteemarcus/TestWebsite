import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p>&copy; 2024 VR Lehrkurs</p>
        <a href="#impressum" className="hover:text-indigo-300 transition-colors">
          Impressum
        </a>
      </div>
    </footer>
  );
}