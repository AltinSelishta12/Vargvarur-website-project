// JavaScript code goes here for index.html page

const openBtn = document.querySelector("#openBtn");
const ShowMenu = document.querySelector("#ShowMenu");
const CloseMenu = document.querySelector("#CloseMenu")

openBtn.addEventListener("click", function(){
    ShowMenu.classList.add("active");
})

CloseMenu.addEventListener("click", function(){
    ShowMenu.classList.remove("active");
})

const topImg = document.querySelector("#topImg");
const topImgText = document.querySelector("#topImgText");

topImg.addEventListener("mouseover", function(){
   topImgText.classList.add("show");
});

topImg.addEventListener("mouseout", function(){
    topImgText.classList.remove("show");
})