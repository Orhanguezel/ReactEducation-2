# React Router Farbenfabrik

Das Ziel dieser Übung ist es, mit React Router eine App zu erstellen, die es dir ermöglicht, Farben anzusehen und neue Farben hinzuzufügen.

**Benutzergeschichten**.

1. Als Benutzer kann ich zu `/colors` gehen, um eine Liste aller verfügbaren Farben zu sehen.
2. Als Benutzer kann ich auf eine der Farben in meiner Farbenliste klicken und werde zu einer Seite weitergeleitet, auf der ich diese Farbe in all ihrer Pracht sehen kann. (Die Route hier sollte `/colors/:color` sein.)
3. Als Benutzer kann ich auf einen Button klicken, um ein Formular anzuzeigen, das es mir ermöglicht, eine neue Farbe hinzuzufügen. (Die Route hier sollte `/colors/new` sein)
4. Als Benutzer, wenn ich mein neues Farbformular abschicke, werde ich zum Farbenindex umgeleitet, und meine neue Farbe erscheint ganz oben.
5. Als Benutzer, wenn ich versuche, zu einer Farbseite zu navigieren, die nicht existiert (z.B. `/colors/burrito`), werde ich zur Farbenindexseite umgeleitet.
6. Als Benutzer, wenn ich versuche, zu einer ungültigen URL zu navigieren (z.B. `/this-is-not-valid`), werde ich zur Farbenindexseite umgeleitet.
7. Deine App sollte etwas Styling haben.

**BONUS**

1. Stelle es so ein, dass die Route `/colors/new` geschützt ist und du dich einloggen musst, um darauf zuzugreifen. (Du kannst die korrekten Login-Daten für diese Übung hart codieren).
1. Speichere deine Farbdaten in `localStorage`.

Hier ist eine Idee, wie deine App aussehen könnte:

![Farben App Demo](./color-factory.gif)

Viel Glück!
