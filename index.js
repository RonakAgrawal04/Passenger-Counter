
let countElem= document.getElementById("count-el")

console.log(countElem)

let saveElem= document.getElementById("save-el")

let count=0

function increment(){
    count +=1
    countElem.textContent = count
}

function save(){
    let str = count + " - "
    saveElem.textContent += str
    count=0
    countElem.textContent = 0
}
