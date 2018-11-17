import React from 'react';
import ReactDom from 'react-dom';

import Home from '../views/Home';

// 同构不能用render，要用hydrate
ReactDom.hydrate(<Home />, document.getElementById('root'));
