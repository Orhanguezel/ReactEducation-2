import { Routes, Route } from "react-router-dom";
import Post from "./Post";
import "./App.css";
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import Home from "./Home";
import Layout from "./Layout";
import Registration from "./Registration";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        {/* /user rotası ve alt rotalar */}
        <Route path="/user" element={<UserList />}>
          {/* Alt rotalar: /user/:id ve /user/new */}
          <Route path=":id" element={<UserProfile />} />
          <Route path="new" element={<Registration />} />
        </Route>
        {/* Tüm tanımlanmamış rotalar için NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

