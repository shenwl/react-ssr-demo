import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../router';

const App = () => {
  return (
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  );
};



// 同构：一套react代码，在服务器端执行一次，在客户端再执行一次
// 同构不能用render，要用hydrate
// 服务器端渲染只发生在第一次进入页面的时候
ReactDom.hydrate(<App />, document.getElementById('root'));
