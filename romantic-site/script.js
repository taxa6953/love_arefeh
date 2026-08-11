

// ===============================
// متن تایپی
// ===============================

const text =
"سلام ...\nاین صفحه فقط برای یک نفر ساخته شده...\nو اون یک نفر تویی ❤️";

const typing =
document.getElementById("typing");

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
document.querySelector(".floating-hearts");

function createHeart(){

    // ساخت کانتینر قلب
    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    // ساخت عکس قلب
    const heartImage =
    document.createElement("img");

    heartImage.src =
    "../romantic-site/IMG_6026.png";

    heartImage.alt =
    "قلب";

    // قرار دادن عکس داخل قلب
    heart.appendChild(heartImage);

    // موقعیت افقی تصادفی
    heart.style.left =
    Math.random() * 100 + "vw";

    // اندازه تصادفی
    const size =
    Math.random() * 12 + 20;

    heartImage.style.width =
    size + "px";

    heartImage.style.height =
    size + "px";

    // مدت زمان حرکت
    const duration =
    Math.random() * 8 + 6;

    heart.style.animationDuration =
    duration + "s";

    // اضافه کردن به صفحه
    heartsContainer.appendChild(heart);

    // حذف بعد از پایان حرکت
    setTimeout(()=>{

        heart.remove();

    },(duration + 1) * 1000);

}

// ایجاد قلب جدید هر 400 میلی‌ثانیه

setInterval(createHeart,400);

// چند قلب اولیه برای اینکه صفحه از همان ابتدا خالی نباشد

for(let i = 0; i < 5; i++){

    setTimeout(createHeart,i * 300);

}

// ===============================
// ستاره‌ها
// ===============================

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

// ===============================
// بخش خاطرات
// ===============================

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
const heartGame =
document.getElementById("heartGame");

const scoreText =
document.getElementById("score");

let collectedHearts = 0;

// ===============================
// شروع سفر
// ===============================

startBtn.addEventListener("click",()=>{

    glassBox.style.display =
    "none";

    heartGame.style.display =
"flex";

startHeartGame();

});

// ===============================
// نمایش خاطرات
// ===============================

function showNextMemory(){

    cards.forEach(card=>{

        card.classList.remove("active");

    });

    cards[currentCard].classList.add("active");

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
            createGalaxyHeart();
        },5000);

    }

}
    
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

    heart.appendChild(img);

    heart.style.left =
    Math.random() * (window.innerWidth - 80)
    + "px";

    heart.style.top =
    Math.random() * (window.innerHeight - 80)
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
function createGalaxyHeart(){

    const galaxy =
    document.getElementById("galaxyHeart");
    galaxy.style.display = "block";
    galaxy.innerHTML = "";

    for(let i=0;i<150;i++){

        const star =
        document.createElement("div");

        star.classList.add("galaxy-star");

        const t =
        (Math.PI * 2 * i) / 150;

        const x =
        16 * Math.pow(Math.sin(t),3);

        const y =
        13*Math.cos(t)
        -5*Math.cos(2*t)
        -2*Math.cos(3*t)
        -Math.cos(4*t);

        star.style.left =
        (250 + x*12) + "px";

        star.style.top =
        (220 - y*12) + "px";

        galaxy.appendChild(star);
    }
    const text =
document.createElement("div");

text.innerHTML =
`
<h1>از بین میلیاردها آدم...</h1>
<h2>انتخاب من تو بودی ❤️</h2>
`;

text.style.position = "absolute";
text.style.top = "50%";
text.style.left = "50%";
text.style.transform = "translate(-50%,-50%)";
text.style.color = "white";
text.style.textAlign = "center";
text.style.zIndex = "999";

galaxy.appendChild(text);
}
