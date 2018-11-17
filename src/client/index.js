import React from 'react';
import ReactDom from 'react-dom';

import Home from '../views/Home';


// 同构：一套react代码，在服务器端执行一次，在客户端再执行一次
// 同构不能用render，要用hydrate
ReactDom.hydrate(<Home />, document.getElementById('root'));
