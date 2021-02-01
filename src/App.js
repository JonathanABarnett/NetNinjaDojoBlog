import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: "JB", age: 33 };
  const link = "https://www.google.com";

  return (
    <div className="App">
      {/* Using { }, JSX knows it's dynamic value (variable) 
      <h1>{title}</h1>
      <p>Like {likes} times </p>
      Cannot use object variables 
      <p>{person}</p>
      <p>{Math.floor(Math.random() * 10)}</p>
      <a href={link}>Going to Google</a>
      */}

      {/* Import Component */}
      <Navbar />

      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
