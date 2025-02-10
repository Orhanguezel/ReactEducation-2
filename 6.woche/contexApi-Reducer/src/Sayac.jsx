import { useReducer } from "react";

// 1️⃣ Reducer Fonksiyonu
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// 2️⃣ Başlangıç Durumu
const initialState = 0;

// 3️⃣ Handle Counter Fonksiyonu
const handleCounter = (dispatch, type) => {
  dispatch({ type });
};

// 4️⃣ Ana Bileşen
export default function CounterApp() {
  const [count, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sayaç: {count}</h1>
      <button onClick={() => handleCounter(dispatch, "INCREMENT")}>Artır</button>
      <button onClick={() => handleCounter(dispatch, "DECREMENT")} style={{ marginLeft: "10px" }}>
        Azalt
      </button>
    </div>
  );
}