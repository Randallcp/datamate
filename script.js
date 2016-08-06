function datamate(syntax, input) {
var initialStr = input;
  if (syntax === "spaces") {
var newString = initialStr.replace(/ /g, '", "');
console.log('["' + newString + '"]');
  }
  else if (syntax === "lines") {
    var newString = initialStr.replace(/\n/g, '", "');
console.log('["' + newString + '"]');
  }
}

datamate("spaces", "whos the best in the world");

