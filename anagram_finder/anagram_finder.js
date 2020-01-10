const AnagramFinder = function (word) {
  this.word = word.split('')
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  otherWords = this.removeEmptyStrings(otherWords)
  otherWords = this.removeWrongWordLength(otherWords)
  otherWords = this.removeSameWordFromResults(otherWords)
  let results = []
  otherWords.forEach((word) => {
    let newResult = []
    splitWord = word.split('')
    let searchTerm = this.word.map(letter => letter) // needed to map as modify later on which modified this.word
    splitWord.some((letter) => {
      searchTerm.some((searchLetter, index) => {
        if (searchLetter.toLowerCase() === letter.toLowerCase()) {
          newResult.push(letter)  // if found put into new array
          searchTerm[index] = '' // set to blank so not "found" again for items with multiple of same letter
        }
      })
    })
    if (newResult.length === this.word.length) {
      results.push(word)
    }
  })
  return results
}

AnagramFinder.prototype.removeWrongWordLength = function(otherWords) {
  let newArray = []
  otherWords.forEach((word) => {
    if (word.length === this.word.length ) {
      newArray.push(word)
    }
  })
  return newArray
}

AnagramFinder.prototype.removeSameWordFromResults = function(otherWords) {
  let newArray = []
  otherWords.forEach((word) => {
    if (word !== this.word.join('')) {
      newArray.push(word)
    }
  })
  return newArray
}

AnagramFinder.prototype.removeEmptyStrings = function(otherWords) {
  let newArray = []
  otherWords.forEach((word) => {
    if ( word !== '' ) {
      newArray.push(word)
    }
  })
  return newArray
}


//
// AnagramFinder.prototype.splitOtherWords = function(otherWords) {
//   return otherWords.map((word) => word = word.split(''))
// }
//
// AnagramFinder.prototype.otherWordsLowerCase = function(otherWords) {
//   return otherWords.map((word) => word.toLowerCase())
// }
//
// AnagramFinder.prototype.wordLowerCase = function() {
//   return this.word.map((letter) => letter.toLowerCase())
// }
//
//   anagram = new AnagramFinder('cat')
//   otherWords = ['Bone', 'Play']
//
// console.log(anagram.findAnagrams(otherWords))

module.exports = AnagramFinder;
