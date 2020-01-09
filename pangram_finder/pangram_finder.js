const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.split('');
}

PangramFinder.prototype.isPangram = function () {
  this.lowerCase()
  let newArray = []
  this.phrase.forEach((letter) => {
    this.alphabet.some((alphabet, index) => {
      if (letter === alphabet) {
        newArray.push(alphabet)
        this.alphabet.splice(index,1)
      }
    })
  })
  return newArray.length === 26

  // return this.alphabet.every(letter => this.phrase.includes(letter))
}

PangramFinder.prototype.lowerCase = function () {
  let newArray = []
  newArray = this.phrase.map((letter) => {
    return letter.toLowerCase()
  })
  return this.phrase = newArray

}

// phrase = new PangramFinder('XxCxCVv')
// console.log(phrase.lowerCase());



module.exports = PangramFinder;
