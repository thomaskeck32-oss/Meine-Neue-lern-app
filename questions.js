const TOPICS = [
  "Alle",
  "Löten",
  "K65",
  "Kältekreislauf",
  "Dichtheit",
  "Kältemittel",
  "Druck",
  "Pump Down",
  "Magnetventil",
  "Lüfter",
  "h-x-Diagramm",
  "Elektro",
  "MSS/MSR",
  "Druckschalter",
  "Schutzklassen",
  "RCD",
  "Kühlzelle",
  "Rohr",
  "Abtauung",
  "Vakuum",
  "Fehlersuche",
  "Sicherheit",
  "Rechnen"
];
const QUESTIONS = [
  {
    "topic": "Löten",
    "difficulty": 1,
    "q": "Warum wird beim Hartlöten Stickstoff durch das Rohr geleitet?",
    "a": [
      "Damit das Rohr kalt bleibt",
      "Damit innen kein Zunder entsteht",
      "Damit das Lot härter wird",
      "Damit der Druck steigt"
    ],
    "c": 1,
    "e": "Stickstoff verdrängt Sauerstoff und verhindert Oxidation/Zunder im Rohr."
  },
  {
    "topic": "Löten",
    "difficulty": 1,
    "q": "Welche Lötart wird bei Kupferleitungen in Kälteanlagen meist verwendet?",
    "a": [
      "Weichlöten",
      "Hartlöten",
      "Kleben",
      "Punktschweißen"
    ],
    "c": 1,
    "e": "Kältemittelleitungen werden wegen Druck und Temperatur meist hartgelötet."
  },
  {
    "topic": "Löten",
    "difficulty": 2,
    "q": "Warum soll die Flamme nicht dauerhaft direkt auf das Lot gehalten werden?",
    "a": [
      "Das Grundmaterial muss heiß genug werden",
      "Lot wird sonst magnetisch",
      "Stickstoff brennt sonst",
      "Kupfer wird zu Stahl"
    ],
    "c": 0,
    "e": "Das Rohr/Fitting muss die Arbeitstemperatur erreichen, damit das Lot kapillar fließt."
  },
  {
    "topic": "Löten",
    "difficulty": 2,
    "q": "Was ist Kapillarwirkung beim Löten?",
    "a": [
      "Das Lot zieht in den engen Spalt",
      "Das Rohr wird elektrisch geladen",
      "Stickstoff wird flüssig",
      "Der RCD löst aus"
    ],
    "c": 0,
    "e": "Bei richtigem Spalt und Temperatur zieht das Lot selbstständig in die Verbindung."
  },
  {
    "topic": "Löten",
    "difficulty": 2,
    "q": "Warum muss die Lötstelle vorher sauber sein?",
    "a": [
      "Damit das Lot benetzen und haften kann",
      "Damit sie schöner glänzt",
      "Damit weniger Stickstoff nötig ist",
      "Damit Druck steigt"
    ],
    "c": 0,
    "e": "Schmutz/Oxid behindern das Fließen und Haften des Lots."
  },
  {
    "topic": "Löten",
    "difficulty": 2,
    "q": "Wozu dient Flussmittel beim Löten, wenn es benötigt wird?",
    "a": [
      "Oxide lösen und Benetzung verbessern",
      "Kältemittel ersetzen",
      "Druck senken",
      "RCD prüfen"
    ],
    "c": 0,
    "e": "Flussmittel hilft gegen Oxide und verbessert das Fließen des Lots."
  },
  {
    "topic": "Löten",
    "difficulty": 3,
    "q": "Was kann Zunder im Rohrinneren verursachen?",
    "a": [
      "Verstopfungen am Expansionsorgan",
      "Mehr Kälteleistung",
      "Bessere Ölqualität",
      "Niedrigeren Strom"
    ],
    "c": 0,
    "e": "Zunder kann sich lösen und Filter/TXV/Kapillare verstopfen."
  },
  {
    "topic": "K65",
    "difficulty": 2,
    "q": "Warum wird K65-Rohr bei CO₂-Anlagen eingesetzt?",
    "a": [
      "Wegen hoher Druckfestigkeit",
      "Weil es durchsichtig ist",
      "Weil es nicht gelötet werden kann",
      "Weil es aus Aluminium besteht"
    ],
    "c": 0,
    "e": "CO₂-Anlagen arbeiten mit hohen Drücken. K65 ist dafür geeignet."
  },
  {
    "topic": "K65",
    "difficulty": 2,
    "q": "Was ist bei CO₂-Anlagen besonders wichtig?",
    "a": [
      "Druckfestigkeit der Bauteile",
      "Nur Weichlöten",
      "Keine Dichtheitsprüfung",
      "Immer 30 °C Verdampfung"
    ],
    "c": 0,
    "e": "R744 hat hohe Betriebsdrücke; Bauteile müssen dafür zugelassen sein."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 1,
    "q": "Welche vier Hauptbauteile gehören zum Kältekreislauf?",
    "a": [
      "Verdichter, Verflüssiger, Expansionsventil, Verdampfer",
      "Pumpe, Tank, Filter, Ventilator",
      "RCD, Schütz, Sicherung, Trafo",
      "Sensor, Regler, Motor, Lampe"
    ],
    "c": 0,
    "e": "Der Grundkreislauf besteht aus Verdichter, Verflüssiger, Drosselorgan und Verdampfer."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 1,
    "q": "Wo nimmt das Kältemittel Wärme auf?",
    "a": [
      "Verdichter",
      "Verflüssiger",
      "Verdampfer",
      "Sammler"
    ],
    "c": 2,
    "e": "Im Verdampfer verdampft das Kältemittel und nimmt Wärme auf."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 1,
    "q": "Wo gibt das Kältemittel Wärme ab?",
    "a": [
      "Verflüssiger",
      "Verdampfer",
      "Expansionsventil",
      "Saugleitung"
    ],
    "c": 0,
    "e": "Im Verflüssiger wird Wärme an Luft oder Wasser abgegeben."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 2,
    "q": "Welche Leitung führt meist kaltes gasförmiges Kältemittel zum Verdichter?",
    "a": [
      "Flüssigkeitsleitung",
      "Saugleitung",
      "Heißgasleitung",
      "Ölleitung"
    ],
    "c": 1,
    "e": "Die Saugleitung führt Kältemitteldampf vom Verdampfer zurück zum Verdichter."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 2,
    "q": "Welche Leitung führt heißes Gas vom Verdichter zum Verflüssiger?",
    "a": [
      "Heißgasleitung",
      "Saugleitung",
      "Flüssigkeitsleitung",
      "Kapillarleitung"
    ],
    "c": 0,
    "e": "Nach dem Verdichter ist das Kältemittel heiß und gasförmig."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 2,
    "q": "Was macht der Verdichter?",
    "a": [
      "Er erhöht Druck und Temperatur",
      "Er senkt den Druck",
      "Er taut den Verdampfer ab",
      "Er speichert Kältemittel"
    ],
    "c": 0,
    "e": "Der Verdichter saugt Dampf an und verdichtet ihn auf Hochdruck."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 2,
    "q": "Was macht das Expansionsventil?",
    "a": [
      "Druck senken und Kältemittel dosieren",
      "Druck erhöhen",
      "Kältemittel verdichten",
      "Strom messen"
    ],
    "c": 0,
    "e": "Das Expansionsventil entspannt und dosiert Kältemittel in den Verdampfer."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 2,
    "q": "Wozu dient Überhitzung?",
    "a": [
      "Sicherstellen, dass gasförmiges Kältemittel zum Verdichter kommt",
      "RCD testen",
      "Rohr weich machen",
      "Hochdruck abschalten"
    ],
    "c": 0,
    "e": "Überhitzung schützt den Verdichter vor Flüssigkeitsschlag."
  },
  {
    "topic": "Kältekreislauf",
    "difficulty": 2,
    "q": "Wozu dient Unterkühlung?",
    "a": [
      "Sicherstellen, dass Flüssigkeit vor dem Expansionsventil ankommt",
      "Verdichter ölen",
      "RCD kühlen",
      "Luft entfeuchten"
    ],
    "c": 0,
    "e": "Unterkühlte Flüssigkeit verhindert Flashgas vor dem Expansionsorgan."
  },
  {
    "topic": "Dichtheit",
    "difficulty": 1,
    "q": "Womit wird eine Dichtheitsprüfung typischerweise durchgeführt?",
    "a": [
      "Sauerstoff",
      "Druckluft",
      "Stickstoff",
      "Propan"
    ],
    "c": 2,
    "e": "Stickstoff ist trocken und inert."
  },
  {
    "topic": "Dichtheit",
    "difficulty": 2,
    "q": "Warum darf man keine Druckluft zur Dichtheitsprüfung benutzen?",
    "a": [
      "Sie ist zu teuer",
      "Sauerstoff/Feuchte können gefährlich sein und reagieren",
      "Sie ist zu kalt",
      "Sie hat keinen Druck"
    ],
    "c": 1,
    "e": "Druckluft enthält Sauerstoff und Feuchtigkeit. Das kann gefährlich sein und Feuchtigkeit einbringen."
  },
  {
    "topic": "Dichtheit",
    "difficulty": 2,
    "q": "Was bedeutet ein Druckabfall bei der Dichtheitsprüfung?",
    "a": [
      "Mögliche Undichtheit",
      "Alles ist sicher dicht",
      "Mehr Kälteleistung",
      "RCD defekt"
    ],
    "c": 0,
    "e": "Sinkt der Prüfdruck, muss nach Undichtigkeiten gesucht werden."
  },
  {
    "topic": "Dichtheit",
    "difficulty": 2,
    "q": "Womit kann man Leckagen suchen?",
    "a": [
      "Lecksuchspray oder elektronischem Lecksuchgerät",
      "Nur Hammer",
      "Nur Wasserwaage",
      "Nur RCD"
    ],
    "c": 0,
    "e": "Lecksuchspray oder geeignete elektronische Geräte helfen beim Finden von Undichtheiten."
  },
  {
    "topic": "Dichtheit",
    "difficulty": 3,
    "q": "Warum muss der Prüfdruck zur Anlage passen?",
    "a": [
      "Bauteile dürfen nicht überlastet werden",
      "Damit das Lot schmilzt",
      "Damit der Verdichter läuft",
      "Damit mehr Luft entsteht"
    ],
    "c": 0,
    "e": "Der Druck darf die zulässigen Bauteildrücke nicht überschreiten."
  },
  {
    "topic": "Kältemittel",
    "difficulty": 1,
    "q": "Was bedeutet GWP?",
    "a": [
      "Druck im Verdichter",
      "Treibhauspotenzial",
      "Ölmenge",
      "Verdampfungstemperatur"
    ],
    "c": 1,
    "e": "GWP beschreibt die Klimawirkung eines Kältemittels im Vergleich zu CO₂."
  },
  {
    "topic": "Kältemittel",
    "difficulty": 1,
    "q": "Welches Kältemittel ist R744?",
    "a": [
      "Ammoniak",
      "CO₂",
      "Propan",
      "Wasser"
    ],
    "c": 1,
    "e": "R744 ist Kohlenstoffdioxid."
  },
  {
    "topic": "Kältemittel",
    "difficulty": 1,
    "q": "Welches Kältemittel ist brennbar?",
    "a": [
      "R290",
      "R744",
      "R134a",
      "R718"
    ],
    "c": 0,
    "e": "R290 ist Propan und brennbar."
  },
  {
    "topic": "Kältemittel",
    "difficulty": 2,
    "q": "Was bedeutet ODP?",
    "a": [
      "Ozonabbaupotenzial",
      "Öldruckpunkt",
      "Optimale Druckprüfung",
      "Offener Druckprozess"
    ],
    "c": 0,
    "e": "ODP beschreibt das Potenzial zum Abbau der Ozonschicht."
  },
  {
    "topic": "Kältemittel",
    "difficulty": 2,
    "q": "Welches Kältemittel ist R717?",
    "a": [
      "Ammoniak",
      "CO₂",
      "Propan",
      "Wasser"
    ],
    "c": 0,
    "e": "R717 ist Ammoniak."
  },
  {
    "topic": "Kältemittel",
    "difficulty": 2,
    "q": "Welches Kältemittel ist R718?",
    "a": [
      "Wasser",
      "CO₂",
      "Propan",
      "R134a"
    ],
    "c": 0,
    "e": "R718 ist Wasser."
  },
  {
    "topic": "Kältemittel",
    "difficulty": 3,
    "q": "Warum muss Kältemittel sortenrein zurückgewonnen werden?",
    "a": [
      "Damit es fachgerecht entsorgt/recycelt werden kann",
      "Damit es brennbarer wird",
      "Damit Öl verschwindet",
      "Damit Luft entsteht"
    ],
    "c": 0,
    "e": "Gemischte Kältemittel sind schwer verwertbar und müssen korrekt behandelt werden."
  },
  {
    "topic": "Druck",
    "difficulty": 1,
    "q": "Was passiert mit dem Siedepunkt, wenn der Druck steigt?",
    "a": [
      "Er sinkt",
      "Er steigt",
      "Er bleibt immer gleich",
      "Er wird 0 °C"
    ],
    "c": 1,
    "e": "Je höher der Druck, desto höher die Siedetemperatur."
  },
  {
    "topic": "Druck",
    "difficulty": 2,
    "q": "Was bedeutet Hochdruckseite?",
    "a": [
      "Bereich nach Verdichter bis zum Expansionsorgan",
      "Nur der Verdampfer",
      "Nur die Saugleitung",
      "Der Steuerstromkreis"
    ],
    "c": 0,
    "e": "Vom Verdichterausgang über Verflüssiger bis zum Drosselorgan herrscht Hochdruck."
  },
  {
    "topic": "Druck",
    "difficulty": 2,
    "q": "Was bedeutet Niederdruckseite?",
    "a": [
      "Bereich nach Expansionsorgan bis zum Verdichtereingang",
      "Nur Verflüssiger",
      "Nur Flüssigkeitsleitung",
      "Nur Schaltschrank"
    ],
    "c": 0,
    "e": "Nach dem Expansionsorgan bis zum Verdichtereingang ist die Niederdruckseite."
  },
  {
    "topic": "Druck",
    "difficulty": 2,
    "q": "Was zeigt ein Manometer an der Saugseite?",
    "a": [
      "Niederdruck/Saugdruck",
      "Hochdruck",
      "Strom",
      "Leistung"
    ],
    "c": 0,
    "e": "An der Saugseite misst man den Niederdruck."
  },
  {
    "topic": "Druck",
    "difficulty": 3,
    "q": "Warum darf der Hochdruck nicht zu stark steigen?",
    "a": [
      "Bauteile können beschädigt werden und Sicherheitsschalter lösen aus",
      "Der RCD wird lauter",
      "Die Leitung wird kürzer",
      "Das Lot wird weich"
    ],
    "c": 0,
    "e": "Zu hoher Druck ist gefährlich und belastet Verdichter und Bauteile."
  },
  {
    "topic": "Pump Down",
    "difficulty": 2,
    "q": "Was ist das Ziel eines Pump-Downs?",
    "a": [
      "Verdampfer enteisen",
      "Kältemittel in Sammler/Verflüssiger absaugen",
      "Verdichter kühlen",
      "Öl wechseln"
    ],
    "c": 1,
    "e": "Beim Pump Down wird Kältemittel aus der Niederdruckseite abgesaugt."
  },
  {
    "topic": "Pump Down",
    "difficulty": 2,
    "q": "Welches Bauteil schließt beim Pump-Down meist zuerst?",
    "a": [
      "Magnetventil in der Flüssigkeitsleitung",
      "Verdichter",
      "Verflüssigerlüfter",
      "RCD"
    ],
    "c": 0,
    "e": "Das Magnetventil schließt, der Verdichter saugt die Niederdruckseite leer."
  },
  {
    "topic": "Pump Down",
    "difficulty": 3,
    "q": "Wodurch stoppt der Verdichter beim Pump-Down?",
    "a": [
      "Niederdruckschalter erreicht Abschaltpunkt",
      "RCD misst 30 mA",
      "Türkontakt öffnet immer",
      "Lüfter dreht rückwärts"
    ],
    "c": 0,
    "e": "Sinkt der Saugdruck, schaltet der Niederdruckschalter den Verdichter ab."
  },
  {
    "topic": "Magnetventil",
    "difficulty": 1,
    "q": "Was macht ein Magnetventil?",
    "a": [
      "Es verdichtet Gas",
      "Es öffnet oder schließt eine Leitung elektrisch",
      "Es misst Temperatur",
      "Es erzeugt Vakuum"
    ],
    "c": 1,
    "e": "Eine Spule bewegt einen Anker und steuert den Durchfluss."
  },
  {
    "topic": "Magnetventil",
    "difficulty": 2,
    "q": "Was passiert bei einem stromlos geschlossenen Magnetventil ohne Spannung?",
    "a": [
      "Es ist geschlossen",
      "Es ist immer offen",
      "Es verdichtet",
      "Es taut ab"
    ],
    "c": 0,
    "e": "NC bedeutet normally closed, also ohne Spannung geschlossen."
  },
  {
    "topic": "Magnetventil",
    "difficulty": 2,
    "q": "Was ist eine Magnetspule?",
    "a": [
      "Elektrischer Teil, der ein Magnetfeld erzeugt",
      "Rohrisolierung",
      "Kältemittelfilter",
      "RCD-Kontakt"
    ],
    "c": 0,
    "e": "Die Spule erzeugt ein Magnetfeld und bewegt den Anker."
  },
  {
    "topic": "Lüfter",
    "difficulty": 2,
    "q": "Warum haben Verflüssiger oft Lüfterstufen?",
    "a": [
      "Zur Leistungsregelung und Druckregelung",
      "Nur wegen Lautstärke",
      "Damit mehr Strom verbraucht wird",
      "Zum Öltransport"
    ],
    "c": 0,
    "e": "Lüfterstufen stabilisieren Wärmeabgabe und Verflüssigungsdruck."
  },
  {
    "topic": "Lüfter",
    "difficulty": 2,
    "q": "Was passiert oft, wenn der Verflüssigerlüfter ausfällt?",
    "a": [
      "Hochdruck steigt",
      "Niederdruck steigt stark unter Wasser",
      "RCD misst Temperatur",
      "Verdampfer wird größer"
    ],
    "c": 0,
    "e": "Ohne Luftstrom wird Wärme schlecht abgeführt."
  },
  {
    "topic": "Lüfter",
    "difficulty": 2,
    "q": "Was passiert bei verschmutztem Verflüssiger?",
    "a": [
      "Hochdruck steigt",
      "Hochdruck sinkt immer auf 0",
      "RCD lädt sich auf",
      "Kühlzellentür verriegelt"
    ],
    "c": 0,
    "e": "Schmutz verschlechtert den Wärmeübergang."
  },
  {
    "topic": "h-x-Diagramm",
    "difficulty": 2,
    "q": "Wofür wird das h-x-Diagramm verwendet?",
    "a": [
      "Luftzustände und Feuchteprozesse",
      "Kältemitteldruck im Verdichter",
      "Elektrische Sicherungen",
      "Rohrbiegewinkel"
    ],
    "c": 0,
    "e": "Man beurteilt Lufttemperatur, Feuchte, Enthalpie und Zustandsänderungen."
  },
  {
    "topic": "h-x-Diagramm",
    "difficulty": 2,
    "q": "Was beschreibt x im h-x-Diagramm?",
    "a": [
      "Wassergehalt der Luft",
      "Stromstärke",
      "Rohrlänge",
      "Druckverlust"
    ],
    "c": 0,
    "e": "x ist der absolute Feuchtegehalt der Luft."
  },
  {
    "topic": "h-x-Diagramm",
    "difficulty": 2,
    "q": "Was bedeutet relative Luftfeuchte?",
    "a": [
      "Verhältnis zur maximal möglichen Feuchte bei dieser Temperatur",
      "Immer Wasser in Liter",
      "Druck in bar",
      "Rohrdurchmesser"
    ],
    "c": 0,
    "e": "Relative Feuchte gibt an, wie stark Luft mit Wasserdampf gesättigt ist."
  },
  {
    "topic": "h-x-Diagramm",
    "difficulty": 3,
    "q": "Was passiert beim Abkühlen feuchter Luft unter den Taupunkt?",
    "a": [
      "Wasser kondensiert",
      "Luft wird trocken ohne Wasser",
      "Druck wird 400 V",
      "RCD löst immer aus"
    ],
    "c": 0,
    "e": "Unter dem Taupunkt fällt Kondensat aus."
  },
  {
    "topic": "Elektro",
    "difficulty": 1,
    "q": "Was ist bei einer Reihenschaltung überall gleich?",
    "a": [
      "Strom",
      "Spannung",
      "Widerstand",
      "Leistung"
    ],
    "c": 0,
    "e": "In der Reihenschaltung fließt durch alle Bauteile derselbe Strom."
  },
  {
    "topic": "Elektro",
    "difficulty": 1,
    "q": "Was ist bei einer Parallelschaltung überall gleich?",
    "a": [
      "Strom",
      "Spannung",
      "Widerstand",
      "Leistung"
    ],
    "c": 1,
    "e": "In parallelen Zweigen liegt die gleiche Spannung an."
  },
  {
    "topic": "Elektro",
    "difficulty": 1,
    "q": "Formel für elektrische Leistung bei ohmscher Last?",
    "a": [
      "P = U · I",
      "P = U / I",
      "P = R / U",
      "P = I / U"
    ],
    "c": 0,
    "e": "Leistung ist Spannung mal Strom."
  },
  {
    "topic": "Elektro",
    "difficulty": 2,
    "q": "Ein Motor nimmt 230 V und 5 A auf. cos φ = 1. Welche Leistung?",
    "a": [
      "46 W",
      "235 W",
      "1150 W",
      "5000 W"
    ],
    "c": 2,
    "e": "P = U · I = 230 V · 5 A = 1150 W."
  },
  {
    "topic": "Elektro",
    "difficulty": 2,
    "q": "Wie lautet das Ohmsche Gesetz?",
    "a": [
      "U = R · I",
      "P = m · c",
      "F = p · A",
      "Q = V · ρ"
    ],
    "c": 0,
    "e": "Spannung ist Widerstand mal Strom."
  },
  {
    "topic": "Elektro",
    "difficulty": 2,
    "q": "Was zeigt ein Strom-Zeit-Diagramm?",
    "a": [
      "Stromverlauf über die Zeit",
      "Druck über Temperatur",
      "Rohrlänge über Winkel",
      "Feuchte über Enthalpie"
    ],
    "c": 0,
    "e": "Es zeigt, wie sich Strom mit der Zeit verändert, z. B. beim Anlauf."
  },
  {
    "topic": "Elektro",
    "difficulty": 2,
    "q": "Welche Größe hat die Einheit Ohm?",
    "a": [
      "Widerstand",
      "Strom",
      "Spannung",
      "Leistung"
    ],
    "c": 0,
    "e": "Ohm ist die Einheit des Widerstands."
  },
  {
    "topic": "Elektro",
    "difficulty": 2,
    "q": "Welche Größe hat die Einheit Ampere?",
    "a": [
      "Stromstärke",
      "Spannung",
      "Widerstand",
      "Druck"
    ],
    "c": 0,
    "e": "Ampere ist die Einheit der Stromstärke."
  },
  {
    "topic": "Elektro",
    "difficulty": 2,
    "q": "Welche Größe hat die Einheit Volt?",
    "a": [
      "Spannung",
      "Strom",
      "Widerstand",
      "Masse"
    ],
    "c": 0,
    "e": "Volt ist die Einheit der elektrischen Spannung."
  },
  {
    "topic": "Elektro",
    "difficulty": 2,
    "q": "Was passiert mit dem Gesamtwiderstand bei parallelen Widerständen?",
    "a": [
      "Er wird kleiner als der kleinste Einzelwiderstand",
      "Er wird immer größer",
      "Er bleibt gleich",
      "Er wird unendlich"
    ],
    "c": 0,
    "e": "Parallele Zweige bieten mehr Stromwege; der Gesamtwiderstand sinkt."
  },
  {
    "topic": "MSS/MSR",
    "difficulty": 1,
    "q": "Wofür steht MSS?",
    "a": [
      "Motorschutzschalter",
      "Mess-Strom-Sensor",
      "Magnetspulen-Schaltung",
      "Motor-Start-Signal"
    ],
    "c": 0,
    "e": "MSS steht für Motorschutzschalter."
  },
  {
    "topic": "MSS/MSR",
    "difficulty": 1,
    "q": "Wofür steht MSR meistens?",
    "a": [
      "Messen, Steuern, Regeln",
      "Motor-Sicherheits-Relais",
      "Mehrstufige Reihenschaltung",
      "Montage-Service-Rohr"
    ],
    "c": 0,
    "e": "MSR bedeutet Messen, Steuern und Regeln."
  },
  {
    "topic": "MSS/MSR",
    "difficulty": 2,
    "q": "Was schützt ein Motorschutzschalter hauptsächlich?",
    "a": [
      "Motor vor Überlast",
      "Rohr vor Korrosion",
      "Kältemittel vor Licht",
      "Verdampfer vor Eis"
    ],
    "c": 0,
    "e": "Er schützt den Motor bei Überlast oder Phasenausfall."
  },
  {
    "topic": "MSS/MSR",
    "difficulty": 2,
    "q": "Worauf wird ein Motorschutzschalter eingestellt?",
    "a": [
      "Auf den Motornennstrom",
      "Auf die Raumtemperatur",
      "Auf die Rohrlänge",
      "Auf den RCD-Fehlerstrom"
    ],
    "c": 0,
    "e": "Die Einstellung richtet sich nach dem Nennstrom des Motors."
  },
  {
    "topic": "Druckschalter",
    "difficulty": 1,
    "q": "Welche Aufgabe hat ein Hochdruckschalter?",
    "a": [
      "Schutz vor zu hohem Druck",
      "Schutz vor Licht",
      "Öl auffüllen",
      "Ventilator drehen"
    ],
    "c": 0,
    "e": "Er schaltet bei zu hohem Hochdruck ab."
  },
  {
    "topic": "Druckschalter",
    "difficulty": 1,
    "q": "Was überwacht der Niederdruckschalter?",
    "a": [
      "Druck auf der Saugseite",
      "Außentemperatur",
      "Lichtstrom",
      "Wasserdruck im Waschbecken"
    ],
    "c": 0,
    "e": "Er überwacht die Niederdruck-/Saugseite."
  },
  {
    "topic": "Druckschalter",
    "difficulty": 2,
    "q": "Was ist der Unterschied zwischen Wächter und Sicherheitsbegrenzer?",
    "a": [
      "Sicherheitsbegrenzer muss meist manuell entriegelt werden",
      "Wächter ist immer größer",
      "Es gibt keinen Unterschied",
      "Begrenzer misst nur Strom"
    ],
    "c": 0,
    "e": "Sicherheitsbegrenzer erfordern oft eine bewusste Rückstellung."
  },
  {
    "topic": "Druckschalter",
    "difficulty": 2,
    "q": "Was kann ein Niederdruckschalter bei Kältemittelmangel tun?",
    "a": [
      "Verdichter abschalten",
      "RCD ersetzen",
      "Kältemittel erzeugen",
      "Verflüssiger reinigen"
    ],
    "c": 0,
    "e": "Bei zu niedrigem Saugdruck schützt er den Verdichter."
  },
  {
    "topic": "Schutzklassen",
    "difficulty": 1,
    "q": "Welche Schutzklasse hat ein Gerät mit Schutzleiter?",
    "a": [
      "Schutzklasse I",
      "Schutzklasse II",
      "Schutzklasse III",
      "Keine"
    ],
    "c": 0,
    "e": "Schutzklasse I besitzt Schutzleiteranschluss."
  },
  {
    "topic": "Schutzklassen",
    "difficulty": 1,
    "q": "Was bedeutet Schutzklasse II?",
    "a": [
      "Schutzisoliert ohne Schutzleiter",
      "Immer 24 V",
      "Immer mit PE",
      "Nur für Wasser"
    ],
    "c": 0,
    "e": "Schutzklasse II hat doppelte oder verstärkte Isolierung."
  },
  {
    "topic": "Schutzklassen",
    "difficulty": 1,
    "q": "Was bedeutet Schutzklasse III?",
    "a": [
      "Schutzkleinspannung",
      "230 V mit PE",
      "400 V Motor",
      "Keine Isolierung"
    ],
    "c": 0,
    "e": "Schutzklasse III arbeitet mit Schutzkleinspannung."
  },
  {
    "topic": "RCD",
    "difficulty": 1,
    "q": "Bei welchem Fehlerstrom löst ein Personenschutz-RCD häufig aus?",
    "a": [
      "30 mA",
      "300 A",
      "3 V",
      "16 A"
    ],
    "c": 0,
    "e": "Für Personenschutz sind 30 mA typisch."
  },
  {
    "topic": "RCD",
    "difficulty": 2,
    "q": "Welche Aufgabe hat ein RCD?",
    "a": [
      "Fehlerstrom erkennen und abschalten",
      "Kurzschlussstrom erhöhen",
      "Kältemittel filtern",
      "Druck regeln"
    ],
    "c": 0,
    "e": "Er vergleicht hin- und zurückfließenden Strom."
  },
  {
    "topic": "RCD",
    "difficulty": 2,
    "q": "Was vergleicht ein RCD?",
    "a": [
      "Strom in Außenleiter und Neutralleiter",
      "Druck und Temperatur",
      "Rohrlänge und Masse",
      "GWP und ODP"
    ],
    "c": 0,
    "e": "Bei Differenzstrom löst er aus."
  },
  {
    "topic": "RCD",
    "difficulty": 3,
    "q": "Schützt ein RCD sicher vor Überlast?",
    "a": [
      "Nein, dafür sind Sicherung/Motorschutz zuständig",
      "Ja, immer",
      "Nur bei CO₂",
      "Nur bei K65"
    ],
    "c": 0,
    "e": "Ein RCD schützt gegen Fehlerstrom, nicht gegen normalen Überlaststrom."
  },
  {
    "topic": "Kühlzelle",
    "difficulty": 1,
    "q": "Warum muss eine Kühlzellentür von innen zu öffnen sein?",
    "a": [
      "Damit niemand eingeschlossen wird",
      "Für besseren COP",
      "Wegen Öltransport",
      "Damit der Verdichter startet"
    ],
    "c": 0,
    "e": "Das ist eine Sicherheitsfunktion gegen Einschließen."
  },
  {
    "topic": "Kühlzelle",
    "difficulty": 2,
    "q": "Warum ist eine Türrahmenheizung bei Tiefkühlzellen sinnvoll?",
    "a": [
      "Gegen Vereisung am Türbereich",
      "Zum Kältemittel absaugen",
      "Für höheren Niederdruck",
      "Für weniger Licht"
    ],
    "c": 0,
    "e": "Sie verhindert Festfrieren/Vereisung am Rahmen."
  },
  {
    "topic": "Kühlzelle",
    "difficulty": 2,
    "q": "Was passiert bei defekter Türdichtung?",
    "a": [
      "Warmluft/Feuchte dringt ein, Eisbildung und mehr Last",
      "Kältemittel wird automatisch neu",
      "RCD wird kleiner",
      "Motor bekommt weniger Spannung"
    ],
    "c": 0,
    "e": "Undichte Türen erhöhen Feuchte- und Wärmeeintrag."
  },
  {
    "topic": "Kühlzelle",
    "difficulty": 2,
    "q": "Warum ist Licht in Kühlzellen oft über Türkontakt gesteuert?",
    "a": [
      "Damit es nur bei geöffneter Tür leuchtet",
      "Damit Druck steigt",
      "Damit Verdichter stoppt",
      "Damit Öl zurückläuft"
    ],
    "c": 0,
    "e": "Das spart Energie und reduziert Wärmeeintrag."
  },
  {
    "topic": "Rohr",
    "difficulty": 1,
    "q": "Wofür braucht man die gestreckte Rohrlänge?",
    "a": [
      "Um die benötigte Rohrlänge vor dem Biegen zu bestimmen",
      "Um Strom zu messen",
      "Zum Vakuumziehen",
      "Für den RCD"
    ],
    "c": 0,
    "e": "Beim Biegen muss man die Ausgangslänge kennen."
  },
  {
    "topic": "Rohr",
    "difficulty": 2,
    "q": "Was ist beim Biegen eines Rohres wichtig?",
    "a": [
      "Biegeradius beachten, nicht knicken",
      "Immer flachdrücken",
      "Vorher mit Wasser füllen",
      "RCD ausschalten reicht"
    ],
    "c": 0,
    "e": "Zu kleiner Radius kann Knicke und Querschnittsverengung verursachen."
  },
  {
    "topic": "Rohr",
    "difficulty": 2,
    "q": "Warum muss Rohr entgratet werden?",
    "a": [
      "Späne und Strömungsstörungen vermeiden",
      "Damit es brennt",
      "Damit RCD auslöst",
      "Damit Öl verschwindet"
    ],
    "c": 0,
    "e": "Grate/Späne können Bauteile beschädigen oder verstopfen."
  },
  {
    "topic": "Rohr",
    "difficulty": 2,
    "q": "Welche Folge kann ein geknicktes Rohr haben?",
    "a": [
      "Druckverlust und schlechter Kältemittelstrom",
      "Mehr Spannung",
      "Bessere Unterkühlung immer",
      "Keine Auswirkung"
    ],
    "c": 0,
    "e": "Ein Knick verengt den Querschnitt."
  },
  {
    "topic": "Abtauung",
    "difficulty": 1,
    "q": "Warum wird ein Verdampfer abgetaut?",
    "a": [
      "Eis verschlechtert Wärmeübertragung und Luftstrom",
      "Damit der Verdichter schneller läuft",
      "Zum Druck erhöhen",
      "Um Kältemittel zu sparen"
    ],
    "c": 0,
    "e": "Eis wirkt isolierend und blockiert den Luftstrom."
  },
  {
    "topic": "Abtauung",
    "difficulty": 2,
    "q": "Welche Abtauart nutzt elektrische Heizstäbe?",
    "a": [
      "Elektrische Abtauung",
      "Heißgas nur ohne Strom",
      "Vakuumabtauung",
      "Stickstoffabtauung"
    ],
    "c": 0,
    "e": "Bei elektrischer Abtauung erwärmen Heizstäbe den Verdampfer."
  },
  {
    "topic": "Abtauung",
    "difficulty": 2,
    "q": "Was macht der Verdampferlüfter während vieler Abtauungen?",
    "a": [
      "Er steht oder wird geregelt",
      "Er muss immer voll laufen",
      "Er ersetzt die Heizung",
      "Er verdichtet"
    ],
    "c": 0,
    "e": "Oft wird der Lüfter während der Abtauung gestoppt, damit keine warme feuchte Luft verteilt wird."
  },
  {
    "topic": "Abtauung",
    "difficulty": 3,
    "q": "Warum ist eine Abtauendtemperatur sinnvoll?",
    "a": [
      "Sie beendet die Abtauung nach erreichter Temperatur",
      "Sie startet immer den RCD",
      "Sie ersetzt den Niederdruckschalter",
      "Sie füllt Kältemittel ein"
    ],
    "c": 0,
    "e": "Die Abtauung soll nur so lange laufen wie nötig."
  },
  {
    "topic": "Vakuum",
    "difficulty": 2,
    "q": "Warum evakuiert man eine Kälteanlage?",
    "a": [
      "Um Luft und Feuchtigkeit zu entfernen",
      "Um Öl zu verbrennen",
      "Um Druckluft einzufüllen",
      "Um Kupfer weicher zu machen"
    ],
    "c": 0,
    "e": "Vakuum entfernt Luft und Feuchte vor dem Befüllen."
  },
  {
    "topic": "Vakuum",
    "difficulty": 2,
    "q": "Warum macht man nach dem Evakuieren eine Standzeit?",
    "a": [
      "Um zu prüfen, ob Vakuum hält",
      "Damit das Kältemittel gefriert",
      "Damit Druckluft austritt",
      "Damit der RCD auslöst"
    ],
    "c": 0,
    "e": "Steigt der Druck deutlich, kann Feuchtigkeit oder Undichtheit vorliegen."
  },
  {
    "topic": "Vakuum",
    "difficulty": 3,
    "q": "Was ist eine Folge von Feuchtigkeit im Kältekreis?",
    "a": [
      "Eisbildung/Säuren/Schäden",
      "Mehr COP immer",
      "RCD wird schneller",
      "Rohre werden länger"
    ],
    "c": 0,
    "e": "Feuchtigkeit kann einfrieren, Säuren bilden und Bauteile schädigen."
  },
  {
    "topic": "Fehlersuche",
    "difficulty": 2,
    "q": "Hochdruck steigt stark, Verflüssigerlüfter läuft nicht. Was prüfst du zuerst?",
    "a": [
      "Lüfter/Spannung/Ansteuerung",
      "Türdichtung",
      "Abtauheizung",
      "Bördelmutter am Verdampfer"
    ],
    "c": 0,
    "e": "Ohne Verflüssigerlüfter kann Wärme nicht abgeführt werden."
  },
  {
    "topic": "Fehlersuche",
    "difficulty": 2,
    "q": "Niederdruck sehr niedrig, Verdampfer vereist, Luftstrom schwach. Was ist wahrscheinlich?",
    "a": [
      "Luftproblem/Verdampfer vereist oder Filter verschmutzt",
      "Zu viel Licht",
      "Schutzklasse falsch",
      "RCD zu groß"
    ],
    "c": 0,
    "e": "Schlechter Luftstrom kann zu Vereisung und niedrigem Verdampfungsdruck führen."
  },
  {
    "topic": "Fehlersuche",
    "difficulty": 3,
    "q": "Verdichter läuft, aber kaum Kühlung. Schauglas zeigt Blasen. Was kann eine Ursache sein?",
    "a": [
      "Kältemittelmangel",
      "Zu viel Schutzleiter",
      "RCD löst bei 30 mA aus",
      "Türrahmenheizung zu klein"
    ],
    "c": 0,
    "e": "Blasen können auf Kältemittelmangel oder Flashgas hinweisen."
  },
  {
    "topic": "Fehlersuche",
    "difficulty": 3,
    "q": "Nach dem Befüllen ist die Überhitzung sehr niedrig. Gefahr?",
    "a": [
      "Flüssigkeitsschlag am Verdichter",
      "Zu viel Sauerstoff im RCD",
      "Mehr Licht in der Kühlzelle",
      "Motor wird zum Trafo"
    ],
    "c": 0,
    "e": "Zu niedrige Überhitzung kann flüssiges Kältemittel zum Verdichter bringen."
  },
  {
    "topic": "Fehlersuche",
    "difficulty": 3,
    "q": "Verflüssiger ist sauber, Lüfter läuft, Hochdruck trotzdem zu hoch. Was kann zusätzlich Ursache sein?",
    "a": [
      "Überfüllung oder nicht kondensierbare Gase",
      "Zu wenig Licht",
      "Schutzklasse III",
      "RCD 30 mA"
    ],
    "c": 0,
    "e": "Überfüllung oder Luft im System kann Hochdruck erhöhen."
  },
  {
    "topic": "Sicherheit",
    "difficulty": 1,
    "q": "Welche PSA ist beim Löten wichtig?",
    "a": [
      "Schutzbrille und geeignete Handschuhe",
      "Nur Turnschuhe",
      "Keine PSA",
      "Kopfhörer reichen"
    ],
    "c": 0,
    "e": "Augen- und Handschutz sind beim Löten wichtig."
  },
  {
    "topic": "Sicherheit",
    "difficulty": 2,
    "q": "Warum muss beim Umgang mit Kältemitteln gelüftet werden?",
    "a": [
      "Erstickungs- oder Brandgefahr je nach Kältemittel",
      "Damit Kupfer glänzt",
      "Damit RCD kleiner wird",
      "Damit Rohr länger wird"
    ],
    "c": 0,
    "e": "Kältemittel können Sauerstoff verdrängen oder brennbar/toxisch sein."
  },
  {
    "topic": "Sicherheit",
    "difficulty": 2,
    "q": "Warum darf Sauerstoff nicht zum Abdrücken verwendet werden?",
    "a": [
      "Explosions-/Brandgefahr mit Öl/Fett",
      "Zu billig",
      "Zu kalt",
      "Zu leise"
    ],
    "c": 0,
    "e": "Sauerstoff kann mit Öl/Fett heftig reagieren."
  },
  {
    "topic": "Sicherheit",
    "difficulty": 2,
    "q": "Was muss vor elektrischen Arbeiten gemacht werden?",
    "a": [
      "Freischalten und Spannungsfreiheit prüfen",
      "Kältemittel schütteln",
      "Rohr biegen",
      "Verflüssiger reinigen"
    ],
    "c": 0,
    "e": "Vor Arbeiten an elektrischen Anlagen gelten die Sicherheitsregeln."
  },
  {
    "topic": "Rechnen",
    "difficulty": 2,
    "q": "Wie rechnet man Stunden in Sekunden um?",
    "a": [
      "Stunden · 3600",
      "Stunden · 60",
      "Stunden / 3600",
      "Stunden + 3600"
    ],
    "c": 0,
    "e": "1 Stunde hat 3600 Sekunden."
  },
  {
    "topic": "Rechnen",
    "difficulty": 1,
    "q": "1 m³ sind wie viele Liter?",
    "a": [
      "1000 Liter",
      "100 Liter",
      "10 Liter",
      "1 Liter"
    ],
    "c": 0,
    "e": "1 Kubikmeter entspricht 1000 Litern."
  },
  {
    "topic": "Rechnen",
    "difficulty": 2,
    "q": "Welche Formel gilt für Dichte?",
    "a": [
      "ρ = m / V",
      "P = U · I",
      "U = R / I",
      "h = x · t"
    ],
    "c": 0,
    "e": "Dichte ist Masse durch Volumen."
  },
  {
    "topic": "Rechnen",
    "difficulty": 2,
    "q": "Wie lautet die Formel für Geschwindigkeit bei Volumenstrom?",
    "a": [
      "v = V̇ / A",
      "v = U · I",
      "v = R · A",
      "v = p / F"
    ],
    "c": 0,
    "e": "Strömungsgeschwindigkeit ist Volumenstrom geteilt durch Querschnittsfläche."
  },
  {
    "topic": "Rechnen",
    "difficulty": 2,
    "q": "Wie berechnet man Kreisfläche?",
    "a": [
      "A = π · d² / 4",
      "A = d · 4",
      "A = π / d",
      "A = U · I"
    ],
    "c": 0,
    "e": "Mit Durchmesser d gilt A = π d² / 4."
  },
  {
    "topic": "Rechnen",
    "difficulty": 2,
    "q": "Welche Einheit hat Leistung?",
    "a": [
      "Watt",
      "Ohm",
      "Ampere",
      "Bar"
    ],
    "c": 0,
    "e": "Leistung wird in Watt angegeben."
  }
];
const BOSSES = [
  {
    "topic": "Bosskampf",
    "difficulty": 3,
    "q": "BOSS: Eine Anlage schaltet über Hochdruck ab. Verflüssiger ist verschmutzt und der Lüfter läuft schwach. Was ist die wahrscheinlichste Ursache?",
    "a": [
      "Zu schlechte Wärmeabgabe am Verflüssiger",
      "Zu viel Abtauheizung",
      "Zu niedrige Raumtemperatur",
      "Defekter RCD"
    ],
    "c": 0,
    "e": "Schlechte Wärmeabgabe erhöht den Verflüssigungsdruck. Reinigen und Lüfter prüfen."
  },
  {
    "topic": "Bosskampf",
    "difficulty": 3,
    "q": "BOSS: Nach einer Reparatur wurde gelötet. Welche Reihenfolge ist richtig?",
    "a": [
      "Dichtheitsprüfung, Evakuieren, Befüllen, Probelauf",
      "Befüllen, Löten, Evakuieren, Probelauf",
      "Probelauf, Dichtheitsprüfung, Löten",
      "Evakuieren, Druckluft, Befüllen"
    ],
    "c": 0,
    "e": "Nach dem Löten: Dichtheitsprüfung mit Stickstoff, evakuieren, befüllen, Probelauf."
  },
  {
    "topic": "Bosskampf",
    "difficulty": 3,
    "q": "BOSS: Ein Verdichter startet kurz und der Motorschutz löst aus. Was prüfst du sinnvoll zuerst?",
    "a": [
      "Spannung, Stromaufnahme, Phasen und Motorschutz-Einstellung",
      "Türgriff der Kühlzelle",
      "h-x-Diagramm der Außenluft",
      "Farbe des Kältemittels"
    ],
    "c": 0,
    "e": "Motorschutz deutet auf elektrisches Problem, Überlast oder falsche Einstellung hin."
  },
  {
    "topic": "Bosskampf",
    "difficulty": 3,
    "q": "BOSS: Verdampfer vereist immer wieder stark. Welche Kombination passt am besten zur Fehlersuche?",
    "a": [
      "Luftstrom, Abtauung, Ventilatore, Überhitzung prüfen",
      "Nur RCD tauschen",
      "Nur Türrahmenheizung messen",
      "Nur Stickstoff ablassen"
    ],
    "c": 0,
    "e": "Vereisung kann durch Luftprobleme, Abtaufehler oder falsche Einspritzung entstehen."
  },
  {
    "topic": "Bosskampf",
    "difficulty": 3,
    "q": "BOSS: Du hast gelötet und willst die Anlage wieder in Betrieb nehmen. Was darfst du nicht überspringen?",
    "a": [
      "Dichtheitsprüfung und Evakuieren",
      "Direkt Kältemittel rein und los",
      "Nur Licht testen",
      "Nur Verflüssiger anfassen"
    ],
    "c": 0,
    "e": "Dichtheit und Vakuum sind Pflichtschritte vor dem Befüllen."
  },
  {
    "topic": "Bosskampf",
    "difficulty": 3,
    "q": "BOSS: RCD löst beim Einschalten der Abtauheizung aus. Was ist wahrscheinlich?",
    "a": [
      "Isolationsfehler/Feuchtigkeit an der Heizung",
      "Zu viel Kältemittel",
      "Zu wenig Stickstoff",
      "Falsche Rohrlänge"
    ],
    "c": 0,
    "e": "Ein Fehlerstrom kann durch defekte oder feuchte Heizelemente entstehen."
  }
];
const ACHIEVEMENTS = [
  [
    "first",
    "Erste richtige Antwort",
    "Beantworte eine Frage richtig"
  ],
  [
    "streak5",
    "5er-Serie",
    "Schaffe 5 richtige Antworten hintereinander"
  ],
  [
    "streak10",
    "10er-Serie",
    "Schaffe 10 richtige Antworten hintereinander"
  ],
  [
    "score100",
    "100 Punkte",
    "Erreiche 100 Punkte"
  ],
  [
    "score500",
    "500 Punkte",
    "Erreiche 500 Punkte"
  ],
  [
    "boss1",
    "Boss besiegt",
    "Beantworte einen Bosskampf richtig"
  ],
  [
    "level3",
    "Level 3",
    "Erreiche Level 3"
  ],
  [
    "level5",
    "Level 5",
    "Erreiche Level 5"
  ],
  [
    "coins50",
    "50 Coins",
    "Sammle 50 Coins"
  ],
  [
    "learn20",
    "Lernmodus-Profi",
    "Beantworte 20 Fragen im Lernmodus"
  ],
  [
    "time10",
    "Zeitdruck",
    "Beantworte 10 Fragen im Zeitmodus"
  ],
  [
    "allround",
    "Allrounder",
    "Spiele mindestens 8 verschiedene Themen"
  ]
];