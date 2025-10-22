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

//Hover animation for marketing section frames


const Imgbox = document.querySelectorAll(" .Imgbox");
const ImgText = document.querySelectorAll(" .ImgText");

Imgbox.forEach((box, index) => {
     box.addEventListener("mouseover", function(){
   ImgText[index].classList.add("show");
});

box.addEventListener("mouseout", function(){
    ImgText[index].classList.remove("show");
})
})
