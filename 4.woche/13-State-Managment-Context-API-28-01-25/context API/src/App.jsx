import "./App.css";
import Layout from "./pages/Layout";
import { CounterProvider } from "./context/CounterContext"; // Doğru import

function App() {
  return (
    <CounterProvider> {/* ✅ Context Provider burada sarıldı */}
      <h1>Counter Project With Context API</h1>
      <Layout />
    </CounterProvider>
  );
}

export default App;


