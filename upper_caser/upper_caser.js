const UpperCaser = function (words) {
  this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
  result = this.words.map((word) => {
    return word.toUpperCase()
  })
  return result
}
// 
// uppercaser = new UpperCaser(['shout'])
//
// console.log(uppercaser.toUpperCase())

module.exports = UpperCaser;
