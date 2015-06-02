"use strict";

var Eyeglass = require("eyeglass");
var sass = require("node-sass");
var path = require("path");
var assert = require("assert");
var fs = require("fs"); // reads static files

var Tester = function() {
  this.compile = function(options, cb) {
    // Eyeglass creates a wrapper around basic options,
    // use ['options'] hack to make it work:
    sass.render(new Eyeglass(options)['options'], cb);
  };

  this.assertCompiles = function(options, expectedOutput, done) {
    this.compile(options, function(err, result) {
      assert(!err, err && err.message); // done without errors.
      assert.equal(expectedOutput, result.css.toString());
      done();
    });
  };
};

describe("Eyeglass module testing", function() {

  var rawScss;
  var controlCss;
  before(function() {
    var dir = path.join(__dirname, "eyeglass");
    rawScss = fs.readFileSync(path.join(dir, "test.scss"), 'utf8');
    controlCss = fs.readFileSync(path.join(dir, "control.css"), 'utf8');
  });

  it("should compile a sass file", function(done) {
    var tester = new Tester();
    // `outputStyle` could be: nested, expanded, compact, compressed
    // controlCss has "expanded" style.
    var options = { data: rawScss, outputStyle: "expanded" }; 
    tester.assertCompiles(options, controlCss, done);
  });
});
