let rdLight = document.querySelector(".rdLight");
let rdDark = document.querySelector(".rdDark");
let body = document.body;
let aboutMe = document.querySelector(".aboutMe");
let myPic = document.querySelector(".myPic img");
let projectsContainer = body.querySelector(".projectsContainer");
let serviceItems = body.querySelector(".serviceItems");
let allServiceItems = document.querySelectorAll(".serviceItems div");
let hamBar = document.querySelector("nav .fa-bars");
let crossBar = document.querySelector("nav .fa-xmark");
let navBar = document.querySelector("nav ul");



rdDark.addEventListener("click", () => {

    body.classList.add('darkTheme');
    body.classList.remove('lightTheme');
    body.querySelector("#home").classList.replace('homeContainerLight', 'homeContainerDark');

    aboutMe.style.backgroundImage = "linear-gradient(322deg, rgb(0 0 0), transparent)";
    aboutMe.querySelectorAll("div span").forEach(x => {

        x.style.color = "yellow";
    });
    myPic.style.boxShadow = "-14px -12px 20px rgb(237, 7, 7, 0.6)";

    projectsContainer.classList.remove("lightProjectsContainer");
    projectsContainer.querySelector("h1").style.color = "rgb(231, 206, 42)";

    for (let x of allServiceItems) {
        x.querySelector("h2").classList.replace('serviceNameLight', 'serviceNameDark');
        x.classList.replace('serviceItemLight', 'serviceItemDark')
    }

    body.querySelector("sup").style.color = "yellow";
    body.querySelectorAll(".contactMeContainer i").forEach(x => {
        x.classList.remove("iLight");
    })




});

rdLight.addEventListener("click", () => {

    body.classList.add('lightTheme');
    body.classList.remove('darkTheme');
    body.querySelector("#home").classList.replace('homeContainerDark', 'homeContainerLight');


    aboutMe.style.backgroundImage = "linear-gradient(121deg, rgb(64 241 255), transparent)";
    aboutMe.querySelectorAll("div span").forEach(x => {

        x.style.color = "red";
    });
    myPic.style.boxShadow = "rgb(30 75 76 / 60%) -14px -12px 20px";

    projectsContainer.classList.add("lightProjectsContainer");
    projectsContainer.querySelector("h1").style.color = "#3b158c";
    projectsContainer.querySelector("h1").style.textShadow = "none";

    for (let x of allServiceItems) {
        x.querySelector("h2").classList.replace('serviceNameDark', 'serviceNameLight');
        x.classList.replace('serviceItemDark', 'serviceItemLight')
    }

    body.querySelector("sup").style.color = "darkblue";
    body.querySelectorAll(".contactMeContainer i").forEach(x => {
        x.classList.add("iLight");
    })



});

//---------------Projects Active-Inactive Tabs-------------------------
let projects = document.querySelectorAll(".projectsContainer h2 span");
let webProjects = projects[0];
let otherProjects = projects[1];
let webProjectsData = document.querySelector(".projectsContainer .webProjectsData");
let otherProjectsData = document.querySelector(".projectsContainer .otherProjectsData");


webProjects.onclick = () => {

    webProjects.classList.replace('inactiveTab', 'activeTab')
    otherProjects.classList.replace('activeTab', 'inactiveTab');

    setTimeout(() => {
        webProjectsData.classList.replace('inactiveTabData', 'activeTabData');
        otherProjectsData.classList.replace('activeTabData', 'inactiveTabData');
    }, 500)

};

otherProjects.onclick = () => {

    otherProjects.classList.replace('inactiveTab', 'activeTab');
    webProjects.classList.replace('activeTab', 'inactiveTab')

    setTimeout(() => {
        otherProjectsData.classList.replace('inactiveTabData', 'activeTabData');
        webProjectsData.classList.replace('activeTabData', 'inactiveTabData');
    }, 500)


};

hamBar.onclick = function displayNavBar() {
    console.log(document.querySelector("nav ul"));
    document.querySelector("nav ul").style.right = "0";
};


crossBar.onclick = function disableNavBar() {
    document.querySelector("nav ul").style.right = "-200px";

}