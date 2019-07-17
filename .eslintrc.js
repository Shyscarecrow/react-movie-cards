module.exports = {
  extends: 'airbnb',
  'env': {
    'browser': true,
    'node': true
  },
  rules: {
    'no-use-before-define': ['error', { 'functions': false }],
    'import/prefer-default-export': 'off'
  }
};
