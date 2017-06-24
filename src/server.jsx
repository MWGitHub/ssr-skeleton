import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from './Routes';

const app = express();
const port = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'src', 'static')));

app.get('*', (req, res) => {
  const context = {};
  const html = renderToString(
    <Routes
      Router={StaticRouter}
      location={req.url}
      context={context}
    />
  );

  if (context.status) {
    res.status(context.status);
  }

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server listening on ${port}.`); // eslint-disable-line no-console
});
