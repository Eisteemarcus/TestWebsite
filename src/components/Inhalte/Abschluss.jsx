import { StepByStepGuide } from '../ui/StepByStepGuide.jsx';

// Schritt-für-Schritt Anleitung für Zusammenfassung
const zusammenfassungSteps = [
  {
    title: "Gelerntes reflektieren und dokumentieren",
    content: `
## Schritt 1: Ihre Lernerfahrungen zusammenfassen

**Was haben Sie in diesem Kurs gelernt?**

Nehmen Sie sich einen Moment Zeit, um über Ihre Lernerfahrungen zu reflektieren:

1. **Didaktische Szenarien** - Wie können 360°-Umgebungen den Unterricht bereichern?
2. **Technische Fähigkeiten** - Welche neuen Tools und Techniken beherrschen Sie jetzt?
3. **Praktische Erfahrungen** - Welche Herausforderungen haben Sie gemeistert?
4. **Barrierefreiheit** - Wie können Sie inklusive Lernumgebungen gestalten?

**Dokumentieren Sie Ihre Erkenntnisse:**
- Erstellen Sie eine persönliche Checkliste für zukünftige VR-Projekte
- Notieren Sie sich bewährte Praktiken und Tipps
- Sammeln Sie Ideen für den Einsatz in Ihrem Unterricht
- Identifizieren Sie Bereiche für weitere Vertiefung

**Ihre wichtigsten Takeaways:**
\`\`\`
Meine Top 5 Erkenntnisse:
1. ________________________________
2. ________________________________
3. ________________________________
4. ________________________________
5. ________________________________
\`\`\`
    `,
    tip: "Schreiben Sie Ihre Erkenntnisse auf, solange sie noch frisch sind. Diese Notizen werden Ihnen bei zukünftigen Projekten sehr helfen."
  },
  {
    title: "Erstes eigenes VR-Projekt planen",
    content: `
## Schritt 2: Vom Wissen zur Anwendung

**Projektidee entwickeln:**

Basierend auf dem Gelernten, planen Sie Ihr erstes eigenes VR-Projekt:

1. **Zielgruppe definieren** - Welche Klasse/Altersgruppe?
2. **Lernziele festlegen** - Was sollen die Schüler lernen?
3. **Raum auswählen** - Welcher Ort eignet sich für 360°-Aufnahmen?
4. **Interaktionen planen** - Welche Hotspots und Medien werden benötigt?

**Projekt-Steckbrief:**
\`\`\`
Mein VR-Projekt:
Titel: ________________________________
Fach/Bereich: _________________________
Zielgruppe: ___________________________
Hauptlernziel: ________________________
Aufnahmeort: __________________________
Geplante Hotspots: ____________________
Benötigte Medien: _____________________
Zeitrahmen: ___________________________
\`\`\`

**Ressourcen und Unterstützung:**
- **Hardware:** Welche 360°-Kamera können Sie nutzen?
- **Software:** 3DVista-Zugang über SLUB Dresden Makerspace
- **Unterstützung:** Kollegen, IT-Support, externe Hilfe
- **Budget:** Welche Kosten entstehen (falls vorhanden)?

**Erste Schritte definieren:**
1. Genehmigungen einholen (Schulleitung, Datenschutz)
2. Aufnahmetermin planen
3. Benötigte Ausrüstung organisieren
4. Testaufnahmen durchführen
    `,
    tip: "Starten Sie klein! Ein einfaches Projekt mit 2-3 Szenen ist besser als ein komplexes Projekt, das nie fertig wird."
  },
  {
    title: "Netzwerk aufbauen und Erfahrungen teilen",
    content: `
## Schritt 3: Community und Austausch

**Vernetzen Sie sich mit Gleichgesinnten:**

1. **Lokale Netzwerke**
   - Kollegen an Ihrer Schule
   - Regionale Lehrerfortbildungen
   - Medienzentren und Bildungsträger
   - SLUB Dresden Makerspace Community

2. **Online-Communities**
   - Social Media Gruppen für VR in der Bildung
   - Fachforen und Diskussionsplattformen
   - YouTube-Kanäle und Tutorials
   - Webinare und Online-Konferenzen

3. **Professionelle Netzwerke**
   - Gesellschaft für Medien in der Wissenschaft (GMW)
   - Arbeitskreis VR/AR in der Bildung
   - Regionale Bildungsnetzwerke
   - Universitäre Forschungsgruppen

**Ihre Erfahrungen teilen:**
- **Blog-Artikel** über Ihre ersten VR-Projekte
- **Präsentationen** bei Lehrerkonferenzen
- **Workshops** für Kollegen anbieten
- **Social Media** Posts mit Tipps und Tricks

**Feedback einholen und geben:**
- Testen Sie VR-Projekte anderer und geben konstruktives Feedback
- Bitten Sie um Rückmeldungen zu Ihren eigenen Projekten
- Teilen Sie Erfolge und auch Misserfolge - beides ist lehrreich
- Dokumentieren Sie Best Practices für die Community
    `,
    tip: "Teilen Sie Ihre Erfahrungen früh und oft. Die VR-Bildungs-Community ist sehr hilfsbereit und unterstützend."
  },
  {
    title: "Weiterbildung und Vertiefung planen",
    content: `
## Schritt 4: Kontinuierliches Lernen

**Bereiche für Vertiefung identifizieren:**

Basierend auf Ihren Erfahrungen und Interessen, welche Bereiche möchten Sie vertiefen?

**Technische Vertiefung:**
- **Erweiterte 3DVista-Funktionen** - Scripting, Custom Skins
- **360°-Video-Produktion** - Bewegte Inhalte erstellen
- **3D-Modellierung** - Eigene 3D-Objekte für VR
- **Programmierung** - WebVR, A-Frame, Unity

**Pädagogische Vertiefung:**
- **Lernpsychologie in VR** - Wie lernt das Gehirn in virtuellen Umgebungen?
- **Gamification** - Spielelemente in VR-Lernumgebungen
- **Kollaboratives Lernen** - Mehrbenutzererfahrungen
- **Assessment in VR** - Leistungsbewertung in virtuellen Umgebungen

**Weiterbildungsmöglichkeiten:**
\`\`\`
Mein Weiterbildungsplan:
Nächste 3 Monate: _____________________
Nächste 6 Monate: _____________________
Nächstes Jahr: ________________________
Langfristige Ziele: ___________________
\`\`\`

**Ressourcen für kontinuierliches Lernen:**
- **Online-Kurse** - Coursera, edX, Udemy
- **YouTube-Tutorials** - Kostenlose Lernvideos
- **Fachbücher und Artikel** - Aktuelle Forschung verfolgen
- **Konferenzen und Workshops** - Persönlicher Austausch
- **Experimentieren** - Eigene Projekte als Lernmöglichkeit
    `,
    tip: "Setzen Sie sich realistische Lernziele. Lieber kontinuierlich kleine Schritte als sporadische große Sprünge."
  },
  {
    title: "Erfolg messen und feiern",
    content: `
## Schritt 5: Ihre Erfolge würdigen

**Erfolg definieren und messen:**

Was bedeutet Erfolg für Sie in der VR-Bildung?

**Quantitative Metriken:**
- Anzahl erstellter VR-Projekte
- Anzahl erreichte Schüler
- Feedback-Bewertungen
- Technische Fähigkeiten erworben

**Qualitative Indikatoren:**
- Begeisterung der Schüler für das Lernen
- Verbesserte Lernergebnisse
- Eigene Zufriedenheit mit den Projekten
- Anerkennung von Kollegen und Vorgesetzten

**Ihre Erfolge dokumentieren:**
\`\`\`
Meine VR-Erfolge:
Erstes VR-Projekt: ____________________
Datum: _______________________________
Erreichte Schüler: ____________________
Besondere Erfolge: ____________________
Gelerntes: ____________________________
Nächste Schritte: _____________________
\`\`\`

**Erfolge feiern und teilen:**
- **Persönliche Anerkennung** - Gönnen Sie sich eine Belohnung
- **Team-Erfolg** - Feiern Sie mit Kollegen und Schülern
- **Öffentliche Anerkennung** - Teilen Sie Erfolgsgeschichten
- **Inspiration für andere** - Motivieren Sie Kollegen zum Mitmachen

**Herausforderungen als Lerngelegenheiten:**
- Jeder Fehler ist eine Lernmöglichkeit
- Technische Probleme machen Sie zum Experten
- Negative Feedback hilft bei der Verbesserung
- Schwierigkeiten zeigen Bereiche für Wachstum

**Langfristige Vision:**
Wo sehen Sie sich in einem Jahr mit VR in der Bildung? Welchen Beitrag möchten Sie zur Transformation des Lernens leisten?
    `,
    tip: "Dokumentieren Sie Ihre Reise mit Fotos, Screenshots und Notizen. Sie werden überrascht sein, wie viel Sie in kurzer Zeit erreicht haben!"
  }
];

// Theorie-Inhalte für Zusammenfassung
const zusammenfassungTheory = [
  {
    title: "VR in der Bildung: Aktueller Stand und Zukunft",
    content: `
**Aktuelle Entwicklungen:**
- **Hardware wird günstiger** - VR-Brillen unter 300€ verfügbar
- **Software wird benutzerfreundlicher** - No-Code-Lösungen wie 3DVista
- **Inhalte werden vielfältiger** - Mehr Bildungsinhalte verfügbar
- **Forschung zeigt Wirksamkeit** - Positive Lerneffekte nachgewiesen

**Trends und Zukunftsaussichten:**
- **Mixed Reality (MR)** - Verschmelzung von VR und AR
- **Künstliche Intelligenz** - Personalisierte VR-Lernerfahrungen
- **5G-Technologie** - Streaming von VR-Inhalten ohne lokale Hardware
- **Haptisches Feedback** - Fühlen in virtuellen Umgebungen

**Herausforderungen:**
- **Technische Hürden** - Hardware-Anforderungen und Kompatibilität
- **Pädagogische Integration** - Sinnvolle Einbindung in den Lehrplan
- **Kosten-Nutzen-Verhältnis** - Rechtfertigung der Investitionen
- **Lehrerfortbildung** - Qualifizierung des pädagogischen Personals

**Erfolgsfaktoren:**
- **Klare Lernziele** - VR als Mittel, nicht als Selbstzweck
- **Benutzerfreundlichkeit** - Einfache Bedienung für Lehrer und Schüler
- **Technischer Support** - Zuverlässige Unterstützung bei Problemen
- **Community** - Austausch und Zusammenarbeit zwischen Bildungseinrichtungen
    `
  },
  {
    title: "Lessons Learned aus der Praxis",
    content: `
**Häufige Anfängerfehler:**
- **Zu komplex starten** - Einfache Projekte sind oft wirkungsvoller
- **Technik über Pädagogik** - Lernziele sollten die Technologie bestimmen
- **Isolation** - Alleine arbeiten statt Community zu nutzen
- **Perfektionismus** - Warten auf das "perfekte" Projekt

**Bewährte Praktiken:**
- **Iterative Entwicklung** - Kleine Schritte, kontinuierliche Verbesserung
- **Nutzerfeedback** - Schüler und Kollegen früh einbeziehen
- **Dokumentation** - Prozesse und Erkenntnisse festhalten
- **Backup-Pläne** - Technische Alternativen bereithalten

**Erfolgsmuster:**
- **Start mit vorhandenen Räumen** - Eigene Schule als erste VR-Umgebung
- **Kollaboration** - Fächerübergreifende Projekte entwickeln
- **Schüler einbeziehen** - Als Co-Entwickler und Tester
- **Schrittweise Erweiterung** - Von einfachen zu komplexen Projekten

**Nachhaltigkeit sicherstellen:**
- **Wartung planen** - Regelmäßige Updates und Pflege
- **Wissen teilen** - Kollegen schulen und einbeziehen
- **Ressourcen sichern** - Langfristige Finanzierung klären
- **Evaluation** - Wirksamkeit messen und dokumentieren
    `
  },
  {
    title: "Ressourcen für die Zukunft",
    content: `
**Technische Ressourcen:**
- **3DVista Community** - Forum und Tutorials
- **YouTube-Kanäle** - VR-Bildung und 360°-Produktion
- **GitHub-Repositories** - Open-Source-VR-Projekte
- **Online-Kurse** - Coursera, edX, Udemy VR-Kurse

**Pädagogische Ressourcen:**
- **Bildungsserver** - Länderspezifische VR-Materialien
- **Forschungspublikationen** - Aktuelle Studien zu VR in der Bildung
- **Best-Practice-Sammlungen** - Erfolgreiche Projekte als Inspiration
- **Webinare und Konferenzen** - Regelmäßige Weiterbildung

**Community-Ressourcen:**
- **Social Media Gruppen** - Facebook, LinkedIn, Reddit
- **Fachforen** - Spezialisierte Diskussionsplattformen
- **Lokale Meetups** - Persönlicher Austausch vor Ort
- **Mentoring-Programme** - Erfahrene Praktiker als Unterstützung

**Finanzierungsquellen:**
- **Bildungsministerien** - Förderprogramme für digitale Bildung
- **EU-Programme** - Erasmus+, Horizon Europe
- **Stiftungen** - Private Bildungsstiftungen
- **Crowdfunding** - Community-finanzierte Projekte

**Langfristige Planung:**
- **Technologie-Roadmap** - Entwicklung der VR-Technologie verfolgen
- **Curriculum-Integration** - VR in Lehrpläne einbetten
- **Infrastruktur-Entwicklung** - Schulische IT-Ausstattung planen
- **Personalentwicklung** - Lehrerfortbildung strategisch angehen
    `
  }
];

// Schritt-für-Schritt Anleitung für Evaluation
const evaluationSteps = [
  {
    title: "Kurs-Feedback strukturiert geben",
    content: `
## Schritt 1: Ihre Erfahrungen mit diesem Kurs bewerten

**Bewertungskriterien:**

Bitte bewerten Sie die folgenden Aspekte des Kurses auf einer Skala von 1 (sehr schlecht) bis 5 (sehr gut):

**Inhaltliche Qualität:**
- Relevanz für Ihren Unterricht: ___/5
- Verständlichkeit der Erklärungen: ___/5
- Praxisnähe der Beispiele: ___/5
- Vollständigkeit der Themen: ___/5

**Didaktische Gestaltung:**
- Struktur und Aufbau: ___/5
- Interaktive Elemente: ___/5
- Schritt-für-Schritt-Anleitungen: ___/5
- Theoretische Hintergründe: ___/5

**Technische Umsetzung:**
- Benutzerfreundlichkeit: ___/5
- Ladezeiten und Performance: ___/5
- Mobile Optimierung: ___/5
- Barrierefreiheit: ___/5

**Gesamtbewertung:**
- Würden Sie den Kurs weiterempfehlen? Ja/Nein
- Gesamtnote: ___/5
    `,
    tip: "Seien Sie ehrlich in Ihrer Bewertung. Konstruktives Feedback hilft dabei, den Kurs für zukünftige Teilnehmer zu verbessern."
  },
  {
    title: "Verbesserungsvorschläge entwickeln",
    content: `
## Schritt 2: Konkrete Verbesserungsideen formulieren

**Was hat Ihnen besonders gut gefallen?**

Notieren Sie die Stärken des Kurses:
\`\`\`
Positive Aspekte:
1. ________________________________
2. ________________________________
3. ________________________________
\`\`\`

**Was könnte verbessert werden?**

Identifizieren Sie Bereiche mit Verbesserungspotential:
\`\`\`
Verbesserungsvorschläge:
1. ________________________________
2. ________________________________
3. ________________________________
\`\`\`

**Fehlende Inhalte:**
- Welche Themen hätten Sie sich zusätzlich gewünscht?
- Welche Aspekte wurden zu oberflächlich behandelt?
- Welche praktischen Übungen hätten geholfen?

**Strukturelle Verbesserungen:**
- Sollten Kapitel anders angeordnet werden?
- Sind die Lernschritte zu groß oder zu klein?
- Fehlen Zwischentests oder Selbstkontrollen?

**Technische Verbesserungen:**
- Welche Features würden die Nutzung erleichtern?
- Gibt es Probleme mit bestimmten Geräten oder Browsern?
- Sind zusätzliche Medienformate wünschenswert?
    `,
    tip: "Denken Sie auch an Ihre Kollegen: Was würde anderen Lehrern beim Einstieg in VR helfen?"
  },
  {
    title: "Langfristige Unterstützung bewerten",
    content: `
## Schritt 3: Bedarf für weitere Unterstützung einschätzen

**Welche Art von Unterstützung benötigen Sie nach dem Kurs?**

**Technische Unterstützung:**
- Hilfe bei der ersten Projektrealisierung
- Troubleshooting bei technischen Problemen
- Updates zu neuen Features und Funktionen
- Hardware-Beratung und -Empfehlungen

**Pädagogische Unterstützung:**
- Beispiele für verschiedene Fächer und Klassenstufen
- Methoden zur Lernerfolgsmessung in VR
- Integration in bestehende Curricula
- Differenzierung für verschiedene Lerntypen

**Community und Austausch:**
- Regelmäßige Online-Meetups
- Forum für Fragen und Erfahrungsaustausch
- Mentoring-Programme
- Projektpartnerschaften zwischen Schulen

**Weiterführende Kurse:**
Welche Vertiefungskurse wären interessant?
\`\`\`
Gewünschte Folgekurse:
□ Erweiterte 3DVista-Funktionen
□ 360°-Video-Produktion
□ VR-Programmierung für Einsteiger
□ Barrierefreiheit in VR vertiefen
□ VR-Assessment und Evaluation
□ Andere: ________________________
\`\`\`

**Unterstützungsformat:**
- Online-Sprechstunden
- Präsenz-Workshops
- Peer-Learning-Gruppen
- Individuelle Beratung
    `,
    tip: "Überlegen Sie, welche Unterstützung Sie realistisch nutzen würden. Qualität geht vor Quantität."
  },
  {
    title: "Feedback zur Kurs-Plattform",
    content: `
## Schritt 4: Technische Plattform bewerten

**Benutzerfreundlichkeit der Lernplattform:**

**Navigation und Struktur:**
- War die Kursstruktur logisch und nachvollziehbar?
- Konnten Sie leicht zwischen Kapiteln wechseln?
- War der Fortschritt klar erkennbar?
- Funktionierte die Suchfunktion gut?

**Interaktive Elemente:**
- Wie fanden Sie die Schritt-für-Schritt-Anleitungen?
- Waren die Theorie-Abschnitte hilfreich?
- Funktionierte das Fortschritts-Tracking?
- Gab es technische Probleme?

**Responsive Design:**
- Funktionierte der Kurs auf Ihrem Smartphone?
- War die Darstellung auf dem Tablet optimal?
- Gab es Probleme mit bestimmten Browsern?
- Waren die Ladezeiten akzeptabel?

**Barrierefreiheit:**
- Konnten Sie alle Inhalte gut lesen?
- Waren die Kontraste ausreichend?
- Funktionierte die Tastaturnavigation?
- Gab es Probleme mit Screenreadern?

**Verbesserungsvorschläge für die Plattform:**
\`\`\`
Technische Verbesserungen:
1. ________________________________
2. ________________________________
3. ________________________________
\`\`\`
    `,
    tip: "Testen Sie die Plattform bewusst auf verschiedenen Geräten, um umfassendes Feedback geben zu können."
  },
  {
    title: "Abschließende Bewertung und Empfehlungen",
    content: `
## Schritt 5: Gesamtfazit und Weiterempfehlung

**Ihr Gesamtfazit:**

**Lernziele erreicht?**
- Haben Sie die zu Beginn gesetzten Lernziele erreicht?
- Fühlen Sie sich bereit für Ihr erstes VR-Projekt?
- Welche Kompetenzen haben Sie neu erworben?
- Was war die wichtigste Erkenntnis für Sie?

**Weiterempfehlung:**
\`\`\`
Empfehlung an Kollegen:
Würden Sie diesen Kurs weiterempfehlen? □ Ja □ Nein

Für welche Zielgruppe ist der Kurs besonders geeignet?
□ VR-Einsteiger ohne Vorerfahrung
□ Technik-affine Lehrkräfte
□ Medienpädagogen
□ Schulleitungen
□ Andere: ________________________

In welchen Situationen würden Sie den Kurs empfehlen?
□ Bei Interesse an digitaler Bildung
□ Für innovative Unterrichtsmethoden
□ Bei Verfügbarkeit entsprechender Hardware
□ Für fächerübergreifende Projekte
□ Andere: ________________________
\`\`\`

**Langfristige Wirkung:**
- Wie wird sich dieser Kurs auf Ihren Unterricht auswirken?
- Welche Projekte planen Sie konkret?
- Wie werden Sie Ihr Wissen an Kollegen weitergeben?
- Welche Unterstützung benötigen Sie für die Umsetzung?

**Abschließende Worte:**
Nutzen Sie diesen Raum für abschließende Kommentare, Anregungen oder persönliche Nachrichten an die Kursersteller.

**Vielen Dank für Ihr Feedback!**
Ihr Feedback ist wertvoll für die Weiterentwicklung des Kurses und hilft anderen Lehrkräften bei der Entscheidung für VR in der Bildung.
    `,
    tip: "Ihr ehrliches Feedback trägt dazu bei, dass zukünftige Kursteilnehmer eine noch bessere Lernerfahrung haben."
  }
];

// Theorie-Inhalte für Evaluation
const evaluationTheory = [
  {
    title: "Bedeutung von Feedback in der Bildung",
    content: `
**Warum ist Feedback wichtig?**
- **Qualitätsverbesserung** - Kontinuierliche Optimierung von Lernangeboten
- **Bedarfsorientierung** - Anpassung an tatsächliche Lernerbedürfnisse
- **Motivation** - Wertschätzung der Lernenden-Perspektive
- **Innovation** - Neue Ideen und Ansätze durch Nutzerfeedback

**Arten von Feedback:**
- **Formatives Feedback** - Während des Lernprozesses
- **Summatives Feedback** - Am Ende des Kurses
- **Peer-Feedback** - Von anderen Lernenden
- **Selbstreflexion** - Eigene Bewertung des Lernfortschritts

**Qualitätskriterien für gutes Feedback:**
- **Spezifisch** - Konkrete Beispiele und Situationen
- **Konstruktiv** - Verbesserungsvorschläge statt nur Kritik
- **Zeitnah** - Möglichst direkt nach der Erfahrung
- **Ausgewogen** - Positive und negative Aspekte
- **Handlungsorientiert** - Umsetzbare Empfehlungen

**Feedback-Kultur entwickeln:**
- **Offenheit** - Ehrliches Feedback ist erwünscht
- **Wertschätzung** - Feedback wird ernst genommen
- **Transparenz** - Umgang mit Feedback ist nachvollziehbar
- **Kontinuität** - Regelmäßige Feedback-Zyklen
    `
  },
  {
    title: "Evaluation von E-Learning-Angeboten",
    content: `
**Kirkpatrick-Modell der Evaluation:**

**Level 1 - Reaktion:**
- Zufriedenheit der Lernenden
- Bewertung von Inhalten und Methoden
- Technische Aspekte der Plattform
- Gesamteindruck des Kurses

**Level 2 - Lernen:**
- Wissenszuwachs messbar
- Kompetenzentwicklung
- Einstellungsänderungen
- Selbsteinschätzung der Fähigkeiten

**Level 3 - Verhalten:**
- Anwendung im Arbeitsalltag
- Umsetzung gelernter Methoden
- Verhaltensänderungen
- Transfer in die Praxis

**Level 4 - Ergebnisse:**
- Organisationale Wirkung
- Verbesserung der Bildungsqualität
- Return on Investment
- Langfristige Auswirkungen

**Evaluationsmethoden:**
- **Quantitative Methoden** - Umfragen, Tests, Statistiken
- **Qualitative Methoden** - Interviews, Fokusgruppen, Beobachtungen
- **Mixed Methods** - Kombination verschiedener Ansätze
- **Longitudinale Studien** - Langzeitbetrachtung der Wirkung
    `
  },
  {
    title: "Kontinuierliche Verbesserung von Bildungsangeboten",
    content: `
**PDCA-Zyklus in der Bildung:**

**Plan (Planen):**
- Lernziele definieren
- Zielgruppe analysieren
- Methoden auswählen
- Ressourcen planen

**Do (Durchführen):**
- Kurs implementieren
- Lernprozess begleiten
- Daten sammeln
- Probleme dokumentieren

**Check (Überprüfen):**
- Feedback auswerten
- Lernziele überprüfen
- Erfolg messen
- Schwachstellen identifizieren

**Act (Handeln):**
- Verbesserungen umsetzen
- Prozesse anpassen
- Standards aktualisieren
- Nächsten Zyklus planen

**Agile Entwicklung in der Bildung:**
- **Iterative Entwicklung** - Kleine, häufige Verbesserungen
- **Nutzerzentriert** - Lernende im Mittelpunkt
- **Flexibel** - Anpassung an veränderte Bedürfnisse
- **Kollaborativ** - Einbeziehung aller Stakeholder

**Datengetriebene Entscheidungen:**
- **Learning Analytics** - Auswertung von Lernverhalten
- **A/B-Testing** - Vergleich verschiedener Ansätze
- **Predictive Analytics** - Vorhersage von Lernerfolg
- **Personalisierung** - Individuelle Anpassung
    `
  }
];

export const abschlussContent = {
  'Zusammenfassung': {
    title: 'Zusammenfassung',
    content: ({ onNavigateToNext }) => (
      <StepByStepGuide 
        steps={zusammenfassungSteps}
        theoryContent={zusammenfassungTheory}
        onNavigateToNext={onNavigateToNext}
      />
    )
  },
  'Evaluation': {
    title: 'Evaluation & Feedback',
    content: ({ onNavigateToNext }) => (
      <StepByStepGuide 
        steps={evaluationSteps}
        theoryContent={evaluationTheory}
        onNavigateToNext={onNavigateToNext}
      />
    )
  }
};