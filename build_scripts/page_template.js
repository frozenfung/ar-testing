var md = require('markdown-it')({
  html: true,
});

module.exports = {
  generatePage: function(pageContent, pageMeta = defaultMeta, isProd){
    return`<!DOCTYPE html>
<html lang="${pageMeta.lang || this.defaultMeta.lang}">
  <head>
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <title>${pageMeta.title || this.defaultMeta.title}</title>
    <meta charset="${pageMeta.charset || this.defaultMeta.charset}">
    <meta name="description" content="${pageMeta.description || this.defaultMeta.description}">
    <meta name="keywords" content="${pageMeta.keywords || this.defaultMeta.keywords}">
    <meta name="author" content="${pageMeta.author || this.defaultMeta.author}">
    ${
      pageMeta.hasOwnProperty('extra')
        ?pageMeta.extra.length
          ? pageMeta.extra.map(value => `<meta ${value}>`)
          : ''
        :''
    }
    <meta name="description" content="${pageMeta.description || this.defaultMeta.description}">
    ${
      pageMeta.hasOwnProperty('stylesheets')
        ?pageMeta.stylesheets.length
          ?pageMeta.stylesheets.map(value => `<link rel="stylesheet" href="${value}">`)
          :''
        :this.defaultMeta.stylesheets.map(value => `<link rel="stylesheet" href="${value}">`)
    }
    ${
      pageMeta.hasOwnProperty('scripts')
        ?pageMeta.scripts.length
          ?pageMeta.scripts.map(value => `<script src="${value}"></script>`)
          :''
        :this.defaultMeta.scripts.map(value => `<script src="${value}"></script>`)
    }
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="${pageMeta.favicon || this.defaultMeta.favicon}">
    <!-- CDNs -->
    <script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>
    <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.5.5/aframe/build/aframe-ar.js"></script>
  </head>
  <body>
    ${isProd ? `<base href="https://frozenfung.li/ar-testing/" />` : ``
     }
    ${md.render(pageContent)}
  </body>
</html>
`;
  },
  defaultMeta: {
    lang: 'en',
    title: 'A Page',
    stylesheets: ['./css/index.css'],
    scripts: ['./js/index.js'],
    charset: 'utf-8',
    description: 'This is a page',
    keywords: 'page, sample',
    author: 'None',
    favicon: './images/favicon.png',
    viewport: 'width=device-width, initial-scale=1',
    extra: []
  }
}
