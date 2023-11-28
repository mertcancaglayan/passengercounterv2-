let saveEl = document.getElementById("save-el");
let gecmisBilgi = localStorage.getItem("gecmisBilgi");
let totalElement = document.createElement("p");
let gecmisTotal = localStorage.getItem("gecmisTotal");
let totalPeopleElement = document.createElement("p");
let totalPeopleCount = localStorage.getItem("totalPeopleCount") || 0;
let body = document.querySelector("body");

totalElement.textContent = "Total people: " + totalPeopleCount;
body.appendChild(totalElement);

if (gecmisBilgi !== null) {
    saveEl.textContent = gecmisBilgi;
} else {
    saveEl.textContent = "";
}

body.appendChild(saveEl);

let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let total = count;
    localStorage.setItem("gecmisTotal", total);

    // Update total people count
    totalPeopleCount += total;
    localStorage.setItem("totalPeopleCount", totalPeopleCount);
    totalElement.textContent = "Total people: " + totalPeopleCount;

    let countStr = count + " - ";
    saveEl.textContent += countStr;
    localStorage.setItem("gecmisBilgi", saveEl.textContent);

    countEl.textContent = 0;
    count = 0;
}
