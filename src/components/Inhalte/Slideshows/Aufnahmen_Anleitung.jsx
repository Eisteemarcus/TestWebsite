export const aufnahmetechnikenSteps = [
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