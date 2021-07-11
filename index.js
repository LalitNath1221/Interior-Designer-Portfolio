let btn = document.getElementById('menuBtn')
btn.addEventListener('click', togleMenu);
function togleMenu(){
    btn.classList.toggle('activeMenuBtn');
    document.getElementById('navMenuContainer').classList.toggle('activenav');
}
let menuLinks = document.getElementsByClassName("navLinks");
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', togleMenu);
}

let detailbtn = document.getElementsByClassName("showBtn");
let disc = document.getElementsByClassName("discription");
let detailDisc = document.getElementsByClassName("detailed-discription");
for (let i = 0; i < detailbtn.length; i++) {
    detailDisc[i].classList.add('hide');
    detailbtn[i].addEventListener('click', toggleDetails);
}
function toggleDetails() {
    this.classList.toggle('closeBtn')
    let block = this.parentElement.previousElementSibling.children;
    for (let i = 0; i < block.length; i++) {
        block[i].classList.toggle('hide');
        
    }
}
let nextSlide = document.getElementById("nextSlideBtn");
nextSlide.addEventListener('click',()=>{showNext(1);});
let prevSlide = document.getElementById("previousSlideBtn");
prevSlide.addEventListener('click',()=>{showNext(-1);});
let slides = document.getElementsByClassName("slideCard");
for (let i = 1; i < slides.length; i++) {
    slides[i].style.display="none";
}
function showNext(t) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display!="none") {
            slides[i].style.display="none";
            console.log(i+"before i+t");
            i=i+t;
            console.log(i);
            if (i==slides.length) {
                slides[0].style.display="flex";
                break;
            }
            if(i<0){
                slides[slides.length-1].style.display="flex";
                break;
            }
            slides[i].style.display="flex";
            break;
        }
    }
}

let input = document.querySelectorAll(".contactCard form label input");
let labler = document.querySelectorAll(".contactCard form label span");
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('focus', ()=>{
        labler[i].classList.toggle("activeInput");
    });
    input[i].addEventListener('blur', ()=>{
        labler[i].classList.toggle("activeInput");
    });

}