module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react', '@typescript-eslint'
  ],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true
      },
      singleline: {
        delimiter: 'semi',
        requireLast: true
      },
      multilineDetection: 'brackets'
    }],
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/jsx-first-prop-new-line': ['error', 'always'],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'proportional-always',
      afterOpening: 'never',
      beforeClosing: 'proportional-always'
    }],
  },
  ignorePatterns: ['**/*.d.ts']
};
