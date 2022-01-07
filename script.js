const switcher = document.querySelector(".switcher");
const slide = document.querySelector('.slide');


switcher.addEventListener("click",()=>{
if(!slide.classList.contains("Off")){
    slide.style.transform = "translateX(26px)";
    switcher.style.backgroundColor = "#0789f2";
    slide.classList.remove("switcherOff");
    slide.classList.add("Off");   
}else{
    switcher.style.backgroundColor = "#ccc";
    slide.classList.remove("Off");   
    slide.classList.add("switcherOff");
    
}
})