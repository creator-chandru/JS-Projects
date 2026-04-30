import {Questions} from './Quiz.js'
function getRandomQuestion(){
    return Math.floor(Math.random() * Questions.length);
}
getRandomQuestion();
const questionNumber = Questions[getRandomQuestion()];
const questions = document.querySelector('.questions-container');
let questionHTML = `<h2 class="question-number">Question One</h2>
                            <p class="question">Which of this best describes Effelento?</p>
                            <div class="options">
                                <label>
                                    <input type="radio" name = "question-1">cool
                                </label>
                                <label>
                                    <input type="radio" name = "question-1">nerd
                                </label>
                                <label>
                                    <input type="radio" name = "question-1">crazy
                                </label>
                                <label>
                                    <input type="radio" name = "question-1">funny
                                </label>
                            </div>
                            <div class="response">
                                <button class="submit">Save & Submit</button>
                                <button class="reset">Reset</button>
                            </div>`;
questions.innerHTML = questionHTML;