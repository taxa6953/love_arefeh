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

document
.getElementById("startBtn")
.addEventListener("click",()=>{

alert("مرحله دوم آماده می‌شود ❤️");

});
