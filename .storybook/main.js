const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  features: {
    babelModeV7: true,
    interactionsDebugger: true,
    
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    config.module.rules.forEach(rule=>{
      if("a.tsx".match(rule.test)){
        rule.use.push({
          loader: 'ts-loader',
          options: {
              projectReferences: true
          }
        })
      }
    })
    config.module.rules.push({ test: /\.resx$/, use: 'raw-loader' })
    return config;
  },
}