const video = document.getElementById("introVideo");
const skipBtn = document.getElementById("skipBtn");

const videoScreen = document.getElementById("video-screen");
const mainSite = document.getElementById("main-site");

skipBtn.onclick = startSite;

video.onended = startSite;

function startSite(){
    videoScreen.style.display = "none";
    mainSite.style.display = "block";
    showPage("maps");
}

function showPage(pageId){

    const pages = document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.style.display="none";
    });

    document.getElementById(pageId).style.display="block";
}
