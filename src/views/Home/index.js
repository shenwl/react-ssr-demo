import React from 'react';
import Header from '../../components/Header';

const handleClick = () => {alert('click')};

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <div>react ssr demo</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Home;


