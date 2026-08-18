class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newCondition) {
		if (newCondition < 0) {
			this._state = 0;
		} else if (newCondition > 100) {
			this._state = 100;
		} else {
			this._state = newCondition;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

    findBookBy(type, value){
        for (let book of this.books){
            if(book[type] === value){
                return book;
            } 
        }
        return null;
    }

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			let book = this.books[i];
			if (book.name === bookName) {
				this.books.splice(i, 1);
				return book;
			}
		}
		return null;
	}
}

const library = new Library("Библиотека Маяковского");
library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);

library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);

library.addBook(
 new Book(
   "Семенов Д.А.",
   "Книга рецептов",
   1919,
   222
 )
);


let timeMashine = new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138)
library.addBook(timeMashine);
library.addBook(new Magazine("Мурзилка", 1924, 60));

library.findBookBy("releaseDate", 1919).name;

library.giveBookByName("Машина времени");
timeMashine.state = 70;
timeMashine.fix();
library.addBook(timeMashine);