import Counter from "./Counter";
import { useCounterContext } from "../context/CounterContext";

function CountTitle() {
  const { count, setCount } = useCounterContext(); // ✅ Doğru kullanım

  const handleClick = () => {
    setCount((prev) => prev + 1); // ✅ `setCount`'a doğrudan erişim sağladık
  };

  return (
    <div>
      <h2>Count title</h2>
      <Counter />
      <button onClick={handleClick}>Count + 1</button>
    </div>
  );
}

export default CountTitle;

