class MyData {
    constructor(name, id, loginName, program, country, img) {
        this.name = name;
        this.id = id;
        this.loginName = loginName;
        this.program = program;
        this.country = country;
        this.img = img;
    }
}



class ZooAnimals {
    constructor(aID, aClass, aImg) {
        this.aID = aID;
        this.aClass = aClass;
        this.aImg = aImg;
    }

}





function loadIndexPage() {

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data/A1-JSON.json");
    xhttp.send();

    xhttp.onload = function() {
        data = this.responseText;
        dataJSON = JSON.parse(data);

        console.log("Data retrieved from JSON file");
        // console.log(dataJSON);

        populateJson(dataJSON);

    }


    function populateJson(dataJSON) {

        //populate Header
        localStorage.setItem("myData", JSON.stringify(dataJSON.MyData));
        loadHeader(dataJSON.MyData);


        //populate animals in main
        loadAnimals(dataJSON.zooAnimals);

        //populate footer
        loadFooter(dataJSON.MyData);




    }

    function loadHeader(myData) {

        document.getElementById("hdrData").innerHTML =
            `
        Working with JSON by
        <a href="HTML/aboutMe.html">${myData.studentName}</a>
        from ${myData.studentHome} 
        
        `;
    }

    function loadAnimals(zooAnimals) {

        var animalsSection = document.querySelector(".animalsSection");
        animalsSection.innerHTML = `<h2>List of Zoo Animals</h2>`;

        for (let animal of zooAnimals) {
            animalsSection.innerHTML +=
                `
            <p class="${animal.aClass}">${animal.aID} / ${animal.aName} / ${animal.aClass} / <img src="Images/${animal.aImg}" width="25"></p>            
            `;
        }

    }

    function loadFooter(myData) {
        document.getElementById("ftrData").innerHTML =
            `
        My Login: ${myData.studentLogin} / 
        My Id: ${myData.studentID} / 
        My Program: ${myData.studentProgram}
        ...
        <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank">CITE</a>
        `;
    }


    btn1.addEventListener("click", toggleFormatting);
    btn2.addEventListener("click", toggleBorder);
    btn3.addEventListener("click", changeColour);

    function toggleFormatting() {
        document.getElementById("animalsSectionId").querySelectorAll("p").forEach(x => {
            x.classList.toggle('toggleFormatting');
        });
    }


    function toggleBorder() {
        document.getElementById("animalsSectionId").querySelectorAll("p").forEach(x => {

            if (x.textContent.toLowerCase().includes('mammal')) {
                x.classList.toggle('toggleBorder');
            }
        });
    }


    function changeColour() {
        document.getElementById("animalsSectionId").querySelectorAll("p[class = 'Bird']").forEach(x => {
            x.classList.add('changeColour');
        });
    }




}