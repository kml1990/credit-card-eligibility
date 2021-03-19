module.exports = {
    root: true,
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'prettier', 'spellcheck'],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                paths: ['./src'],
            },
        },
    },
    rules: {
        'spellcheck/spell-checker': [
            1,
            {
                comments: false,
                strings: true,
                identifiers: false,
                lang: 'en_US',
                skipWords: ['dict', 'aff', 'hunspellchecker', 'hunspell', 'utils', 'aws'],
                skipIfMatch: [
                    'http://[^s]*',
                    '^[-\\w]+/[-\\w\\.]+$', // For MIME Types
                ],
                skipWordIfMatch: [
                    '^foobar.*$', // words that begin with foobar will not be checked
                ],
                minLength: 3,
            },
        ],
        'comma-dangle': 'off',
        'function-paren-newline': 'off',
        'global-require': 'off',
        'import/no-dynamic-require': 'off',
        'no-inner-declarations': 'off',
        'class-methods-use-this': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        "@typescript-eslint/naming-convention": "off",
        "no-underscore-dangle": "off",
        "react/jsx-props-no-spreading": "off",
        "react/button-has-type": "off",
        "import/no-named-as-default": 0,
        "react/prop-types": 0,
    },
};
