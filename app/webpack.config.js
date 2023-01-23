const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const configureWebpackConfig = require('kitcheningredients/src/ignoreCoverage/KitchenHelper/configureWebpackConfig');

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function(env, argv) {
  let config = await createExpoWebpackConfigAsync(env, argv);
  config = await configureWebpackConfig(config);
  return config;
};
