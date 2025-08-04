import { StepByStepGuide } from '../ui/StepByStepGuide.jsx';

// Fortsetzung des Werkstatt-Projekts
const projectTitle = "Virtuelle Werkstattführung für Arbeitssicherheit";
const projectDescription = `
**Fortsetzung des Projekts:** Ihre 360°-Aufnahmen sind fertig - jetzt machen wir eine vollständige interaktive Lernumgebung daraus!

**In diesem Kapitel lernen Sie:**
- Hotspots für Interaktivität hinzufügen
- Quiz-Elemente für Lernkontrollen einbauen
- Audio-Erklärungen integrieren
- Die Tour für den Unterricht optimieren
`;

// Schritt-für-Schritt Anleitung für 3DVista Grundlagen
const grundlagenSteps = [
  {
    title: "3DVista Virtual Tour Suite installieren und einrichten",
    content: `
## Schritt 1: Software beschaffen und Arbeitsbereich vorbereiten

**3DVista Virtual Tour Suite beschaffen:**
- **Kostenlose Testversion:** 30 Tage voll funktionsfähig von [3dvista.com](https://www.3dvista.com)
- **Bildungsrabatt:** Spezielle Preise für Schulen verfügbar
- **SLUB Dresden:** Kostenlose Nutzung im Makerspace möglich

**Installation durchführen:**
1. **Setup-Datei herunterladen** (ca. 200 MB)
2. **Als Administrator ausführen** - Rechte erforderlich
3. **Installationspfad wählen** - Standard ist meist OK
4. **Lizenz aktivieren** - Testversion oder Vollversion
5. **Erste Updates** automatisch installieren lassen

**Systemanforderungen prüfen:**
- **Windows 10/11** oder **macOS 10.14+**
- **8 GB RAM** (mindestens 4 GB)
- **Grafikkarte** mit DirectX 11 Unterstützung
- **2 GB freier Speicherplatz** für Installation
- **Internetverbindung** für Updates und Aktivierung

**Arbeitsbereich einrichten:**
\`\`\`
Projektordner erstellen:
Werkstatt-VR-Tour/
├── 01_Originalbilder/     (Smartphone-Aufnahmen)
├── 02_3DVista-Projekt/    (Projektdateien)
├── 03_Medien/             (Audio, Videos, Bilder)
└── 04_Export/             (Fertige Tour)
\`\`\`

**Erste Schritte in 3DVista:**
- **Programm starten** und Benutzeroberfläche erkunden
- **Beispielprojekt öffnen** zum Kennenlernen der Funktionen
- **Hilfe-Menü** durchstöbern - viele nützliche Tutorials
- **Sprache auf Deutsch** umstellen (falls nicht automatisch)
    `,
    tip: "Installieren Sie 3DVista auf einem leistungsstarken Computer. Die Bearbeitung von 360°-Bildern benötigt Rechenpower.",
    teacherNote: "Prüfen Sie die Schulcomputer auf Kompatibilität. Oft sind ältere Rechner nicht leistungsfähig genug für flüssiges Arbeiten."
  },
  {
    title: "Neues Projekt erstellen und 360°-Bilder importieren",
    content: `
## Schritt 2: Werkstatt-Projekt anlegen und Smartphone-Aufnahmen laden

**Neues Projekt starten:**
1. **3DVista öffnen** → **"Neues Projekt"** wählen
2. **Projektname eingeben:** "Werkstatt_Sicherheitstour_2024"
3. **Speicherort festlegen:** In Ihrem vorbereiteten Projektordner
4. **Projekteinstellungen:** Standard-Werte sind meist optimal

**360°-Bilder aus Smartphone importieren:**
1. **"Szene hinzufügen"** Button klicken (großes Plus-Symbol)
2. **"Panorama importieren"** aus dem Dropdown-Menü
3. **Smartphone-Aufnahmen auswählen** - alle auf einmal möglich
4. **Import starten** - 3DVista erkennt automatisch 360°-Format
5. **Warten bis Verarbeitung** abgeschlossen ist

**Szenen sinnvoll benennen:**
- **"01_Werkstatt_Eingang"** - Übersicht und Orientierung
- **"02_Arbeitsplatz_Werkbank"** - Hauptarbeitsbereich
- **"03_Maschinenbereich"** - Sicherheitskritische Zone
- **"04_Materialbereich"** - Lager und Werkzeuge
- **"05_Sicherheitsstation"** - Erste Hilfe, Feuerlöscher

**Qualitätskontrolle nach Import:**
- **Jede Szene einzeln öffnen** und 360°-Ansicht testen
- **Bildqualität prüfen** - sind Details erkennbar?
- **Stitching-Fehler suchen** - schwarze Bereiche oder Verzerrungen
- **Bei Problemen:** Bild erneut importieren oder in Smartphone-App nachbearbeiten

**Projekt speichern:**
Regelmäßig speichern mit **Strg+S** - 3DVista-Projekte können groß werden!
    `,
    tip: "Importieren Sie alle Bilder auf einmal. 3DVista kann mehrere 360°-Bilder gleichzeitig verarbeiten und optimiert dabei automatisch.",
    teacherNote: "Zeigen Sie den Schüler:innen den Import-Prozess live. Sie verstehen so besser, wie aus Einzelbildern eine VR-Tour wird."
  },
  {
    title: "Grundnavigation zwischen Szenen erstellen",
    content: `
## Schritt 3: Virtuelle Wege durch die Werkstatt anlegen

**Navigations-Hotspots verstehen:**
Hotspots sind interaktive Bereiche im 360°-Bild, die Aktionen auslösen. Navigations-Hotspots ermöglichen das Wechseln zwischen verschiedenen Szenen.

**Ersten Navigations-Hotspot erstellen:**
1. **Szene "01_Werkstatt_Eingang"** im Projektbaum auswählen
2. **Hotspot-Werkzeug** in der Werkzeugleiste anklicken
3. **"Navigations-Hotspot"** aus dem Dropdown wählen
4. **Position im Bild anklicken** - z.B. Richtung Werkbänke
5. **Zielszene auswählen:** "02_Arbeitsplatz_Werkbank"

**Logische Verbindungen für Werkstatt-Tour:**
\`\`\`
Navigationsplan:
Eingang → Arbeitsplatz (Hauptweg)
Arbeitsplatz → Maschinenbereich (Sicherheitszone)
Maschinenbereich → Materialbereich (Vollständigkeit)
Materialbereich → Sicherheitsstation (Notfall-Info)
Sicherheitsstation → Eingang (Rundgang schließen)

Zusätzlich: Von jeder Szene zurück zum Eingang
\`\`\`

**Hotspot-Design anpassen:**
- **Symbol wählen:** Pfeil, Fußspur oder Richtungsanzeiger
- **Farbe festlegen:** Gut sichtbar (blau oder grün)
- **Größe anpassen:** Groß genug für Touch-Bedienung (min. 44px)
- **Beschriftung hinzufügen:** "Zu den Werkbänken", "Zum Maschinenbereich"

**Rückweg-Navigation einrichten:**
In jeder Szene einen "Zurück"-Hotspot platzieren für intuitive Navigation.

**Navigation testen:**
1. **Vorschau starten** mit F5 oder Vorschau-Button
2. **Alle Wege durchgehen** - funktioniert alles?
3. **Auf verschiedenen Geräten testen** - Desktop und Mobile
4. **Ladezeiten beachten** - zu langsam für Schulnetzwerk?
    `,
    tip: "Platzieren Sie Hotspots an natürlichen Übergängen wie Türen oder Wegen. Das wirkt intuitiver als willkürliche Positionen.",
    teacherNote: "Lassen Sie Schüler:innen die Navigation testen. Sie entdecken oft Probleme, die Erwachsene übersehen - besonders bei der Touch-Bedienung."
  },
  {
    title: "Info-Hotspots für Sicherheitshinweise hinzufügen",
    content: `
## Schritt 4: Interaktive Sicherheitselemente einbauen

**Info-Hotspots für Lernziele erstellen:**
1. **Hotspot-Tool** → **"Info-Hotspot"** auswählen
2. **Position bestimmen:** Direkt an Gefahrenquellen oder wichtigen Objekten
3. **Symbol wählen:** Warnsymbol, Ausrufezeichen oder Info-Icon
4. **Inhalt erstellen:** Text, Bilder oder kombinierte Inhalte

**Sicherheits-Hotspots für Werkstatt-Tour:**

**An der Werkbank:**
\`\`\`
Titel: "Ordnung am Arbeitsplatz"
Inhalt: "Sicherheitsregeln für die Werkbank:
✓ Werkzeuge nach Gebrauch zurücklegen
✓ Arbeitsplatz sauber halten
✓ Keine Gegenstände auf dem Boden
✓ Schutzbrille griffbereit halten
✓ Bei Problemen sofort Hilfe holen"
\`\`\`

**Bei Maschinen:**
\`\`\`
Titel: "Maschinensicherheit"
Inhalt: "Vor jeder Nutzung prüfen:
⚠️ Schutzvorrichtungen intakt?
⚠️ Werkzeug richtig eingespannt?
⚠️ Arbeitsbereich frei?
⚠️ Notaus-Schalter erreichbar?
⚠️ Persönliche Schutzausrüstung?"
\`\`\`

**Bei Erste-Hilfe-Station:**
\`\`\`
Titel: "Erste Hilfe"
Inhalt: "Im Notfall:
🚨 Ruhe bewahren
🚨 Verletzten nicht allein lassen
🚨 Erste Hilfe leisten
🚨 Notruf 112 wählen
🚨 Lehrer/Betreuer informieren"
\`\`\`

**Hotspot-Gestaltung optimieren:**
- **Einheitliche Symbole** für gleiche Inhalte verwenden
- **Lesbare Schriftgröße** - auch auf kleinen Bildschirmen
- **Kurze, prägnante Texte** - maximal 5-7 Stichpunkte
- **Visuelle Hierarchie** - Wichtiges hervorheben

**Versteckte Gefahren als Lernaufgabe:**
Platzieren Sie bewusst Hotspots an "versteckten" Sicherheitsmängeln, die Schüler:innen finden sollen.
    `,
    tip: "Verwenden Sie einheitliche Symbole für gleiche Inhalte. Das hilft bei der Orientierung und wirkt professioneller.",
    teacherNote: "Beziehen Sie echte Unfallstatistiken und Beispiele aus Ihrer Schule ein. Das macht die Sicherheitshinweise authentischer und wichtiger."
  },
  {
    title: "Quiz-Elemente für Lernkontrollen einbauen",
    content: `
## Schritt 5: Interaktive Wissensabfrage direkt in der VR-Tour

**Quiz-Hotspot erstellen:**
1. **Hotspot-Tool** → **"Quiz-Hotspot"** wählen
2. **Position** an relevanter Stelle (z.B. bei Schutzausrüstung)
3. **Quiz-Typ auswählen:** Multiple Choice, Wahr/Falsch, oder Zuordnung
4. **Fragen und Antworten formulieren**

**Beispiel-Quiz für Werkstatt-Sicherheit:**

**Quiz 1 - Schutzausrüstung:**
\`\`\`
Frage: "Welche Schutzausrüstung ist an der Kreissäge Pflicht?"
A) Nur Schutzbrille ❌
B) Schutzbrille und Gehörschutz ✅
C) Nur Handschuhe ❌
D) Arbeitshandschuhe und Schutzbrille ❌

Feedback richtig: "Sehr gut! Augen UND Ohren müssen geschützt werden."
Feedback falsch: "Nicht ganz richtig. Denken Sie an Augen UND Ohren."
\`\`\`

**Quiz 2 - Notfallverhalten:**
\`\`\`
Frage: "Was ist der erste Schritt bei einem Unfall?"
A) Notruf 112 wählen ❌
B) Ruhe bewahren und Situation einschätzen ✅
C) Verletzten bewegen ❌
D) Andere Schüler holen ❌

Feedback richtig: "Richtig! Erst die Lage einschätzen, dann handeln."
Feedback falsch: "Wichtig: Erst Ruhe bewahren und Situation beurteilen."
\`\`\`

**Quiz 3 - Werkzeugkunde:**
\`\`\`
Frage: "Wo gehört dieser Hammer hin?" (mit Bild)
A) In die Schublade ❌
B) An den Werkzeughaken ✅
C) Auf die Werkbank ❌
D) In den Schrank ❌

Feedback richtig: "Perfekt! Jedes Werkzeug hat seinen festen Platz."
Feedback falsch: "Schauen Sie genau hin - wo ist der Haken für den Hammer?"
\`\`\`

**Quiz-Einstellungen optimieren:**
- **Mehrere Versuche erlauben** - Lerneffekt wichtiger als Bewertung
- **Sofortiges Feedback** - direkte Rückmeldung motiviert
- **Punkte-System optional** - kann motivieren, aber nicht übertreiben
- **Hilfe-Funktion** - bei schwierigen Fragen Tipps geben

**Lernfortschritt verfolgen:**
3DVista kann Quiz-Ergebnisse speichern und Lehrern einen Überblick über den Lernstand geben.
    `,
    tip: "Formulieren Sie Fragen so, dass sie zum Nachdenken anregen, nicht nur zum Raten. Gute Fragen fördern das Verständnis.",
    teacherNote: "Nutzen Sie echte Situationen aus Ihrem Unterricht für die Quiz-Fragen. Das macht sie authentischer und relevanter für die Schüler:innen."
  },
  {
    title: "Audio-Erklärungen integrieren",
    content: `
## Schritt 6: Gesprochene Inhalte für verschiedene Lerntypen

**Audio-Aufnahmen vorbereiten:**
1. **Aufnahme-App nutzen** - Smartphone Voice Recorder oder Audacity am PC
2. **Ruhige Umgebung** wählen - wenig Hintergrundgeräusche
3. **Deutlich sprechen** - langsamer als normal, klare Aussprache
4. **Kurze Abschnitte** - maximal 60-90 Sekunden pro Audio

**Audio-Skripte für Werkstatt-Tour:**

**Begrüßung am Eingang:**
"Herzlich willkommen zur virtuellen Werkstatt-Sicherheitstour! Ich bin [Name] und führe Sie durch unsere Werkstatt. Sie lernen heute, wie Sie sicher arbeiten und Unfälle vermeiden. Schauen Sie sich um und klicken Sie auf die Symbole, um mehr zu erfahren."

**Werkbank-Erklärung:**
"Hier sehen Sie einen typischen Arbeitsplatz. Achten Sie auf die Ordnung: Jedes Werkzeug hat seinen festen Platz. Das ist nicht nur ordentlich, sondern auch sicher. Herumliegende Werkzeuge sind Stolperfallen und können Verletzungen verursachen."

**Maschinenbereich-Warnung:**
"Achtung, Sie betreten jetzt den Maschinenbereich! Hier gelten besondere Sicherheitsregeln. Maschinen dürfen nur nach Einweisung und mit Schutzausrüstung benutzt werden. Suchen Sie die Sicherheitshinweise und testen Sie Ihr Wissen im Quiz."

**Audio-Hotspot einrichten:**
1. **Audio-Hotspot** aus der Werkzeugleiste wählen
2. **Audio-Datei hochladen** (MP3 oder WAV)
3. **Symbol anpassen** - Lautsprecher oder Kopfhörer-Icon
4. **Autoplay-Einstellungen** - meist besser manuell starten lassen

**Technische Audio-Optimierung:**
\`\`\`
Empfohlene Einstellungen:
- Format: MP3, 128-192 kbps
- Länge: 30-90 Sekunden optimal
- Lautstärke: Normalisiert auf -23 LUFS
- Hintergrundgeräusche: Minimieren oder entfernen
- Fade In/Out: Sanfte Übergänge für professionellen Klang
\`\`\`

**Barrierefreiheit beachten:**
- **Transkriptionen** für hörgeschädigte Nutzer bereitstellen
- **Lautstärke-Kontrolle** für Nutzer ermöglichen
- **Untertitel** bei wichtigen Audio-Inhalten ergänzen
    `,
    video: {
      src: "/videos/audio-aufnahme-tipps.mp4",
      poster: "/images/audio-recording-preview.jpg",
      description: "Tipps für professionelle Audio-Aufnahmen mit dem Smartphone"
    },
    tip: "Sprechen Sie 20% langsamer als normal. In VR-Umgebungen brauchen Nutzer mehr Zeit zum Verstehen und Orientieren.",
    teacherNote: "Lassen Sie Schüler:innen eigene Audio-Erklärungen aufnehmen. Das fördert das Verständnis und die Identifikation mit dem Projekt."
  },
  {
    title: "Benutzeroberfläche anpassen und Tour optimieren",
    content: `
## Schritt 7: Professionelles Design und finale Optimierung

**Skin-Editor für Schuldesign:**
1. **Menü:** Tour → Skin Editor öffnen
2. **Vorgefertigten Skin auswählen:** "Education" oder "Clean"
3. **Anpassungen für Schule vornehmen**
4. **Vorschau testen** und bei Bedarf nachbessern

**Schulspezifische Anpassungen:**
\`\`\`
Design-Elemente:
- Header: "[Schulname] - Werkstatt-Sicherheitstour"
- Logo: Schullogo oben links einbinden
- Farbschema: An Schulfarben anpassen
- Footer: "Erstellt im WTH/S-Unterricht [Jahr]"
- Hilfe-Button: "Bedienungsanleitung" hinzufügen
\`\`\`

**Barrierefreie Gestaltung:**
- **Große Buttons** - mindestens 44x44 Pixel für Touch-Bedienung
- **Hohe Kontraste** - Text gut lesbar auf allen Hintergründen
- **Klare Symbole** - international verständliche Icons verwenden
- **Tastaturnavigation** - alle Funktionen ohne Maus erreichbar

**Mobile Optimierung:**
- **Touch-freundliche Bedienung** - große Berührungsflächen
- **Responsive Design** - automatische Anpassung an Bildschirmgröße
- **Schnelle Ladezeiten** - Bilder für Mobilgeräte optimieren
- **Offline-Funktionalität** - funktioniert auch ohne Internet

**Finale Qualitätskontrolle:**
\`\`\`
Test-Checkliste:
□ Alle Hotspots funktionieren korrekt
□ Navigation ist logisch und vollständig
□ Quiz-Fragen sind korrekt und verständlich
□ Audio ist gut hörbar und verständlich
□ Design ist stimmig und professionell
□ Mobile Ansicht funktioniert einwandfrei
□ Ladezeiten sind für Schulnetzwerk akzeptabel
□ Alle Texte sind rechtschreibfrei
□ Barrierefreiheit ist gewährleistet
\`\`\`

**Projekt speichern und sichern:**
- **Vollständige Projektsicherung** erstellen
- **Backup auf externem Medium** für Sicherheit
- **Versionsnummer vergeben** (z.B. "Werkstatt_Tour_v1.0")
- **Dokumentation erstellen** für spätere Bearbeitung

**Vorbereitung für Export:**
Das Projekt ist jetzt bereit für den Export und die Veröffentlichung - das lernen Sie im nächsten Kapitel!
    `,
    tip: "Halten Sie das Design einfach und ablenkungsfrei. Der Lerninhalt soll im Vordergrund stehen, nicht die Technik.",
    teacherNote: "Beziehen Sie Schüler:innen in die Gestaltung ein. Sie haben oft gute Ideen für benutzerfreundliches Design und entdecken Probleme."
  }
];

// Theorie-Inhalte für 3DVista Grundlagen
const grundlagenTheory = [
  {
    title: "3DVista Virtual Tour Suite im Überblick",
    content: `
**Was ist 3DVista?**
3DVista Virtual Tour Suite ist eine professionelle Software zur Erstellung virtueller Rundgänge und VR-Erlebnisse. Sie wurde speziell für Anwender ohne Programmierkenntnisse entwickelt und bietet dennoch professionelle Funktionen.

**Hauptfunktionen:**
- **360°-Panorama Import** - Unterstützt alle gängigen Formate und Kameras
- **Hotspot-System** - Interaktive Elemente für Navigation und Information
- **Multimedia-Integration** - Audio, Video, Bilder und 3D-Objekte
- **Quiz und Interaktion** - Lernkontrollen und Gamification-Elemente
- **Export-Optionen** - Web, Mobile, VR-Brillen, Offline-Nutzung

**Warum 3DVista für Schulen?**
- **Bildungsrabatte** - Spezielle Preise für Bildungseinrichtungen
- **Keine Programmierkenntnisse** erforderlich - visueller Editor
- **Umfangreiche Tutorials** und deutschsprachiger Support
- **Professionelle Ergebnisse** mit einfachen Mitteln
- **Einmalige Lizenz** - keine monatlichen Abo-Kosten

**Systemarchitektur:**
3DVista arbeitet projektbasiert. Jedes Projekt enthält mehrere Szenen (360°-Bilder), die durch Hotspots miteinander verbunden sind. Medien werden in das Projekt eingebettet oder verlinkt.

**Dateiformate:**
- **Input:** JPEG, PNG (360°), MP4, MP3, WAV, PDF
- **Output:** HTML5, WebGL, Mobile Apps, VR-Formate
- **Projekt:** .3DVista (proprietäres Format)
    `
  },
  {
    title: "Hotspot-Design und Benutzerführung",
    content: `
**Psychologie der Hotspot-Platzierung:**
Menschen schauen in VR-Umgebungen zuerst auf Augenhöhe (0°), dann nach unten (-30°), zuletzt nach oben (+30°). Platzieren Sie wichtige Hotspots entsprechend dieser natürlichen Blickrichtung.

**Hotspot-Kategorien:**
- **Navigations-Hotspots** - Bewegung zwischen Szenen (große, auffällige Symbole)
- **Info-Hotspots** - Informationen und Erklärungen (mittlere Größe)
- **Media-Hotspots** - Audio, Video, Bilder (spezielle Icons)
- **Quiz-Hotspots** - Interaktive Lernkontrollen (Fragezeichen-Symbol)
- **Action-Hotspots** - Spezielle Aktionen (individuell gestaltbar)

**Visuelle Hierarchie:**
- **Primär:** Navigation (groß, kontrastreich, immer sichtbar)
- **Sekundär:** Wichtige Informationen (mittel, gut sichtbar)
- **Tertiär:** Zusatzinformationen (klein, dezent)

**Farbpsychologie in VR:**
- **Rot:** Warnung, Gefahr, Stopp-Aktionen
- **Gelb/Orange:** Achtung, Vorsicht, wichtige Hinweise
- **Grün:** Sicher, OK, positive Aktionen
- **Blau:** Information, Navigation, neutrale Inhalte
- **Weiß/Grau:** Sekundäre Informationen

**Konsistenz-Prinzipien:**
- Gleiche Symbole für gleiche Funktionen verwenden
- Einheitliche Größen pro Hotspot-Kategorie
- Konsistente Farbverwendung im gesamten Projekt
- Vorhersagbare Positionen (z.B. Navigation immer unten)

**Barrierefreiheit bei Hotspots:**
- Ausreichende Kontraste (mindestens 4.5:1 nach WCAG)
- Alternative Texte für Screenreader
- Tastaturnavigation zwischen Hotspots
- Mindestgröße 44x44 Pixel für Touch-Bedienung
    `
  },
  {
    title: "Lernpsychologie in VR-Umgebungen",
    content: `
**Cognitive Load Theory in VR:**
VR kann schnell überfordern, da das Gehirn gleichzeitig die virtuelle Umgebung verarbeiten und Lerninhalte aufnehmen muss. Begrenzen Sie die Informationsmenge pro Szene auf 5-7 Elemente (Miller's Rule).

**Immersion vs. Ablenkung:**
- **Positive Immersion:** Gefühl des "Dabei-seins" fördert Engagement
- **Negative Ablenkung:** Zu viele blinkende oder bewegte Elemente
- **Balance finden:** Realismus mit klarer Lernstruktur verbinden

**Multimodale Lernansätze:**
- **Visuell:** 360°-Bilder, Texte, Symbole, Diagramme
- **Auditiv:** Sprachaufnahmen, Geräusche, Musik
- **Kinästhetisch:** Navigation, Interaktion mit Hotspots
- **Kombiniert:** Mehrere Sinne gleichzeitig ansprechen

**Motivation durch Gamification:**
- **Punkte-Systeme:** Belohnung für richtige Antworten
- **Fortschrittsbalken:** Sichtbarer Lernfortschritt
- **Achievements:** Besondere Leistungen hervorheben
- **Storytelling:** Narrative Struktur für Zusammenhang

**Retention-Strategien:**
- **Wiederholung:** Wichtige Inhalte in verschiedenen Szenen zeigen
- **Anwendung:** Gelerntes sofort in Quiz oder Aufgaben anwenden
- **Transfer:** Bezug zur realen Welt und Alltagssituationen
- **Reflexion:** Nachdenken über Gelerntes durch Fragen fördern

**Soziales Lernen in VR:**
- **Peer-Learning:** Schüler erkunden gemeinsam
- **Diskussion:** VR-Erfahrung als Gesprächsgrundlage
- **Kollaboration:** Gemeinsame Projekte und Aufgaben
- **Mentoring:** Erfahrene helfen Anfängern
    `
  },
  {
    title: "Audio-Design für Bildungsmedien",
    content: `
**Sprachaufnahme-Qualität:**
- **Raumakustik:** Wenig Hall, gedämpfte Umgebung (Teppich, Vorhänge)
- **Mikrofonposition:** 15-20cm vom Mund, leicht seitlich
- **Sprechgeschwindigkeit:** 20-30% langsamer als normale Unterhaltung
- **Pausen:** Bewusst einsetzen für Verständnis und Orientierung

**Didaktische Sprachgestaltung:**
- **Einfache Sprache:** Kurze Sätze, bekannte Wörter, aktive Formulierungen
- **Direkte Ansprache:** "Sie sehen hier..." statt "Man kann sehen..."
- **Struktursignale:** "Erstens...", "Wichtig ist...", "Zusammenfassend..."
- **Emotionale Ansprache:** Begeisterung und Interesse vermitteln

**Audio-Hierarchie in VR:**
- **Primär:** Wichtige Sicherheitshinweise (laut, deutlich, eindringlich)
- **Sekundär:** Erklärungen und Informationen (normale Lautstärke)
- **Tertiär:** Atmosphäre und Hintergrund (leise, nicht ablenkend)

**Technische Standards:**
- **Format:** MP3 (128-192 kbps) für Web, WAV für höchste Qualität
- **Normalisierung:** -23 LUFS für Web-Content (EBU R128 Standard)
- **Dynamik-Kompression:** Leichte Kompression für gleichmäßige Lautstärke
- **EQ:** Leichte Höhenanhebung (5-8 kHz) für bessere Verständlichkeit

**Mehrsprachigkeit und Inklusion:**
- **Hauptsprache:** Deutsch für deutsche Schulen
- **Fremdsprachen:** Englisch für internationale Klassen
- **Einfache Sprache:** Für Inklusionsklassen und Lernbeeinträchtigungen
- **Gebärdensprache:** Video-Overlays für gehörlose Nutzer

**Rechtliche Aspekte:**
- **Urheberrecht:** Nur eigene Aufnahmen oder lizenzfreie Musik
- **Persönlichkeitsrechte:** Einverständnis aller Sprecher
- **GEMA:** Bei Musik auf Lizenzgebühren achten
- **Datenschutz:** Keine personenbezogenen Daten in Aufnahmen
    `
  },
  {
    title: "Projektmanagement für VR-Touren",
    content: `
**Projektplanung:**
1. **Lernziele definieren** - Was sollen Schüler:innen konkret lernen?
2. **Zielgruppe analysieren** - Alter, Vorwissen, technische Ausstattung
3. **Inhalte strukturieren** - Logischer Aufbau der Tour
4. **Ressourcen planen** - Zeit, Personal, Technik, Budget

**Dateienorganisation:**
\`\`\`
VR-Projekt-Struktur:
Projektname/
├── 01_Planung/
│   ├── Storyboard.pdf
│   ├── Lernziele.docx
│   └── Zeitplan.xlsx
├── 02_Aufnahmen/
│   ├── Rohbilder/
│   ├── Bearbeitet/
│   └── Backup/
├── 03_Medien/
│   ├── Audio/
│   ├── Videos/
│   ├── Bilder/
│   └── Lizenzen/
├── 04_3DVista/
│   ├── Projekt.3dvista
│   ├── Assets/
│   └── Backup/
└── 05_Export/
    ├── Web/
    ├── Mobile/
    └── Dokumentation/
\`\`\`

**Qualitätssicherung:**
- **Regelmäßige Tests** während der Entwicklung
- **Feedback einholen** von Kollegen und Schülern
- **Barrierefreiheit prüfen** - für alle Nutzer zugänglich?
- **Performance testen** - auf verschiedenen Geräten und Verbindungen

**Wartung und Updates:**
- **Inhalte aktuell halten** - besonders Sicherheitshinweise
- **Technik-Updates** - Software und Browser-Kompatibilität
- **Feedback auswerten** - kontinuierliche Verbesserung
- **Backup-Strategie** - regelmäßige Sicherungen

**Kollaboration im Team:**
- **Rollen definieren** - Wer macht was?
- **Kommunikation** - Regelmäßige Abstimmung
- **Versionskontrolle** - Änderungen nachvollziehbar dokumentieren
- **Wissenstransfer** - Dokumentation für Nachfolger

**Erfolgsmessung:**
- **Lernziele erreicht?** - Vorher/Nachher-Tests
- **Nutzerzufriedenheit** - Feedback-Bögen
- **Technische Performance** - Ladezeiten, Fehlerrate
- **Nachhaltigkeit** - Wird die Tour langfristig genutzt?
    `
  }
];

// Schritt-für-Schritt Anleitung für Fortgeschrittene Funktionen
const fortgeschritteneSteps = [
  {
    title: "Web-Inhalte intelligent einbinden",
    content: `
## Schritt 1: Externe Ressourcen nahtlos integrieren

**iFrame-Hotspots für Web-Inhalte:**
1. **Hotspot-Tool** → **"Web-Hotspot"** wählen
2. **URL eingeben** - z.B. Sicherheitsdatenblatt
3. **Größe definieren** - Popup oder Vollbild
4. **Responsive Einstellungen** - für mobile Geräte

**Sinnvolle Web-Integrationen für Werkstatt:**
- **Sicherheitsdatenblätter** - Direkt vom Hersteller
- **Video-Tutorials** - YouTube-Anleitungen
- **Online-Kataloge** - Werkzeug-Datenbanken
- **Gesetzestexte** - Aktuelle Arbeitsschutzverordnungen
- **Notfall-Nummern** - Lokale Kontakte

**Beispiel: Sicherheitsdatenblatt-Integration:**
\`\`\`
URL: https://www.hersteller.de/sicherheit/kreissaege-xy
Titel: "Sicherheitsdatenblatt Kreissäge"
Öffnung: Neues Fenster
Größe: 800x600 Pixel
Mobile: Vollbild
\`\`\`

**Offline-Fallback planen:**
- **PDF-Kopien** für wichtige Dokumente
- **Lokale Backups** bei Internetausfall
- **Hinweistexte** wenn Inhalte nicht verfügbar

**Datenschutz beachten:**
- **Externe Links** kennzeichnen
- **Cookies** und Tracking vermeiden
- **Schüler-Datenschutz** gewährleisten
    `,
    tip: "Testen Sie alle Web-Links regelmäßig. Externe Inhalte können sich ändern oder verschwinden.",
    teacherNote: "Erstellen Sie eine Liste aller externen Quellen mit Alternativ-URLs für den Fall, dass Links nicht mehr funktionieren."
  },
  {
    title: "Erweiterte Multimedia-Integration",
    content: `
## Schritt 2: Videos und interaktive Medien professionell einsetzen

**Video-Hotspots strategisch nutzen:**
- **Demonstrationen** - Arbeitsabläufe zeigen
- **Experteninterviews** - Fachkräfte sprechen
- **Zeitraffer** - Lange Prozesse verkürzt
- **Slow-Motion** - Gefährliche Situationen analysieren

**Video-Integration in 3DVista:**
1. **Video-Hotspot** platzieren
2. **Video-Datei** hochladen oder YouTube-Link
3. **Autoplay-Einstellungen** - meist manuell besser
4. **Untertitel** für Barrierefreiheit
5. **Fallback-Bild** für langsame Verbindungen

**Beispiel-Videos für Werkstatt-Tour:**
- **"Richtige Handhaltung an der Kreissäge"** (30 Sekunden)
- **"Erste Hilfe bei Schnittverletzungen"** (2 Minuten)
- **"Werkzeug-Pflege und Wartung"** (45 Sekunden)

**Interaktive PDF-Dokumente:**
- **Arbeitsblätter** direkt in der Tour
- **Checklisten** zum Ausdrucken
- **Formulare** für Sicherheitsbelehrungen
- **Zertifikate** nach erfolgreichem Abschluss

**3D-Modell Integration:**
- **Werkzeug-Modelle** zum Drehen und Erkunden
- **Maschinen-Schnittmodelle** - Innenleben zeigen
- **Sicherheitsausrüstung** - Detailansichten

**Performance-Optimierung:**
- **Video-Komprimierung** - H.264, max. 5 Mbps
- **Lazy Loading** - Inhalte erst bei Bedarf laden
- **CDN-Nutzung** - Für schnellere Ladezeiten
- **Mobile Optimierung** - Kleinere Dateien für Smartphones
    `,
    video: {
      src: "/videos/multimedia-integration-demo.mp4",
      poster: "/images/multimedia-preview.jpg",
      description: "Demonstration verschiedener Multimedia-Elemente in VR-Touren"
    },
    tip: "Halten Sie Videos kurz (unter 2 Minuten). Längere Inhalte verlieren in VR schnell die Aufmerksamkeit.",
    teacherNote: "Erstellen Sie eigene Videos mit Schüler:innen. Das fördert das Verständnis und die Identifikation mit dem Projekt."
  },
  {
    title: "Erweiterte Interaktions-Möglichkeiten",
    content: `
## Schritt 3: Komplexe Lernszenarien und Simulationen

**Bedingte Hotspots und Lernpfade:**
- **Gesperrte Bereiche** bis Quiz bestanden
- **Adaptive Inhalte** je nach Antworten
- **Verzweigte Geschichten** - verschiedene Wege
- **Fortschritts-abhängige** Freischaltungen

**Beispiel: Sicherheits-Lernpfad:**
\`\`\`
1. Grundlagen-Quiz bestehen → Werkbank freischalten
2. Werkbank-Sicherheit lernen → Maschinen freischalten  
3. Maschinen-Quiz bestehen → Zertifikat erhalten
\`\`\`

**Erweiterte Quiz-Funktionen:**
- **Drag & Drop** - Werkzeuge zuordnen
- **Hotspot-Suche** - "Finden Sie alle Gefahren"
- **Zeitlimits** - Für Notfall-Simulationen
- **Mehrere Versuche** - Mit abnehmender Punktzahl

**Kollaborative Elemente:**
- **Kommentar-System** - Schüler können Notizen hinterlassen
- **Bewertungen** - Peer-Review von Lösungen
- **Gruppen-Challenges** - Teams gegeneinander
- **Lehrer-Dashboard** - Fortschritt aller Schüler sehen

**Gamification-Elemente:**
- **Punkte-System** - Für jede richtige Antwort
- **Badges** - "Sicherheitsexperte", "Werkzeugkenner"
- **Leaderboards** - Klassenbeste anzeigen
- **Achievements** - Besondere Leistungen

**Simulation realer Szenarien:**
- **Notfall-Situationen** - Was tun bei Unfall?
- **Entscheidungs-Bäume** - Verschiedene Handlungsoptionen
- **Konsequenz-Simulation** - Folgen von Fehlverhalten
- **Best-Practice-Beispiele** - Vorbildliches Verhalten
    `,
    tip: "Beginnen Sie einfach und erweitern Sie schrittweise. Zu viele Funktionen auf einmal überfordern Nutzer und Ersteller.",
    teacherNote: "Nutzen Sie Gamification sparsam. Der Lerninhalt sollte im Vordergrund stehen, nicht das Spiel."
  },
  {
    title: "Analytics und Lernfortschritt-Tracking",
    content: `
## Schritt 4: Lernerfolg messen und optimieren

**3DVista Analytics einrichten:**
1. **Analytics aktivieren** in den Projekteinstellungen
2. **Tracking-Parameter** definieren
3. **Datenschutz-konforme** Einstellungen wählen
4. **DSGVO-Hinweise** integrieren

**Wichtige Metriken für Bildung:**
- **Verweildauer** pro Szene
- **Hotspot-Interaktionen** - Was wird angeklickt?
- **Quiz-Ergebnisse** - Wo sind Schwächen?
- **Abbruchquoten** - Wo steigen Nutzer aus?
- **Wiederkehr-Rate** - Wie oft wird die Tour genutzt?

**Lernfortschritt-Dashboard:**
\`\`\`
Schüler: Max Mustermann
Fortschritt: 75% abgeschlossen
Quiz-Ergebnisse: 8/10 Punkten
Schwächen: Maschinensicherheit
Empfehlung: Zusatzmaterial Kreissäge
\`\`\`

**Automatische Berichte:**
- **Wöchentliche Zusammenfassung** für Lehrer
- **Individuelle Fortschritte** pro Schüler
- **Klassen-Vergleiche** - Wo steht die Klasse?
- **Inhaltliche Analyse** - Welche Bereiche sind schwierig?

**Datenschutz und DSGVO:**
- **Anonymisierte Daten** wo möglich
- **Opt-in für Tracking** - Nutzer müssen zustimmen
- **Daten-Minimierung** - Nur notwendige Daten sammeln
- **Löschfristen** - Automatische Bereinigung

**Optimierung basierend auf Daten:**
- **Schwierige Bereiche** überarbeiten
- **Beliebte Inhalte** ausbauen
- **Navigation** verbessern
- **Performance** optimieren
    `,
    tip: "Sammeln Sie nur Daten, die Sie auch wirklich nutzen. Zu viele Metriken führen zu Analyse-Paralyse.",
    teacherNote: "Nutzen Sie Analytics zur Verbesserung, nicht zur Bewertung von Schülern. Der Fokus sollte auf Lernoptimierung liegen."
  },
  {
    title: "Wartung und kontinuierliche Verbesserung",
    content: `
## Schritt 5: Langfristige Pflege und Updates

**Regelmäßige Wartungsaufgaben:**
- **Links prüfen** - Funktionieren alle externen Quellen?
- **Inhalte aktualisieren** - Neue Sicherheitsvorschriften?
- **Software-Updates** - 3DVista auf neueste Version
- **Performance-Tests** - Ladezeiten noch akzeptabel?

**Content-Management-System:**
\`\`\`
Wartungsplan:
- Monatlich: Links und Videos prüfen
- Quartalsweise: Inhalte auf Aktualität prüfen
- Halbjährlich: Vollständige Qualitätskontrolle
- Jährlich: Komplette Überarbeitung
\`\`\`

**Feedback-Integration:**
- **Schüler-Feedback** sammeln und auswerten
- **Lehrer-Erfahrungen** dokumentieren
- **Verbesserungsvorschläge** umsetzen
- **Best Practices** mit Kollegen teilen

**Versionskontrolle:**
- **Backup-Strategie** - Regelmäßige Sicherungen
- **Versions-Nummerierung** - v1.0, v1.1, v2.0
- **Änderungs-Protokoll** - Was wurde wann geändert?
- **Rollback-Möglichkeit** - Zurück zur vorherigen Version

**Skalierung und Erweiterung:**
- **Neue Räume** hinzufügen
- **Andere Fächer** integrieren
- **Mehrsprachigkeit** entwickeln
- **VR-Brillen-Support** erweitern

**Community und Austausch:**
- **Lehrer-Netzwerke** - Erfahrungen teilen
- **Online-Communities** - 3DVista-Nutzergruppen
- **Fortbildungen** - Neue Techniken lernen
- **Konferenzen** - Trends und Entwicklungen verfolgen

**Zukunftsplanung:**
- **Technologie-Trends** beobachten
- **Hardware-Entwicklung** verfolgen
- **Pädagogische Innovationen** integrieren
- **Langfristige Strategie** entwickeln
    `,
    tip: "Planen Sie von Anfang an Zeit für Wartung ein. Ein gut gepflegtes Projekt hält Jahre und wird immer besser.",
    teacherNote: "Dokumentieren Sie alle Änderungen und Erfahrungen. Das hilft Kollegen beim Erstellen eigener Projekte."
  }
];

// Theorie-Inhalte für Fortgeschrittene Funktionen
const fortgeschritteneTheory = [
  {
    title: "Web-Integration und moderne Lernplattformen",
    content: `
**Hybrid-Learning-Ansätze:**
Die Kombination von VR-Inhalten mit traditionellen Web-Ressourcen ermöglicht flexible Lernszenarien, die verschiedene Lerntypen ansprechen.

**API-Integration Möglichkeiten:**
- **LMS-Anbindung** - Moodle, Canvas, Blackboard
- **Cloud-Services** - Google Drive, OneDrive
- **Datenbanken** - Aktuelle Produktinformationen
- **Social Media** - Für Projekt-Dokumentation

**Progressive Web Apps (PWA):**
3DVista-Touren können als PWA exportiert werden, was folgende Vorteile bietet:
- Offline-Funktionalität
- App-ähnliche Bedienung
- Push-Benachrichtigungen
- Automatische Updates

**Responsive Design Prinzipien:**
- **Mobile First** - Für Smartphone-Nutzung optimiert
- **Touch-Optimierung** - Große Berührungsflächen
- **Adaptive Layouts** - Anpassung an Bildschirmgröße
- **Performance-Optimierung** - Schnelle Ladezeiten

**Cross-Platform-Kompatibilität:**
- **Browser-Unterstützung** - Chrome, Firefox, Safari, Edge
- **Betriebssysteme** - Windows, macOS, iOS, Android
- **VR-Headsets** - Oculus, HTC Vive, Cardboard
- **Eingabemethoden** - Maus, Touch, Controller, Sprache
    `
  },
  {
    title: "Erweiterte Pädagogik in VR-Umgebungen",
    content: `
**Konstruktivistische Lerntheorie in VR:**
VR ermöglicht es Lernenden, Wissen aktiv zu konstruieren durch:
- **Exploration** - Selbstständiges Entdecken
- **Experimentation** - Gefahrloses Ausprobieren
- **Reflection** - Nachdenken über Erfahrungen
- **Application** - Anwenden in neuen Kontexten

**Soziales Lernen in virtuellen Räumen:**
- **Peer-Learning** - Schüler lernen voneinander
- **Kollaborative Projekte** - Gemeinsame VR-Erstellung
- **Mentoring** - Ältere helfen Jüngeren
- **Community Building** - Klassengemeinschaft stärken

**Differentiated Instruction:**
VR ermöglicht individualisiertes Lernen durch:
- **Adaptive Pfade** - Je nach Lerngeschwindigkeit
- **Multiple Intelligences** - Verschiedene Lerntypen ansprechen
- **Scaffolding** - Stufenweise Unterstützung
- **Assessment Variety** - Verschiedene Bewertungsformen

**Bloom's Taxonomy in VR:**
- **Remember** - Fakten in VR-Umgebung wiedererkennen
- **Understand** - Zusammenhänge durch Exploration begreifen
- **Apply** - Gelerntes in Simulationen anwenden
- **Analyze** - Komplexe Szenarien untersuchen
- **Evaluate** - Lösungen bewerten und vergleichen
- **Create** - Eigene VR-Inhalte entwickeln
    `
  },
  {
    title: "Performance-Optimierung und Skalierung",
    content: `
**Technische Performance-Faktoren:**
- **Bildkomprimierung** - Balance zwischen Qualität und Größe
- **Lazy Loading** - Inhalte erst bei Bedarf laden
- **Caching-Strategien** - Wiederverwendung geladener Daten
- **CDN-Nutzung** - Geografisch verteilte Server

**Netzwerk-Optimierung für Schulen:**
- **Bandbreiten-Management** - Priorisierung von Bildungsinhalten
- **Offline-Strategien** - Funktionalität ohne Internet
- **Proxy-Konfiguration** - Umgang mit Schul-Firewalls
- **Quality of Service** - Garantierte Mindestbandbreite

**Skalierbarkeits-Architekturen:**
\`\`\`
Kleine Schule (< 500 Schüler):
- Lokaler Server
- Einfache Wartung
- Grundfunktionen

Große Schule (> 1000 Schüler):
- Cloud-Hosting
- Load Balancing
- Erweiterte Analytics
- Multi-Tenant-Architektur
\`\`\`

**Monitoring und Alerting:**
- **Uptime-Monitoring** - Verfügbarkeit überwachen
- **Performance-Metriken** - Ladezeiten messen
- **Error-Tracking** - Probleme automatisch erkennen
- **Capacity Planning** - Ressourcenbedarf vorhersagen

**Disaster Recovery:**
- **Backup-Strategien** - Regelmäßige Datensicherung
- **Redundanz** - Mehrfache Absicherung kritischer Systeme
- **Recovery-Pläne** - Schnelle Wiederherstellung
- **Testing** - Regelmäßige Überprüfung der Notfallpläne
    `
  }
];

export const dreiDVistaContent = {
  'Basics': {
    title: '3DVista Grundlagen - Interaktive Lernumgebungen',
    content: ({ onNavigateToNext }) => (
      <StepByStepGuide 
        steps={grundlagenSteps}
        theoryContent={grundlagenTheory}
        onNavigateToNext={onNavigateToNext}
        projectTitle={projectTitle}
        projectDescription={projectDescription}
      />
    )
  },
  'Fortgeschritten': {
    title: '3DVista Fortgeschrittene Funktionen',
    content: ({ onNavigateToNext }) => (
      <StepByStepGuide 
        steps={fortgeschritteneSteps}
        theoryContent={fortgeschritteneTheory}
        onNavigateToNext={onNavigateToNext}
        projectTitle={projectTitle}
        projectDescription="**Erweiterte Funktionen:** Nutzen Sie professionelle Features für noch bessere Lernumgebungen."
      />
    )
  }
};