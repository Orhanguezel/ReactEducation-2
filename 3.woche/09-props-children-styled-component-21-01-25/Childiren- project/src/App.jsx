import "./App.css";
import Post from "./components/Post";

function App() {
  const posts = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      text: "Closures are a powerful feature of JavaScript that allow functions to capture variables from their surrounding scope.",
    },
    {
      id: 2,
      title: "Getting Started with React",
      text: "React is a popular JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code.",
    },
    {
      id: 3,
      title: "CSS Grid Layout Tips",
      text: "CSS Grid is a two-dimensional layout system for the web. It enables developers to create grid-based designs with ease.",
    },
  ];

  return (

    <>
    <h1>Programing Posts</h1>
    <Post allPosts={posts}>
      <h3>Props children</h3>
      <span>This is from app component but I am a child vor Posts</span>
    </Post>
    </>
  )
}

export default App
