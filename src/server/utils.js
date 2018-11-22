import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import getStore from '../store';
import routes from "../router";


export const render = (req) => {
  const store = getStore();

  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map(route => <Route {...route} />)}
        </div>
      </StaticRouter>
    </Provider>
  ));

  return `
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
};
