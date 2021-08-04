const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const submitButton = document.querySelector("#form-submit");
const output = document.querySelector(".output-para");

submitButton.addEventListener('submit',clickHandler);

function clickHandler(e){
    e.preventDefault();
    const hypotenuse = Math.sqrt(Number(input1.value)**2 + Number(input2.value)**2);
    output.innerText=`Hypotenuse of the Triangle is : ${hypotenuse.toFixed(3)}`;
}