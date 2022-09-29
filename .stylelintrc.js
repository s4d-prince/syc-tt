// noinspection SpellCheckingInspection

/** Lower camel case */
const namePattern = '^[a-z][a-zA-Z0-9]+$';

/** Kebab case */
const variableNamePattern = `^([a-z][a-z0-9]*)(-[a-z0-9]+)*$`;

module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  plugins: [
    'stylelint-order',
    'stylelint-declaration-strict-value',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-prettier',
  ],

  rules: {
    // base
    'max-nesting-depth': 7,
    'max-line-length': 140,
    'string-quotes': 'single',

    //prettier
    'prettier/prettier': true,

    // order
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true,
        },
        'rules',
        'at-rules',
      ],
    ],

    // url() function
    'function-url-no-scheme-relative': true, // use explicit https
    'function-url-quotes': 'always',

    // fonts
    'font-weight-notation': 'named-where-possible',

    // media queries
    'media-feature-name-no-unknown': true,
    'media-query-list-comma-newline-before': 'never-multi-line',

    // vendor prefixes are forbidden, use autoprefixer
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'selector-class-pattern': namePattern,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ],
    // comments
    'scss/double-slash-comment-whitespace-inside': 'always',

   'declaration-no-important': true,

    // scss declarations
    'scss/declaration-nested-properties': 'never',
    'plugin/declaration-block-no-ignored-properties': true,

    // scss variables
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': variableNamePattern,
    'scss/no-duplicate-dollar-variables': true,

    // scss placeholders
    'scss/at-extend-no-missing-placeholder': null,

    // scss mixins
    'scss/at-mixin-named-arguments': 'always',
    'scss/at-mixin-parentheses-space-before': 'always',
    'scss/at-mixin-argumentless-call-parentheses': 'always',

    // scss functions
      'scss/at-function-parentheses-space-before': 'never',
      'scss/at-function-named-arguments': 'never',

    // scss operators
    'scss/operator-no-newline-before': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-unspaced': true,

    // scss selectors
    'selector-attribute-quotes': 'always',
    'selector-max-universal': 1,
    'selector-max-specificity': '1,3,3', // id,class,type
    'selector-max-compound-selectors': 7,
    'scss/selector-no-redundant-nesting-selector': true,

    // scss imports
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],

    // scss if-else
    'at-rule-empty-line-before': [
      'always',
      {
        ignoreAtRules: ['else'],
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'block-closing-brace-newline-after': ['always', { ignoreAtRules: ['if', 'else'] }],

    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',


  },
};
