const Home = () => {
  const handleClick = (name) => {
    console.log("you clicked me, " + name);
  };

  const eventClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={() => handleClick("You Nerd")}>Click Me</button>
      <button onClick={eventClick}>Event Click</button>
    </div>
  );
};

export default Home;
