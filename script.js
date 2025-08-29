const hearts = document.getElementsByClassName("heart-icon-count");
const heartCounter = document.getElementById("heart-count")

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function() {
        const defaultHeart = parseInt(heartCounter.innerText);
        const newHeart = defaultHeart + 1;
        heartCounter.innerText = newHeart;
    });
}

const copied = document.getElementsByClassName("copy-button");
const copyCounter = document.getElementById("copy-count") 

for (let i = 0; i < copied.length; i++) {
    copied[i].addEventListener("click", function() {
        const defaultCopy = parseInt(copyCounter.innerText);
        const newCopy = defaultCopy + 1;
        copyCounter.innerText = newCopy;
    });
}

const called = document.getElementsByClassName("call-button");

