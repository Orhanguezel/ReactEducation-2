import { useReducer } from 'react';
import counterReducer from './CounterReduce';  // Eğer reducer ayrı bir dosyadaysa.

// 2. Başlangıç state tanımlıyoruz
const initialState = { count: 0 };

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Sayac: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Artır</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Azalt</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Sıfırla</button>
    </div>
  );
}

export default Counter;