const QUESTIONS = [
  {
    "topic": "Kältekreislauf",
    "q": "Welche Aufgabe hat der Verdichter im Kältekreislauf?",
    "a": [
      "Er gibt Wärme an die Umgebung ab und verflüssigt Kältemittel.",
      "Er bindet Feuchtigkeit im Kältekreis.",
      "Er senkt den Druck des flüssigen Kältemittels.",
      "Er erhöht Druck und Temperatur des gasförmigen Kältemittels."
    ],
    "c": 3,
    "e": "Der Verdichter saugt Kältemitteldampf an und verdichtet ihn. Dadurch steigen Druck und Temperatur."
  },
  {
    "topic": "Kältekreislauf",
    "q": "Was passiert im Verdampfer?",
    "a": [
      "Der Verdichterstrom wird begrenzt.",
      "Das Kältemittel nimmt Wärme auf und verdampft.",
      "Das Kältemittel gibt Wärme ab und verflüssigt sich.",
      "Feuchtigkeit wird durch Stickstoff entfernt."
    ],
    "c": 1,
    "e": "Im Verdampfer verdampft das Kältemittel bei niedrigem Druck und nimmt Wärme aus der Umgebung auf."
  },
  {
    "topic": "Kältekreislauf",
    "q": "Was passiert im Verflüssiger?",
    "a": [
      "Der Niederdruckschalter schaltet den Verdichter ab.",
      "Das Kältemittel wird elektrisch verdichtet.",
      "Das Kältemittel nimmt Wärme auf und verdampft.",
      "Das Kältemittel gibt Wärme ab und kondensiert."
    ],
    "c": 3,
    "e": "Im Verflüssiger wird Wärme an Luft oder Wasser abgegeben. Dabei wird das gasförmige Kältemittel flüssig."
  },
  {
    "topic": "TEV",
    "q": "Welche Aufgabe hat ein thermostatisches Expansionsventil?",
    "a": [
      "Es erhöht den Druck vor dem Verflüssiger.",
      "Es bindet Feuchtigkeit aus dem Kältemittel.",
      "Es dosiert Kältemittel in den Verdampfer und regelt die Überhitzung.",
      "Es schützt den Motor vor Überlast."
    ],
    "c": 2,
    "e": "Das TEV passt die Einspritzmenge an und sorgt für eine geeignete Überhitzung am Verdampferausgang."
  },
  {
    "topic": "Überhitzung",
    "q": "Was bedeutet Überhitzung fachlich korrekt?",
    "a": [
      "Sauggastemperatur minus Verdampfungstemperatur.",
      "Hochdruck minus Niederdruck.",
      "Motortemperatur minus Umgebungstemperatur.",
      "Flüssigkeitstemperatur minus Verflüssigungstemperatur."
    ],
    "c": 0,
    "e": "Überhitzung zeigt, wie weit das Sauggas über der Sättigungstemperatur liegt."
  },
  {
    "topic": "Unterkühlung",
    "q": "Was bedeutet Unterkühlung fachlich korrekt?",
    "a": [
      "Außentemperatur minus Raumtemperatur.",
      "Verdichterstrom minus Nennstrom.",
      "Verflüssigungstemperatur minus Flüssigkeitstemperatur.",
      "Sauggastemperatur minus Verdampfungstemperatur."
    ],
    "c": 2,
    "e": "Unterkühlung zeigt, wie weit flüssiges Kältemittel unter seiner Verflüssigungstemperatur liegt."
  },
  {
    "topic": "Pump-Down",
    "q": "Welche Reihenfolge beschreibt Pump-Down richtig?",
    "a": [
      "RCD löst aus, Verflüssigerlüfter saugt Kältemittel ab.",
      "Verdichter stoppt, Magnetventil öffnet, Verdampfer füllt sich.",
      "Magnetventil schließt, Verdichter saugt ab, Niederdruckschalter schaltet ab.",
      "Abtauheizung startet, Hochdruckschalter beendet Pump-Down."
    ],
    "c": 2,
    "e": "Beim Pump-Down wird die Niederdruckseite abgesaugt. Der ND-Schalter beendet den Vorgang."
  },
  {
    "topic": "Magnetventil",
    "q": "Was bedeutet ein stromlos geschlossenes Magnetventil?",
    "a": [
      "Ohne Spannung wird das Kältemittel verdichtet.",
      "Ohne Spannung ist der Durchfluss geöffnet.",
      "Ohne Spannung misst es automatisch den Druck.",
      "Ohne Spannung ist der Durchfluss geschlossen."
    ],
    "c": 3,
    "e": "Stromlos geschlossen bedeutet NC: Ohne Spannung sperrt das Ventil den Durchfluss."
  },
  {
    "topic": "Druckschalter",
    "q": "Welche Aufgabe hat ein Hochdruckschalter?",
    "a": [
      "Er schützt vor zu niedrigem Saugdruck.",
      "Er misst die Luftfeuchte.",
      "Er schützt vor unzulässig hohem Druck.",
      "Er ersetzt den Motorschutz."
    ],
    "c": 2,
    "e": "Der Hochdruckschalter ist ein Sicherheitsbauteil und schaltet bei zu hohem Druck ab."
  },
  {
    "topic": "Druckschalter",
    "q": "Welche Aufgabe kann ein Niederdruckschalter erfüllen?",
    "a": [
      "Er erhöht den Druck in der Flüssigkeitsleitung.",
      "Er trocknet Kältemittel.",
      "Er misst den Fehlerstrom.",
      "Er kann bei zu niedrigem Saugdruck den Verdichter abschalten."
    ],
    "c": 3,
    "e": "Der Niederdruckschalter überwacht die Saugseite und wird auch beim Pump-Down verwendet."
  },
  {
    "topic": "Dichtheitsprüfung",
    "q": "Warum wird für eine Druckprüfung trockener Stickstoff verwendet?",
    "a": [
      "Er ersetzt das Evakuieren vollständig.",
      "Er senkt dauerhaft den Betriebsdruck.",
      "Er ist trocken und reaktionsträge.",
      "Er ist brennbar und zeigt Lecks durch Flammenfarbe."
    ],
    "c": 2,
    "e": "Stickstoff bringt keine Feuchtigkeit ein und reagiert nicht gefährlich mit Öl wie Sauerstoff."
  },
  {
    "topic": "Dichtheitsprüfung",
    "q": "Warum ist Druckluft zur Dichtheitsprüfung ungeeignet?",
    "a": [
      "Sie enthält Sauerstoff und Feuchtigkeit.",
      "Sie ist grundsätzlich nicht komprimierbar.",
      "Sie ist zu trocken für Kälteanlagen.",
      "Sie kann nicht durch Manometer gemessen werden."
    ],
    "c": 0,
    "e": "Druckluft bringt Feuchtigkeit und Sauerstoff in die Anlage. Das ist schädlich und gefährlich."
  },
  {
    "topic": "Evakuieren",
    "q": "Warum wird eine Kälteanlage evakuiert?",
    "a": [
      "Um das Lot zu erwärmen.",
      "Um Luft und Feuchtigkeit zu entfernen.",
      "Um Kältemittel nachzufüllen.",
      "Um den Hochdruckschalter einzustellen."
    ],
    "c": 1,
    "e": "Evakuieren entfernt Luft und Feuchte vor dem Befüllen."
  },
  {
    "topic": "Evakuieren",
    "q": "Was kann ein Druckanstieg während der Vakuum-Standzeit bedeuten?",
    "a": [
      "Undichtheit oder ausgasende Feuchtigkeit.",
      "Richtig eingestellter Motorschutz.",
      "Sichere vollständige Dichtheit.",
      "Zu hohe Kältemittelfüllmenge."
    ],
    "c": 0,
    "e": "Steigt der Druck im Vakuum wieder an, muss die Ursache geprüft werden."
  },
  {
    "topic": "Kältemittel",
    "q": "Was beschreibt der GWP-Wert?",
    "a": [
      "Die Klimawirkung im Vergleich zu CO₂.",
      "Den Ölanteil im Verdichter.",
      "Den Prüfdruck bei 20 °C.",
      "Die Brennbarkeit in Prozent."
    ],
    "c": 0,
    "e": "GWP steht für Global Warming Potential, also Treibhauspotenzial."
  },
  {
    "topic": "Kältemittel",
    "q": "Was beschreibt der ODP-Wert?",
    "a": [
      "Die Dichte des Kältemittels.",
      "Den optimalen Druckprüfwert.",
      "Den Öldruckpunkt.",
      "Das Ozonabbaupotenzial."
    ],
    "c": 3,
    "e": "ODP beschreibt, wie stark ein Stoff die Ozonschicht schädigen kann."
  },
  {
    "topic": "Kältemittel",
    "q": "Welche Aussage zu R290 ist richtig?",
    "a": [
      "R290 ist Propan und brennbar.",
      "R290 ist CO₂ und unbrennbar.",
      "R290 ist Wasser.",
      "R290 ist Ammoniak."
    ],
    "c": 0,
    "e": "R290 ist Propan. Deshalb gelten besondere Sicherheitsregeln wegen Brennbarkeit."
  },
  {
    "topic": "Kältemittel",
    "q": "Welche Aussage zu R744 ist richtig?",
    "a": [
      "R744 ist Propan und brennbar.",
      "R744 ist CO₂ und arbeitet mit hohen Drücken.",
      "R744 ist Wasser.",
      "R744 ist Ammoniak."
    ],
    "c": 1,
    "e": "R744 ist Kohlendioxid. CO₂-Anlagen benötigen druckfeste Bauteile."
  },
  {
    "topic": "Hartlöten",
    "q": "Warum wird beim Hartlöten Stickstoff durch das Rohr geleitet?",
    "a": [
      "Um Öl chemisch zu binden.",
      "Um Oxidation und Zunderbildung im Rohrinneren zu vermeiden.",
      "Um den Betriebsdruck zu erhöhen.",
      "Um das Lot zu kühlen."
    ],
    "c": 1,
    "e": "Stickstoff verdrängt Sauerstoff und verhindert Zunder im Rohr."
  },
  {
    "topic": "Hartlöten",
    "q": "Warum muss das Grundmaterial beim Löten erwärmt werden?",
    "a": [
      "Damit das Lot durch die Werkstücktemperatur kapillar fließt.",
      "Damit der Stickstoff flüssig wird.",
      "Damit der RCD nicht auslöst.",
      "Damit das Rohr magnetisch wird."
    ],
    "c": 0,
    "e": "Das Lot soll vom heißen Werkstück schmelzen und in den Spalt gezogen werden."
  },
  {
    "topic": "Rohrbearbeitung",
    "q": "Warum muss ein Rohr nach dem Schneiden entgratet werden?",
    "a": [
      "Grate und Späne können Bauteile beschädigen oder verstopfen.",
      "Entgraten senkt den GWP-Wert.",
      "Entgraten macht Kupfer schutzisoliert.",
      "Entgraten ersetzt die Druckprüfung."
    ],
    "c": 0,
    "e": "Saubere Rohrenden verhindern Späne und Strömungsprobleme."
  },
  {
    "topic": "Rohrbearbeitung",
    "q": "Was kann ein zu kleiner Biegeradius verursachen?",
    "a": [
      "Niedrigeren GWP-Wert.",
      "Automatisch bessere Unterkühlung.",
      "Knicke und Querschnittsverengung.",
      "Schutzkleinspannung."
    ],
    "c": 2,
    "e": "Ein geknicktes Rohr erhöht den Druckverlust und stört den Kältemittelstrom."
  },
  {
    "topic": "Elektrotechnik",
    "q": "Welche Formel beschreibt das Ohmsche Gesetz?",
    "a": [
      "U = R · I",
      "P = U · I",
      "R = P · U",
      "I = R · U"
    ],
    "c": 0,
    "e": "Das Ohmsche Gesetz lautet U = R · I."
  },
  {
    "topic": "Elektrotechnik",
    "q": "Welche Formel beschreibt elektrische Leistung bei ohmscher Last?",
    "a": [
      "P = U / I",
      "P = R / U",
      "P = I / U",
      "P = U · I"
    ],
    "c": 3,
    "e": "Leistung ist Spannung mal Strom."
  },
  {
    "topic": "Elektrotechnik",
    "q": "Ein Verbraucher hat 230 V und 5 A. Welche Leistung ergibt sich bei cos φ = 1?",
    "a": [
      "5000 W",
      "46 W",
      "1150 W",
      "235 W"
    ],
    "c": 2,
    "e": "P = U · I = 230 V · 5 A = 1150 W."
  },
  {
    "topic": "Elektrotechnik",
    "q": "Was ist bei einer Reihenschaltung überall gleich?",
    "a": [
      "Der Widerstand.",
      "Der Strom.",
      "Die Leistung.",
      "Die Spannung."
    ],
    "c": 1,
    "e": "In einer Reihenschaltung fließt durch alle Bauteile derselbe Strom."
  },
  {
    "topic": "Elektrotechnik",
    "q": "Was ist bei einer Parallelschaltung überall gleich?",
    "a": [
      "Die Leistung.",
      "Die Spannung.",
      "Der Strom.",
      "Der Widerstand."
    ],
    "c": 1,
    "e": "In parallelen Zweigen liegt dieselbe Spannung an."
  },
  {
    "topic": "Schutzmaßnahmen",
    "q": "Was vergleicht ein RCD?",
    "a": [
      "Hochdruck und Niederdruck.",
      "Überhitzung und Unterkühlung.",
      "Hin- und zurückfließenden Strom.",
      "GWP und ODP."
    ],
    "c": 2,
    "e": "Ein RCD löst aus, wenn ein Differenzstrom entsteht."
  },
  {
    "topic": "Schutzmaßnahmen",
    "q": "Schützt ein RCD zuverlässig vor Motorüberlast?",
    "a": [
      "Nein, dafür sind Sicherung oder Motorschutz zuständig.",
      "Nur bei CO₂-Anlagen.",
      "Ja, er ersetzt den Motorschutz vollständig.",
      "Nur bei Wechselstrommotoren."
    ],
    "c": 0,
    "e": "RCD schützt vor Fehlerstrom, nicht vor Überlast."
  },
  {
    "topic": "Schutzmaßnahmen",
    "q": "Was bedeutet Schutzklasse II?",
    "a": [
      "Gerät mit Schutzleiter.",
      "Betrieb nur mit Schutzkleinspannung.",
      "Schutz durch Hochdruckschalter.",
      "Doppelte oder verstärkte Isolierung ohne Schutzleiter."
    ],
    "c": 3,
    "e": "Schutzklasse II bedeutet schutzisoliert."
  },
  {
    "topic": "MSR",
    "q": "Wofür steht MSR?",
    "a": [
      "Motor, Sammler, Rückschlagventil.",
      "Masse, Spannung, Rohr.",
      "Messen, Steuern, Regeln.",
      "Manometer, Schütz, Relais."
    ],
    "c": 2,
    "e": "MSR steht für Messen, Steuern und Regeln."
  },
  {
    "topic": "MSR",
    "q": "Was ist ein geschlossener Regelkreis?",
    "a": [
      "Istwert wird gemessen und mit dem Sollwert verglichen.",
      "Ein Manometer zeigt nur Druck an.",
      "Ein Verdichter läuft ohne Rückmeldung.",
      "Eine Sicherung schaltet nur bei Kurzschluss."
    ],
    "c": 0,
    "e": "Beim Regeln gibt es Rückmeldung über den Istwert."
  },
  {
    "topic": "Abtauung",
    "q": "Warum muss ein Verdampfer abgetaut werden?",
    "a": [
      "Eis behindert Wärmeübertragung und Luftstrom.",
      "Eis erhöht den COP dauerhaft.",
      "Eis ersetzt die Unterkühlung.",
      "Eis verhindert Kältemittelmangel."
    ],
    "c": 0,
    "e": "Eis wirkt isolierend und blockiert den Luftweg."
  },
  {
    "topic": "Abtauung",
    "q": "Warum ist eine Abtauendtemperatur sinnvoll?",
    "a": [
      "Sie ersetzt den Hochdruckschalter.",
      "Sie misst den Fehlerstrom.",
      "Sie erhöht immer die Verdampfungstemperatur.",
      "Sie beendet die Abtauung, wenn der Verdampfer ausreichend warm/eisfrei ist."
    ],
    "c": 3,
    "e": "Die Abtauung soll nicht unnötig lange laufen."
  },
  {
    "topic": "Kühlzelle",
    "q": "Warum muss eine Kühlzellentür von innen zu öffnen sein?",
    "a": [
      "Damit der Hochdruck sinkt.",
      "Damit eingeschlossene Personen die Zelle verlassen können.",
      "Damit der Verdichter startet.",
      "Damit Kältemittel sortenrein bleibt."
    ],
    "c": 1,
    "e": "Das ist eine wichtige Sicherheitsanforderung."
  },
  {
    "topic": "Kühlzelle",
    "q": "Was bewirkt eine beschädigte Türdichtung?",
    "a": [
      "Sicheren RCD-Auslösetest.",
      "Sofort niedrigeren GWP-Wert.",
      "Automatisch bessere Unterkühlung.",
      "Warmluft- und Feuchteeintrag, mehr Eisbildung und höhere Last."
    ],
    "c": 3,
    "e": "Undichte Türen erhöhen Feuchte- und Wärmeeintrag."
  },
  {
    "topic": "h-x-Diagramm",
    "q": "Wofür nutzt man das h-x-Diagramm?",
    "a": [
      "Zur Bestimmung der Löttemperatur.",
      "Zur Auswahl des RCD-Auslösestroms.",
      "Zur Beurteilung von Luftzuständen wie Feuchte, Temperatur und Enthalpie.",
      "Zur Prüfung der Schutzklasse."
    ],
    "c": 2,
    "e": "Das h-x-Diagramm beschreibt feuchte Luft."
  },
  {
    "topic": "h-x-Diagramm",
    "q": "Was bedeutet x im h-x-Diagramm?",
    "a": [
      "Druckverlust im Sammler.",
      "Kältemittelmassenstrom.",
      "Elektrischer Blindstrom.",
      "Absoluter Wassergehalt der Luft."
    ],
    "c": 3,
    "e": "x steht für den Wassergehalt der Luft."
  },
  {
    "topic": "Wärmepumpe",
    "q": "Was beschreibt der COP einer Wärmepumpe?",
    "a": [
      "Druckdifferenz zwischen RCD und Motorschutz.",
      "Verhältnis von GWP zu ODP.",
      "Verhältnis von abgegebener Wärmeleistung zu elektrischer Aufnahmeleistung.",
      "Masse des Kältemittels pro Meter Rohr."
    ],
    "c": 2,
    "e": "COP beschreibt Nutzen zu Aufwand."
  },
  {
    "topic": "Wärmepumpe",
    "q": "Warum sinkt der COP oft bei niedriger Außentemperatur?",
    "a": [
      "Kältemittel verliert den Siedepunkt.",
      "Der erforderliche Temperaturhub wird größer.",
      "Der RCD misst weniger Strom.",
      "Kupfer wird isolierend."
    ],
    "c": 1,
    "e": "Je größer der Temperaturhub, desto mehr Arbeit muss der Verdichter leisten."
  },
  {
    "topic": "Fehlersuche",
    "q": "Niedriger Saugdruck, hohe Überhitzung und Blasen im Schauglas deuten am ehesten worauf hin?",
    "a": [
      "Zu hoher GWP-Wert.",
      "Kältemittelmangel oder Unterversorgung.",
      "Defekter RCD.",
      "Überfluteter Verdampfer."
    ],
    "c": 1,
    "e": "Diese Kombination passt zu Mangel, Drosselstelle oder Unterversorgung."
  },
  {
    "topic": "Fehlersuche",
    "q": "Hochdruck steigt stark, Verflüssigerlüfter läuft nicht. Was prüfst du zuerst?",
    "a": [
      "GWP-Wert.",
      "Lüfter, Spannung und Ansteuerung.",
      "Bördelgröße.",
      "Türdichtung."
    ],
    "c": 1,
    "e": "Ohne Lüfter kann Wärme am Verflüssiger nicht abgeführt werden."
  },
  {
    "topic": "Fehlersuche",
    "q": "RCD löst nur bei elektrischer Abtauung aus. Was ist wahrscheinlich?",
    "a": [
      "Kältemittelmangel.",
      "Zu niedriger Hochdruck.",
      "Zu hohe Unterkühlung.",
      "Feuchtigkeit oder Isolationsfehler an der Abtauheizung."
    ],
    "c": 3,
    "e": "RCD-Auslösung deutet auf Fehlerstrom hin."
  },
  {
    "topic": "Rechnen",
    "q": "1 m³ entspricht wie vielen Litern?",
    "a": [
      "1000 l",
      "100 l",
      "10 l",
      "1 l"
    ],
    "c": 0,
    "e": "1 Kubikmeter entspricht 1000 Litern."
  },
  {
    "topic": "Rechnen",
    "q": "Wie viele Sekunden hat eine Stunde?",
    "a": [
      "3600 s",
      "1000 s",
      "60 s",
      "600 s"
    ],
    "c": 0,
    "e": "1 Stunde hat 60 Minuten, jede Minute 60 Sekunden. 60 · 60 = 3600."
  },
  {
    "topic": "Rechnen",
    "q": "Welche Formel beschreibt Dichte?",
    "a": [
      "ρ = R / A",
      "ρ = m / V",
      "ρ = U · I",
      "ρ = p · V"
    ],
    "c": 1,
    "e": "Dichte ist Masse pro Volumen."
  },
  {
    "topic": "Rechnen",
    "q": "Welche Formel beschreibt Strömungsgeschwindigkeit aus Volumenstrom und Querschnitt?",
    "a": [
      "v = A / V̇",
      "v = V̇ / A",
      "v = p / F",
      "v = U · I"
    ],
    "c": 1,
    "e": "Geschwindigkeit ist Volumenstrom geteilt durch Querschnittsfläche."
  }
];