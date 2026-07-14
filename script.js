/*=========================================
LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});

/*=========================================
CUSTOM CURSOR
=========================================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/*=========================================
SCROLL PROGRESS BAR
=========================================*/

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});

/*=========================================
STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 60);

});

/*=========================================
ACTIVE NAVBAR
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
SCROLL TO TOP
=========================================*/

const topBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    }

    else {

        topBtn.style.display = "none";

    }

});

/*=========================================
TYPING EFFECT
=========================================*/

const text = [

    "Front-End Developer",

    "Backend Developer (PHP & Laravel)",

    "Web Designer",

    "Python Learner"

];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

(function type() {

    if (count === text.length) {

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;

        index = 0;

        setTimeout(type, 1500);

    }

    else {

        setTimeout(type, 120);

    }

})();

/*=========================================
SCROLL REVEAL
=========================================*/

const reveal = document.querySelectorAll(

".section,.project-card,.skill-card,.service-card,.certificate-card,.education-card"

);

function revealOnScroll(){

    reveal.forEach(item=>{

        const windowHeight=window.innerHeight;

        const revealTop=item.getBoundingClientRect().top;

        const revealPoint=120;

        if(revealTop<windowHeight-revealPoint){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

/*=========================================
MOBILE MENU
=========================================*/

const menu=document.querySelector(".menu");

const nav=document.querySelector("nav");

menu.onclick=function(){

    nav.classList.toggle("open");

}

/*=========================================
HOVER GLOW
=========================================*/

const cards=document.querySelectorAll(

".project-card,.skill-card,.service-card,.certificate-card"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",()=>{

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});