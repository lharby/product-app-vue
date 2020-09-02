module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/script-indent": ["error", 4, { "baseIndent": 1 }],
    "vue/html-indent": ["error", 4, { "baseIndent": 1 }]
  }
}
