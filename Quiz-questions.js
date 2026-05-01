import {Questions} from './Quiz.js'

const userAnswers = [];
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
        let userInput = document.querySelector(`input[name = question-${currentIndex + 1}]:checked`);
        userAnswers.push(userInput.value);
        if(userInput.value === currentQuestion.answer){
            score+=1;
        }
        if(currentIndex < Questions.length){
            giveInputsToGenerate(++currentIndex);
        }else{
            return;
        }
    });
}

function giveInputsToGenerate(currentIndex){
    currentQuestion = shuffledQuestions[currentIndex];
    questionOptions = currentQuestion.options;
    generateHTML(currentIndex);
    submitAction(currentIndex);
}

giveInputsToGenerate(currentIndex);