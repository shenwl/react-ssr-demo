import express from 'express';
import React from 'react';
import {render} from './utils';
import {getStore} from '../store';
import {matchRoutes} from 'react-router-config';
import routes from "@/router";


const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path);

  // 让matchedRoutes里面所有的组件对应的loadData方法执行一遍
  const promises = [];
  matchedRoutes.forEach(item => {
    item.route.loadData && promises.push(item.route.loadData(store));
  });

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req));
  });
});


app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});
