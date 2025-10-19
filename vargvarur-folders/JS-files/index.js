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