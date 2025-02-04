# Kombination von useReducer und useContext / Dienstag 04.02.25

## Lernziele :

1. Eindeutige IDs mit `useId` Hook.

- `useId` ist ein Hook, der verwendet wird, um eine eindeutige ID zu generieren.

- Es dient hauptsächlich zu Barrierefreiheitszwecken

```js
const Input = ({ type, val, setter, text }) => {
  const inputId = useId();
  return (
    <div class="form-field">
      <label htmlFor={inputId}>{text}</label>
      <input id={inputId} type={type} value={val} onChange={setter} />
    </div>
  );
};
```

2. Memoisierung mit `useMemo`.

- Memoisierung ist ein interessanter und wichtiger Performance-Verbesserungs-Hook

- Es wird hauptsächlich in größeren Apps verwendet

- Memoisierung ist das Speichern der Ergebnisse von aufwändigen Funktionsaufrufen

- Du kannst das alte Ergebnis wiederverwenden, wenn die gleichen Eingaben erneut auftreten

- Diese Technik ist eine Art "Caching"

```js
export default function TodoList({ allTodos, typeToShow }) {
  const [text, setText] = useState("");

  const visible = useMemo(() => {
    return allTodos.filter((todo) => todo.type === typeToShow);
  }, [allTodos, typeToShow]);

  return (
    <div class="todoList">
      <ul>
        {visible.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <TodoListComments />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Save comment</button>
    </div>
  );
}
```

3. Live coding App mit useContect und useReducer.

### Resources :

- [Lesson Repo](https://github.com/dci-fbw-wd-24-d05/useReducer-with-context)

- [useId Docs](https://react.dev/reference/react/useId)

- [useMemo Docs](https://react.dev/reference/react/useMemo)

### Tasks :

- [SPA-store-useReducerSpeedometer](https://classroom.github.com/a/gTrjaYvj)

- [spa-store-shoppingcart](https://classroom.github.com/a/PUkVQKR6)
