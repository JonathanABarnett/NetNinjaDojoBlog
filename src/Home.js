import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // [varName, setVarName] = useState(initialValue);
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Eat a Fish", body: "lorem ipsum...", author: "Cat" },
    { id: 2, title: "Chew on Bone", body: "lorem ipsum...", author: "Dog" },
    { id: 3, title: "Dig A Hole", body: "lorem ipsum...", author: "Dog" },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Cat")}
        title="Cat's Blogs!"
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Dog")}
        title="Dog's Blogs!"
      />
    </div>
  );
};

export default Home;
