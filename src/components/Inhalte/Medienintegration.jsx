import { StepByStepGuide } from '../ui/StepByStepGuide.jsx';

// Schritt-für-Schritt Anleitung für Medienintegration
const medienintegrationSteps = [
  {
    title: "Medientypen planen und auswählen",
    content: `
## Schritt 1: Geeignete Medien für VR-Lernumgebungen identifizieren

**Medientypen für 360°-Lernumgebungen:**
1. **Bilder und Grafiken**
   - Detailaufnahmen von Geräten und Werkzeugen
   - Diagramme und Schaubilder
   - Sicherheitshinweise und Warnschilder
   - Arbeitsschritte und Prozesse

2. **Audio-Inhalte**
   - Erklärende Sprachaufnahmen
   - Maschinengeräusche und Umgebungssounds
   - Musik für atmosphärische Untermalung
   - Mehrsprachige Inhalte

3. **Video-Materialien**
   - Demonstrationen von Arbeitsabläufen
   - Experimente und Versuche
   - Interviews mit Experten
   - Sicherheitsschulungen

4. **Interaktive Elemente**
   - Quiz und Lernkontrollen
   - 3D-Modelle und Animationen
   - Simulationen und virtuelle Experimente
   - Gamification-Elemente

**Auswahlkriterien:**
- **Pädagogischer Mehrwert** - Unterstützt das Lernziel
- **Technische Qualität** - Ausreichende Auflösung und Klarheit
- **Rechtliche Unbedenklichkeit** - Klare Nutzungsrechte
- **Barrierefreiheit** - Zugänglich für alle Lernenden
    `,
    tip: "Erstellen Sie eine Medien-Matrix: Welche Inhalte benötigen welche Medientypen für optimale Vermittlung?"
  },
  {
    title: "Urheberrecht und Lizenzen verstehen",
    content: `
## Schritt 2: Rechtssichere Mediennutzung sicherstellen

**Urheberrecht Grundlagen:**
1. **Schutzfrist** - 70 Jahre nach Tod des Urhebers
2. **Schöpfungshöhe** - Nicht alle Werke sind automatisch geschützt
3. **Verwertungsrechte** - Verschiedene Nutzungsarten getrennt betrachten
4. **Persönlichkeitsrechte** - Recht am eigenen Bild beachten

**Creative Commons Lizenzen verstehen:**
- **CC0** - Gemeinfrei, keine Einschränkungen
- **CC BY** - Namensnennung erforderlich
- **CC BY-SA** - Namensnennung + gleiche Lizenz für Bearbeitungen
- **CC BY-NC** - Namensnennung + nur nicht-kommerziell
- **CC BY-ND** - Namensnennung + keine Bearbeitungen

**Lizenz-Kompatibilität prüfen:**
\`\`\`
Kompatibilitäts-Check:
□ Darf ich das Medium verwenden? (Lizenz erlaubt Nutzung)
□ Darf ich es bearbeiten? (Derivative works erlaubt)
□ Darf ich es kommerziell nutzen? (Bei Schulprojekten meist unkritisch)
□ Muss ich die gleiche Lizenz verwenden? (Share-alike Klausel)
□ Wie muss ich den Urheber nennen? (Attribution-Anforderungen)
\`\`\`

**Bildrechte und Persönlichkeitsrechte:**
- **Recht am eigenen Bild** - Einverständnis aller abgebildeten Personen
- **Hausrecht** - Erlaubnis für Aufnahmen in fremden Gebäuden
- **Markenrechte** - Logos und Marken können geschützt sein
- **Panoramafreiheit** - Öffentlich sichtbare Gebäude meist OK
    `,
    tip: "Dokumentieren Sie alle verwendeten Medien mit Quelle, Lizenz und Verwendungszweck in einer Tabelle. Das spart später viel Zeit bei Nachfragen."
  },
  {
    title: "Freie Medien finden und bewerten",
    content: `
## Schritt 3: Qualitätsvolle freie Inhalte beschaffen

**Empfohlene Quellen für freie Medien:**

**Bilder:**
1. **Unsplash** (unsplash.com) - Hochwertige Fotos, meist CC0
2. **Pixabay** (pixabay.com) - Große Auswahl, verschiedene Lizenzen
3. **Pexels** (pexels.com) - Kuratierte Sammlung freier Fotos
4. **Wikimedia Commons** - Riesige Sammlung mit klaren Lizenzen

**Audio:**
- **Freesound** (freesound.org) - Geräusche und Sounds
- **Zapsplat** (zapsplat.com) - Professionelle Soundeffekte
- **YouTube Audio Library** - Musik und Effekte von Google
- **Jamendo** (jamendo.com) - Freie Musik unter Creative Commons

**Videos:**
- **Pixabay Videos** - Kurze Clips in hoher Qualität
- **Pexels Videos** - Professionelle Stock-Videos
- **Videvo** (videvo.net) - Mix aus freien und Premium-Inhalten
- **Internet Archive** - Historische und dokumentarische Videos

**Qualitätsbewertung:**
\`\`\`
Bewertungskriterien:
□ Technische Qualität (Auflösung, Schärfe, Audio)
□ Inhaltliche Relevanz (Passt zum Lernziel)
□ Kulturelle Angemessenheit (Keine Stereotypen)
□ Aktualität (Nicht veraltet)
□ Barrierefreiheit (Kontraste, Verständlichkeit)
\`\`\`
    `,
    tip: "Erstellen Sie eine Sammlung bewährter Quellen als Lesezeichen. So finden Sie schnell passende Medien für neue Projekte."
  },
  {
    title: "Medien technisch optimieren",
    content: `
## Schritt 4: Medien für VR-Umgebungen aufbereiten

**Bildoptimierung:**
1. **Auflösung anpassen** - Nicht größer als nötig (meist 1920x1080 für Details)
2. **Dateigröße reduzieren** - JPEG-Qualität 80-90% meist ausreichend
3. **Format wählen** - JPEG für Fotos, PNG für Grafiken mit Transparenz
4. **Farbraum** - sRGB für Web-Anwendungen

**Audio-Bearbeitung:**
- **Format** - MP3 (128-192 kbps) oder OGG für Web
- **Normalisierung** - Einheitliche Lautstärke aller Audio-Dateien
- **Rauschreduzierung** - Störende Hintergrundgeräusche entfernen
- **Fade In/Out** - Sanfte Übergänge für professionellen Klang

**Video-Optimierung:**
\`\`\`
Empfohlene Video-Einstellungen:
- Auflösung: 1920x1080 (Full HD)
- Codec: H.264 (MP4)
- Bitrate: 5-8 Mbps für gute Qualität
- Framerate: 25-30 fps
- Audio: AAC, 128 kbps
\`\`\`

**Batch-Processing für Effizienz:**
- **ImageMagick** - Kommandozeilen-Tool für Bildbearbeitung
- **FFmpeg** - Universelles Tool für Audio/Video-Konvertierung
- **Adobe Creative Suite** - Professionelle Batch-Funktionen
- **Online-Tools** - Für gelegentliche Nutzung ohne Software-Installation

**Dateiorganisation:**
\`\`\`
Medien-Struktur:
Projekt/
├── Medien/
│   ├── Bilder/
│   │   ├── Original/
│   │   └── Optimiert/
│   ├── Audio/
│   │   ├── Rohaufnahmen/
│   │   └── Bearbeitet/
│   └── Videos/
│       ├── Rohmaterial/
│       └── Export/
└── Lizenzen/
    └── Quellennachweis.xlsx
\`\`\`
    `,
    tip: "Behalten Sie immer die Originaldateien. Optimierte Versionen können Sie jederzeit neu erstellen, aber Originale sind oft unwiederbringlich."
  },
  {
    title: "Integration in 3DVista und Dokumentation",
    content: `
## Schritt 5: Medien einbinden und rechtlich dokumentieren

**Integration in 3DVista:**
1. **Medien-Hotspots erstellen**
   - Bilder als Info-Hotspots
   - Audio als Sound-Hotspots
   - Videos als Media-Hotspots
   - Interaktive Elemente als Custom-Hotspots

2. **Optimale Platzierung**
   - Logische Positionen im 360°-Raum
   - Nicht zu viele Hotspots pro Szene
   - Klare visuelle Hierarchie
   - Barrierefreie Erreichbarkeit

3. **Performance-Optimierung**
   - Lazy Loading für große Medien
   - Progressive JPEG für schnellere Ladezeiten
   - Komprimierung ohne Qualitätsverlust
   - Mobile Optimierung beachten

**Rechtsdokumentation erstellen:**
\`\`\`
Medien-Lizenz-Tabelle:
| Datei | Quelle | Urheber | Lizenz | Verwendung | Datum |
|-------|--------|---------|--------|------------|-------|
| werkstatt.jpg | Unsplash | Max Mustermann | CC0 | Hotspot-Bild | 2024-01-15 |
| maschine.mp3 | Freesound | SoundDesigner | CC BY | Hintergrundton | 2024-01-16 |
\`\`\`

**Impressum und Quellenangaben:**
- **Vollständige Urhebernennung** - Name, Werk, Lizenz, Quelle
- **Verlinkung zu Originalen** - Wo rechtlich erforderlich
- **Lizenz-Texte** - Vollständige CC-Lizenzen verlinken
- **Kontaktdaten** - Für Rückfragen zu Mediennutzung

**Qualitätssicherung:**
- **Cross-Browser-Test** - Funktioniert in allen Browsern
- **Mobile Optimierung** - Auch auf Smartphones/Tablets
- **Ladezeiten messen** - Akzeptable Performance sicherstellen
- **Barrierefreiheit prüfen** - Alt-Texte und Untertitel vorhanden

**Backup und Archivierung:**
- **Vollständige Projektarchive** - Alle Medien und Lizenzen
- **Versionskontrolle** - Änderungen nachvollziehbar dokumentieren
- **Externe Backups** - Schutz vor Datenverlust
- **Langzeitarchivierung** - Für spätere Aktualisierungen
    `,
    tip: "Erstellen Sie eine Vorlage für die Rechtsdokumentation. So vergessen Sie keine wichtigen Angaben und sparen Zeit bei neuen Projekten."
  }
];

// Theorie-Inhalte für Medienintegration
const medienintegrationTheory = [
  {
    title: "Urheberrecht im Bildungskontext",
    content: `
**Bildungs- und Wissenschaftsprivileg (§ 60a UrhG):**
- **Unterricht und Lehre** - Vereinfachte Nutzung urheberrechtlich geschützter Werke
- **15% Regel** - Bis zu 15% eines Werkes für Unterrichtszwecke nutzbar
- **Nicht-kommerzielle Nutzung** - Nur für Bildungszwecke, nicht gewerblich
- **Vergütung** - Über Verwertungsgesellschaften abgegolten

**Grenzen des Bildungsprivilegs:**
- **Vollständige Werke** - Nicht komplett nutzbar (außer bei geringem Umfang)
- **Schulbücher** - Besondere Einschränkungen
- **Öffentliche Zugänglichmachung** - Nur für Unterrichtsteilnehmer
- **Zeitliche Begrenzung** - Nur für die Dauer des Kurses

**Praktische Umsetzung:**
- **Quellenangaben** - Immer vollständig und korrekt
- **Zugangsschutz** - Nur für Kursteilnehmer zugänglich
- **Löschung** - Nach Kursende entfernen
- **Alternative Suchen** - Freie Alternativen bevorzugen

**Internationale Unterschiede:**
- **Fair Use (USA)** - Andere Regelungen als in Deutschland
- **EU-Richtlinien** - Harmonisierung, aber nationale Unterschiede
- **Creative Commons** - International einheitliche Lizenzen
- **Public Domain** - Unterschiedliche Schutzfristen weltweit
    `
  },
  {
    title: "Creative Commons im Detail",
    content: `
**Die sechs CC-Lizenzen:**

**CC BY (Attribution):**
- **Erlaubt:** Teilen, Bearbeiten, kommerziell nutzen
- **Bedingung:** Namensnennung des Urhebers
- **Beispiel:** "Foto von Max Mustermann, lizenziert unter CC BY 4.0"

**CC BY-SA (Attribution-ShareAlike):**
- **Zusätzlich:** Bearbeitungen unter gleicher Lizenz
- **Copyleft-Prinzip:** Freie Inhalte bleiben frei
- **Wikipedia-Prinzip:** Alle Inhalte unter CC BY-SA

**CC BY-NC (Attribution-NonCommercial):**
- **Einschränkung:** Keine kommerzielle Nutzung
- **Graubereich:** Was ist "kommerziell" in Schulen?
- **Vorsicht:** Oft zu restriktiv für Bildungsprojekte

**CC BY-ND (Attribution-NoDerivatives):**
- **Einschränkung:** Keine Bearbeitungen erlaubt
- **Problem:** Anpassungen für Barrierefreiheit schwierig
- **Verwendung:** Nur für unveränderte Übernahme

**Kombinationen:**
- **CC BY-NC-SA** - Nicht-kommerziell + Share-Alike
- **CC BY-NC-ND** - Nicht-kommerziell + keine Bearbeitungen

**CC0 (Public Domain):**
- **Vollständiger Verzicht** auf Urheberrechte
- **Keine Bedingungen** - Freie Nutzung für alle Zwecke
- **Ideal für Bildung** - Keine rechtlichen Hürden
    `
  },
  {
    title: "Technische Standards und Formate",
    content: `
**Web-optimierte Bildformate:**
- **JPEG** - Fotos mit vielen Farben, verlustbehaftet
- **PNG** - Grafiken mit wenigen Farben, verlustfrei, Transparenz
- **WebP** - Moderne Alternative, bessere Kompression
- **SVG** - Vektorgrafiken, skalierbar, kleine Dateien

**Audio-Formate für Web:**
- **MP3** - Universell unterstützt, gute Kompression
- **OGG Vorbis** - Open Source, bessere Qualität bei gleicher Größe
- **AAC** - Apple-Standard, gute Qualität
- **WAV** - Unkomprimiert, nur für kurze Clips

**Video-Codecs und Container:**
\`\`\`
Empfohlene Video-Einstellungen:
Container: MP4
Video-Codec: H.264 (AVC)
Audio-Codec: AAC
Auflösung: 1920x1080 (Full HD)
Bitrate: 5-8 Mbps
Framerate: 25-30 fps
\`\`\`

**Responsive Media:**
- **Verschiedene Auflösungen** - Für unterschiedliche Geräte
- **Adaptive Bitrate** - Anpassung an Internetgeschwindigkeit
- **Progressive Enhancement** - Grundfunktion ohne JavaScript
- **Lazy Loading** - Medien erst bei Bedarf laden

**Barrierefreie Medien:**
- **Alt-Texte** - Beschreibung für Screenreader
- **Untertitel** - WebVTT-Format für Videos
- **Audiodeskription** - Zusätzliche Tonspur für Sehbehinderte
- **Transkriptionen** - Volltext für Audio-Inhalte
    `
  }
];

export const medienintegrationContent = {
  'Titel': {
    title: 'Medienintegration & Rechte',
    content: ({ onNavigateToNext }) => (
      <StepByStepGuide 
        steps={medienintegrationSteps}
        theoryContent={medienintegrationTheory}
        onNavigateToNext={onNavigateToNext}
      />
    )
  }
};