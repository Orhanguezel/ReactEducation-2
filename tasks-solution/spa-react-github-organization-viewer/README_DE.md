# GitHub-Organisationsbetrachter

Wenn fertiggestellt, wird diese Anwendung die GitHub-API verwenden und mit den Organisationsnamen in der beiliegenden Datei [public/orgs.csv](./public/orgs.csv) Informationen über jede Organisation herunterladen. Wenn eine Organisation länger als 15 Sekunden betrachtet wird, holt sie eine Liste der öffentlichen Repositories für diese Organisation.

## Aufgaben

Das CSS ist bereits fertig und in diesem Repository enthalten.

[Live-Demo](https://dci-webdev.github.io/spa-react-github-organization-viewer/)

> 🐘 Denke daran, 15+ Sekunden auf die Repo-Liste zu warten!

### Aufgabe 1

Arbeite in [App.jsx](./src/App.jsx);

1. Erstelle eine Zustandsvariable, `orgs`

2. Wenn die `App`-Komponente das erste Mal gerendert wird, `fetch` die enthaltene `orgs.csv` (du findest diese im [public](./public/) Ordner)

   - Konvertiere die Antwort in ein Array von Strings
   - Speichere das resultierende Array in `orgs`

3. Erstelle eine weitere Zustandsvariable, `currentOrg`

   - Sobald das `orgs` Zustandsvariable-Array Daten hat, nimm das erste Element aus dem Array und speichere es in `currentOrg`

4. Erstelle eine weitere Zustandsvariable, `currentOrgData`

   - Sobald die `currentOrg` Zustandsvariable einen Wert hat
   - Beginne, die Organisationsdaten von GitHub zu holen
   - Zum Beispiel, `GET https://api.github.com/orgs/microsoft`

5. Sobald die `currentOrgData` Zustandsvariable einen Wert hat

   - Importiere und rendere die `Organization` Komponente
   - Übergebe folgendes als Props an `Organization`:
     - `orgs`, `currentOrg`, `currentOrgData`, `setCurrentOrg`

### Aufgabe 2

Arbeite in [Organization.jsx](./src/components/Organization.jsx)

1. Lies den Code
2. Lösche keinen alten Code
3. Erstelle eine Zustandsvariable; repos
4. Schreibe eine Logik, sodass, wenn die `Organization` Komponente gerendert wird;

   - Starte einen 15-Sekunden-Timer
   - Nach 15 Sekunden, `fetch` die Repos dieser Organisation
   - Zum Beispiel, `GET https://api.github.com/orgs/microsoft/repos`
   - Speichere das resultierende Array in der Zustandsvariable `repos`

5. Sobald die `repos` Zustandsvariable einen Wert hat

   - Verwende `Array.prototype.map()`
   - Importiere und verwende die enthaltene `Repo` Komponente

## Aufgabe 3

Teste die Anwendung und prüfe, dass;

- Du nur die Repositories der aktuell geöffneten Organisation anzeigst
- Während der 15 Sekunden Wartezeit keine Repositories angezeigt werden
- Keine Fehler oder Warnungen in den Entwicklertools `console` vorhanden sind
- Nur eine Anfrage gesendet wird, um die Organisationsdetails abzurufen
- Nur eine Anfrage gesendet wird, um die Liste der Organisations-Repositories abzurufen
