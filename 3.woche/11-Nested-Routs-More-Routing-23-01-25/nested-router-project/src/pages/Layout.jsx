
import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>The Coding Collective Shop</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>Users</NavLink>
          </li>
          <li>
            <NavLink to="/users/new" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>New User</NavLink>
          </li>
        </ul>
      </nav>
      {/* Alt rotalar burada render edilecek */}
      <Outlet />
    </div>
  );
}

export default Layout;

