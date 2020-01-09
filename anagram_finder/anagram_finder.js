const AnagramFinder = function (word) {
  this.word = word.split('')
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  otherWords = this.removeEmptyStrings(otherWords)
  otherWords = this.removeWrongWordLength(otherWords)
  // otherWords = this.otherWordsLowerCase(otherWords)
  // otherWords = this.splitOtherWords(otherWords)
  otherWords = this.removeSameWordFromResults(otherWords)
  // this.word = this.wordLowerCase()
  let results = []
  otherWords.forEach((word) => {
    let newResult = []
    splitWord = word.split('')
    splitWord.some((letter) => {
      let searchTerm = this.word
      searchTerm.some((searchLetter, index) => {
        if (searchLetter.toLowerCase() === letter.toLowerCase()) {
          newResult.push(letter)
          // searchTerm.splice(index, 1)
          // console.log('searchTerm:', searchTerm);
        }
      })
    })
    // console.log('new result:', newResult);
    // console.log('word',this.word);
    if (newResult.length === this.word.length) {
      // console.log('new result', newResult);
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

AnagramFinder.prototype.splitOtherWords = function(otherWords) {
  return otherWords.map((word) => word = word.split(''))
}

AnagramFinder.prototype.otherWordsLowerCase = function(otherWords) {
  return otherWords.map((word) => word.toLowerCase())
}

AnagramFinder.prototype.wordLowerCase = function() {
  return this.word.map((letter) => letter.toLowerCase())
}

AnagramFinder.prototype.removeSameWordFromResults = function(otherWords) {
  let newArray = []
  otherWords.forEach((word) => {
    if (word !== this.word) {
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

anagram = new AnagramFinder('cat')
otherWords = ['Bone', 'Play']

console.log(anagram.findAnagrams(otherWords))

module.exports = AnagramFinder;
