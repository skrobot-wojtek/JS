// const btn = document.querySelector("button");
let number =1;
const addElement = function () {
const div = document.createElement("div");
div.textContent = number;
if(number%5==0){
    div.classList.add("cirlce")
}
    document.body.appendChild(div);
    number++;
}

// btn.addEventListener("click", addElement);

document.querySelector("button").addEventListener("click", addElement)