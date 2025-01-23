import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import NoFound from "./pages/NoFound";
import UserList from "./pages/UserList";
import UserRegistrion from "./pages/UserRegistrion";
import Electronics from "./pages/Electronics";
import Clothing from "./pages/Clothing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />}>
            {/* Products Alt Rotalar */}
            <Route path="electronics" element={<Electronics />} />
            <Route path="clothing" element={<Clothing />} />
          </Route>
          <Route path="/discount-2023" element={<Navigate to="/products" replace/>} />
          <Route path="users">
            <Route index element={<UserList />} />
            <Route path="new" element={<UserRegistrion />} />
          </Route>
          {/* 404 Sayfa */}
          <Route path="*" element={<NoFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
