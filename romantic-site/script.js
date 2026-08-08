const text =
"سلام ...\nاین صفحه فقط برای یک نفر ساخته شده...\nو اون یک نفر تویی ❤️";

const typing = document.getElementById("typing");

let i = 0;

function writeText(){

if(i < text.length){

typing.innerHTML +=
text.charAt(i) === "\n"
? "<br>"
: text.charAt(i);

i++;

setTimeout(writeText,70);
}

}

writeText();

const heartsContainer =
document.querySelector(".floating-hearts");

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heartImage.src = "../romantic-site/IMG_6026.png";

    heartImage.alt = "قلب";

heart.style.left =
Math.random()*100+"vw";

heart.style.fontSize =
(Math.random()*25+15)+"px";

heart.style.animationDuration =
(Math.random()*8+6)+"s";

heartsContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},15000);

}

setInterval(createHeart,400);
const starsContainer =
document.querySelector(".stars");

for(let i=0;i<80;i++){

const star =
document.createElement("div");

star.classList.add("star");

star.style.left =
Math.random()*100+"vw";

star.style.top =
Math.random()*100+"vh";

star.style.animationDelay =
Math.random()*2+"s";

starsContainer.appendChild(star);

}
const startBtn =
document.getElementById("startBtn");

const glassBox =
document.querySelector(".glass-box");

const memories =
document.getElementById("memories");

const cards =
document.querySelectorAll(".memory-card");

const loveScene =
document.getElementById("loveScene");

let currentCard = 0;

startBtn.addEventListener("click",()=>{

    glassBox.style.display = "none";

    memories.style.display = "flex";

    currentCard = 0;

    showNextMemory();
});

function showNextMemory(){

    cards.forEach(card=>{
        card.classList.remove("active");
    });

    cards[currentCard].classList.add("active");

    currentCard++;

    if(currentCard < cards.length){

        setTimeout(showNextMemory,5000);

    }else{

        setTimeout(()=>{

            memories.style.display = "none";

            loveScene.style.display = "flex";

        },5000);

    }

}
