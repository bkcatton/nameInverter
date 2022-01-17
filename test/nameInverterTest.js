const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {

  it("should return a empty string when passed an empty string", function () {
    const nameAsString = '';
    const nameIsInverted = nameInverter(nameAsString);
    assert.isTrue(nameIsInverted === "");
  });
  it("return a single name when passed a single name", function () {
    const nameAsString = 'name';
    const nameIsInverted = nameInverter(nameAsString);
    console.log(nameIsInverted);  
    assert.isTrue(nameIsInverted === "name");
  });
  it("return a single name when passed a single name with extra spaces", function () {
    const nameAsString = '   name ';
    const nameIsInverted = nameInverter(nameAsString);
    console.log(nameIsInverted);  
    assert.isTrue(nameIsInverted === "name");
  });
  it("return a last-name, first-name when passed a first and last-name", function () {
    const nameAsString = "first last";
    const nameIsInverted = nameInverter(nameAsString);
    console.log(nameIsInverted);  
    assert.isTrue(nameIsInverted === "last, first");
  });
  it("return a last-name, first-name when passed a first and last-name with extra spaces around the names", function () {
    const nameAsString = " first last";
    const nameIsInverted = nameInverter(nameAsString);
    console.log(nameIsInverted);  
    assert.isTrue(nameIsInverted === "last, first");
  });
  it("return an empty string when passed a single honorific", function () {
    const nameAsString = "Dr. ";
    const nameIsInverted = nameInverter(nameAsString);
    console.log(nameIsInverted);  
    assert.isTrue(nameIsInverted === "");
  });
  it("honorific first-name when passed honorific first-name", function () {
    const nameAsString = "Dr. first";
    const nameIsInverted = nameInverter(nameAsString);
    console.log(nameIsInverted);  
    assert.isTrue(nameIsInverted === "Dr. first");
  });
  it("return a honorific last-name, first-name when passed honorific first-name last-name", function () {
    const nameAsString = "Dr. first-name last-name";
    const nameIsInverted = nameInverter(nameAsString);
    console.log(nameIsInverted);  
    assert.isTrue(nameIsInverted === "Dr. last-name, first-name");
  });
  it("return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", function () {
    const nameAsString = " Dr. first-name last-name ";
    const nameIsInverted = nameInverter(nameAsString);
    console.log(nameIsInverted);  
    assert.isTrue(nameIsInverted === "Dr. last-name, first-name");
  });
  it("throw an error when name is undefined", function () {
    const nameAsString = undefined;
    //onst nameIsInverted = nameInverter(nameAsString);
    assert.throws(() => { nameInverter(nameAsString) }, 'Error');
  });


});
