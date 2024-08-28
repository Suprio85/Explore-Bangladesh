const path = require("path");

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        "assert": require.resolve("assert/"),
        "zlib": require.resolve("browserify-zlib"),
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util/"),
        "querystring": require.resolve("querystring-es3"),
        "fs": false  // 'fs' module is not available in the browser, so we set it to false
      };

      return webpackConfig;
    },
  },
}