import React from 'react';

const handleClick = () => {alert('click')};

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>react ssr demo</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Home;


