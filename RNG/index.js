const button = document.getElementById("rollBtn");
const result = document.getElementById("result");

button.onclick = function() {
    const min = Number(document.getElementById("minNum").value);
    const max = Number(document.getElementById("maxNum").value);
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    result.textContent = randomNum;
}