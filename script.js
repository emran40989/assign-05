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

// const called = document.getElementsByClassName("call-button");
const coinCount = document.getElementById("coin-count");
const callButtons = document.getElementsByClassName("call-button");
const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-history");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    let currentCoins = parseInt(coinCount.innerText);

    if (currentCoins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    const card = this.closest(".card-body");
    const serviceName = card.querySelector(".card-title").innerText;
    const serviceNumber = card.querySelector(".service-num").innerText;

    alert(`Calling ${serviceName} at ${serviceNumber} will deducted 20 coins`);

    coinCount.innerText = currentCoins - 20;

    const historyItem = document.createElement("div");
    historyItem.className = "flex justify-between items-center px-3 py-2 bg-white rounded-lg shadow mb-2 mx-3";
    historyItem.innerHTML = `
      <div class="flex flex-col">
        <span>${serviceName}</span>
        <span>${serviceNumber}</span>
      </div>
      <span>${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true })}</span>
    `;

    historyList.appendChild(historyItem);
  });
}

clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});