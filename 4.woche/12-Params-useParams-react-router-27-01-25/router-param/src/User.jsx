import { useParams, NavLink } from "react-router-dom";

function User() {
  const { id } = useParams();

  const userList = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Veli" },
    { id: 3, name: "Deli" },
  ];

  const user = userList.find((user) => user.id === parseInt(id));

  return (
    <div>
      <h1>User Page</h1>
      <NavLink to="/user/1">User List</NavLink>
      {user ? (
        <h2>{user.name}</h2>
      ) : (
        <h2>Kullanıcı bulunamadı!</h2>
      )}
    </div>
  );
}

export default User;
