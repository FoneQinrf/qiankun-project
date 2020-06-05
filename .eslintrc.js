/*
 * @Author: Fone丶峰
 * @Date: 2020-05-28 11:06:26
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-03 17:37:11
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'vue/no-use-v-if-with-v-for': ['error', {
      allowUsingIterationVar: false,
    }],
    'no-restricted-syntax': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-destructuring': 'off',
    'guard-for-in': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 0,
    'no-tabs': "off",
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-trailing-spaces': 'off',
    'linebreak-style': 'off',
    'eol-last': 'off',
    'quotes': 'off',
    'indent': 'off',
    'comma-dangle': ["error", "only-multiline"],
    'object-curly-newline': 'off',
    'consistent-return': 'off',
    'import/no-cycle': 'off',
    'semi': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    'spaced-comment': 'off',
    'no-multi-spaces': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
