import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // [varName, setVarName] = useState(initialValue);
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Eat a Fish", body: "lorem ipsum...", author: "Cat" },
    { id: 2, title: "Chew on Bone", body: "lorem ipsum...", author: "Dog" },
    { id: 3, title: "Dig A Hole", body: "lorem ipsum...", author: "Dog" },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect ran");
    console.log(blogs);
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
