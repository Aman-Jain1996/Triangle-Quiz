const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const submitButton = document.querySelector("#form-submit");
const output = document.querySelector(".output-para");

submitButton.addEventListener('submit',clickHandler);

function clickHandler(e){
    e.preventDefault();
    const sum = Number(input1.value) + Number(input2.value) + Number(input3.value);
    if(sum!==180)
        output.innerText="Triangle can't be formed 😔";
    else
    output.innerText="Yes! 😊 Triangle can be formed";
}