import {Questions} from './Quiz.js'

let score = 0;

function shuffle(array){
    for(let i = array.length-1 ; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    return array;
}
const shuffledQuestions = shuffle(Questions);

//the above code gives us the shuffled Questions array each time.

const questions = document.querySelector('.questions-container');
let currentQuestion;
let questionOptions;


function generateHTML(i){
    let questionHTML = `<h2 class="question-number">Question ${i+1}</h2>
                    <p class="question">${currentQuestion.question}</p>
                    <div class="options">
                        <label>
                            <input type="radio" name = "question-${i+1}" value = "${questionOptions[0]}"> ${questionOptions[0]}
                        </label>
                        <label>
                            <input type="radio" name = "question-${i+1}" value = "${questionOptions[1]}" > ${questionOptions[1]}
                        </label>
                        <label>
                            <input type="radio" name = "question-${i+1}" value = "${questionOptions[2]}"> ${questionOptions[2]}
                        </label>
                        <label>
                            <input type="radio" name = "question-${i+1}" value = "${questionOptions[3]}"> ${questionOptions[3]}
                        </label>
                    </div>
                    <div class="response">
                        <button class="submit">Save & Submit</button>
                        <button class="reset">Reset</button>
                    </div>`;
    questions.innerHTML = questionHTML;
}


let currentIndex = 0;

function submitAction(currentIndex){
    const submitButton = document.querySelector('.submit');
    submitButton.addEventListener('click',()=>{
        let userInput = document.querySelector(`input[name = "question-${currentIndex + 1}"]:checked`);
        const warning = document.querySelector('.nullcase');
        warning.classList.remove('nullshown');
        if(!userInput){
            warning.classList.add('nullshown');
        }
        if(userInput.value === currentQuestion.answer){
            score+=1;
        }
        giveInputsToGenerate(++currentIndex);
    });
}

function giveInputsToGenerate(currentIndex){
    if(currentIndex === Questions.length){
        console.log(score);
        generateScoreHTML();
        return;
    }
    currentQuestion = shuffledQuestions[currentIndex];
    questionOptions = currentQuestion.options;
    generateHTML(currentIndex);
    submitAction(currentIndex);
    resetAction(currentIndex);
}

giveInputsToGenerate(currentIndex);

//this function generates the final score. 
//add .result-container class to the finalResult button at submit time.
function generateScoreHTML(){
    let scoreHTML = `<h2 class="result">Your Score</h2>
        <p class="score-board">${score}/${Questions.length}</p>
        <p class="response-statement">you are the goat</p>`
    let finalResult = document.querySelector('.questions-container');
    finalResult.classList.add('result-container');
    finalResult.innerHTML = scoreHTML;
}

function resetAction(currentIndex){
    const resetButton = document.querySelector(`.reset`);
    resetButton.addEventListener('click',()=>{
        document.querySelectorAll(`input[name = "question-${currentIndex + 1}"]`)
        .forEach((input) => input.checked = false);
    });
}