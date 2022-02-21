/*
 * @Author: your name
 * @Date: 2022-02-21 22:52:34
 * @LastEditTime: 2022-02-21 23:05:59
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \d-ui\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
      json: 'never',
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'guard-for-in': 'off',
    'linebreak-style': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-mixed-operators': 'off',
    'no-template-curly-in-string': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'radix': 'off',
    'prefer-destructuring': 'off',
    'no-shadow': 'off',
    'no-bitwise': 'off',
    'template-curly-spacing': 'off',
    'indent' : 'off',
    'vue/no-template-shadow': 'off',
    'vue/require-default-prop': 'off',
    'vue/script-indent': 'off',
  },
};
