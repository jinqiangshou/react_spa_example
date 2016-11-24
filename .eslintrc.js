module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    extends: 'standard',
    plugins: [
        'html',
        'react'
    ],
    // add your custom rules here
    'rules': {
        // 4 spaces indent
        "indent": ["error", 4],
        // allow paren-less arrow functions
        'arrow-parens': 0,

        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
}
