// ===============================
// متن تایپی
// ===============================

const text =
“سلام …\nاین صفحه فقط برای یک نفر ساخته شده…\nو اون یک نفر تویی ❤️”;

const typing =
document.getElementById(“typing”);

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

// ===============================
// قلب‌های شناور
// ===============================

const heartsContainer =
document.querySelector(”.floating-hearts”);

function createHeart(){

const heart =
document.createElement("div");
heart.classList.add("heart");
const heartImage =
document.createElement("img");
heartImage.src =
"../romantic-site/IMG_6026.png";
heartImage.alt =
"قلب";
heart.appendChild(heartImage);
heart.style.left =
Math.random() * 100 + "vw";
const size =
Math.random() * 12 + 20;
heartImage.style.width =
size + "px";
heartImage.style.height =
size + "px";
const duration =
Math.random() * 8 + 6;
heart.style.animationDuration =
duration + "s";
heartsContainer.appendChild(heart);
setTimeout(()=>{
    heart.remove();
},(duration + 1) * 1000);

}

setInterval(createHeart,400);

for(let i = 0; i < 5; i++){

setTimeout(createHeart,i * 300);

}

// ===============================
// ستاره‌ها
// ===============================

const starsContainer =
document.querySelector(”.stars”);

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

// ===============================
// عناصر صفحه
// ===============================

const startBtn =
document.getElementById(“startBtn”);

const glassBox =
document.querySelector(”.glass-box”);

const heartGame =
document.getElementById(“heartGame”);

const scoreText =
document.getElementById(“score”);

const memories =
document.getElementById(“memories”);

const cards =
document.querySelectorAll(”.memory-card”);

const loveScene =
document.getElementById(“loveScene”);

let currentCard = 0;

let collectedHearts = 0;

// ===============================
// شروع سفر
// ===============================

startBtn.addEventListener(“click”,()=>{

glassBox.style.display =
"none";
heartGame.style.display =
"flex";
startHeartGame();

});

// ===============================
// بازی قلب
// ===============================

function startHeartGame(){

collectedHearts = 0;
scoreText.innerHTML =
"0 / 10";
createCatchHeart();

}

function createCatchHeart(){

if(collectedHearts >= 10){
    heartGame.style.display =
    "none";
    memories.style.display =
    "flex";
    currentCard = 0;
    showNextMemory();
    return;
}
const heart =
document.createElement("div");
heart.classList.add("catch-heart");
const img =
document.createElement("img");
img.src =
"../romantic-site/IMG_6026.png";
img.alt =
"قلب";
heart.appendChild(img);
heart.style.left =
Math.random() *
(window.innerWidth - 80)
+ "px";
heart.style.top =
Math.random() *
(window.innerHeight - 80)
+ "px";
document.body.appendChild(heart);
heart.addEventListener("click",()=>{
    collectedHearts++;
    scoreText.innerHTML =
    collectedHearts + " / 10";
    heart.remove();
    createCatchHeart();
});

}

// ===============================
// نمایش خاطرات
// ===============================

function showNextMemory(){

cards.forEach(card=>{
    card.classList.remove("active");
});
if(!cards[currentCard]){
    return;
}
cards[currentCard]
.classList.add("active");
currentCard++;
if(currentCard < cards.length){
    setTimeout(
        showNextMemory,
        5000
    );
}else{
    setTimeout(()=>{
        memories.style.display =
        "none";
        loveScene.style.display =
        "flex";
    },5000);
}

}
