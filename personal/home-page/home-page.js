let i= 0;
let txt = "Hey There... I'm Safiyah!";
let speed= 80;

if (document.readyState !== 'loading') {
    setTimeout(typeWriter, 0);
} else {
    document.addEventListener('DOMContentLoaded', typeWriter)
}
function typeWriter() {
    if (i< txt.length){
        document.getElementById("hi").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

ScrollReveal().reveal('#creativity', {delay: 550});

ScrollReveal().reveal('#section-three', {delay: 850});