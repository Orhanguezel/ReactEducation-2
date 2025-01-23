import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NoFound() {
  let navigate = useNavigate();

  useEffect(() => {
    const redirectUser = setTimeout(() => {
      navigate("/");
    }, 3 * 1000);
    return () => {
      clearTimeout(redirectUser);
    };
  }, []);

  return (
    <div>
      <h1>404 - Sayfa Bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil. Lütfen kontrol edin.</p>
    </div>
  );
}

export default NoFound;

