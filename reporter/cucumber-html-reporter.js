const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "cypress/cucumber-json", // ** Path of .json file **//
  reportPath: "./reports/cucumber-html-report.html",
});
