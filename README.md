# babel-webpack-react-boilerplate
yarn add babel-runtime babel-core babel-polyfill moment lodash
yarn add --dev webpack
yarn add --dev babel-eslint babel-loader babel-plugin-add-module-exports babel-plugin-transform-runtime babel-preset-es2015 babel-preset-react babel-preset-env babel-preset-flow cross-env eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-flow eslint-config-airbnb-flow flow-bin css-loader style-loader

yarn add --dev antd babel-plugin-import

yarn add --dev isomorphic-fetch es6-promise

yarn add --dev node-sass sass-loader
yarn add --dev less less-loader

```
dva 的 .babelrc

{
  "presets": [
    "es2015",
    "react",
    "stage-0"
  ],
  "plugins": [
    "add-module-exports",
    "transform-runtime"
  ],
  "env": {
    "test": {
      "plugins": [ "istanbul" ]
    }
  }
}

```

```
dva .eslintrc

{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "mocha": true
  },
  "rules": {
    "generator-star-spacing": [0],
    "consistent-return": [0],
    "react/forbid-prop-types": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "global-require": [1],
    "import/prefer-default-export": [0],
    "react/jsx-no-bind": [0],
    "react/prop-types": [0],
    "react/prefer-stateless-function": [0],
    "no-else-return": [0],
    "no-restricted-syntax": [0],
    "import/no-extraneous-dependencies": [0],
    "no-use-before-define": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "no-nested-ternary": [0],
    "arrow-body-style": [0],
    "import/extensions": [0],
    "no-bitwise": [0],
    "no-cond-assign": [0],
    "import/no-unresolved": [0],
    "require-yield": [1],
    "no-param-reassign": [0],
    "no-shadow": [0],
    "no-underscore-dangle": [0]
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }
}
```