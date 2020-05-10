function createLibrary(libName) {
  var library = {
    name: libName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
};

function addBook(library, book) {
  var fantShelf = library.shelves.fantasy;
  var nonFicShelf = library.shelves.nonFiction;
  var ficShelf = library.shelves.fiction;
  var bookGenre = book.genre;
  if (bookGenre === "fantasy") {
    fantShelf.push(book);
  } else if (bookGenre === "nonFiction") {
    nonFicShelf.push(book);
  } else if (bookGenre === "fiction") {
    ficShelf.push(book);
  }
};

function checkoutBook(library, bookTitle) {
  var shelfNames = Object.keys(library.shelves)

  for (i = 0; i < shelfNames.length; i++) {
    var bookObjs = library.shelves[shelfNames[i]];
    for (j = 0; j < bookObjs.length; j++) {
      var bookTitles = bookObjs[j].title;
      var bookIndex = bookObjs.indexOf(bookObjs[j]);
      if (bookTitles === bookTitle) {
        bookObjs.splice(bookIndex, 1);
        return `You have now checked out ${bookTitle} from the ${library.name}`
      }
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
