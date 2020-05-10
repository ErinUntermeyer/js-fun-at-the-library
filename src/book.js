function createTitle(title) {
  return "The " + title;
};

function buildMainCharacter(name, age, pronouns) {
  var ghoulCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return ghoulCharacter;
};

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    return reviews.push(review);
  }
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};

function writeBook(bookTitle, bookCharacter, genre) {
  var bookObj = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return bookObj;
};

function editBook(bookObj) {
  bookObj.pageCount = bookObj.pageCount * .75;
  return bookObj.pageCount;
};

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
