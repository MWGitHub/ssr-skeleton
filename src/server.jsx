import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from './containers/Root';
import Inner from './containers/Inner';

const app = express();
const port = process.env.PORT || 3000;

async function requestHandler(req, res) {
  const context = {};
  const html = renderToString(
    <Root>
      <Inner />
    </Root>
  );

  if (context.status) {
    res.status(context.status);
  }

  res.send(html);
}

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.get('*', requestHandler);

app.listen(port, () => {
  console.log(`Server listening on ${port}.`); // eslint-disable-line no-console
});
