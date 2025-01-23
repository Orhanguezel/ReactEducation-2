import { Routes, Route} from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<h2>Services</h2>} />
          <Route path="/settings" element={<h2>Settings</h2>} />
          <Route path="/users" element={<h2>Users</h2>} />
          <Route path="/users/:id" element={<h2>User Detail</h2>} />
          <Route path="/users/:id/edit" element={<h2>User Edit</h2>} />
          <Route path="/users/:id/delete" element={<h2>User Delete</h2>} />
          <Route path="/users/:id/posts" element={<h2>User Posts</h2>} />
          <Route
            path="/users/:id/posts/:postId"
            element={<h2>User Post Detail</h2>}
          />
          <Route path="*" element={<h2>Sayfa yok</h2>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
