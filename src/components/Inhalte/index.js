// This file serves as the main index for all course content
// It imports content from individual chapter files and exports them as a single object

// Import content from each chapter file
import { startseiteContent } from './Startseite.jsx';
import { didaktischeSzenarienContent } from './DidaktischeSzenarien.jsx';
import { hardwareContent } from './Hardware.jsx';
import { aufnahmenContent } from './Aufnahmen.jsx';
import { dreiDVistaContent } from './DreiDVista.jsx';
import { barrierefreiheitContent } from './Barrierefreiheit.jsx';
import { medienintegrationContent } from './Medienintegration.jsx';
import { exportVeroeffentlichungContent } from './ExportVeroeffentlichung.jsx';
import { abschlussContent } from './Abschluss.jsx';

/**
 * Main course content object
 * Maps chapter names to their content objects
 * 
 * Structure:
 * {
 *   'Chapter Name': {
 *     'Sub-section Name': {
 *       title: 'Display Title',
 *       content: 'Markdown content...'
 *     }
 *   }
 * }
 * 
 * IMPORTANT: The keys in this object must exactly match the keys used in
 * kapitelStruktur in KapitelContent.jsx for the content to display properly
 */
export const kursinhalt = {
  // Homepage/Introduction content
  'Startseite': startseiteContent,
  
  // Didactic scenarios and teaching applications
  'Didaktische Szenarien & Unterrichtseinsatz': didaktischeSzenarienContent,
  
  // Hardware and software recommendations
  'Hard- und Software-Empfehlungen': hardwareContent,
  
  // Foundational knowledge for immersive learning environments
  'Grundlagenwissen in immersiven Lernumgebungen': barrierefreiheitContent,
  
  // 360° photography and stitching techniques
  '360°-Aufnahmen & Stitching': aufnahmenContent,
  
  // Introduction to 3DVista software
  'Einführung in 3DVista': dreiDVistaContent,
  
  // Accessibility implementation in VR environments
  'Barrierefreiheit in VR': barrierefreiheitContent,
  
  // Media integration and legal rights
  'Medienintegration & Rechte': medienintegrationContent,
  
  // Export and publishing
  'Export & Veröffentlichung': exportVeroeffentlichungContent,
  
  // Course conclusion and feedback
  'Abschluss & Feedback': abschlussContent
};