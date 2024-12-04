let reels = document.querySelectorAll('.reel img'); 
const spinButton = document.getElementById('spinButton'); 
const emojis = ["cherries.png", "watermelon.png", "lemon.png"];
const resultField = document.getElementById('result');

let username = prompt("Введіть ваше ім'я:");
if (!username || username.trim() === "") {
    username = "Гравець";
}
const greeting = document.createElement("div");
greeting.style.color = "white";
greeting.style.fontSize = "24px";
greeting.style.marginBottom = "10px";
greeting.textContent = `Ласкаво просимо, ${username}!`;
document.querySelector('.resultfield').prepend(greeting);

function spinReels() {
    resultField.textContent = ''; 
    const spinDuration = 1000;
    const spinSpeed = 50; 
    let spinInterval = []; 

    reels.forEach((reel, index) => {
        spinInterval[index] = setInterval(() => {
            const randomImage = emojis[Math.floor(Math.random() * emojis.length)]; 
            reel.src = randomImage; 
        }, spinSpeed);
    });

    setTimeout(() => {
        reels.forEach((_, index) => clearInterval(spinInterval[index])); 
        checkResult(); 
    }, spinDuration);
}

function checkResult() {
    const values = Array.from(reels).map(reel => reel.src); 
    if (values[0] === values[3] &&  values[3] === values[6]) {
        resultField.textContent = `${username}, ви перемогли!`;
    }
    else if (values[1] === values[4] &&  values[4] === values[7]) {
        resultField.textContent = `${username}, ви перемогли!`;
    }
    else if (values[2] === values[5] &&  values[5] === values[8]) {
        resultField.textContent = `${username}, ви перемогли!`;
    }
    else {
        resultField.textContent = `${username}, спробуйте знову!`;
    }
}

spinButton.addEventListener('click', spinReels);
