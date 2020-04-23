module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        [
          'module-resolver',
          {
            root:"./src",
            extensions: ['.ios.js', 'android.js', '.js', '.ts', '.tsx', '.json'],
            alias: {
              "tests": ["./tests/"],
              "~components": "./src/components",
              "~Api": "./src/services/api",
              "~Assets": "./src/assets",
              "~Components": "./src/components",
              "~Hooks": "./src/hooks",
              "~Routes": "./src/routes",
              "~Services":"./services",
              "~Screens": "./src/screens",
              "~Store": "./src/store",
              "~Styles": "./src/styles",
              "~Test": "./src/__test__",
              "~Theme": "./src/theme",
              "~Utils": "./src/utils"
            }
          }
    ]
        ]

  };
};
