function loadBooksPage() {

    //load Header
    loadHeader(JSON.parse(localStorage.getItem("sheridanData")));

    //load Main
    let rowID = localStorage.getItem("rowID");
    let category = localStorage.getItem("categorySelected");
    let books = JSON.parse(localStorage.getItem("booksInSelectedCategory"));

    populateMain(rowID, category, books);

    //load Footer
    loadFooter(JSON.parse(localStorage.getItem("sheridanData")));
}

function populateMain(rowID, category, books) {

    document.querySelector(".categoryHeading").innerHTML =
        `
    Books from <span>${category}</span> Category
    `;

    document.querySelector(".booksContainer").innerHTML = "";


    for (let [i, x] of books.entries()) {

        document.querySelector(".booksContainer").innerHTML +=
            `
            <div class="bookTitle">Title: ${x.title}</div>  

            <div class="bookHeading">
            <p><b>ISBN</b></p>
            <p><b>BookID</b></p>
            <p><b>Pages</b></p>
            <p><b>Category</b></p>
            </div> 
            
                       
            <div class="bookInfo">
            <p>${x.isbn}</p>
            <p>${x.id}</p>
            <p>${x.pageCount}</p>
            <p>${x.category}</p>
            </div>     
            
            <div class="bookThumbnail flex-center-all"><a href="../Images/${x.thumbnail}" target="blank">Click to open thumbnail in a new tab</a></div>
       
            <button class="btnToggle" onclick="toggleDesc(${i})">Click to toggle long description</button>
            <div class="desc${i} flex-center-all">${x.desc}</div>
           
        
        `;
        document.querySelector(`.desc${i}`).style.display = 'none';




    }

}

function toggleDesc(index) {

    if (document.querySelector(`.desc${index}`).style.display === 'none') {
        document.querySelector(`.desc${index}`).style.display = 'block';

    } else {
        document.querySelector(`.desc${index}`).style.display = 'none';

    }


}