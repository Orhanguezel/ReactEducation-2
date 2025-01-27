import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to="/user"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            User List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/new"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post/1"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Post 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post/2"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Post 2
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default Layout;
