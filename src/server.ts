import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

function isMainModule(url: string): boolean {
  return Boolean(
    typeof process !== 'undefined' &&
    process.argv &&
    process.argv[1] &&
    (process.argv[1].includes('server') || process.argv[1].includes('main'))
  );
}

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { protocol, originalUrl, baseUrl, headers } = req;
  const pathOnly = originalUrl.split('?')[0];

  // 1. Ignore Chrome devtools or well-known requests
  if (pathOnly.startsWith('/.well-known/')) {
    res.status(404).send('Not Found');
    return;
  }

  // 2. Ignore static assets with extensions that reached here (missing on disk)
  if (/\.(png|jpg|jpeg|gif|ico|svg|css|js|json|woff|woff2|ttf|map)$/i.test(pathOnly)) {
    res.status(404).send('Asset Not Found');
    return;
  }

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html: string) => res.send(html))
    .catch((err: any) => {
      if (err) {
        console.error('SSR Render Error:', err.message || err);
      }
      next(err);
    });
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export default app;
