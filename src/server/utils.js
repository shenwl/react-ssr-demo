import React from "react";
import {renderToString} from "react-dom/server";
import {renderRoutes} from 'react-router-config';
import {StaticRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';


export const render = (store, routes, req) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
  ));

  // 数据注水，将state放入window.context
  return `
    <html>
      <head>
        <title>ssr test</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
