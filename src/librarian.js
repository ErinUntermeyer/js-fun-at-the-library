class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patronName, boolean) {
    if (boolean === true) {
      return `Good morning, ${patronName}!`
    } else {
      return `Hello, ${patronName}!`
    }
  }

  findBook(bookTitle) {
    var shelfNames = Object.keys(this.library.shelves)

    for (var i = 0; i < shelfNames.length; i++) {
      var bookObjs = this.library.shelves[shelfNames[i]];
      for (var j = 0; j < bookObjs.length; j++) {
        var bookTitles = bookObjs[j].title;
        var bookIndex = bookObjs.indexOf(bookObjs[j]);
        if (bookTitle === bookTitles) {
          bookObjs.splice(bookIndex, 1);
          return `Yes, we have ${bookTitle}`
        } else if (bookTitle !== bookTitles) {
          return `Sorry, we do not have ${bookTitle}`
        }
      }
    }
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25);
  }

};

module.exports = Librarian;
