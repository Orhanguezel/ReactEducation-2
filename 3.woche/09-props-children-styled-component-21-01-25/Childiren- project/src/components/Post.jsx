import { Children } from "react";

export default function Post({ allPosts, children }) {
  return (
    <div>
      {/* allPosts'u render et */}
      {allPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      ))}

      {/* Children'i render et */}
      {Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
}

