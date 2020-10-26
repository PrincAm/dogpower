const path = require('path');

module.exports = {
  siteTitle: `DOGPOWER`,
  siteTitleShort: `Dog Power`,
  siteDescription: 'Výchova a výcvik psů',
  siteUrl: `https://www.dogpower.cz/`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
