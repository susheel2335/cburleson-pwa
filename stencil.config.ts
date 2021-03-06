// Documentation: https://stenciljs.com/docs/config

import { Config } from '@stencil/core';

// Start:
// See: Environment variables with StencilJS
// https://medium.com/stencil-tricks/environment-variables-with-stenciljs-57e9da591280
//let globalScript: string = 'src/global/app.ts';

const dev: boolean = process.argv && process.argv.indexOf('--dev') > -1;
console.log('\nstencil.config.ts > --dev? %o \n', dev);

//  if (dev) {
  //globalScript = 'src/global/app-dev.ts';
//}
// End: env vars

export const config: Config = {
  outputTargets: [{
    type: 'www',
    baseUrl: 'https://codyburleson.com/',
    serviceWorker: null,
    prerenderConfig: './prerender.config.ts',
  }],
  globalScript: 'src/global/app.ts',
  //globalScript: globalScript,
  globalStyle: 'src/global/app.css',
  copy: [{
    src: '../ads.txt',
    dest: 'ads.txt'
  },
  {
    src: '../google67847f872fb87981.html',
    dest: 'google67847f872fb87981.html'
  },
  {
    src: '../sitemap.txt',
    dest: 'sitemap.txt'
  },
  {
    src: '../robots.txt',
    dest: 'robots.txt'
  }]
};
