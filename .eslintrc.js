module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [],
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
    'array-callback-return': ['error', { checkForEach: true }],
    'for-direction': 'error',
    'no-async-promise-executor': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': ['error', { skipComments: true }],
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-undef': ['error', { typeof: true }],
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
    'no-unsafe-optional-chaining': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'off',  // impact ts
    'no-use-before-define': ['error', {
      functions: true,
      classes: true,
      variables: true,
      allowNamedExports: true
    }],
    'no-useless-backreference': 'error',
    'use-isnan': ['error', {enforceForSwitchCase: false, enforceForIndexOf: true}],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'block-scoped-var': 'error',
    camelcase: 'error',
    'class-methods-use-this': 'error',
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error'],
    eqeqeq: 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'id-denylist': ['error', 'err', 'e', 'cb'],
    'id-length': 'error',
    'no-console': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-sequences': ['error', { allowInParentheses: true }],
    'no-shadow': 'off', // impact ts
    'no-shadow-restricted-names': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': ['error', { allowFunctionParams: false }],
    'no-unneeded-ternary': ['error'],
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    'operator-assignment': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    // 'sort-keys': 'error',
    'vars-on-top': 'error',
    yoda: ['error', 'never', { exceptRange: true }],

    'comma-dangle': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-shadow': ['error',  { hoist: 'all', }],
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
