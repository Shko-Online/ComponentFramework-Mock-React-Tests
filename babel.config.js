module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      "module-resolver",
      {
        "root": ["./"],
        "alias": {
          "@shko-online/componentframework-mock": "./ComponentFramework-Mock/src",
          "@powercat/breadcrumb": "./powercat-code-components/Breadcrumb",
          "@powercat/auto-width-label": "./powercat-code-components/AutoWidthLabel",
          "@powercat/calendar": "./powercat-code-components/Calendar",
          "@powercat/command-bar": "./powercat-code-components/CommandBar",
          "@powercat/context-menu": "./powercat-code-components/ContextMenu",
          "@powercat/details-list": "./powercat-code-components/DetailsList",
          "@powercat/pivot": "./powercat-code-components/Pivot",
        }
      }
    ],
  ]
};