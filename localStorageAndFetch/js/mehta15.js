var books = new Array();
var categories = new Array();

class Book {
    constructor(id, title, isbn, pageCount, thumbnail, desc, authors, category) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.pageCount = pageCount;
        this.thumbnail = thumbnail;
        this.desc = desc;
        this.authors = authors;
        this.category = category;
    }

}

class Category {
    constructor(category, logo) {
        this.category = category;
        this.logo = logo;
    }
}




function loadIndexPage() {

    fetch("dataFiles/A2-JSON.json")
        .then(res => res.json())
        .then((dataJSON) => {

            localStorage.setItem("sheridanData", JSON.stringify(dataJSON.SheridanData));
            fillPage(dataJSON);

        });


}

function fillPage(dataJSON) {
    //load Header
    loadHeader(dataJSON.SheridanData);

    //load Main
    loadMain(dataJSON);

    //load Footer
    loadFooter(dataJSON.SheridanData)
}

function loadHeader(myData) {
    document.querySelector("header").classList.add('hdr');
    document.querySelectorAll(".h1hdr").forEach(x => {

        x.innerHTML +=
            `
        Using LocalStorage to use JavaScript as Backend
            <br><b>Working with Json:  <i>${myData.FullName} / ${myData.StudentID}</i>
        `;
    });
}

function loadMain(dataJSON) {


    document.querySelector.innerHTML = "";
    for (let [i, x] of dataJSON.Category.entries()) {
        document.querySelector(".categories").innerHTML +=
            `
            <img src="Images/${x.logo}" width="67">
        <a href="HTML/categoryBooks.html" onclick="saveSelectedToLS(${i})">
        ${i+1}. ${x.categoryGroup}<br><br><br>
        </a>
        `;
        categories.push(new Category(x.categoryGroup, x.logo));
        localStorage.setItem("categories", JSON.stringify(categories));

    }

    for (let x of dataJSON.BookDetails) {
        books.push(new Book(x.bookID, x.title, x.isbn, x.pageCount, x.thumbnailUrl, x.longDescription, x.authors, x.category));
    }
    localStorage.setItem("books", JSON.stringify(books));
}

function loadFooter(myData) {

    document.querySelector("footer").classList.add('ftr');
    document.querySelectorAll(".pFtr").forEach(x => {
        x.innerHTML =
            ` <label><b>My Sheridan User Name:</b> </label><span>${myData.UserName}</span>
    <br><label>My Sheridan Program: </label><span>${myData.Program}</span>`;


    })

}

function saveSelectedToLS(rowID) {

    localStorage.setItem("rowID", rowID);
    localStorage.setItem("categorySelected", categories[rowID].category);

    var booksInSelectedCategory = new Array();
    for (let x of books) {
        if (x.category == categories[rowID].category) {
            booksInSelectedCategory.push(new Book(
                x.id, x.title, x.isbn, x.pageCount, x.thumbnail, x.desc, x.authors, x.category
            ));
        }

    }

    localStorage.setItem("booksInSelectedCategory", JSON.stringify(booksInSelectedCategory));
}