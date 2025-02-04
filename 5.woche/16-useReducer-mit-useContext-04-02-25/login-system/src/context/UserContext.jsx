// 📜 src/context/UserContext.js
import { createContext, useReducer, useContext } from "react";
import { API } from "../api/apiConfig";

// 1. Başlangıç State'i
const initialState = {
  user: null, // Kullanıcı bilgileri
  isLoggedIn: false, // Kullanıcı giriş yaptı mı?
};

// 2. Reducer Fonksiyonu
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    case "UPDATE":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload, // Güncellenmiş kullanıcı bilgileri
        },
      };

    default:
      return state;
  }
};

// 3. Context oluştur
export const UserContext = createContext(null);

// 4. `UserProvider` Bileşeni (Tüm uygulamayı sarmalar)
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// 5. Kullanımı kolaylaştırmak için Hook
export function useAuth() {
  return useContext(UserContext);
}
