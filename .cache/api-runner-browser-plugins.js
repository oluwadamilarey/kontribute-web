module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-anchor-links/gatsby-browser.js'),
      options: {"plugins":[],"offset":-120},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"MyKontribute","short_name":"Kontribute","start_url":"/","display":"standalone","icon":"src/assets/images/kontribute.svg","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"3f9c1c4463fdd9ec4bbe191ef012f2f0"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
