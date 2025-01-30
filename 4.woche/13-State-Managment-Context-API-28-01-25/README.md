# State Managment, Context API / Mittwoch 29.01.25

## Lernziele :

1. Lösen Aufgabe `SPA-router-color-factory` (28.01.25).

2. Was ist `State` ?

- Der Zustand einer Anwendung
- Variablen, die die veränderlichen Informationen deiner App enthalten
- Ändert sich im Laufe der Zeit

- Props : Daten zwischen Komponenten übergeben

3. Was ist `lokale & Globale` Zustand (State) ?

- Lokaler Zustand in React bezieht sich auf Daten, die spezifisch für eine einzelne Komponente sind

- Lokaler Zustand wird innerhalb einer Komponente verwaltet, kann aber über Props weitergegeben werden

- Lokaler Zustand wird mit Setter-Funktionen von `useState` modifiziert

- Globaler Zustand als Konzept, sind Daten, die von mehreren Komponenten geteilt werden
  - Normalerweise von allen Komponenten, daher "global"
  - So etwas wie globale Variablen

4. Was ist `Props Problem` (Props Drilling) ?

```jsx
const App = () => {
  const data = "Hello, prop drilling!";
  return <ParentComponent data={data} />;
};

const ParentComponent = ({ data }) => {
  return <ChildComponent data={data} />;
};

const ChildComponent = ({ data }) => {
  return <Target data={data} />;
};

const Target = ({ data }) => {
  return <p>{data}</p>;
};
```

5. Was ist `Context API` ?

- Die Context API React-Funktion zur Verwaltung des globalen Zustands
- Sie ermöglicht das Teilen von Zuständen ohne die Notwendigkeit von Prop Drilling

- Wir haben zwei Hauptteile: `Provider` und `Consumer`

- `Provider`

  - Dieser enthält die Zustandsvariable
  - Er ermöglicht den Zugriff auf seine Zustandsvariable für alle seine verschachtelten Komponenten

- `Consumer`
  - Jede Komponente, die den Zustand von einem Provider abruft, ist ein Consumer
  - Dies geschieht durch - du hast es erraten - einen Hook

### Resources :

- [Lesson Repo](https://github.com/dci-fbw-wd-24-d05/Context-API-React)

- [Context API Docs](https://react.dev/reference/react/createContext)

- [Best React state Managment](https://blog.openreplay.com/top-6-react-state-management-libraries-for-2022/)

- [UseContext Lernen Video](https://www.youtube.com/watch?v=HYKDUF8X3qI)

- [Zustand](https://zustand-demo.pmnd.rs/)

- [Redux](https://redux.js.org/)

- [React Icons Optional](https://react-icons.github.io/react-icons/)

### Tasks :

- [spa-store-useeffect-language](https://classroom.github.com/a/y-lVPCiq)

- []()

