import express from 'express';
import React from 'react';
import {render} from './utils';


const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  render(req, res);
});


app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});
