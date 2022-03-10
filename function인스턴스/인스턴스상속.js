function Book(title) {
  this.title = title;
}

Book.prototype.getTitle = function () {
  return this.title;
}

function Point(title) {
  Book.call(this, title);
}

Point.prototype = Object.create(Book.prototype, {});

var obj = new Point("자바스크립트");
console.log(obj.getTitle()); // 자바스크립트
