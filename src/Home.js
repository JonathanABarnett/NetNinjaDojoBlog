import { useState } from "react";

const Home = () => {
  // [varName, setVarName] = useState(initialValue);
  const [name, setName] = useState("JB");
  const [age, setAge] = useState(33);

  const handleClick = () => {
    setName("Jonathan");
    setAge(55);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
