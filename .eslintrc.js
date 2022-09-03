module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-generic-constructors': [2, 'constructor'],
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/member-delimiter-style': [2, {
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
    '@typescript-eslint/method-signature-style': [2, 'property'],
    '@typescript-eslint/no-empty-interface': 2,
    'comma-dangle': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/jsx-one-expression-per-line': [2, { allow: 'literal' }],
    'react/jsx-max-props-per-line': [2, { maximum: 1 }],
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/jsx-first-prop-new-line': [2, 'always'],
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'proportional-always',
      afterOpening: 'never',
      beforeClosing: 'proportional-always'
    }]
  },
  ignorePatterns: ['**/*.d.ts']
};
