
function page(text) {
    var text = 'Untitled page';
    var characters = 0;
    var words = 0;

    countChars(this);
    countWords(this);

    function toString() {
        return `${this.text} - ${this.characters} - ${this.words}`;
    }
}

var document = function () {
    var title = '';
    var pages = [];

    function toString() {
        return `${this.title} - ${this.pages.length}`;
    }
}

function addPage(p, doc) {
    doc.pages.push(p);
}

function countChars(p) {
    p.characters = p.text.length;
}

function countWords(p) {
    p.words = p.text.split(' ').length;
}

function print() {
    console.log(this.toString());
}

var page1 = new page();

//Initial state
console.log(page1.title);
console.log(page1.characters);
console.log(page1.words);
//

page1.text = "This is my first refactor in which I will apply all those tricky stuff that Josh told me!";
countChars(page1);
countWords(page1);

var myBook = new document();
myBook.title = 'My refactoring book!';
addPage(page1, myBook);