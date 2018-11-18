import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../router';

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {

  const content = renderToString((
    <StaticRouter context={{}} localtion={req.path}>
      {Routes}
    </StaticRouter>
  ));

  res.send(`
    <html>
      <head>
        <title>ssr test</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
