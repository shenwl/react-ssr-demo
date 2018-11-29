import React from 'react';
import Header from './components/Header';
import {renderRoutes} from 'react-router-config';
import router from './router'

const App = () => {
  return (
    <div>
      <Header />
      {renderRoutes(router[0].routes)}
    </div>
  );
};

export default App;


