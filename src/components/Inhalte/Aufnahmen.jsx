import { StepByStepGuide } from '../ui/StepByStepGuide.jsx';

// Praxisprojekt: Virtuelle Werkstattführung für Arbeitssicherheit
const projectTitle = "Virtuelle Werkstattführung für Arbeitssicherheit";
const projectDescription = `
**Ziel:** Erstellen Sie eine interaktive 360°-Tour durch eine Schulwerkstatt, die Schüler:innen über Arbeitssicherheit informiert.

**Warum dieses Projekt?**
- Arbeitssicherheit ist ein zentrales Thema im WTH/S-Unterricht
- Schüler:innen können Gefahren erkennen lernen, ohne sich real zu gefährden
- Die Tour kann immer wieder verwendet und aktualisiert werden
- Perfekt für Vertretungsstunden oder Wiederholungen

**Was Sie am Ende haben:**
Eine vollständige 360°-Tour mit Sicherheitshinweisen, die Sie direkt im Unterricht einsetzen können.
`;

// Schritt-für-Schritt Anleitung für 360°-Aufnahmen mit Smartphone
const aufnahmetechnikenSteps = [
  {
    title: "Smartphone vorbereiten und App installieren",
    content: `
## Schritt 1: Ihr Smartphone zur 360°-Kamera machen

**Empfohlene Apps für 360°-Aufnahmen:**
- **Google Street View** (kostenlos, iOS/Android) - Einfachste Lösung
- **Cardboard Camera** (kostenlos, Android) - Gute Qualität
- **Panorama 360** (kostenlos, iOS) - Benutzerfreundlich

**Smartphone vorbereiten:**
1. **Speicherplatz prüfen** - Mindestens 2GB frei
2. **Akku laden** - Vollständig aufladen
3. **App installieren** - Google Street View aus dem App Store
4. **Kamera-Berechtigung** - In den Einstellungen aktivieren
5. **Testaufnahme** - Kurz ausprobieren

**Für unser Werkstatt-Projekt:**
Wir nutzen Google Street View, da es kostenlos ist und gute Ergebnisse für Bildungszwecke liefert.
    `,
    tip: "Testen Sie die App vorher zu Hause. So sind Sie in der Werkstatt sicher im Umgang damit.",
    teacherNote: "Diese Methode funktioniert auch mit älteren Smartphones. Perfekt, wenn die Schule keine 360°-Kamera hat."
  },
  {
    title: "Werkstatt vorbereiten und Aufnahmeorte planen",
    content: `
## Schritt 2: Die Schulwerkstatt optimal vorbereiten

**Sicherheit und Ordnung:**
1. **Werkstatt aufräumen** - Alle Werkzeuge an ihren Platz
2. **Gefahrenquellen markieren** - Bewusst einige "Fehler" platzieren
3. **Beleuchtung optimieren** - Alle Lampen einschalten
4. **Maschinen sichern** - Alle Geräte ausschalten und sichern

**Aufnahmeorte strategisch wählen:**
- **Eingangsbereich** - Überblick und Orientierung
- **Werkbänke** - Typische Arbeitsplätze
- **Maschinenbereich** - Sicherheitskritische Zone
- **Lagerbereich** - Material und Werkzeuge
- **Erste-Hilfe-Station** - Sicherheitsausstattung

**Für unser Sicherheitsprojekt:**
Platzieren Sie bewusst 5-7 Sicherheitsmängel (z.B. herumliegende Werkzeuge, offene Schränke), die Schüler später finden sollen.
    `,
    tip: "Fotografieren Sie die Werkstatt vorher mit dem normalen Handy. So können Sie später vergleichen und nichts vergessen.",
    teacherNote: "Beziehen Sie Hausmeister und Werkstattleiter ein. Sie kennen die besten Aufnahmeorte und Sicherheitsaspekte."
  },
  {
    title: "360°-Aufnahmen mit Google Street View erstellen",
    content: `
## Schritt 3: Professionelle 360°-Aufnahmen mit dem Smartphone

**Google Street View öffnen und starten:**
1. **App öffnen** → **Kamera-Symbol** antippen
2. **"360°-Foto"** auswählen
3. **Aufnahmeort** in der Werkstatt positionieren
4. **Smartphone waagerecht halten**

**Aufnahme-Technik:**
1. **Startposition** - Smartphone vor der Brust halten
2. **Langsam drehen** - Gleichmäßige Bewegung im Uhrzeigersinn
3. **Überlappung beachten** - Orangene Punkte verbinden
4. **Vollständige Drehung** - 360° komplett erfassen
5. **Nach oben/unten** - Decke und Boden nicht vergessen

**Qualitäts-Tipps:**
- **Ruhig bleiben** - Keine hektischen Bewegungen
- **Gleichmäßiges Tempo** - Etwa 30 Sekunden für eine Runde
- **Gute Beleuchtung** - Bei Tageslicht oder mit allen Lampen
- **Mehrere Versuche** - 2-3 Aufnahmen pro Standort

**Für jede Position in der Werkstatt wiederholen!**
    `,
    video: {
      src: "/videos/360-aufnahme-demo.mp4",
      poster: "/images/360-aufnahme-preview.jpg",
      description: "Demonstration: 360°-Aufnahme in einer Schulwerkstatt"
    },
    tip: "Halten Sie das Smartphone immer auf gleicher Höhe (ca. 1,60m). Das entspricht der Augenhöhe der Schüler:innen.",
    teacherNote: "Lassen Sie Schüler:innen beim Aufnehmen helfen. Sie lernen dabei schon viel über Perspektiven und Raumwahrnehmung."
  },
  {
    title: "Aufnahmen prüfen und optimieren",
    content: `
## Schritt 4: Qualitätskontrolle und Nachbesserung

**Aufnahmen sofort prüfen:**
1. **In der App ansehen** - 360°-Ansicht testen
2. **Vollständigkeit prüfen** - Alle Bereiche erfasst?
3. **Schärfe kontrollieren** - Wichtige Details erkennbar?
4. **Belichtung bewerten** - Nicht zu dunkel oder hell?

**Häufige Probleme erkennen:**
- **Schwarze Bereiche** - Unvollständige Aufnahme
- **Verzerrungen** - Zu schnelle Bewegung
- **Unschärfe** - Verwacklung oder schlechtes Licht
- **Schatten** - Eigener Schatten im Bild

**Nachbesserung bei Problemen:**
- **Position leicht ändern** - 1-2 Meter verschieben
- **Beleuchtung verbessern** - Zusätzliche Lampen
- **Langsamer aufnehmen** - Mehr Zeit lassen
- **Mehrere Versuche** - Beste Aufnahme auswählen

**Für unser Werkstatt-Projekt:**
Achten Sie besonders darauf, dass alle Sicherheitsrelevanten Bereiche (Maschinen, Erste Hilfe, Notausgänge) gut sichtbar sind.
    `,
    tip: "Machen Sie von jedem Standort 2-3 Aufnahmen. Sie können später die beste auswählen.",
    teacherNote: "Nutzen Sie schlechte Aufnahmen als Lernmaterial: 'Was ist hier schiefgelaufen und wie können wir es besser machen?'"
  },
  {
    title: "Bilder exportieren und für 3DVista vorbereiten",
    content: `
## Schritt 5: Aufnahmen sichern und für die Bearbeitung vorbereiten

**Export aus Google Street View:**
1. **Aufnahme auswählen** in der App
2. **Teilen-Symbol** antippen
3. **"In Galerie speichern"** wählen
4. **Hohe Qualität** auswählen (wenn verfügbar)
5. **Für alle Aufnahmen wiederholen**

**Dateien organisieren:**
\`\`\`
Werkstatt-Tour/
├── 01_Rohaufnahmen/
│   ├── Eingang.jpg
│   ├── Werkbank_1.jpg
│   ├── Werkbank_2.jpg
│   ├── Maschinen.jpg
│   └── Lager.jpg
├── 02_Bearbeitet/
└── 03_Projekt/
\`\`\`

**Auf Computer übertragen:**
- **USB-Kabel** - Direkter Transfer
- **Cloud-Dienst** - Google Drive, Dropbox
- **E-Mail** - Für einzelne Bilder
- **AirDrop** - Bei Apple-Geräten

**Qualitätsprüfung am Computer:**
- **Auflösung prüfen** - Mindestens 2048x1024 Pixel
- **Dateiformat** - JPEG ist optimal
- **Dateigröße** - 2-10 MB pro Bild normal

**Vorbereitung für 3DVista:**
Die Bilder sind jetzt bereit für den Import in 3DVista Virtual Tour Suite.
    `,
    tip: "Benennen Sie die Dateien aussagekräftig (z.B. 'Werkstatt_Eingang.jpg'). Das hilft später bei der Organisation.",
    teacherNote: "Erstellen Sie eine Backup-Kopie aller Originalaufnahmen. Diese sind das Fundament Ihres Projekts."
  }
];

// Theorie-Inhalte für 360°-Aufnahmen
const aufnahmetechnikenTheory = [
  {
    title: "Warum 360°-Aufnahmen im Unterricht?",
    content: `
**Pädagogische Vorteile:**
- **Immersive Lernerfahrung** - Schüler:innen fühlen sich "mittendrin"
- **Gefahrlose Erkundung** - Sicherheitskritische Bereiche ohne Risiko
- **Wiederholbare Erfahrung** - Beliebig oft nutzbar
- **Selbstbestimmtes Lerntempo** - Jeder kann in seinem Tempo erkunden

**Besonders geeignet für:**
- **Arbeitssicherheit** - Gefahren erkennen ohne Risiko
- **Raumverständnis** - Orientierung und Zusammenhänge
- **Prozessverständnis** - Arbeitsabläufe visualisieren
- **Inklusion** - Auch für mobilitätseingeschränkte Schüler:innen

**Wissenschaftliche Erkenntnisse:**
Studien zeigen, dass VR-Lernumgebungen die Aufmerksamkeit um 90% und das Behalten von Informationen um 75% steigern können (PwC Studie 2020).
    `
  },
  {
    title: "Smartphone vs. professionelle 360°-Kameras",
    content: `
**Smartphone-Aufnahmen:**
- **Vorteile:** Kostenlos, immer verfügbar, einfache Bedienung
- **Nachteile:** Geringere Qualität, mehr Aufwand beim Stitching
- **Ideal für:** Schulprojekte, erste Versuche, begrenztes Budget

**Professionelle 360°-Kameras:**
- **Vorteile:** Bessere Qualität, automatisches Stitching, einfacher Workflow
- **Nachteile:** Anschaffungskosten, zusätzliche Hardware
- **Ideal für:** Regelmäßige Nutzung, höchste Qualitätsansprüche

**Empfehlung für Schulen:**
Beginnen Sie mit Smartphone-Aufnahmen. Wenn Sie regelmäßig 360°-Inhalte erstellen, lohnt sich später die Investition in eine professionelle Kamera.

**Qualitätsvergleich:**
- Smartphone: Ausreichend für Bildungszwecke
- Insta360 ONE X2: Deutlich bessere Qualität
- Professionelle Kameras: Broadcast-Qualität
    `
  },
  {
    title: "Technische Grundlagen verstehen",
    content: `
**Was passiert beim 360°-Foto?**
Das Smartphone nimmt viele Einzelbilder auf und fügt sie automatisch zu einem Kugelpanorama zusammen. Dieser Prozess heißt "Stitching".

**Equirectangular-Projektion:**
Das Endergebnis ist ein rechteckiges Bild im Verhältnis 2:1, das eine komplette Kugel darstellt. Die Pole (oben/unten) sind stark verzerrt.

**Auflösung und Qualität:**
- **Smartphone:** 2048x1024 bis 4096x2048 Pixel
- **Professionelle Kameras:** 5760x2880 Pixel und höher
- **Für Schulen:** 2048x1024 Pixel sind völlig ausreichend

**Dateiformate:**
- **JPEG:** Standard für 360°-Fotos, gute Kompression
- **PNG:** Verlustfrei, aber größere Dateien
- **RAW:** Nur bei professionellen Kameras, maximale Qualität

**Metadaten:**
Moderne 360°-Fotos enthalten spezielle Metadaten, die VR-Software erkennt und automatisch als 360°-Inhalt behandelt.
    `
  }
];

// Schritt-für-Schritt Anleitung für Stitching
const stitchingSteps = [
  {
    title: "3DVista Virtual Tour Suite installieren",
    content: `
## Schritt 1: Software beschaffen und installieren

**3DVista Virtual Tour Suite:**
- **Kostenlose Testversion:** 30 Tage voll funktionsfähig
- **Bildungsrabatt:** Spezielle Preise für Schulen
- **SLUB Dresden:** Kostenlose Nutzung im Makerspace

**Installation:**
1. **Download** von [3dvista.com](https://www.3dvista.com)
2. **Setup ausführen** - Administrator-Rechte erforderlich
3. **Lizenz aktivieren** - Testversion oder Vollversion
4. **Updates prüfen** - Neueste Version installieren

**Systemanforderungen:**
- **Windows 10/11** oder **macOS 10.14+**
- **8 GB RAM** (mindestens 4 GB)
- **Grafikkarte** mit DirectX 11
- **2 GB freier Speicherplatz**

**Erste Schritte:**
- **Programm starten** und Benutzeroberfläche erkunden
- **Beispielprojekt** öffnen zum Kennenlernen
- **Hilfe-Menü** für Tutorials nutzen
    `,
    tip: "Installieren Sie 3DVista auf einem leistungsstarken Computer. Die Bearbeitung von 360°-Bildern benötigt Rechenpower.",
    teacherNote: "Prüfen Sie die Schulcomputer auf Kompatibilität. Oft sind ältere Rechner nicht leistungsfähig genug."
  },
  {
    title: "Smartphone-Bilder in 3DVista importieren",
    content: `
## Schritt 2: Ihre Werkstatt-Aufnahmen laden

**Neues Projekt erstellen:**
1. **3DVista starten**
2. **"Neues Projekt"** wählen
3. **Projektname:** "Werkstatt_Sicherheitstour"
4. **Speicherort** festlegen

**Bilder importieren:**
1. **"Szene hinzufügen"** klicken
2. **"Panorama importieren"** wählen
3. **Smartphone-Aufnahmen** auswählen
4. **Import starten** - 3DVista erkennt automatisch 360°-Format

**Szenen benennen:**
- **"Werkstatt_Eingang"** - Übersicht und Orientierung
- **"Arbeitsplatz_1"** - Erste Werkbank
- **"Arbeitsplatz_2"** - Zweite Werkbank  
- **"Maschinenbereich"** - Sicherheitskritische Zone
- **"Materialbereich"** - Lager und Werkzeuge

**Qualitätsprüfung:**
Jede Szene einzeln prüfen - sind alle Bereiche scharf und gut erkennbar?
    `,
    tip: "Importieren Sie alle Bilder auf einmal. 3DVista kann mehrere 360°-Bilder gleichzeitig verarbeiten.",
    teacherNote: "Zeigen Sie den Schüler:innen den Import-Prozess. Sie verstehen so besser, wie aus Einzelbildern eine VR-Tour wird."
  },
  {
    title: "Grundnavigation zwischen Räumen erstellen",
    content: `
## Schritt 3: Virtuelle Wege durch die Werkstatt

**Navigations-Hotspots platzieren:**
1. **Szene "Werkstatt_Eingang"** auswählen
2. **Hotspot-Tool** in der Werkzeugleiste
3. **"Navigations-Hotspot"** wählen
4. **Position anklicken** - z.B. Richtung Werkbänke
5. **Ziel auswählen:** "Arbeitsplatz_1"

**Logische Verbindungen erstellen:**
- **Eingang → Arbeitsplatz 1** (Hauptweg)
- **Arbeitsplatz 1 → Arbeitsplatz 2** (Rundgang)
- **Arbeitsplatz 2 → Maschinenbereich** (Sicherheitszone)
- **Maschinenbereich → Materialbereich** (Vollständigkeit)
- **Materialbereich → Eingang** (Zurück zum Start)

**Hotspot-Gestaltung:**
- **Symbol:** Pfeil oder Fußspur
- **Farbe:** Gut sichtbar (blau oder grün)
- **Größe:** Groß genug für Touch-Bedienung
- **Beschriftung:** "Zu den Werkbänken", "Zum Maschinenbereich"

**Test der Navigation:**
Vorschau starten und alle Wege durchgehen - funktioniert alles?
    `,
    tip: "Platzieren Sie Hotspots an natürlichen Übergängen wie Türen oder Wegen. Das wirkt intuitiver.",
    teacherNote: "Lassen Sie Schüler:innen die Navigation testen. Sie entdecken oft Probleme, die Erwachsene übersehen."
  },
  {
    title: "Sicherheits-Hotspots für Lernziele hinzufügen",
    content: `
## Schritt 4: Interaktive Sicherheitselemente einbauen

**Info-Hotspots für Sicherheitshinweise:**
1. **Hotspot-Tool** → **"Info-Hotspot"** wählen
2. **Position:** Direkt an Gefahrenquellen
3. **Symbol:** Warnsymbol oder Ausrufezeichen
4. **Inhalt:** Sicherheitsregeln und Erklärungen

**Beispiel-Hotspots für unsere Werkstatt:**
- **An der Kreissäge:** "Schutzbrille und Gehörschutz obligatorisch"
- **Bei Werkzeugen:** "Werkzeuge nach Gebrauch zurücklegen"
- **Am Erste-Hilfe-Kasten:** "Standort merken - im Notfall wichtig"
- **Bei Feuerlöscher:** "Bedienung: Sicherung ziehen, zielen, drücken"
- **An Steckdosen:** "Hände trocken halten, Kabel prüfen"

**Hotspot-Inhalte gestalten:**
\`\`\`
Titel: "Sicherheit an der Kreissäge"
Text: "Vor jeder Nutzung:
✓ Schutzbrille aufsetzen
✓ Gehörschutz verwenden  
✓ Werkstück sicher fixieren
✓ Sägeblatt prüfen
✓ Schutzhaube kontrollieren"
\`\`\`

**Versteckte Gefahren markieren:**
Platzieren Sie Hotspots an den bewusst platzierten Sicherheitsmängeln.
    `,
    tip: "Verwenden Sie einheitliche Symbole für gleiche Inhalte. Das hilft bei der Orientierung.",
    teacherNote: "Beziehen Sie echte Unfallstatistiken ein. Das macht die Sicherheitshinweise authentischer und wichtiger."
  },
  {
    title: "Projekt testen und für den Unterricht vorbereiten",
    content: `
## Schritt 5: Finale Qualitätskontrolle und Export

**Umfassender Test:**
1. **Vollständige Tour** - Alle Wege durchgehen
2. **Alle Hotspots** - Funktionieren und sind verständlich?
3. **Mobile Ansicht** - Auch auf Tablets/Smartphones?
4. **Ladezeiten** - Akzeptabel für Schulnetzwerk?

**Optimierungen vornehmen:**
- **Hotspot-Positionen** anpassen wenn nötig
- **Texte überarbeiten** - verständlich für Schüler:innen?
- **Navigation verbessern** - intuitive Wege?
- **Performance optimieren** - Bilder komprimieren

**Export für den Unterricht:**
1. **Datei → Exportieren → HTML5**
2. **Einstellungen:**
   - Qualität: Hoch
   - Mobile Optimierung: Aktiviert
   - Offline-Nutzung: Aktiviert
3. **Ausgabeordner** wählen
4. **Export starten**

**Bereitstellung:**
- **USB-Stick** - Für Computer ohne Internet
- **Schulserver** - Zentrale Bereitstellung
- **Cloud-Link** - Für Fernunterricht
- **QR-Code** - Einfacher Zugang für Schüler:innen

**Unterrichtsmaterial erstellen:**
- **Arbeitsblatt** mit Suchaufgaben
- **Checkliste** für Sicherheitsregeln
- **Bewertungsbogen** für Schülerleistungen
    `,
    tip: "Testen Sie die Tour mit echten Schüler:innen vor dem ersten Einsatz. Sie geben das beste Feedback.",
    teacherNote: "Erstellen Sie verschiedene Schwierigkeitsstufen: Einfache Suche für jüngere, komplexe Aufgaben für ältere Schüler:innen."
  }
];

// Theorie-Inhalte für Stitching
const stitchingTheory = [
  {
    title: "Was ist Stitching und warum ist es wichtig?",
    content: `
**Definition Stitching:**
Stitching ist der Prozess, bei dem mehrere überlappende Einzelbilder zu einem nahtlosen 360°-Panorama zusammengefügt werden.

**Warum Stitching bei Smartphone-Aufnahmen:**
- Google Street View macht automatisches Stitching
- Ergebnis ist meist gut, aber nicht perfekt
- 3DVista kann Nachkorrekturen vornehmen
- Professionelle Kontrolle über das Endergebnis

**Häufige Stitching-Probleme:**
- **Geisterbilder:** Bewegte Objekte während der Aufnahme
- **Parallax-Fehler:** Smartphone nicht exakt zentriert
- **Belichtungsunterschiede:** Verschiedene Lichtverhältnisse
- **Verzerrungen:** Ungleichmäßige Bewegung

**3DVista Stitching-Vorteile:**
- Automatische Erkennung von 360°-Bildern
- Nachkorrektur-Möglichkeiten
- Optimierung für VR-Darstellung
- Integration in den Tour-Workflow
    `
  },
  {
    title: "3DVista Virtual Tour Suite im Überblick",
    content: `
**Was ist 3DVista?**
3DVista ist eine professionelle Software zur Erstellung virtueller Rundgänge und VR-Erlebnisse, speziell entwickelt für Bildungseinrichtungen und Unternehmen.

**Hauptfunktionen:**
- **360°-Bild Import** - Alle gängigen Formate
- **Hotspot-System** - Interaktive Elemente
- **Multimedia-Integration** - Audio, Video, Bilder
- **Export-Optionen** - Web, Mobile, VR-Brillen

**Warum 3DVista für Schulen?**
- **Bildungsrabatte** verfügbar
- **Keine Programmierkenntnisse** erforderlich
- **Umfangreiche Tutorials** und Support
- **Professionelle Ergebnisse** mit einfachen Mitteln

**Alternative Software:**
- **Pano2VR** - Ähnliche Funktionen
- **Kolor Panotour** - Einfacher, weniger Funktionen
- **A-Frame** - Kostenlos, aber Programmierung nötig
- **Unity** - Sehr mächtig, aber komplex
    `
  },
  {
    title: "Projektmanagement für VR-Touren",
    content: `
**Projektplanung:**
1. **Lernziele definieren** - Was sollen Schüler:innen lernen?
2. **Zielgruppe analysieren** - Alter, Vorwissen, Interessen
3. **Inhalte strukturieren** - Logischer Aufbau der Tour
4. **Ressourcen planen** - Zeit, Personal, Technik

**Dateienorganisation:**
\`\`\`
VR-Projekt/
├── 01_Planung/
│   ├── Storyboard.pdf
│   └── Lernziele.docx
├── 02_Aufnahmen/
│   ├── Rohbilder/
│   └── Bearbeitet/
├── 03_3DVista/
│   ├── Projekt.3dvista
│   └── Assets/
└── 04_Export/
    ├── Web/
    └── Mobile/
\`\`\`

**Qualitätssicherung:**
- **Regelmäßige Tests** während der Entwicklung
- **Feedback einholen** von Kollegen und Schülern
- **Barrierefreiheit prüfen** - für alle zugänglich?
- **Performance testen** - auf verschiedenen Geräten

**Wartung und Updates:**
- **Inhalte aktuell halten** - besonders Sicherheitshinweise
- **Technik-Updates** - Software und Hardware
- **Feedback auswerten** - kontinuierliche Verbesserung
    `
  }
];

export const aufnahmenContent = {
  'Aufnahmetechniken': {
    title: '360°-Aufnahmen mit dem Smartphone',
    content: ({ onNavigateToNext }) => (
      <StepByStepGuide 
        steps={aufnahmetechnikenSteps}
        theoryContent={aufnahmetechnikenTheory}
        onNavigateToNext={onNavigateToNext}
        projectTitle={projectTitle}
        projectDescription={projectDescription}
      />
    )
  },
  'Nachbearbeitung': {
    title: 'Stitching und Optimierung in 3DVista',
    content: ({ onNavigateToNext }) => (
      <StepByStepGuide 
        steps={stitchingSteps}
        theoryContent={stitchingTheory}
        onNavigateToNext={onNavigateToNext}
        projectTitle={projectTitle}
        projectDescription="**Fortsetzung:** Ihre Smartphone-Aufnahmen werden jetzt in 3DVista zu einer professionellen VR-Tour zusammengefügt."
      />
    )
  }
};