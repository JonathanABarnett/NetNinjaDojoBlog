const BlogList = ({ blogs, title, handleDelete }) => {



  return (
    <div className="blog-list">
      {/* array.map((nameOfEachItem) => 
        { key={nameOfEachItem.id} need a unique key so that react can go through each item}
    */}
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
