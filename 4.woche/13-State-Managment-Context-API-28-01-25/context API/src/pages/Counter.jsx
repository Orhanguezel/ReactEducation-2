import { useCounterContext } from "../context/CounterContext";

function Counter() {
  const { count } = useCounterContext(); // ✅ Doğru erişim

  return <div>Counter: {count}</div>;
}

export default Counter;

