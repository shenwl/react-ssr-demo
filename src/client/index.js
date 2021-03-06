import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {getClientStore} from '../store';
import {renderRoutes} from 'react-router-config';
import routes from '../router';


const store = getClientStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    </Provider>
  );
};


// 同构：一套react代码，在服务器端执行一次，在客户端再执行一次
// 同构不能用render，要用hydrate
// 服务器端渲染只发生在第一次进入页面的时候
ReactDom.hydrate(<App/>, document.getElementById('root'));
