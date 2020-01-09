const IsogramFinder = function (word) {
  this.word = word.split('')
}

IsogramFinder.prototype.isIsogram = function () {
  this.lowerCase()
  let unique = [...new Set(this.word)]
  return this.word.length === unique.length
}

IsogramFinder.prototype.lowerCase = function () {
  let newArray = []
  newArray = this.word.map((letter) => {
    return letter.toLowerCase()
  })
  return this.word = newArray
}

module.exports = IsogramFinder;
