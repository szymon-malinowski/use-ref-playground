# Individuelle Learning Phase: useRef in React 19 anwenden

## Dein Ziel

Du baust eine kleine React-19-Anwendung, in der du `useRef` gezielt einsetzt. Dabei übst du, DOM-Elemente zu referenzieren, den Fokus auf ein Input-Feld zu setzen, Werte ohne Re-Render zu speichern und `useRef` sinnvoll von State abzugrenzen.

## Das brauchst du

- Einen Rechner mit Node.js und npm
- Eine React-19-Entwicklungsumgebung, z. B. mit Vite
- Einen Editor wie VS Code
- Einen Browser mit DevTools
- Grundkenntnisse in React-Komponenten, Events und `useState`

## Zeitplanung

- 10 Minuten: Projekt anlegen und Grundstruktur vorbereiten
- 20 Minuten: Input mit DOM-Referenz und Fokus-Funktion umsetzen
- 20 Minuten: Formular mit automatischem Fokus erweitern
- 25 Minuten: Zähler für Render und Eingaben mit `useRef` ergänzen
- 20 Minuten: `useRef` und State direkt vergleichen
- 15 Minuten: Aufräumen, testen und kurz dokumentieren
- 10 Minuten: Erweiterungsaufgaben auswählen oder Reflexion bearbeiten

## Basis-Aufgaben

### Aufgabe 1:

Mini-App vorbereiten **Ziel:** Du schaffst eine saubere Ausgangsbasis für die weiteren Aufgaben.

**Arbeitsauftrag:** Erstelle ein neues React-19-Projekt. Lege eine kleine App mit einer Hauptkomponente an, z. B. `App`, und baue darin einen Bereich mit der Überschrift „useRef Playground“. Erstelle darunter drei Abschnitte mit Platzhaltern für:
1. Fokus auf ein Input-Feld
2. Werte ohne Re-Render speichern
3. Vergleich von `useRef` und State

**Erwartetes Ergebnis / Soll-Zustand:** Deine App startet fehlerfrei. Du siehst eine übersichtliche Oberfläche mit klar getrennten Bereichen für die nächsten Aufgaben.

### Aufgabe 2:

Input gezielt fokussieren **Ziel:** Du verwendest `useRef`, um auf ein DOM-Element zuzugreifen.

**Arbeitsauftrag:** Baue im ersten Abschnitt ein Textfeld und einen Button „Fokus setzen“. Verbinde das Input-Feld mit `useRef`. Beim Klick auf den Button soll der Cursor direkt im Input-Feld landen. Ergänze zusätzlich einen zweiten Button „Eingabe leeren und fokussieren“, der den Inhalt entfernt und danach den Fokus wieder ins Feld setzt.

**Erwartetes Ergebnis / Soll-Zustand:** Du kannst per Button den Fokus zuverlässig auf das Input-Feld setzen. Der zweite Button leert das Feld und setzt den Fokus anschließend wieder korrekt.

### Aufgabe 3:

Automatischen Fokus in einer realistischen Formularsituation nutzen **Ziel:** Du setzt `useRef` in einem praxisnahen Formularablauf ein.

**Arbeitsauftrag:** Erweitere die App um ein kleines Formular mit mindestens zwei Feldern, z. B. „Name“ und „E-Mail“. Sorge dafür, dass beim Laden der Komponente das erste Feld automatisch fokussiert wird. Ergänze eine einfache Prüfung beim Absenden: Wenn das Namensfeld leer ist, soll der Fokus direkt dorthin springen. Wenn das Namensfeld ausgefüllt ist, aber die E-Mail fehlt, soll der Fokus auf das E-Mail-Feld wechseln.

**Erwartetes Ergebnis / Soll-Zustand:** Beim Start ist das erste Feld aktiv. Bei unvollständiger Eingabe springt der Fokus gezielt zum passenden Feld, damit du die Eingabe direkt fortsetzen kannst.

### Aufgabe 4:

Werte mit `useRef` speichern, ohne Re-Render auszulösen **Ziel:** Du erkennst, wie du mit `useRef` persistente Werte speichern kannst, ohne die Oberfläche neu zu rendern.

**Arbeitsauftrag:** Baue im zweiten Abschnitt ein Eingabefeld für Notizen oder Suchbegriffe. Speichere bei jeder Änderung den aktuellen Wert zusätzlich in einer Ref. Zeige auf der Oberfläche den State-Wert an. Ergänze außerdem eine Anzeige, wie oft die Komponente gerendert wurde. Nutze dafür ebenfalls eine Ref. Teste bewusst, welche Änderungen einen Re-Render auslösen und welche nicht.

**Erwartetes Ergebnis / Soll-Zustand:** Du hast eine sichtbare Render-Anzeige. Du kannst nachvollziehen, dass Ref-Werte zwischen Rendern erhalten bleiben, aber ihre Änderung allein keine neue Darstellung auslöst.

### Aufgabe 5:

`useRef` und State direkt vergleichen **Ziel:** Du arbeitest den praktischen Unterschied zwischen Ref und State heraus.

**Arbeitsauftrag:** Erstelle im dritten Abschnitt zwei Zähler:
- einen State-Zähler, der bei Klick sichtbar hochzählt
- einen Ref-Zähler, der intern ebenfalls hochgezählt wird

Baue Buttons, mit denen du beide Werte getrennt erhöhen kannst. Zeige den State-Zähler direkt an. Den Ref-Zähler sollst du erst dann sichtbar machen, wenn du zusätzlich auf einen Button wie „Ref-Wert anzeigen“ klickst oder einen Re-Render auf anderem Weg auslöst. Ergänze daneben einen kurzen Hinweistext in deiner Oberfläche, wann sich die Anzeige automatisch aktualisiert und wann nicht.

**Erwartetes Ergebnis / Soll-Zustand:** Du kannst klar beobachten, dass State-Änderungen sofort sichtbar sind, während Ref-Änderungen zwar gespeichert werden, aber nicht automatisch eine neue Darstellung auslösen.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: Vorherigen Wert eines States nachverfolgen

**Ziel:** Du nutzt `useRef`, um den vorherigen Zustand einer Eingabe oder Auswahl zu speichern.

**Arbeitsauftrag:** Ergänze ein Eingabefeld oder ein Auswahlfeld, z. B. für eine Kategorie. Speichere mit `useRef` den vorherigen Wert und zeige auf der Oberfläche sowohl den aktuellen als auch den zuletzt gültigen Wert an. Achte darauf, dass der vorherige Wert erst nach einer Änderung korrekt übernommen wird.

**Erwartetes Ergebnis / Soll-Zustand:** Du siehst immer den aktuellen Wert und zusätzlich den davor gespeicherten Wert. Die Anzeige verhält sich nachvollziehbar bei jeder Änderung.

### Erweiterungsaufgabe 2: Timer-ID sicher verwalten

**Ziel:** Du setzt `useRef` für einen typischen Praxisfall außerhalb von DOM-Referenzen ein.

**Arbeitsauftrag:** Baue einen kleinen Suchbereich mit einem Input-Feld und einer verzögerten Aktion, z. B. einer Ausgabe „Suche wird ausgeführt...“ erst nach kurzer Pause. Speichere die Timer-ID in einer Ref, damit du einen bestehenden Timer bei neuer Eingabe abbrechen kannst. Ergänze einen Button „Suche zurücksetzen“.

**Erwartetes Ergebnis / Soll-Zustand:** Bei schneller Eingabe werden alte Timer sauber verworfen. Es bleibt immer nur die zuletzt geplante Aktion aktiv.

### Erweiterungsaufgabe 3: Fokus nach einer Aktion gezielt zurücksetzen

**Ziel:** Du verbesserst die Bedienbarkeit deiner App mit einem sinnvollen Fokus-Management.

**Arbeitsauftrag:** Ergänze im Formular oder in einer kleinen Aufgabenliste eine Aktion wie „Speichern“ oder „Hinzufügen“. Nach erfolgreicher Aktion soll der Fokus automatisch wieder in das erste sinnvolle Eingabefeld springen, damit du direkt weitermachen kannst.

**Erwartetes Ergebnis / Soll-Zustand:** Nach der Aktion musst du nicht mit der Maus zurück ins Eingabefeld klicken, sondern kannst sofort weiterarbeiten.

## Wichtige Hinweise

- Arbeite schrittweise und teste jede Aufgabe direkt im Browser.
- Nutze für DOM-Zugriffe ausschließlich `useRef` und nicht `document.querySelector`.
- Verwende State nur dort, wo sich die Oberfläche sichtbar aktualisieren soll.
- Verwende Refs für Werte, die zwischen Rendern erhalten bleiben sollen, aber nicht automatisch neu gerendert werden müssen.
- Achte darauf, dass deine Komponentennamen, Variablen und Buttons klar benannt sind.
- Wenn du Fehler vermutest, prüfe zuerst Konsole, Event-Handler und die Stelle, an der du die Ref an das Element bindest.

## Reflexionsfragen

- Wofür hast du `useRef` in deiner App eingesetzt?
- In welcher Aufgabe war `useRef` die bessere Wahl als State?
- Wann war State notwendig, damit die Oberfläche korrekt reagiert?
- Wie hast du erkannt, ob eine Änderung einen Re-Render ausgelöst hat?
- Welche typischen Praxisfälle für `useRef` konntest du in deiner App nachvollziehen?
- Wo würdest du in einer echten Anwendung bewusst Fokus-Management mit `useRef` einbauen?

---