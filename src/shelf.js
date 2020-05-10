function shelfBook(book, scifiShelf) {
  if (scifiShelf.length < 3) {
    scifiShelf.unshift(book);
  }
};

function unshelfBook(bookTitle, scifiShelf) {
  for (i = 0; i < scifiShelf.length; i++) {
    var bookTitles = scifiShelf[i].title
    var bookIndex = scifiShelf.indexOf(scifiShelf[i]);
    if (bookTitles === bookTitle) {
      scifiShelf.splice(bookIndex, 1)
    }
  }
};

function listTitles(fantasyShelf) {
  var allTitles = ""
  for (i = 0; i < fantasyShelf.length; i++) {
    if (i < fantasyShelf.length - 1) {
      allTitles += `${fantasyShelf[i].title}, `
    } else {
      allTitles += `${fantasyShelf[i].title}`
    }
  }
  return allTitles;
};

function searchShelf(scifiShelf, titleOfBook) {
  for (i = 0; i < scifiShelf.length; i++) {
    var bookTitle = scifiShelf[i].title
  } if (titleOfBook === bookTitle) {
    return true
  } else {
    return false
  }
};

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
