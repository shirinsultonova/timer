const elForm = document.querySelector(".time-form");
const elNumberInput = elForm.querySelector(".time-input");

elForm.addEventListener("submit", function (evt){
    evt.preventDefault();
    const newText = document.createElement("p");
    newText.classList.add("text-wrap");
    interval(elNumberInput.value - 0, newText);
    elForm.appendChild(newText)
});

function interval(value, text){
    const timer = setInterval(() => {
        value--
        if(value <= 3){
            text.classList.add("red");
        }
        if(value === 0){
            text.classList.add("hidden");
            clearInterval(timer);
        }
        text.classList.add("show");
        displayTime(value, text)
    }, 1000);
}

function displayTime(second, text){
    const min = Math.floor( second / 60);
    const sec = Math.floor(second % 60);
    text.textContent = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

