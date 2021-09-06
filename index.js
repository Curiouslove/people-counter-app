// strings and emoji in java script
// let welcomeEl = document.getElementById("welcome-el")

// let names = "Love"

// let greeting = "welcome back, "

// welcomeEl.innerText = greeting + names

// welcomeEl.innerText += "👋"



let countEl = document.getElementById("count-el")

let count = 0

let totalEl = document.getElementById("total-el")

let totalCount = 0

let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let display = count + " - "
    saveEl.textContent += display
    totalCount += count
    countEl.textContent = 0
    count = 0
}

function printTotal(){
    totalEl.textContent += totalCount
}


