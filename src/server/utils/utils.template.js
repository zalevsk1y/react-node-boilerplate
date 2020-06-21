import * as bundles from '../../../bundle-names-manifest.json';

export default (title = 'No Title', preloadedState, content) => {
  const cssPath = `public${bundles.default['main.css'].slice(1)}`;
  const scripts = `<script>window.__INIT_STATE__=${
    preloadedState !== undefined ? JSON.stringify(preloadedState) : {}
  }</script>`;
  return `<!DOCTYPE html>
        <html lang='en'>
            <head>
                <title>${title || 'Page for tech test.'}</title>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <meta http-equiv='X-UA-Compatible' content='ie=edge'>
                <meta name='description' content='Page for tech test'>
                <link href='public/images/favicon.ico' rel='icon' type='image/png'>
                <link href='${cssPath}' rel='stylesheet' type='text/css'>
            </head>
            <body>
                <div class='content-container'>
                    <div class='content'>
                        ${content || ''}
                    </div>
                </div>
                ${scripts}
            </body>
            </html>`;
};
