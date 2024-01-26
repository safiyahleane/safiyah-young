let i= 0;
let txt = "Portfolio";
let speed= 50;

if (document.readyState !== 'loading') {
    setTimeout(typeWriter, 0);
} else {
    document.addEventListener('DOMContentLoaded', typeWriter)
}
function typeWriter() {
    if (i< txt.length){
        document.getElementById("portfolio").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


let slideIndex = 1;
showDivs(slideIndex);
let booVar=true;
function plusDivs(n) {
    showDivs(slideIndex += n);
}


function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";


}

function menu(){
    if (booVar === true){
        document.getElementById("dropdown-content").style.display="block";
        booVar=false;
    } else {
        document.getElementById("dropdown-content").style.display="none";
        booVar=true;
    }
}

ScrollReveal().reveal('#scroll-one', {delay: 550});

ScrollReveal().reveal('#scroll-two', {delay: 550});

ScrollReveal().reveal('#scroll-three', {delay: 550});

ScrollReveal().reveal('#scroll-four', {delay: 550});

ScrollReveal().reveal('#scroll-five', {delay: 550});