function displayData() {

    var myData = JSON.parse(localStorage.getItem("myData"));

    document.querySelector(".myInfo").innerHTML =
        `
        <div class="flex2">
    <h1>My Name is ${myData.studentName}</h1>
    <h2>My Sheridan Student Id is ${myData.studentID}</h2>
    <h3>My Sheridan login is ${myData.studentLogin}</h3>
    <h4>My Program is ${myData.studentProgram}</h4>
    <h5>My Home country is ${myData.studentHome}</h5>
    </div>
    <div class="flex1">
    <img src="../Images/${myData.studentImg}" alt="My Image retrived from local Storage">
    </div>
    `;

    document.querySelector(".flex2").querySelector("h1").style.color = `#DE2121`;
    document.querySelector(".flex2").querySelector("h2").style.color = `black`;
    document.querySelector(".flex2").querySelector("h3").style.color = `white`;
    document.querySelector(".flex2").querySelector("h4").style.color = `rgb(158 245 102)`;
    document.querySelector(".flex2").querySelector("h5").style.color = `#e9cc59`;
}