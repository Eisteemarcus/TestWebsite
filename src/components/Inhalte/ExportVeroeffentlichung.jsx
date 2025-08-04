import { StepByStepGuide } from '../ui/StepByStepGuide.jsx';

// Fortsetzung des Werkstatt-Projekts
const projectTitle = "Virtuelle Werkstattführung für Arbeitssicherheit";
const projectDescription = `
**Finaler Schritt:** Ihre interaktive Werkstatt-Tour ist fertig! Jetzt machen wir sie für Schüler:innen und Kollegen zugänglich.

**In diesem Kapitel lernen Sie:**
- Professionelle Export-Einstellungen
- Verschiedene Veröffentlichungs-Optionen
- Wartung und Updates
- Rechtssichere Bereitstellung
`;

// Schritt-für-Schritt Anleitung für Export und Veröffentlichung
const exportSteps = [
  {
    title: "Export-Einstellungen optimieren",
    content: `
## Schritt 1: Professionelle Export-Konfiguration für Schulen

**HTML5-Export für maximale Kompatibilität:**
1. **Datei → Exportieren → HTML5** wählen
2. **Ausgabeordner** festlegen (z.B. "Werkstatt_Tour_v1.0")
3. **Export-Einstellungen** öffnen

**Optimale Einstellungen für Schulumgebung:**
\`\`\`
Qualität: Hoch (für beste Darstellung)
Komprimierung: Mittel (Balance Qualität/Größe)
Progressive Loading: Aktiviert (schnellerer Start)
Mobile Optimierung: Aktiviert (Tablets/Smartphones)
Offline-Modus: Aktiviert (funktioniert ohne Internet)
Autorotation: Aktiviert (automatische Bildschirmdrehung)
\`\`\`

**Erweiterte Einstellungen:**
- **Startszene:** "Werkstatt_Eingang" (Orientierung)
- **Ladebildschirm:** Schullogo oder Projektbild
- **Favicon:** Schul-Icon für Browser-Tab
- **Titel:** "Werkstatt-Sicherheitstour - [Schulname]"

**Barrierefreiheits-Optionen:**
- **Tastaturnavigation:** Aktiviert
- **Screenreader-Support:** Aktiviert
- **Hohe Kontraste:** Optional verfügbar
- **Textvergrößerung:** Bis 200% unterstützt

**Datenschutz-konforme Einstellungen:**
- **Analytics:** Nur mit Einverständnis
- **Cookies:** Minimal notwendige
- **Externe Links:** Deutlich kennzeichnen
    `,
    tip: "Erstellen Sie verschiedene Export-Varianten: Eine hochauflösende für Desktop und eine komprimierte für mobile Geräte.",
    teacherNote: "Testen Sie den Export auf den Schulcomputern. Oft haben diese andere Einstellungen als Ihr privater Rechner."
  },
  {
    title: "Lokale Bereitstellung für Schulnetzwerk",
    content: `
## Schritt 2: Tour im Schulnetzwerk verfügbar machen

**Für Schulserver/Intranet:**
1. **Exportierten Ordner** komplett kopieren
2. **Auf Schulserver** hochladen (IT-Support fragen)
3. **Interne URL** erstellen (z.B. http://schulserver/werkstatt-tour)
4. **Zugriffsrechte** für Klassen einrichten

**USB-Stick für Offline-Nutzung:**
\`\`\`
USB-Stick Struktur:
├── Werkstatt_Tour/
│   ├── index.html (Startdatei)
│   ├── assets/ (Bilder, Audio, etc.)
│   └── js/ (Programmdateien)
├── Anleitung_Lehrer.pdf
├── Arbeitsblatt_Schueler.pdf
└── Autostart.bat (Windows)
\`\`\`

**Autostart-Skript erstellen:**
\`\`\`batch
@echo off
echo Starte Werkstatt-Sicherheitstour...
start "" "Werkstatt_Tour/index.html"
\`\`\`

**Netzwerk-Installation:**
- **Freigabe-Ordner** auf Server erstellen
- **Lese-Rechte** für alle Schüler
- **Schreib-Rechte** nur für Lehrer (Updates)
- **Backup-Kopie** auf zweitem Server

**QR-Code für einfachen Zugang:**
1. **QR-Code-Generator** nutzen (z.B. qr-code-generator.com)
2. **URL der Tour** eingeben
3. **QR-Code** ausdrucken und in Werkstatt aufhängen
4. **Schüler scannen** mit Smartphone

**Technische Voraussetzungen prüfen:**
- **Browser-Kompatibilität:** Chrome, Firefox, Safari, Edge
- **JavaScript aktiviert** (meist Standard)
- **WebGL-Unterstützung** (für 3D-Darstellung)
- **Mindest-Bandbreite:** 2 Mbps für flüssige Darstellung
    `,
    tip: "Erstellen Sie eine einfache Anleitung für Kollegen: 'Doppelklick auf index.html - fertig!'",
    teacherNote: "Koordinieren Sie sich mit der IT-Abteilung. Sie können bei Firewall-Einstellungen und Zugriffsrechten helfen."
  },
  {
    title: "Cloud-Hosting und Online-Bereitstellung",
    content: `
## Schritt 3: Tour online verfügbar machen

**Kostenlose Hosting-Optionen für Schulen:**

**GitHub Pages (kostenlos):**
1. **GitHub-Account** erstellen
2. **Repository** anlegen: "werkstatt-sicherheitstour"
3. **Exportierte Dateien** hochladen
4. **GitHub Pages** aktivieren
5. **URL:** https://[username].github.io/werkstatt-sicherheitstour

**Netlify (kostenlos bis 100GB):**
1. **Netlify.com** besuchen
2. **Drag & Drop** des Export-Ordners
3. **Automatische URL** erhalten
4. **Custom Domain** optional (z.B. werkstatt.schule.de)

**Google Drive (für kleine Touren):**
1. **Ordner in Google Drive** erstellen
2. **Dateien hochladen** und öffentlich freigeben
3. **index.html** direkt aufrufbar
4. **Einfache Verwaltung** über bekannte Oberfläche

**Schul-Cloud-Lösungen:**
- **Moodle-Integration:** Als SCORM-Paket
- **Microsoft 365:** SharePoint-Hosting
- **Google Workspace:** Sites-Integration
- **Landesmedienzentren:** Oft kostenlose Hosting-Services

**Domain und SSL-Zertifikat:**
\`\`\`
Professionelle URL: https://vr-werkstatt.meine-schule.de
SSL-Verschlüsselung: Automatisch bei modernen Hostern
Subdomain: Einfach zu merken und zu teilen
\`\`\`

**Content Delivery Network (CDN):**
- **Cloudflare:** Kostenlose Beschleunigung
- **Bessere Performance** weltweit
- **DDoS-Schutz** inklusive
- **Analytics** und Statistiken
    `,
    video: {
      src: "/videos/cloud-hosting-demo.mp4",
      poster: "/images/hosting-preview.jpg",
      description: "Schritt-für-Schritt: VR-Tour auf GitHub Pages veröffentlichen"
    },
    tip: "Beginnen Sie mit kostenlosen Optionen. Wenn die Tour erfolgreich ist, können Sie später auf professionelles Hosting upgraden.",
    teacherNote: "Prüfen Sie die Datenschutzbestimmungen Ihrer Schule. Manche Schulen haben Vorgaben für externe Hosting-Dienste."
  },
  {
    title: "Benutzerhandbuch und Dokumentation erstellen",
    content: `
## Schritt 4: Professionelle Dokumentation für nachhaltigen Einsatz

**Schüler-Anleitung erstellen:**
\`\`\`
"Anleitung: Virtuelle Werkstatt-Tour"

1. Starten:
   - Link anklicken oder QR-Code scannen
   - Warten bis "Start" erscheint

2. Navigation:
   - Maus: Umschauen durch Ziehen
   - Hotspots: Anklicken für Informationen
   - Pfeile: Zwischen Räumen wechseln

3. Quiz:
   - Fragen ehrlich beantworten
   - Bei falscher Antwort: Erklärung lesen
   - Alle Bereiche besuchen für Vollständigkeit

4. Hilfe:
   - Bei Problemen: Lehrer fragen
   - Technische Probleme: Browser neu laden
\`\`\`

**Lehrer-Handbuch entwickeln:**
- **Lernziele** und Kompetenzen
- **Zeitplanung** (45 Min Einzelarbeit + 15 Min Besprechung)
- **Vorbereitung** (Computer, Kopfhörer, Arbeitsblätter)
- **Durchführung** (Einführung, Arbeitsphase, Auswertung)
- **Nachbereitung** (Diskussion, Vertiefung, Transfer)
- **Bewertungskriterien** und Checklisten

**Arbeitsblätter gestalten:**
\`\`\`
Arbeitsblatt: "Sicherheit in der Werkstatt"

Aufgabe 1: Finden Sie 5 Sicherheitsmängel
□ Herumliegende Werkzeuge
□ Offene Schränke  
□ Fehlende Schutzausrüstung
□ Blockierte Notausgänge
□ Defekte Geräte

Aufgabe 2: Quiz-Ergebnisse notieren
Kreissäge: ___/5 Punkte
Werkbank: ___/5 Punkte
Erste Hilfe: ___/5 Punkte

Aufgabe 3: Reflexion
Was war neu für Sie?
Was werden Sie anders machen?
\`\`\`

**Technische Dokumentation:**
- **Systemanforderungen** (Browser, Hardware)
- **Installation** und Setup
- **Troubleshooting** häufiger Probleme
- **Update-Prozess** für neue Versionen
- **Backup-Strategien** und Datensicherung

**Rechtliche Dokumentation:**
- **Impressum** und Datenschutzerklärung
- **Bildrechte** und Lizenzen
- **Nutzungsbedingungen** für Schüler
- **DSGVO-Konformität** bestätigen
    `,
    tip: "Lassen Sie Schüler:innen die Anleitung testen. Sie finden oft Unklarheiten, die Erwachsene übersehen.",
    teacherNote: "Erstellen Sie eine FAQ-Liste basierend auf echten Schülerfragen. Das spart Zeit bei wiederholten Nachfragen."
  },
  {
    title: "Wartung, Updates und Qualitätssicherung",
    content: `
## Schritt 5: Langfristige Pflege und kontinuierliche Verbesserung

**Regelmäßige Wartungsaufgaben:**
\`\`\`
Wartungsplan:
Wöchentlich:
□ Funktionstest aller Links
□ Ladezeiten prüfen
□ Schüler-Feedback sammeln

Monatlich:
□ Browser-Kompatibilität testen
□ Mobile Darstellung prüfen
□ Backup erstellen

Quartalsweise:
□ Inhalte auf Aktualität prüfen
□ Sicherheitsvorschriften aktualisieren
□ Performance optimieren

Jährlich:
□ Komplette Überarbeitung
□ Neue Features integrieren
□ Technologie-Updates
\`\`\`

**Update-Prozess etablieren:**
1. **Änderungen in 3DVista** vornehmen
2. **Test-Export** erstellen und prüfen
3. **Backup der aktuellen Version** erstellen
4. **Neue Version** hochladen
5. **Funktionstest** auf Live-System
6. **Nutzer informieren** über Änderungen

**Feedback-System einrichten:**
- **Online-Formular** für Verbesserungsvorschläge
- **E-Mail-Adresse** für technische Probleme
- **Regelmäßige Umfragen** bei Schülern und Kollegen
- **Analyse der Nutzungsdaten** (wenn datenschutzkonform)

**Qualitätssicherung:**
- **Cross-Browser-Tests** (Chrome, Firefox, Safari, Edge)
- **Mobile Geräte** (Tablets, Smartphones)
- **Verschiedene Bildschirmgrößen** und Auflösungen
- **Langsame Internetverbindungen** simulieren
- **Barrierefreiheit** mit Screenreader testen

**Versionskontrolle:**
\`\`\`
Version 1.0: Erste Veröffentlichung
Version 1.1: Bugfixes und kleine Verbesserungen
Version 1.2: Neue Quiz-Fragen hinzugefügt
Version 2.0: Komplett überarbeitete Benutzeroberfläche
\`\`\`

**Backup-Strategie:**
- **3-2-1-Regel:** 3 Kopien, 2 verschiedene Medien, 1 extern
- **Automatische Backups** wenn möglich
- **Regelmäßige Restore-Tests** - funktioniert die Wiederherstellung?
- **Dokumentation** aller Backup-Prozesse

**Erfolg messen:**
- **Nutzungsstatistiken** - Wie oft wird die Tour verwendet?
- **Lernerfolgsmessung** - Verbessern sich die Noten?
- **Lehrer-Feedback** - Wird die Tour weiterempfohlen?
- **Schüler-Bewertungen** - Macht das Lernen mehr Spaß?

**Skalierung planen:**
- **Weitere Räume** hinzufügen (Chemielabor, Computerraum)
- **Andere Schulen** - Tour als Vorlage anbieten
- **Fächerübergreifend** - Physik, Chemie, Biologie
- **Mehrsprachigkeit** - Für internationale Klassen
    `,
    tip: "Planen Sie von Anfang an Zeit für Wartung ein. Eine gut gepflegte Tour wird über Jahre hinweg immer wertvoller.",
    teacherNote: "Dokumentieren Sie alle Erfahrungen und teilen Sie sie mit Kollegen. Ihr Wissen hilft anderen beim Erstellen eigener VR-Projekte."
  }
];

// Theorie-Inhalte für Export und Veröffentlichung
const exportTheory = [
  {
    title: "Web-Technologien für VR-Inhalte",
    content: `
**HTML5 und WebGL:**
Moderne VR-Touren basieren auf offenen Web-Standards, die in jedem aktuellen Browser funktionieren, ohne zusätzliche Plugins.

**Progressive Web Apps (PWA):**
3DVista-Touren können als PWA exportiert werden, was folgende Vorteile bietet:
- **Offline-Funktionalität** - Funktioniert ohne Internetverbindung
- **App-ähnliche Bedienung** - Installation auf Homescreen möglich
- **Push-Benachrichtigungen** - Für Updates und Erinnerungen
- **Automatische Updates** - Neue Versionen laden sich selbst

**Responsive Design:**
VR-Touren müssen auf verschiedenen Geräten funktionieren:
- **Desktop-Computer** - Maus und Tastatur
- **Tablets** - Touch-Bedienung, Gyrosensor
- **Smartphones** - Kleine Bildschirme, Touch-Gesten
- **VR-Brillen** - Immersive Darstellung, Controller

**Performance-Optimierung:**
- **Bildkomprimierung** - Kleinere Dateien, schnellere Ladezeiten
- **Lazy Loading** - Inhalte erst bei Bedarf laden
- **Caching** - Wiederverwendung bereits geladener Daten
- **CDN** - Geografisch verteilte Server für bessere Performance

**Barrierefreiheit im Web:**
- **WCAG 2.1 Standards** - Internationale Richtlinien
- **Tastaturnavigation** - Bedienung ohne Maus
- **Screenreader-Kompatibilität** - Für sehbehinderte Nutzer
- **Hohe Kontraste** - Bessere Lesbarkeit
    `
  },
  {
    title: "Hosting-Strategien für Bildungseinrichtungen",
    content: `
**On-Premise vs. Cloud-Hosting:**

**Lokales Hosting (On-Premise):**
- **Vorteile:** Vollständige Kontrolle, Datenschutz, keine laufenden Kosten
- **Nachteile:** Wartungsaufwand, begrenzte Skalierbarkeit
- **Geeignet für:** Kleine Schulen, sensible Daten, begrenzte Budgets

**Cloud-Hosting:**
- **Vorteile:** Skalierbarkeit, professionelle Wartung, weltweite Verfügbarkeit
- **Nachteile:** Laufende Kosten, Abhängigkeit vom Anbieter
- **Geeignet für:** Große Schulen, überregionale Projekte, hohe Verfügbarkeitsanforderungen

**Hybrid-Ansätze:**
- **Lokale Entwicklung** - Erstellung und Test vor Ort
- **Cloud-Bereitstellung** - Veröffentlichung für breite Nutzung
- **Backup-Strategien** - Lokale und Cloud-Sicherungen
- **Load Balancing** - Verteilung der Last auf mehrere Server

**Datenschutz und DSGVO:**
- **Datenminimierung** - Nur notwendige Daten sammeln
- **Einverständniserklärungen** - Explizite Zustimmung einholen
- **Recht auf Löschung** - Nutzer können Daten entfernen lassen
- **Transparenz** - Klare Information über Datenverwendung

**Kostenmodelle verstehen:**
- **Freemium** - Grundfunktionen kostenlos, Extras kostenpflichtig
- **Pay-per-Use** - Bezahlung nach tatsächlicher Nutzung
- **Flatrate** - Feste monatliche/jährliche Gebühr
- **Bildungsrabatte** - Spezielle Preise für Schulen und Universitäten
    `
  },
  {
    title: "Qualitätssicherung und Testing",
    content: `
**Systematisches Testing:**

**Funktionale Tests:**
- **Navigation** - Alle Links und Hotspots funktionieren
- **Multimedia** - Audio und Video spielen korrekt ab
- **Quiz-Systeme** - Fragen und Antworten sind korrekt
- **Responsive Design** - Darstellung auf verschiedenen Geräten

**Performance-Tests:**
- **Ladezeiten** - Unter 3 Sekunden für erste Inhalte
- **Bandbreiten-Tests** - Funktioniert auch bei langsamer Verbindung
- **Stress-Tests** - Verhalten bei vielen gleichzeitigen Nutzern
- **Memory-Leaks** - Speicherverbrauch über Zeit stabil

**Usability-Tests:**
- **Intuitive Bedienung** - Nutzer finden sich ohne Anleitung zurecht
- **Fehlertoleranz** - System reagiert robust auf Fehlbedienung
- **Accessibility** - Nutzbar für Menschen mit Behinderungen
- **Cognitive Load** - Nicht überfordernd für Zielgruppe

**Browser-Kompatibilität:**
\`\`\`
Test-Matrix:
           Chrome  Firefox  Safari  Edge
Windows      ✓       ✓       -      ✓
macOS        ✓       ✓       ✓      ✓
iOS          ✓       ✓       ✓      -
Android      ✓       ✓       -      ✓
\`\`\`

**Automatisierte Tests:**
- **Continuous Integration** - Automatische Tests bei jeder Änderung
- **Regression Tests** - Sicherstellen, dass alte Funktionen noch arbeiten
- **Performance Monitoring** - Kontinuierliche Überwachung der Geschwindigkeit
- **Uptime Monitoring** - Benachrichtigung bei Ausfällen

**Feedback-Integration:**
- **Beta-Testing** - Kleine Nutzergruppe testet vor Veröffentlichung
- **A/B-Testing** - Verschiedene Versionen parallel testen
- **User Analytics** - Verhalten der Nutzer analysieren
- **Iterative Verbesserung** - Kontinuierliche Optimierung basierend auf Daten
    `
  }
];

export const exportVeroeffentlichungContent = {
  'Export & Veröffentlichung': {
    title: 'Export und Veröffentlichung von VR-Touren',
    content: ({ onNavigateToNext }) => (
      <StepByStepGuide 
        steps={exportSteps}
        theoryContent={exportTheory}
        onNavigateToNext={onNavigateToNext}
        projectTitle={projectTitle}
        projectDescription={projectDescription}
      />
    )
  }
};