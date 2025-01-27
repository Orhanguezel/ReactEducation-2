import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink
              end
              to={`/user/${user.id}`}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* New User bağlantısı */}
      <NavLink to="/user/new" className={({ isActive }) => (isActive ? "active-link" : "")}>
        New User
      </NavLink>
      <Outlet />
    </div>
  );
}

export default UserList;
