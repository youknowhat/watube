module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": 0,
    "no-plusplus": 0,
    "vars-on-top": 0,
    "no-underscore-dangle": 0,
    "comma-dangle": 0,
    "func-names": 0,
    "prefer-arrow-callback": 0,
    "prefer-template": 0,
    "no-nested-ternary": 0,
    "max-classes-per-file": 0,
    "arrow-parens": ["error", "as-needed"],
    "no-restricted-syntax": [0, "ForOfStatement"],
    "no-param-reassign": ["error", { "props": false }]
  },
};
