module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    settings: {
        'react': {
            version: 'detect',
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
            node: {
                paths: ['src'],
                extensions: ['.ts', '.tsx'],
            },
        },
    },
    plugins: ['react', 'import', '@typescript-eslint', 'prettier'],
    rules: {
        'indent': ['warn', 4],
        'no-extra-semi': 'off',
        'comma-style': ['error', 'last'],
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error', 'always'],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        // 'quotes': ['error', 'single', { avoidEscape: true }],
        'jsx-quotes': ['error', 'prefer-double'],
        'no-console': 'warn',
        'require-jsdoc': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        'prettier/prettier': 'error',
        // ESLINT BASE RULES
        'no-debugger': 'error',
        'no-unused-vars': 'warn',
        'no-unused-expressions': [
            'warn',
            {
                allowTernary: true,
                allowShortCircuit: true,
                enforceForJSX: true,
            },
        ],
        'no-script-url': 'error',
        'no-param-reassign': 'error',
        'no-multi-spaces': 'error',
        'space-in-parens': 'error',
        // REACT RULES
        'react/jsx-indent-props': [2, 'first'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: true,
                assignment: true,
                return: true,
                arrow: true,
            },
        ],
        // REACT-HOOKS PLUGIN RULES
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        // ESLINT IMPORT PLUGIN RULES
        'import/order': [
            'error',
            {
                'groups': [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
                'newlines-between': 'always',
            },
        ],
        'import/no-unresolved': 'off',
        'import/named': 'error',
        'import/namespace': 'off',
        'import/default': 'error',
        'import/export': 'error',
        'import/no-named-as-default': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/no-commonjs': 'error',
    },
};
