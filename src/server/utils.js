import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter, Route} from "react-router-dom";
import {matchRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import getStore from '../store';
import routes from "../router";


export const render = (req, res) => {
  const store = getStore();

  const matchedRoutes = matchRoutes(routes, req.path);

  // 让matchedRoutes里面所有的组件对应的loadData方法执行一遍
  const promises = [];

  matchedRoutes.forEach(item => {
    item.route.loadData && promises.push(item.route.loadData(store));
  });

  Promise.all(promises).then(() => {
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
            {routes.map(route => <Route {...route} />)}
          </div>
        </StaticRouter>
      </Provider>
    ));

    const htmlStr =  `
      <html>
        <head>
          <title>ssr test</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script src="/index.js"></script>
        </body>
      </html>
    `;
    res.send(htmlStr);
  });
};
