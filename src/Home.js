import { useState } from "react";

const Home = () => {
  // [varName, setVarName] = useState(initialValue);
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Eat a Fish", body: "lorem ipsum...", author: "Cat" },
    { id: 2, title: "Chew on Bone", body: "lorem ipsum...", author: "Dog" },
    { id: 3, title: "Dig A Hole", body: "lorem ipsum...", author: "Dog" },
  ]);

  return (
    <div className="home">
      {/* array.map((nameOfEachItem) => 
        { key={nameOfEachItem.id} need a unique key so that react can go through each item}
    */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
