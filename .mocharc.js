module.exports = {
  exit: true,
  bail: true,
  slow: 1000,
  //recursive: true,
  file: ["compiled/test/demo2.js"],
  timeout: 30 * 1000,
 // reporter: ['spec', 'mocha-allure-reporter']
};
