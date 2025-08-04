import React from 'react';
import ReactMarkdown from 'react-markdown';
import { StepByStepGuide } from '../ui/StepByStepGuide.jsx';

// Barrierefreiheit Grundlagen als Markdown-Inhalt für die Grundlagen-Sektion
const barrierefreiheitGrundlagenContent = `
# Barrierefreiheit in immersiven Lernumgebungen

Barrierefreiheit in VR- und 360°-Lernumgebungen bedeutet, dass diese Technologien von **allen** Menschen genutzt werden können, unabhängig von ihren körperlichen, sensorischen oder kognitiven Fähigkeiten. Dies ist nicht nur ethisch richtig und rechtlich vorgeschrieben, sondern verbessert auch die Lernerfahrung für alle Nutzer:innen.

## Warum Barrierefreiheit in immersiven Lernumgebungen wichtig ist

### Rechtliche Grundlagen in Deutschland

**UN-Behindertenrechtskonvention (UN-BRK):**
- **Artikel 24:** Recht auf inklusive Bildung
- **Artikel 9:** Zugänglichkeit zu Informations- und Kommunikationstechnologien
- **Artikel 21:** Recht auf freie Meinungsäußerung und Zugang zu Informationen

**Behindertengleichstellungsgesetz (BGG):**
- Verpflichtung öffentlicher Stellen zur Barrierefreiheit
- Angemessene Vorkehrungen für Menschen mit Behinderungen
- Benachteiligungsverbot in der Bildung

**Barrierefreie-Informationstechnik-Verordnung (BITV 2.0):**
- Konkrete technische Anforderungen für digitale Angebote
- Basiert auf internationalen WCAG 2.1 Standards
- Gilt auch für Bildungseinrichtungen

**Landesschulgesetze:**
- Inklusion als Bildungsauftrag
- Individuelle Förderung aller Schüler:innen
- Nachteilsausgleich bei Behinderungen

### Pädagogische Vorteile für alle

**Universal Design for Learning (UDL):**
Barrierefreie Gestaltung hilft nicht nur Menschen mit Behinderungen, sondern verbessert die Lernerfahrung für alle:
- **Multiple Repräsentationen** - Inhalte in verschiedenen Formaten
- **Verschiedene Interaktionsmöglichkeiten** - Bedienung nach individuellen Fähigkeiten
- **Flexible Lernwege** - Anpassung an unterschiedliche Lernstile

**Inklusive Pädagogik:**
- **Heterogenität als Normalität** - Vielfalt wird als Bereicherung gesehen
- **Individualisierung** - Anpassung an persönliche Bedürfnisse
- **Partizipation** - Alle können aktiv am Lernprozess teilnehmen
- **Soziales Lernen** - Empathie und Verständnis für Unterschiede

## Zielgruppen und ihre spezifischen Bedürfnisse

### Sehbehinderungen und Blindheit

**Herausforderungen in VR/360°-Umgebungen:**
- Visuelle Informationen nicht oder nur eingeschränkt wahrnehmbar
- Navigation in 3D-Räumen ohne visuelle Orientierungspunkte
- Hotspots und Bedienelemente nicht erkennbar
- Räumliche Zusammenhänge schwer verständlich

**Lösungsansätze und Technologien:**
- **Screenreader-Kompatibilität** - Alle Inhalte müssen vorlesbar sein
- **Tastaturnavigation** - Vollständige Bedienung ohne Maus möglich
- **Audio-Beschreibungen** - Gesprochene Erklärung visueller Inhalte
- **Räumliches Audio** - 3D-Sound für Orientierung im virtuellen Raum
- **Haptisches Feedback** - Vibration und Berührung als Informationskanal
- **Hohe Kontraste** - Für Menschen mit Sehschwäche
- **Vergrößerungsmöglichkeiten** - Bis 200% ohne Funktionsverlust

**Praktische Umsetzung:**
\`\`\`
Beispiel Audio-Beschreibung für 360°-Werkstatt:
"Sie befinden sich im Eingangsbereich der Schulwerkstatt. 
Vor Ihnen, in 12-Uhr-Position, sehen Sie den Hauptarbeitsbereich 
mit vier Werkbänken. Links von Ihnen, in 9-Uhr-Position, 
befinden sich die Maschinen - eine Kreissäge, eine Bohrmaschine 
und eine Schleifmaschine. Rechts, in 3-Uhr-Position, ist das 
Materiallager mit Regalen für Holz und Metall..."
\`\`\`

### Hörbehinderungen und Gehörlosigkeit

**Herausforderungen:**
- Audio-Inhalte nicht oder nur eingeschränkt wahrnehmbar
- Wichtige akustische Signale und Warnungen werden überhört
- Kommunikation in Gruppen-VR-Erfahrungen schwierig
- Räumliche Audio-Hinweise nicht nutzbar

**Lösungsansätze:**
- **Untertitel** für alle Audio- und Video-Inhalte
- **Gebärdensprache-Videos** für wichtige Informationen
- **Visuelle Signale** statt akustischer Hinweise
- **Transkriptionen** für alle gesprochenen Inhalte
- **Chat-Funktionen** für Kommunikation in Gruppen-VR
- **Visuelle Warnungen** - Blinkende Symbole statt Warntöne

**Beispiel für barrierefreie Untertitel:**
\`\`\`
[Sprecher - Lehrkraft]: "Bevor Sie die Kreissäge benutzen, 
müssen Sie unbedingt die Schutzbrille aufsetzen."
[Maschinengeräusch]: *Kreissäge läuft an - lautes Surren*
[Warnsignal]: *Piep-Piep-Piep - Achtung*
[Sprecher]: "Halten Sie das Werkstück fest und führen 
Sie es langsam zum Sägeblatt."
\`\`\`

### Motorische Einschränkungen

**Herausforderungen:**
- Schwierigkeiten bei der Bedienung von VR-Controllern
- Probleme mit komplexen Hand- und Fingergesten
- Ermüdung bei längerer VR-Nutzung
- Eingeschränkte Beweglichkeit im realen Raum

**Lösungsansätze:**
- **Alternative Eingabemethoden** - Tastatur, Sprache, Eye-Tracking, Switch-Navigation
- **Große Klickflächen** - Mindestens 44x44 Pixel für Touch-Bedienung
- **Anpassbare Geschwindigkeit** - Langsamere Navigation und Interaktion möglich
- **Pausen-Funktionen** - Inhalte anhalten und fortsetzen
- **Ein-Hand-Bedienung** - Alle Funktionen mit einer Hand erreichbar
- **Sitzende Nutzung** - VR-Erfahrungen im Sitzen optimiert
- **Vereinfachte Gesten** - Komplexe Bewegungen durch einfache ersetzen

### Kognitive Beeinträchtigungen und Lernbehinderungen

**Herausforderungen:**
- Komplexe VR-Umgebungen können überfordern
- Orientierung in virtuellen Räumen schwierig
- Aufmerksamkeitsprobleme bei zu vielen visuellen Reizen
- Schwierigkeiten beim Verstehen abstrakter Konzepte

**Lösungsansätze:**
- **Einfache Sprache** - Kurze Sätze, bekannte Wörter, aktive Formulierungen
- **Klare Struktur** - Logischer Aufbau, deutliche Orientierungshilfen
- **Wiederholungen** - Wichtige Inhalte mehrfach in verschiedenen Formen zeigen
- **Selbstbestimmtes Tempo** - Keine Zeitlimits oder abschaltbare Timer
- **Reduzierte Komplexität** - Weniger Ablenkungen, fokussierte Inhalte
- **Visuelle Hilfen** - Symbole, Farben und Bilder zur Unterstützung
- **Chunking** - Große Informationsmengen in kleine Häppchen aufteilen

**Beispiel für kognitive Barrierefreiheit:**
\`\`\`
Statt: "Die Implementierung der Sicherheitsmaßnahmen erfordert 
die Berücksichtigung diverser Faktoren und die Einhaltung 
komplexer Vorschriften."

Besser: "Für Ihre Sicherheit müssen Sie diese Regeln beachten:
1. Schutzbrille aufsetzen
2. Werkstück festhalten  
3. Maschine einschalten
4. Langsam arbeiten"
\`\`\`

## Technische Umsetzung von Barrierefreiheit

### WCAG 2.1 Guidelines für VR/360°-Inhalte

**Die vier Grundprinzipien:**

**1. Wahrnehmbar (Perceivable)**
- Textalternativen für alle visuellen Inhalte
- Untertitel und Audiodeskriptionen für Multimedia
- Ausreichende Farbkontraste (mindestens 4.5:1)
- Vergrößerbarkeit ohne Funktionsverlust

**2. Bedienbar (Operable)**
- Alle Funktionen per Tastatur zugänglich
- Keine Inhalte, die Anfälle auslösen können (Blitzlicht vermeiden)
- Ausreichend Zeit für Nutzer:innen
- Hilfe bei Navigation und Orientierung

**3. Verständlich (Understandable)**
- Text lesbar und verständlich
- Vorhersagbare Funktionalität
- Hilfe bei Eingabefehlern
- Konsistente Navigation

**4. Robust (Robust)**
- Kompatibilität mit assistiven Technologien
- Zukunftssicherheit durch Standards-Konformität

### Assistive Technologien in VR

**Screenreader-Integration:**
- **NVDA** (Windows, kostenlos) - Kann VR-Inhalte vorlesen
- **JAWS** (Windows, kommerziell) - Professionelle Lösung
- **VoiceOver** (macOS/iOS) - Integrierte Apple-Lösung
- **TalkBack** (Android) - Google's Screenreader

**Eye-Tracking für VR:**
- **Tobii Eye Tracker** - Steuerung durch Blickbewegung
- **Pupil Labs** - Open-Source Eye-Tracking
- **Varjo Aero** - VR-Brille mit integriertem Eye-Tracking

**Spracheingabe:**
- **Dragon NaturallySpeaking** - Professionelle Spracherkennung
- **Windows Speech Recognition** - Integrierte Windows-Lösung
- **Google Voice** - Cloud-basierte Spracherkennung

## Nutzerfreundlichkeit in VR/360°-Umgebungen

### Motion Sickness vermeiden

**Ursachen verstehen:**
- **Sensory Conflict** - Widerspruch zwischen visueller und vestibulärer Wahrnehmung
- **Latenz** - Verzögerung zwischen Kopfbewegung und Bildaktualisierung
- **Framerate** - Zu niedrige Bildwiederholrate
- **Unnatürliche Bewegungen** - Teleportation, schnelle Drehungen

**Präventionsmaßnahmen:**
- **Comfort Settings** - Einstellungen für empfindliche Nutzer:innen
- **Vignetting** - Sichtfeld bei Bewegung einschränken
- **Snap Turning** - Diskrete statt kontinuierliche Drehungen
- **Statische Referenzen** - Feste Objekte im Sichtfeld
- **Pausen einbauen** - Regelmäßige Erholungspausen

### Ergonomie und Komfort

**VR-Brillen-Anpassung:**
- **Interpupillary Distance (IPD)** - Augenabstand individuell einstellen
- **Kopfband-Anpassung** - Gleichmäßige Gewichtsverteilung
- **Polster-Hygiene** - Austauschbare, waschbare Polster
- **Brillenträger-Kompatibilität** - Platz für Sehhilfen

**Ergonomische Arbeitsplätze:**
- **Ausreichend Platz** - Mindestens 2x2 Meter für Room-Scale VR
- **Stolperfallen entfernen** - Sichere Umgebung schaffen
- **Gute Beleuchtung** - Für Tracking-Kameras optimiert
- **Bequeme Sitzmöglichkeiten** - Für längere VR-Sessions

### Kontrasteinstellungen und visuelle Anpassungen

**Farbkontraste optimieren:**
- **WCAG AA Standard** - Mindestens 4.5:1 für normalen Text
- **WCAG AAA Standard** - Mindestens 7:1 für höchste Barrierefreiheit
- **Farbenblindheit berücksichtigen** - Rot-Grün-Schwäche ist häufig
- **Zusätzliche Kennzeichnungen** - Nicht nur Farbe für wichtige Informationen

**Anpassbare Darstellung:**
- **Dark Mode** - Dunkle Themes für lichtempfindliche Nutzer:innen
- **High Contrast Mode** - Maximale Kontraste für Sehbeeinträchtigungen
- **Font Size Scaling** - Vergrößerbare Schriften
- **Reduced Motion** - Weniger Animationen für empfindliche Nutzer:innen

**Praktische Umsetzung:**
\`\`\`css
/* Beispiel für anpassbare Kontraste */
.normal-contrast {
  background: #ffffff;
  color: #333333;
}

.high-contrast {
  background: #000000;
  color: #ffffff;
}

.dark-mode {
  background: #1a1a1a;
  color: #e0e0e0;
}

/* Respektierung von Nutzer-Präferenzen */
@media (prefers-contrast: high) {
  .content { 
    background: black; 
    color: white; 
  }
}

@media (prefers-reduced-motion: reduce) {
  .animation { 
    animation: none; 
  }
}
\`\`\`

## Barrierefreie Content-Erstellung

### Strukturierte Inhalte

**Semantische HTML-Struktur:**
\`\`\`html
<main role="main">
  <h1>Haupttitel der VR-Tour</h1>
  <section aria-labelledby="werkstatt-bereich">
    <h2 id="werkstatt-bereich">Werkstatt-Bereich</h2>
    <article>
      <h3>Sicherheitshinweise</h3>
      <p>Wichtige Informationen...</p>
    </article>
  </section>
</main>
\`\`\`

**ARIA-Labels für VR-Elemente:**
\`\`\`html
<button aria-label="Navigation zur Werkbank" 
        aria-describedby="werkbank-info"
        role="button">
  <img src="arrow.png" alt="Pfeil zur Werkbank">
</button>
<div id="werkbank-info" class="sr-only">
  Hier lernen Sie die Grundlagen der Holzbearbeitung
</div>
\`\`\`

### Multimedia-Barrierefreiheit

**Video-Inhalte:**
- **Untertitel** in deutscher Sprache (und ggf. anderen Sprachen)
- **Audiodeskription** für wichtige visuelle Informationen
- **Transkriptionen** als Textversion verfügbar
- **Pausier-Funktion** - Nutzer:innen bestimmen das Tempo
- **Lautstärke-Kontrolle** individuell anpassbar

**Audio-Inhalte:**
- **Klare Aussprache** - Langsam und deutlich sprechen
- **Hintergrundgeräusche minimieren** - Fokus auf Sprache
- **Wiederholbarkeit** - Audio mehrfach anhörbar
- **Visuelle Alternativen** - Wichtige Audio-Infos auch als Text

## Testing und Qualitätssicherung

### Automatisierte Barrierefreiheits-Tests

**Empfohlene Tools:**
- **WAVE** (Web Accessibility Evaluation Tool) - Browser-Extension
- **axe DevTools** - Entwickler-Tools für Chrome/Firefox
- **Lighthouse** - Google's Accessibility Audit
- **Pa11y** - Kommandozeilen-Tool für automatisierte Tests

**Grenzen automatisierter Tests:**
- Können nur ca. 30% aller Barrieren erkennen
- Semantik und Kontext werden nicht geprüft
- Benutzerfreundlichkeit wird nicht bewertet
- Manuelle Tests sind zusätzlich erforderlich

### Manuelle Tests mit assistiven Technologien

**Screenreader-Tests:**
1. **NVDA installieren** (kostenlos für Windows)
2. **VR-Anwendung starten** und Bildschirm ausschalten
3. **Nur mit Screenreader navigieren** - Ist alles verständlich?
4. **Alle Funktionen testen** - Sind alle Bereiche erreichbar?

**Tastatur-Navigation testen:**
1. **Maus abstecken** oder verstecken
2. **Nur mit Tab, Enter, Pfeiltasten** navigieren
3. **Alle Hotspots erreichen** - Ist die Reihenfolge logisch?
4. **Fokus-Sichtbarkeit prüfen** - Ist immer klar, wo man sich befindet?

### Tests mit Menschen mit Behinderungen

**Warum wichtig:**
- Echte Nutzer:innen finden Probleme, die Tools übersehen
- Verschiedene Behinderungsarten haben unterschiedliche Bedürfnisse
- Feedback aus erster Hand ist unbezahlbar
- Sensibilisierung des Entwicklungsteams

**Organisatorisches:**
- **Angemessene Vergütung** für Testteilnahme
- **Barrierefreie Testumgebung** bereitstellen
- **Flexible Testzeiten** - Anpassung an individuelle Bedürfnisse
- **Verschiedene Behinderungsarten** einbeziehen

## Rechtliche Compliance und Dokumentation

### Barrierefreiheitserklärung erstellen

**Pflichtangaben:**
\`\`\`
Barrierefreiheitserklärung für VR-Werkstatt-Tour

1. Konformitätsstatus
Diese VR-Anwendung ist teilweise konform mit WCAG 2.1 Level AA.

2. Nicht barrierefreie Inhalte
- 3D-Navigation für blinde Nutzer:innen eingeschränkt
- Komplexe Interaktionen benötigen Einarbeitung

3. Alternativen
- Textversion aller Inhalte verfügbar
- Persönliche Unterstützung auf Anfrage

4. Feedback-Mechanismus
E-Mail: accessibility@schule.de
Telefon: 0123-456789

5. Durchsetzungsverfahren
Bei Problemen wenden Sie sich an die Beauftragte für 
Menschen mit Behinderungen der Schule.
\`\`\`

### Dokumentation für Compliance

**Was dokumentieren:**
- **Accessibility-Tests** - Wann, wie, mit welchen Ergebnissen
- **Behobene Barrieren** - Vorher/Nachher-Vergleiche
- **Bekannte Einschränkungen** - Ehrliche Auflistung von Problemen
- **Roadmap** - Geplante Verbesserungen mit Zeitplan

## Schulung und Sensibilisierung

### Lehrkräfte-Fortbildung

**Sensibilisierungs-Workshop:**
- **Simulation von Behinderungen** - VR mit verbundenen Augen nutzen
- **Assistive Technologien ausprobieren** - Screenreader, Tastaturnavigation
- **Rechtliche Grundlagen** - Was ist verpflichtend?
- **Best Practices** - Wie gestalte ich barrierefreie Inhalte?

**Praktische Übungen:**
- **Alt-Texte schreiben** - Für VR-Hotspots und Bilder
- **Untertitel erstellen** - Für Audio-Inhalte
- **Kontraste messen** - Mit professionellen Tools
- **Nutzer:innen-Tests** - Mit echten Betroffenen

### Schüler:innen einbeziehen

**Inklusive Projektarbeit:**
- **Gemeinsame VR-Erstellung** - Alle Schüler:innen wirken mit
- **Peer-Testing** - Schüler:innen testen gegenseitig
- **Empathie-Übungen** - Perspektivwechsel durch Simulation
- **Awareness-Kampagnen** - Aufklärung über Barrierefreiheit

---

**Fazit:** Barrierefreiheit in immersiven Lernumgebungen ist nicht nur eine rechtliche Verpflichtung, sondern eine Chance, innovative und inklusive Bildung zu gestalten. Durch durchdachte Planung und Umsetzung können VR- und 360°-Technologien für alle Lernenden zugänglich werden und das Potenzial haben, Bildungsbarrieren abzubauen statt neue zu schaffen.

## Weiterführende Ressourcen

### Offizielle Richtlinien und Standards
- **WCAG 2.1 Guidelines:** w3.org/WAI/WCAG21/quickref/
- **BITV 2.0:** gesetze-im-internet.de/bitv_2_0/
- **DIN EN 301 549:** Europäische Norm für Barrierefreiheit
- **ISO 14289:** PDF-Barrierefreiheit

### Tools und Software
- **NVDA Screenreader:** nvaccess.org (kostenlos)
- **Colour Contrast Analyser:** tpgi.com/color-contrast-checker/
- **WAVE Browser Extension:** wave.webaim.org
- **axe DevTools:** deque.com/axe/devtools/

### Fortbildung und Beratung
- **BIK für Alle:** bik-fuer-alle.de
- **Aktion Mensch:** aktion-mensch.de/inklusion-schule/
- **Bundesfachstelle Barrierefreiheit:** bundesfachstelle-barrierefreiheit.de
- **Stiftung Digitale Chancen:** digitale-chancen.de

### Fachverbände und Netzwerke
- **Deutscher Blinden- und Sehbehindertenverband:** dbsv.org
- **Deutscher Gehörlosen-Bund:** gehoerlosen-bund.de
- **Bundesverband Selbsthilfe Körperbehinderter:** bsk-ev.org
- **Lebenshilfe Deutschland:** lebenshilfe.de
`;

// Schritt-für-Schritt Anleitung für Barrierefreiheit-Umsetzung
const barrierefreiheitUmsetzungSteps = [
  {
    title: "Barrierefreiheits-Audit der bestehenden Werkstatt-Tour",
    content: `
## Schritt 1: Systematische Überprüfung der VR-Tour auf Barrierefreiheit

**Vorbereitung des Audits:**
1. **Bestehende Werkstatt-Tour öffnen** in 3DVista
2. **Checkliste vorbereiten** - WCAG 2.1 Kriterien
3. **Test-Tools installieren** - Browser-Extensions und Software
4. **Verschiedene Geräte** bereitstellen für umfassende Tests

**Automatisierte Tests durchführen:**
- **WAVE Browser-Extension** installieren und Tour scannen
- **Lighthouse Accessibility Audit** in Chrome DevTools
- **axe DevTools** für detaillierte Analyse
- **Colour Contrast Analyser** für Farbprüfungen

**Manuelle Überprüfung:**
\`\`\`
Barrierefreiheits-Audit Checkliste:

Visuelle Zugänglichkeit:
□ Haben alle Hotspots aussagekräftige Alt-Texte?
□ Sind Kontraste ausreichend (min. 4.5:1)?
□ Funktioniert die Tour bei 200% Zoom?
□ Sind wichtige Informationen nicht nur über Farbe vermittelt?

Auditive Zugänglichkeit:
□ Gibt es Untertitel für Audio-Inhalte?
□ Sind Transkriptionen verfügbar?
□ Können Nutzer die Lautstärke kontrollieren?
□ Startet Audio automatisch (problematisch)?

Motorische Zugänglichkeit:
□ Sind alle Hotspots mindestens 44x44 Pixel groß?
□ Funktioniert die komplette Navigation per Tastatur?
□ Gibt es Zeitlimits (problematisch für manche Nutzer)?
□ Sind Drag&Drop-Aktionen vermeidbar?

Kognitive Zugänglichkeit:
□ Ist die Sprache einfach und verständlich?
□ Ist die Navigation logisch und konsistent?
□ Gibt es Hilfe-Funktionen?
□ Sind Fehlermeldungen verständlich?
\`\`\`

**Probleme dokumentieren:**
Erstellen Sie eine Liste aller gefundenen Barrieren mit Priorität (hoch/mittel/niedrig).
    `,
    tip: "Nutzen Sie mehrere Test-Tools. Jedes Tool findet andere Probleme, und die Kombination gibt ein vollständiges Bild.",
    teacherNote: "Beziehen Sie Schüler:innen mit Behinderungen in den Test ein. Sie finden oft Probleme, die Tools übersehen."
  },
  {
    title: "Alt-Texte und Beschreibungen für alle Hotspots erstellen",
    content: `
## Schritt 2: Aussagekräftige Alternativtexte für Screenreader

**Alt-Texte in 3DVista hinzufügen:**
1. **Hotspot auswählen** im Projektbaum
2. **Eigenschaften-Panel** öffnen (rechts)
3. **"Alt-Text" Feld** finden und ausfüllen
4. **Beschreibung** präzise und hilfreich formulieren

**Gute Alt-Texte für verschiedene Hotspot-Typen:**

**Navigations-Hotspots:**
\`\`\`
Schlecht: "Pfeil"
Besser: "Navigation zum Maschinenbereich"
Optimal: "Zum Maschinenbereich wechseln - hier lernen Sie Sicherheitsregeln für Maschinen"
\`\`\`

**Info-Hotspots:**
\`\`\`
Schlecht: "Info"
Besser: "Sicherheitshinweis Kreissäge"
Optimal: "Sicherheitsregeln für die Kreissäge - Schutzausrüstung und Bedienung"
\`\`\`

**Quiz-Hotspots:**
\`\`\`
Schlecht: "Frage"
Besser: "Quiz zur Werkstatt-Sicherheit"
Optimal: "Wissenstest: 5 Fragen zur sicheren Arbeit in der Werkstatt"
\`\`\`

**Audio-Hotspots:**
\`\`\`
Schlecht: "Lautsprecher"
Besser: "Audio-Erklärung anhören"
Optimal: "Audio-Führung: Sicherheitsregeln für diesen Arbeitsbereich (2 Minuten)"
\`\`\`

**Szenen-Beschreibungen für Orientierung:**
Jede 360°-Szene sollte eine Beschreibung haben, die sehbehinderten Nutzern hilft:

\`\`\`
Werkstatt-Eingang:
"Sie befinden sich am Eingang der Schulwerkstatt. Vor Ihnen sehen Sie den Hauptarbeitsbereich mit Werkbänken. Links befinden sich die Maschinen, rechts das Materiallager. An der Wand hängen Sicherheitshinweise und der Erste-Hilfe-Kasten."

Maschinenbereich:
"Sie stehen im Maschinenbereich der Werkstatt. Direkt vor Ihnen steht eine Kreissäge mit Schutzvorrichtungen. Links sehen Sie eine Bohrmaschine, rechts eine Schleifmaschine. Alle Maschinen haben rote Notaus-Schalter. Schutzausrüstung hängt an Haken an der Wand."
\`\`\`

**Strukturierte Informationen:**
- **Kurz und präzise** - maximal 150 Zeichen für Alt-Texte
- **Kontext berücksichtigen** - Was ist für das Lernziel wichtig?
- **Handlungsanweisungen** - Was passiert beim Klicken?
- **Keine redundanten Informationen** - nicht "Bild von..." schreiben
    `,
    tip: "Lesen Sie Alt-Texte laut vor. Wenn sie beim Vorlesen seltsam klingen, sind sie wahrscheinlich nicht gut geschrieben.",
    teacherNote: "Lassen Sie Schüler:innen Alt-Texte schreiben. Das fördert das Verständnis für verschiedene Wahrnehmungsweisen."
  },
  {
    title: "Tastaturnavigation implementieren und testen",
    content: `
## Schritt 3: Vollständige Bedienung ohne Maus ermöglichen

**Tastaturnavigation in 3DVista konfigurieren:**
1. **Tour-Einstellungen** öffnen
2. **Accessibility-Optionen** aktivieren
3. **Keyboard Navigation** einschalten
4. **Tab-Reihenfolge** logisch festlegen

**Standard-Tastaturkürzel definieren:**
\`\`\`
Grundlegende Navigation:
Tab = Nächster Hotspot
Shift+Tab = Vorheriger Hotspot
Enter/Space = Hotspot aktivieren
Escape = Zurück/Schließen
F = Vollbild ein/aus

360°-Navigation:
Pfeiltasten = Blickrichtung ändern
+ / - = Zoom in/out
Home = Zur Startposition
End = Zur letzten Position

Spezielle Funktionen:
H = Hilfe anzeigen
M = Stumm schalten
P = Pause/Play (bei Audio/Video)
S = Einstellungen öffnen
\`\`\`

**Tab-Reihenfolge optimieren:**
Die Reihenfolge sollte logisch und vorhersagbar sein:
1. **Hauptnavigation** (Zurück, Weiter, Menü)
2. **Wichtige Info-Hotspots** (Sicherheitshinweise)
3. **Interaktive Elemente** (Quiz, Audio)
4. **Sekundäre Navigation** (Zusatzinfos)

**Fokus-Indikatoren sichtbar machen:**
\`\`\`
CSS für bessere Sichtbarkeit:
.hotspot:focus {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
  box-shadow: 0 0 10px rgba(0, 102, 204, 0.5);
}

.hotspot:focus::after {
  content: "← Aktuell ausgewählt";
  position: absolute;
  background: #0066cc;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}
\`\`\`

**Tastaturnavigation testen:**
1. **Maus abstecken** oder verstecken
2. **Nur mit Tastatur** durch die gesamte Tour navigieren
3. **Alle Hotspots** erreichen und aktivieren
4. **Logische Reihenfolge** prüfen
5. **Fokus-Sichtbarkeit** kontrollieren

**Häufige Probleme beheben:**
- **Hotspots nicht erreichbar** - Tab-Index korrigieren
- **Fokus nicht sichtbar** - CSS-Styles anpassen
- **Unlogische Reihenfolge** - Hotspot-Positionen überdenken
- **Tastenkürzel funktionieren nicht** - JavaScript-Events prüfen
    `,
    tip: "Testen Sie die Tastaturnavigation regelmäßig während der Entwicklung, nicht erst am Ende. Nachträgliche Korrekturen sind aufwendiger.",
    teacherNote: "Zeigen Sie Schüler:innen die Tastaturnavigation. Viele kennen diese Möglichkeit nicht und können davon profitieren."
  },
  {
    title: "Untertitel und Transkriptionen für Audio-Inhalte",
    content: `
## Schritt 4: Audio-Inhalte für gehörlose und schwerhörige Nutzer zugänglich machen

**Untertitel für Audio-Hotspots erstellen:**
1. **Audio-Datei transkribieren** - Wort für Wort aufschreiben
2. **WebVTT-Datei erstellen** für Untertitel
3. **In 3DVista einbinden** über Media-Einstellungen
4. **Synchronisation prüfen** - Text und Audio abgleichen

**WebVTT-Format für Untertitel:**
\`\`\`
WEBVTT

00:00:00.000 --> 00:00:03.000
Willkommen zur Werkstatt-Sicherheitstour!

00:00:03.500 --> 00:00:07.000
Hier lernen Sie, wie Sie sicher arbeiten.

00:00:07.500 --> 00:00:12.000
Achten Sie besonders auf die Schutzausrüstung.

00:00:12.500 --> 00:00:15.000
[Maschinengeräusch im Hintergrund]

00:00:15.500 --> 00:00:20.000
Bei Fragen klicken Sie auf das Hilfe-Symbol.
\`\`\`

**Transkriptionen als Alternative:**
Für jeden Audio-Hotspot eine vollständige Textversion bereitstellen:

\`\`\`
Audio-Transkription: Werkbank-Sicherheit

Sprecher: Lehrkraft
Dauer: 1 Minute 30 Sekunden

"Hier sehen Sie einen typischen Arbeitsplatz in unserer Werkstatt. 
Die Werkbank ist das Herzstück jeder handwerklichen Arbeit. 

Wichtige Sicherheitsregeln:
- Werkzeuge nach Gebrauch sofort zurücklegen
- Arbeitsplatz sauber und aufgeräumt halten
- Schutzbrille griffbereit haben
- Bei Problemen sofort Hilfe holen

[Pause - Werkzeuggeräusche im Hintergrund]

Schauen Sie sich um und entdecken Sie die verschiedenen 
Sicherheitshinweise. Klicken Sie auf die gelben Symbole 
für weitere Informationen."

Hintergrundgeräusche: Leise Werkstattgeräusche, 
gelegentliches Werkzeugklappern
\`\`\`

**Visuelle Signale für wichtige Audio-Cues:**
- **Warntöne** → Rotes Blinken oder Warnsymbol
- **Bestätigungstöne** → Grünes Häkchen
- **Hintergrundgeräusche** → Texteinblendung "[Maschinengeräusch]"
- **Musik** → Musiknoten-Symbol mit Beschreibung

**Lautstärke-Kontrolle implementieren:**
\`\`\`
Audio-Player Einstellungen:
□ Lautstärke-Regler sichtbar
□ Stumm-Schalten möglich
□ Wiedergabe-Geschwindigkeit anpassbar
□ Untertitel ein-/ausschaltbar
□ Autoplay deaktiviert (wichtig!)
\`\`\`

**Qualitätskontrolle:**
- **Synchronisation prüfen** - Text und Audio stimmen überein
- **Vollständigkeit** - Alle wichtigen Informationen erfasst
- **Verständlichkeit** - Auch ohne Audio verständlich
- **Formatierung** - Einheitliche Darstellung
    `,
    tip: "Nutzen Sie automatische Transkriptions-Tools als Ausgangspunkt, korrigieren Sie aber immer manuell. Fachbegriffe werden oft falsch erkannt.",
    teacherNote: "Lassen Sie Schüler:innen Transkriptionen erstellen. Das schärft das Bewusstsein für verschiedene Wahrnehmungsweisen."
  },
  {
    title: "Farbkontraste optimieren und alternative Kennzeichnungen",
    content: `
## Schritt 5: Visuelle Zugänglichkeit für alle Sehfähigkeiten

**Kontraste messen und verbessern:**
1. **Colour Contrast Analyser** herunterladen und installieren
2. **Alle Text-Hintergrund-Kombinationen** in der Tour prüfen
3. **WCAG 2.1 Standards** einhalten (4.5:1 für normalen Text)
4. **Problematische Kombinationen** identifizieren und korrigieren

**Häufige Kontrastprobleme in VR-Touren:**
\`\`\`
Problematisch:
- Weißer Text auf hellblauem Hintergrund
- Gelber Text auf weißem Hintergrund  
- Grauer Text auf weißem Hintergrund
- Roter Text auf grünem Hintergrund

Besser:
- Weißer Text auf dunkelblauem Hintergrund (7:1)
- Schwarzer Text auf gelbem Hintergrund (19:1)
- Schwarzer Text auf weißem Hintergrund (21:1)
- Weißer Text auf rotem Hintergrund (5.3:1)
\`\`\`

**Hotspot-Design für bessere Sichtbarkeit:**
\`\`\`
Optimierte Hotspot-Gestaltung:
- Mindestgröße: 44x44 Pixel
- Kontrast: Mindestens 3:1 zum Hintergrund
- Rahmen: 2px solid für bessere Abgrenzung
- Schatten: Für Tiefenwirkung und Kontrast
- Hover-Effekt: Deutliche Vergrößerung oder Farbwechsel

CSS-Beispiel:
.hotspot {
  min-width: 44px;
  min-height: 44px;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  background: #0066cc;
  color: #ffffff;
}

.hotspot:hover, .hotspot:focus {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}
\`\`\`

**Alternative Kennzeichnungen zu Farbe:**
Wichtige Informationen dürfen nicht nur über Farbe vermittelt werden:

\`\`\`
Statt nur Farbe:
❌ "Klicken Sie auf die roten Hotspots für Gefahren"

Besser mit zusätzlichen Kennzeichnungen:
✅ "Klicken Sie auf die Warn-Hotspots (rotes Dreieck-Symbol) für Gefahren"

Beispiele für alternative Kennzeichnungen:
- Gefahren: Rotes Dreieck + "⚠️" Symbol
- Sicherheit: Grüner Kreis + "✓" Symbol  
- Information: Blaues Quadrat + "ℹ️" Symbol
- Navigation: Grauer Pfeil + "→" Symbol
- Audio: Lila Kreis + "🔊" Symbol
\`\`\`

**Zoom-Funktionalität testen:**
\`\`\`
Zoom-Test Checkliste:
□ Tour funktioniert bei 200% Browser-Zoom
□ Alle Texte bleiben lesbar
□ Hotspots bleiben klickbar
□ Navigation bleibt zugänglich
□ Keine horizontalen Scrollbalken
□ Layout bricht nicht zusammen
\`\`\`

**Spezielle Bedürfnisse berücksichtigen:**
- **Farbenblindheit** - Rot-Grün-Schwäche ist häufig
- **Sehschwäche** - Große Schriften und hohe Kontraste
- **Lichtempfindlichkeit** - Dunkle Themes anbieten
- **Altersbedingte Sehveränderungen** - Besonders bei Lehrpersonal

**Barrierefreiheits-Statement erstellen:**
\`\`\`
Barrierefreiheitserklärung für Werkstatt-VR-Tour

Diese VR-Tour wurde nach WCAG 2.1 Level AA entwickelt.

Unterstützte Funktionen:
✓ Screenreader-kompatibel (getestet mit NVDA)
✓ Vollständige Tastaturnavigation
✓ Hohe Kontraste (min. 4.5:1)
✓ Textvergrößerung bis 200%
✓ Untertitel für alle Audio-Inhalte
✓ Alternative Texte für alle Bilder

Bekannte Einschränkungen:
- 3D-Navigation für blinde Nutzer eingeschränkt
- Komplexe Interaktionen benötigen Einarbeitung

Feedback und Unterstützung:
E-Mail: accessibility@schule.de
Telefon: 0123-456789
\`\`\`
    `,
    tip: "Testen Sie Kontraste nicht nur am Computer, sondern auch auf verschiedenen Mobilgeräten. Die Darstellung kann stark variieren.",
    teacherNote: "Nutzen Sie Kontrastprobleme als Lernmöglichkeit. Schüler:innen verstehen so besser, warum Barrierefreiheit wichtig ist."
  },
  {
    title: "Finale Tests und Dokumentation der Barrierefreiheit",
    content: `
## Schritt 6: Umfassende Qualitätssicherung und Dokumentation

**Systematische End-to-End Tests:**
1. **Screenreader-Test** mit NVDA oder VoiceOver
2. **Tastatur-only Navigation** durch die gesamte Tour
3. **Zoom-Test** auf 200% in verschiedenen Browsern
4. **Kontrast-Überprüfung** aller visuellen Elemente
5. **Mobile Barrierefreiheit** auf Tablets und Smartphones

**Screenreader-Test durchführen:**
\`\`\`
NVDA-Test Protokoll:
□ NVDA startet und erkennt die Tour
□ Alle Hotspots werden vorgelesen
□ Alt-Texte sind aussagekräftig
□ Navigation ist logisch nachvollziehbar
□ Strukturelemente (Überschriften) werden erkannt
□ Formulare und Buttons sind beschriftet
□ Links haben aussagekräftige Texte
\`\`\`

**Benutzertest mit Menschen mit Behinderungen:**
- **Verschiedene Behinderungsarten** einbeziehen
- **Realistische Aufgaben** stellen
- **Feedback dokumentieren** und ernst nehmen
- **Verbesserungen umsetzen** und erneut testen

**Dokumentation erstellen:**
\`\`\`
Barrierefreiheits-Dokumentation

1. Übersicht
- WCAG 2.1 Level AA konform
- Getestet mit NVDA, VoiceOver, Tastatur
- Optimiert für Chrome, Firefox, Safari, Edge

2. Implementierte Features
- 47 Alt-Texte für alle interaktiven Elemente
- Vollständige Tastaturnavigation
- 12 Audio-Transkriptionen
- Kontraste min. 4.5:1 (gemessen mit CCA)
- Zoom bis 200% ohne Funktionsverlust

3. Test-Ergebnisse
- WAVE: 0 Fehler, 2 Warnungen (dokumentiert)
- Lighthouse: 95/100 Accessibility Score
- Manuelle Tests: Bestanden
- Nutzertest: 4/5 Teilnehmer sehr zufrieden

4. Bekannte Einschränkungen
- 360°-Navigation für Blinde herausfordernd
- Komplexe Quiz-Interaktionen benötigen Übung
- Mobile VR-Brillen nicht vollständig unterstützt

5. Wartung und Updates
- Quartalsweise Überprüfung geplant
- Feedback-System implementiert
- Ansprechpartner: [Name, E-Mail]
\`\`\`

**Schulung für Lehrpersonal:**
\`\`\`
Barrierefreiheits-Schulung für Kollegen

Themen:
1. Warum Barrierefreiheit wichtig ist
2. Wie Screenreader funktionieren (Demo)
3. Tastaturnavigation zeigen und üben
4. Häufige Probleme und Lösungen
5. Unterstützung für Schüler:innen mit Behinderungen

Praktische Übungen:
- Tour mit verbundenen Augen navigieren
- Nur mit Tastatur bedienen
- Verschiedene Zoom-Stufen ausprobieren
- Untertitel ein- und ausschalten

Materialien:
- Kurzanleitung für Lehrpersonen
- Checkliste für barrierefreie Nutzung
- Kontakte für technischen Support
- Weiterführende Ressourcen
\`\`\`

**Kontinuierliche Verbesserung:**
- **Feedback-System** für Nutzer einrichten
- **Regelmäßige Updates** der Barrierefreiheits-Features
- **Neue Standards** verfolgen und implementieren
- **Best Practices** mit anderen Schulen teilen

**Zertifizierung und Anerkennung:**
- **Barrierefreiheits-Siegel** beantragen (falls verfügbar)
- **Auszeichnungen** für inklusive Bildung anstreben
- **Erfahrungen teilen** auf Konferenzen und in Fachzeitschriften
- **Vorbild werden** für andere Bildungseinrichtungen

**Erfolg messen:**
\`\`\`
KPIs für Barrierefreiheit:
- Anzahl Nutzer mit assistiven Technologien
- Feedback-Bewertungen (Durchschnitt >4/5)
- Technische Metriken (0 kritische Fehler)
- Nutzungsdauer (vergleichbar mit anderen Nutzern)
- Lernerfolgsmessung (keine Benachteiligung)
\`\`\`
    `,
    tip: "Dokumentieren Sie nicht nur was Sie gemacht haben, sondern auch warum. Das hilft bei zukünftigen Projekten und beim Wissenstransfer.",
    teacherNote: "Nutzen Sie die barrierefreie Tour als Beispiel für inklusive Pädagogik. Zeigen Sie, wie Technologie allen helfen kann."
  }
];

// Theorie-Inhalte für Barrierefreiheit-Umsetzung
const barrierefreiheitUmsetzungTheory = [
  {
    title: "WCAG 2.1 Guidelines im Detail",
    content: `
**Die vier Grundprinzipien der WCAG 2.1:**

**1. Wahrnehmbar (Perceivable)**
Informationen und Benutzeroberflächen müssen so dargestellt werden, dass Nutzer sie wahrnehmen können.
- Textalternativen für Nicht-Text-Inhalte
- Untertitel und andere Alternativen für Multimedia
- Ausreichende Farbkontraste
- Vergrößerbarkeit ohne Funktionsverlust

**2. Bedienbar (Operable)**
Benutzeroberflächen und Navigation müssen bedienbar sein.
- Alle Funktionen per Tastatur zugänglich
- Keine Inhalte, die Anfälle auslösen können
- Ausreichend Zeit für Nutzer
- Hilfe bei Navigation und Orientierung

**3. Verständlich (Understandable)**
Informationen und Bedienung der Benutzeroberfläche müssen verständlich sein.
- Text lesbar und verständlich
- Vorhersagbare Funktionalität
- Hilfe bei Eingabefehlern

**4. Robust (Robust)**
Inhalte müssen robust genug sein, um von verschiedenen Benutzeragenten interpretiert zu werden.
- Kompatibilität mit assistiven Technologien
- Valider, semantischer Code
- Zukunftssicherheit

**Konformitätsstufen:**
- **Level A:** Grundlegende Barrierefreiheit
- **Level AA:** Standard für öffentliche Einrichtungen (Ziel für Schulen)
- **Level AAA:** Höchste Stufe (oft nicht praktikabel)
    `
  },
  {
    title: "Assistive Technologien verstehen",
    content: `
**Screenreader:**
Software, die Bildschirminhalte vorliest oder in Braille ausgibt.
- **NVDA** (Windows, kostenlos)
- **JAWS** (Windows, kommerziell)
- **VoiceOver** (macOS/iOS, integriert)
- **TalkBack** (Android, integriert)

**Funktionsweise von Screenreadern:**
- Lesen DOM-Struktur und semantische Elemente
- Nutzen ARIA-Labels und Alt-Texte
- Navigieren über Überschriften, Links, Formulare
- Sprechen Änderungen im Inhalt aus

**Vergrößerungssoftware:**
- **ZoomText** (Windows)
- **MAGic** (Windows)
- **Zoom** (macOS, integriert)
- Browser-Zoom (alle modernen Browser)

**Alternative Eingabegeräte:**
- **Bildschirmtastaturen** - Software-Tastaturen
- **Eye-Tracking** - Steuerung über Blickbewegung
- **Switch-Navigation** - Ein-Tasten-Bedienung
- **Sprachsteuerung** - Dragon NaturallySpeaking, Siri

**Kognitive Hilfsmittel:**
- **Lesehilfen** - Hervorhebung, Zeilenhilfen
- **Konzentrationshilfen** - Ablenkungen ausblenden
- **Erinnerungshilfen** - Notizen, Lesezeichen
- **Vereinfachung** - Reader-Modi, einfache Sprache

**Testing mit assistiven Technologien:**
- Regelmäßige Tests während der Entwicklung
- Verschiedene Tools und Versionen testen
- Echte Nutzer in Tests einbeziehen
- Automatisierte Tests als Ergänzung, nicht Ersatz
    `
  },
  {
    title: "Rechtliche Grundlagen in Deutschland",
    content: `
**Gesetzliche Verpflichtungen:**

**Behindertengleichstellungsgesetz (BGG):**
- Verpflichtung für öffentliche Stellen
- Barrierefreie Informationstechnik
- Angemessene Vorkehrungen treffen
- Benachteiligungsverbot

**Barrierefreie-Informationstechnik-Verordnung (BITV 2.0):**
- Konkrete technische Anforderungen
- Basiert auf WCAG 2.1 Level AA
- Gilt für Websites und mobile Anwendungen
- Erklärung zur Barrierefreiheit erforderlich

**UN-Behindertenrechtskonvention (UN-BRK):**
- Recht auf Bildung (Artikel 24)
- Angemessene Vorkehrungen
- Inklusive Bildungssysteme
- Gleichberechtigte Teilhabe

**Landesschulgesetze:**
- Inklusion als Bildungsauftrag
- Individuelle Förderung
- Nachteilsausgleich
- Barrierefreie Lernmittel

**Praktische Umsetzung in Schulen:**
- Barrierefreiheitserklärung erstellen
- Feedback-Mechanismus einrichten
- Regelmäßige Überprüfung
- Schulung des Personals
- Dokumentation der Maßnahmen

**Haftung und Risiken:**
- Diskriminierungsvorwürfe vermeiden
- Gleichberechtigte Teilhabe sicherstellen
- Reputationsrisiken minimieren
- Rechtssicherheit schaffen

**Positive Aspekte:**
- Fördergelder für Inklusion
- Auszeichnungen und Anerkennung
- Vorbildfunktion für andere Schulen
- Bessere Lernergebnisse für alle
    `
  }
];

export const barrierefreiheitContent = {
  // Für die Grundlagen-Sektion
  'Barrierefreiheit': {
    title: 'Barrierefreiheit in immersiven Lernumgebungen',
    content: `
# Barrierefreiheit in immersiven Lernumgebungen

Barrierefreiheit in VR- und 360°-Lernumgebungen bedeutet, dass diese Technologien von allen Menschen genutzt werden können, unabhängig von ihren körperlichen, sensorischen oder kognitiven Fähigkeiten. Dies ist nicht nur ethisch richtig und rechtlich vorgeschrieben, sondern verbessert auch die Lernerfahrung für alle Nutzer:innen und trägt zu einer inklusiveren Bildungslandschaft bei.

## Rechtliche Grundlagen und gesellschaftlicher Auftrag

Die rechtlichen Grundlagen für Barrierefreiheit in der Bildung sind in Deutschland umfassend verankert. Die UN-Behindertenrechtskonvention (UN-BRK) garantiert in Artikel 24 das Recht auf inklusive Bildung und in Artikel 9 die Zugänglichkeit zu Informations- und Kommunikationstechnologien. Diese internationalen Verpflichtungen werden durch nationales Recht konkretisiert.

Das Behindertengleichstellungsgesetz (BGG) verpflichtet öffentliche Stellen zur Barrierefreiheit und fordert angemessene Vorkehrungen für Menschen mit Behinderungen. Für Schulen bedeutet dies, dass digitale Lernmittel grundsätzlich barrierefrei gestaltet werden müssen. Die Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) konkretisiert diese Anforderungen und basiert auf den internationalen WCAG 2.1 Standards, die auch für VR-Anwendungen relevant sind.

Die Landesschulgesetze verankern Inklusion als Bildungsauftrag und fordern individuelle Förderung aller Schüler:innen sowie Nachteilsausgleich bei Behinderungen. Dies schafft nicht nur rechtliche Verpflichtungen, sondern auch pädagogische Chancen für innovative Lernansätze.

## Pädagogische Vorteile für alle Lernenden

Barrierefreie Gestaltung folgt dem Prinzip des Universal Design for Learning (UDL) und hilft nicht nur Menschen mit Behinderungen, sondern verbessert die Lernerfahrung für alle. Multiple Repräsentationen ermöglichen es, Inhalte in verschiedenen Formaten anzubieten, verschiedene Interaktionsmöglichkeiten erlauben die Bedienung nach individuellen Fähigkeiten, und flexible Lernwege ermöglichen die Anpassung an unterschiedliche Lernstile.

Inklusive Pädagogik betrachtet Heterogenität als Normalität und sieht Vielfalt als Bereicherung. Individualisierung ermöglicht die Anpassung an persönliche Bedürfnisse, Partizipation sorgt dafür, dass alle aktiv am Lernprozess teilnehmen können, und soziales Lernen fördert Empathie und Verständnis für Unterschiede. Diese Prinzipien werden durch barrierefreie VR-Technologien besonders gut unterstützt.

## Zielgruppen und spezifische Bedürfnisse

Menschen mit Sehbehinderungen und Blindheit stehen in VR-Umgebungen vor besonderen Herausforderungen. Visuelle Informationen sind nicht oder nur eingeschränkt wahrnehmbar, die Navigation in 3D-Räumen ohne visuelle Orientierungspunkte ist schwierig, Hotspots und Bedienelemente sind nicht erkennbar, und räumliche Zusammenhänge sind schwer verständlich.

Lösungsansätze umfassen Screenreader-Kompatibilität, bei der alle Inhalte vorlesbar sein müssen, vollständige Tastaturnavigation ohne Maus-Abhängigkeit, Audio-Beschreibungen für gesprochene Erklärung visueller Inhalte, räumliches Audio für Orientierung im virtuellen Raum, haptisches Feedback durch Vibration und Berührung sowie hohe Kontraste und Vergrößerungsmöglichkeiten für Menschen mit Sehschwäche.

Menschen mit Hörbehinderungen und Gehörlosigkeit haben andere spezifische Bedürfnisse. Audio-Inhalte sind nicht oder nur eingeschränkt wahrnehmbar, wichtige akustische Signale und Warnungen werden überhört, Kommunikation in Gruppen-VR-Erfahrungen ist schwierig, und räumliche Audio-Hinweise sind nicht nutzbar.

Entsprechende Lösungsansätze beinhalten Untertitel für alle Audio- und Video-Inhalte, Gebärdensprache-Videos für wichtige Informationen, visuelle Signale statt akustischer Hinweise, Transkriptionen für alle gesprochenen Inhalte, Chat-Funktionen für Kommunikation in Gruppen-VR und visuelle Warnungen durch blinkende Symbole statt Warntöne.

Menschen mit motorischen Einschränkungen haben Schwierigkeiten bei der Bedienung von VR-Controllern, Probleme mit komplexen Hand- und Fingergesten, Ermüdung bei längerer VR-Nutzung und eingeschränkte Beweglichkeit im realen Raum.

Hierfür bieten sich alternative Eingabemethoden wie Tastatur, Sprache, Eye-Tracking oder Switch-Navigation an. Große Klickflächen von mindestens 44x44 Pixel für Touch-Bedienung, anpassbare Geschwindigkeit für langsamere Navigation und Interaktion, Pausen-Funktionen zum Anhalten und Fortsetzen von Inhalten, Ein-Hand-Bedienung mit allen Funktionen erreichbar mit einer Hand, sitzende Nutzung mit für Sitzposition optimierten VR-Erfahrungen und vereinfachte Gesten, die komplexe Bewegungen durch einfache ersetzen, sind wichtige Anpassungen.

Menschen mit kognitiven Beeinträchtigungen und Lernbehinderungen können durch komplexe VR-Umgebungen überfordert werden. Orientierung in virtuellen Räumen ist schwierig, Aufmerksamkeitsprobleme entstehen bei zu vielen visuellen Reizen, und das Verstehen abstrakter Konzepte bereitet Schwierigkeiten.

Lösungsansätze umfassen einfache Sprache mit kurzen Sätzen, bekannten Wörtern und aktiven Formulierungen, klare Struktur mit logischem Aufbau und deutlichen Orientierungshilfen, Wiederholungen wichtiger Inhalte in verschiedenen Formen, selbstbestimmtes Tempo ohne Zeitlimits oder abschaltbare Timer, reduzierte Komplexität mit weniger Ablenkungen und fokussierten Inhalten, visuelle Hilfen durch Symbole, Farben und Bilder zur Unterstützung sowie Chunking, bei dem große Informationsmengen in kleine, verdauliche Häppchen aufgeteilt werden.

## Technische Umsetzung von Barrierefreiheit

Die WCAG 2.1 Guidelines bilden die Grundlage für barrierefreie VR-Inhalte und basieren auf vier Grundprinzipien. Wahrnehmbarkeit bedeutet, dass Informationen und Benutzeroberflächen so dargestellt werden müssen, dass Nutzer sie wahrnehmen können. Dies umfasst Textalternativen für alle visuellen Inhalte, Untertitel und Audiodeskriptionen für Multimedia, ausreichende Farbkontraste von mindestens 4.5:1 und Vergrößerbarkeit ohne Funktionsverlust.

Bedienbarkeit erfordert, dass alle Funktionen per Tastatur zugänglich sind, keine Inhalte vorhanden sind, die Anfälle auslösen können, ausreichend Zeit für Nutzer:innen zur Verfügung steht und Hilfe bei Navigation und Orientierung geboten wird.

Verständlichkeit bedeutet, dass Text lesbar und verständlich ist, Funktionalität vorhersagbar ist und Hilfe bei Eingabefehlern angeboten wird. Robustheit erfordert Kompatibilität mit assistiven Technologien und Zukunftssicherheit durch Standards-Konformität.

## Assistive Technologien in VR-Umgebungen

Screenreader-Integration ist fundamental für die Barrierefreiheit von VR-Inhalten. NVDA für Windows ist kostenlos verfügbar und kann VR-Inhalte vorlesen, JAWS für Windows ist eine professionelle kommerzielle Lösung, VoiceOver für macOS/iOS ist Apples integrierte Lösung, und TalkBack für Android ist Googles Screenreader. Diese Technologien müssen in VR-Anwendungen unterstützt werden.

Eye-Tracking für VR ermöglicht Steuerung durch Blickbewegung. Der Tobii Eye Tracker, Pupil Labs als Open-Source-Lösung und die Varjo Aero als VR-Brille mit integriertem Eye-Tracking sind verfügbare Optionen.

Spracheingabe durch Dragon NaturallySpeaking als professionelle Spracherkennung, Windows Speech Recognition als integrierte Windows-Lösung und Google Voice als cloud-basierte Spracherkennung erweitern die Eingabemöglichkeiten erheblich.

## Nutzerfreundlichkeit in VR/360°-Umgebungen

Motion Sickness ist ein häufiges Problem in VR-Umgebungen und entsteht durch Sensory Conflict, den Widerspruch zwischen visueller und vestibulärer Wahrnehmung, Latenz als Verzögerung zwischen Kopfbewegung und Bildaktualisierung, zu niedrige Framerate und unnatürliche Bewegungen wie Teleportation oder schnelle Drehungen.

Präventionsmaßnahmen umfassen Comfort Settings als Einstellungen für empfindliche Nutzer:innen, Vignetting zur Einschränkung des Sichtfelds bei Bewegung, Snap Turning für diskrete statt kontinuierliche Drehungen, statische Referenzen als feste Objekte im Sichtfeld und regelmäßige Pausen für Erholung.

Ergonomie und Komfort erfordern individuelle VR-Brillen-Anpassung. Die Interpupillary Distance (IPD) muss individuell eingestellt werden, Kopfband-Anpassung sorgt für gleichmäßige Gewichtsverteilung, Polster-Hygiene erfordert austauschbare, waschbare Polster, und Brillenträger-Kompatibilität muss Platz für Sehhilfen bieten.

Ergonomische Arbeitsplätze benötigen ausreichend Platz von mindestens 2x2 Meter für Room-Scale VR, Entfernung von Stolperfallen für sichere Umgebung, gute Beleuchtung für Tracking-Kameras und bequeme Sitzmöglichkeiten für längere VR-Sessions.

## Kontrasteinstellungen und visuelle Anpassungen

Farbkontraste müssen optimiert werden, um den WCAG AA Standard von mindestens 4.5:1 für normalen Text oder den WCAG AAA Standard von mindestens 7:1 für höchste Barrierefreiheit zu erfüllen. Farbenblindheit, besonders Rot-Grün-Schwäche, muss berücksichtigt werden, und zusätzliche Kennzeichnungen dürfen nicht nur über Farbe für wichtige Informationen erfolgen.

Anpassbare Darstellung umfasst Dark Mode als dunkle Themes für lichtempfindliche Nutzer:innen, High Contrast Mode für maximale Kontraste bei Sehbeeinträchtigungen, Font Size Scaling für vergrößerbare Schriften und Reduced Motion für weniger Animationen bei empfindlichen Nutzer:innen.

## Barrierefreie Content-Erstellung

Strukturierte Inhalte erfordern semantische HTML-Struktur und ARIA-Labels für VR-Elemente. Multimedia-Barrierefreiheit umfasst Untertitel in deutscher Sprache und gegebenenfalls anderen Sprachen, Audiodeskription für wichtige visuelle Informationen, Transkriptionen als Textversion, Pausier-Funktion für nutzerbestimmtes Tempo und individuelle Lautstärke-Kontrolle.

Audio-Inhalte sollten klare Aussprache mit langsamem und deutlichem Sprechen haben, Hintergrundgeräusche minimieren, Wiederholbarkeit ermöglichen und visuelle Alternativen für wichtige Audio-Informationen bieten.

## Testing und Qualitätssicherung

Automatisierte Barrierefreiheits-Tests können mit Tools wie WAVE (Web Accessibility Evaluation Tool) als Browser-Extension, axe DevTools als Entwickler-Tools für Chrome/Firefox, Lighthouse für Google's Accessibility Audit und Pa11y als Kommandozeilen-Tool durchgeführt werden. Diese Tools können jedoch nur etwa 30 Prozent aller Barrieren erkennen und prüfen weder Semantik und Kontext noch Benutzerfreundlichkeit, weshalb manuelle Tests zusätzlich erforderlich sind.

Manuelle Tests mit assistiven Technologien umfassen Screenreader-Tests mit NVDA-Installation, VR-Anwendung mit ausgeschaltetem Bildschirm und Navigation nur mit Screenreader sowie Tests aller Funktionen auf Erreichbarkeit. Tastatur-Navigation sollte ohne Maus mit nur Tab, Enter und Pfeiltasten getestet werden, alle Hotspots sollten erreichbar sein, und die Fokus-Sichtbarkeit sollte geprüft werden.

Tests mit Menschen mit Behinderungen sind wichtig, da echte Nutzer:innen Probleme finden, die Tools übersehen, verschiedene Behinderungsarten unterschiedliche Bedürfnisse haben, Feedback aus erster Hand unbezahlbar ist und das Entwicklungsteam sensibilisiert wird. Organisatorisch sollten angemessene Vergütung für Testteilnahme, barrierefreie Testumgebung, flexible Testzeiten und Einbeziehung verschiedener Behinderungsarten gewährleistet werden.

## Rechtliche Compliance und Dokumentation

Eine Barrierefreiheitserklärung muss den Konformitätsstatus beschreiben, nicht barrierefreie Inhalte auflisten, Alternativen anbieten, einen Feedback-Mechanismus bereitstellen und Durchsetzungsverfahren erläutern. Die Dokumentation für Compliance sollte Accessibility-Tests mit Zeitpunkt, Methode und Ergebnissen, behobene Barrieren mit Vorher/Nachher-Vergleichen, bekannte Einschränkungen mit ehrlicher Auflistung von Problemen und eine Roadmap mit geplanten Verbesserungen und Zeitplan umfassen.

## Schulung und Sensibilisierung

Lehrkräfte-Fortbildung sollte Sensibilisierungs-Workshops mit Simulation von Behinderungen, Ausprobieren assistiver Technologien, rechtlichen Grundlagen und Best Practices umfassen. Praktische Übungen beinhalten das Schreiben von Alt-Texten, Erstellen von Untertiteln, Messen von Kontrasten und Durchführung von Nutzer:innen-Tests.

Schüler:innen sollten durch inklusive Projektarbeit einbezogen werden, bei der alle an gemeinsamer VR-Erstellung mitwirken, Peer-Testing durchgeführt wird, Empathie-Übungen durch Perspektivwechsel stattfinden und Awareness-Kampagnen zur Aufklärung über Barrierefreiheit durchgeführt werden.

Barrierefreiheit in immersiven Lernumgebungen ist nicht nur eine rechtliche Verpflichtung, sondern eine Chance, innovative und inklusive Bildung zu gestalten. Durch durchdachte Planung und Umsetzung können VR- und 360°-Technologien für alle Lernenden zugänglich werden und das Potenzial haben, Bildungsbarrieren abzubauen statt neue zu schaffen.

## Weiterführende Ressourcen

Für weitere Informationen empfehlen sich die WCAG 2.1 Guidelines unter w3.org/WAI/WCAG21/quickref/, die BITV 2.0 unter gesetze-im-internet.de/bitv_2_0/, die DIN EN 301 549 als europäische Norm für Barrierefreiheit und ISO 14289 für PDF-Barrierefreiheit.

Nützliche Tools und Software umfassen den NVDA Screenreader unter nvaccess.org (kostenlos), den Colour Contrast Analyser unter tpgi.com/color-contrast-checker/, die WAVE Browser Extension unter wave.webaim.org und axe DevTools unter deque.com/axe/devtools/.

Für Fortbildung und Beratung stehen BIK für Alle unter bik-fuer-alle.de, Aktion Mensch unter aktion-mensch.de/inklusion-schule/, die Bundesfachstelle Barrierefreiheit unter bundesfachstelle-barrierefreiheit.de und die Stiftung Digitale Chancen unter digitale-chancen.de zur Verfügung.

Fachverbände und Netzwerke umfassen den Deutschen Blinden- und Sehbehindertenverband unter dbsv.org, den Deutschen Gehörlosen-Bund unter gehoerlosen-bund.de, den Bundesverband Selbsthilfe Körperbehinderter unter bsk-ev.org und die Lebenshilfe Deutschland unter lebenshilfe.de.
`
  },
  // Für die Kurs-Sektion
  'Umsetzung': {
    title: 'Barrierefreiheit praktisch umsetzen',
    content: ({ onNavigateToNext }) => (
      <StepByStepGuide 
        steps={barrierefreiheitUmsetzungSteps}
        theoryContent={barrierefreiheitUmsetzungTheory}
        onNavigateToNext={onNavigateToNext}
        projectTitle="Barrierefreie Werkstatt-Tour"
        projectDescription="**Praxisübung:** Machen Sie Ihre bestehende Werkstatt-Tour für alle Nutzer zugänglich - unabhängig von ihren Fähigkeiten."
      />
    )
  }
};