let radio1 = document.querySelector("#option1");
let radio2 = document.querySelector("#option2");
let radio3 = document.querySelector("#option3");

let formDivs = Array.from(document.querySelectorAll(".form-container")).slice(1);


radio1.addEventListener('change', () => { showDivHandler(0,1,2)});
radio2.addEventListener('change', () => { showDivHandler(1,0,2)});
radio3.addEventListener('change', () => { showDivHandler(2,0,1)});

function showDivHandler(visible,notVisible1,notVisible2){
    formDivs[visible].style.display="block";    
    formDivs[notVisible1].style.display="none";    
    formDivs[notVisible2].style.display="none";    
}


formDivs[0].addEventListener('submit', (e) => {
    console.log("1")
    e.preventDefault();
    let input1=document.querySelector("#input1");
    let input2=document.querySelector("#input2");
    let area = Number(input1.value)*Number(input2.value)/2;
    let outputPara=document.querySelector(".output-para1");
    outputPara.innerHTML = `Area calculated is : ${area}`;
},false);


formDivs[1].addEventListener('submit', (e) => {
    e.preventDefault();
    let input1=Number(document.querySelector("#input3").value);
    let input2=Number(document.querySelector("#input4").value);
    let input3=Number(document.querySelector("#input5").value);

    if((input1+input2)>input3 && (input2+input3)>input1 && (input1+input3)>input2) {
        let s = (input1+input2+input3)/2;
        document.querySelector(".error-para").style.display = "none";
        let area = Math.sqrt(s*(s-input1)*(s-input2)*(s-input3));
        let outputPara=document.querySelector(".output-para2");
        document.querySelector(".btn2").style.display="none";
        outputPara.innerHTML = `Area calculated is : ${area}`;
    }
    else
        document.querySelector(".error-para").style.display = "block";
},false);


formDivs[2].addEventListener('submit', (e) => {
    e.preventDefault();
    let input1=document.querySelector("#input6").value;
    let input2=document.querySelector("#input7").value;
    let input3=document.querySelector("#input8").value;
    let area = Math.sin(Number(input1)*Math.PI/180)*Number(input3)*Number(input2)/2;
    let outputPara=document.querySelector(".output-para3");
    outputPara.innerHTML = `Area calculated is : ${area}`;
},false);