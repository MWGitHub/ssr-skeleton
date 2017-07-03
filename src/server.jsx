import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { matchPath } from 'react-router-dom';
import Root from './containers/Root';
import ServerRoot from './ServerRoot';
import routes from './route-config';

const app = express();
const port = process.env.PORT || 3000;

async function loadRouteData(url) {
  const match = routes.find(route => matchPath(url, route));

  let data = {};
  if (!match || !match.load) return data;

  try {
    data = await match.load();
  } catch (e) {
    console.error(e);
  }

  return data;
}

async function requestHandler(req, res) {
  const data = await loadRouteData(req.url);
  const context = {};
  const html = renderToString(
    <Root>
      <ServerRoot
        Router={StaticRouter}
        location={req.url}
        context={context}
        data={data}
      />
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
