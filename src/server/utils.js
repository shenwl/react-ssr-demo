import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import Routes from "../router";
import React from "react";

export const render = (req) => {
  const content = renderToString((
    <StaticRouter context={{}} location={req.path}>
      {Routes}
    </StaticRouter>
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
