import { createContext, useState, useContext } from "react";

// 🔹 1️⃣ Context oluşturuluyor
const CounterContext = createContext(null);

// 🔹 2️⃣ Custom hook ile Context erişimi sağlanıyor
export function useCounterContext() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}

// 🔹 3️⃣ Context Provider bileşeni oluşturuluyor
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}
