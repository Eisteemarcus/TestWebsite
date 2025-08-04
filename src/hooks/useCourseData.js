import { useState, useEffect } from 'react';
import { kursinhalt } from '../components/Inhalte/index.js';

export function useCourseData() {
  const [courseData, setCourseData] = useState({
    grundlagenStruktur: {},
    kursStruktur: {},
    content: {},
    progressTracking: {},
    media: {},
    slideshows: {}
  });
  const [isLoading, setIsLoading] = useState(true);

  // Lade alle Daten beim Start - jetzt statisch aus den Dateien
  useEffect(() => {
    loadStaticData();
  }, []);

  const loadStaticData = () => {
    setIsLoading(true);
    try {
      // Statische Struktur definieren basierend auf den vorhandenen Inhalten
      const grundlagenStruktur = {
        'Startseite': ['Übersicht & Ziele'],
        'Didaktische Szenarien & Unterrichtseinsatz': ['Grundlagen', 'Didaktische Szenarien & Praxisbeispiele'],
        'Hard- und Software-Empfehlungen': ['Beschaffung / Zugang', 'Auswahl']
      };

      const kursStruktur = {
        '360°-Aufnahmen & Stitching': ['Aufnahmetechniken', 'Nachbearbeitung'],
        'Einführung in 3DVista': ['Basics', 'Fortgeschritten'],
        'Barrierefreiheit in VR': ['Barrierefreiheit'],
        'Medienintegration & Rechte': ['Titel'],
        'Export & Veröffentlichung': ['Export & Veröffentlichung'],
        'Abschluss & Feedback': ['Zusammenfassung', 'Evaluation']
      };

      // Progress Tracking für Kurs-Kapitel
      const progressTracking = {
        '360°-Aufnahmen & Stitching': true,
        'Einführung in 3DVista': true,
        'Barrierefreiheit in VR': true,
        'Medienintegration & Rechte': true,
        'Export & Veröffentlichung': true,
        'Abschluss & Feedback': true
      };

      setCourseData({
        grundlagenStruktur,
        kursStruktur,
        content: kursinhalt,
        progressTracking,
        media: {},
        slideshows: {}
      });
    } catch (e) {
      console.error('Fehler beim Laden der statischen Kursdaten:', e);
    } finally {
      setIsLoading(false);
    }
  };

  // Einzelne Getter
  const getContent = (chapter, section) => {
    return kursinhalt[chapter]?.[section];
  };

  return {
    courseData,
    isLoading,
    getContent,
    reloadData: loadStaticData
  };
}