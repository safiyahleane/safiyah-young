let i= 0;
let txt = "Let's Connect!";
let speed= 60;

if (document.readyState !== 'loading') {
    setTimeout(typeWriter, 0);
} else {
    document.addEventListener('DOMContentLoaded', typeWriter)
}
function typeWriter() {
    if (i< txt.length){
        document.getElementById("header").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


ScrollReveal().reveal('#split', {delay: 550});