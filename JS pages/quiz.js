const submitButton = document.querySelector("#form-submit");
const output = document.querySelector(".output-para");
const questions=document.querySelectorAll(".questions");

const answers = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];

submitButton.addEventListener('submit',clickHandler);

function clickHandler(e){
    const formData = new FormData(e.path[0]);
    let count=0;
    let score=0;
    e.preventDefault();
    for (let data of formData)
    {
        if(data[1] === answers[count])
        {
            questions[count].style.backgroundColor = "lightgreen";
            score++;
        }
        else{
            questions[count].style.backgroundColor = "pink";
        }
        count++;
    }

    if (score <=2)
        output.innerText = `Time for revision, Your score is : ${score}`; 
    else if (score <=6)
        output.innerText = `Not bad, Your score is : ${score}`;
    else
        output.innerText = `Keep it up , Your score is : ${score}`;

    document.querySelector("#btn-submit").style.display="none";
}