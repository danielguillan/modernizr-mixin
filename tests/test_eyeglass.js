"use strict";

var Eyeglass = require("eyeglass");
var sass = require("node-sass");
var path = require("path");
var assert = require("assert");
var fs = require("fs"); // reads static files

var Tester = function() {
  this.readEyeglassTestFile = function(testNumber, isControl, encoding) {
    if (typeof(encoding) === "undefined") {
      encoding = "utf8";
    }

    var dir = path.join(__dirname, "eyeglass");
    var filename = isControl ? "control" : "test";
    testNumber = testNumber >= 1 && testNumber <= 9 ? 
      "0" + testNumber : testNumber;
    var ext = isControl ? ".css" : ".scss";
    filename = testNumber + "_" + filename + ext;

    return fs.readFileSync(path.join(dir, filename), "utf8");

  };

  this.runDefaultTest = function(num, done){
    var rawScss = this.readEyeglassTestFile(num, false);
    var controlCss = this.readEyeglassTestFile(num, true);

    // `outputStyle` could be: "nested", "expanded", "compact", "compressed"
    // `controlCss` has "expanded" style.
    var options = { data: rawScss, outputStyle: "expanded" }; 
    this.assertCompiles(options, controlCss, done);
  };

  this.compile = function(options, cb) {
    // Eyeglass creates a wrapper around basic options,
    // use ['options'] hack to make it work:
    sass.render(new Eyeglass(options)['options'], cb);
  };

  this.assertCompiles = function(options, expectedOutput, done) {
    this.compile(options, function(err, result) {
      assert(!err, err && err.message); // done without errors.
      assert.equal(result.css.toString(), expectedOutput);
      done();
    });
  };
};

describe("Eyeglass module testing", function() {
  before(function() {
    this.tester = new Tester();
    this.testNumber = 1;
  });

  afterEach(function(){
    this.testNumber += 1;
  });

  var failingTests = [
    "sould not create an extra parent selector",
    "sould not create an extra parent selector with modernizr-mixin"
  ];

  var passingTests = [
    "should compile a sass file" // This is the first test `01_test.scss`
  ];

  for(var i = 0; i < passingTests.length; i++){
    it(passingTests[i], function(done) {
      this.tester.runDefaultTest(this.testNumber, done);
    });
  }

  for(var i = 0; i < failingTests.length; i++){
    it.skip(failingTests[i], function(done) {
      this.tester.runDefaultTest(this.testNumber, done);
    });
  }

});
