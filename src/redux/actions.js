export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';

export function questionAnswer(index, answer){
    return { type: QUESTION_ANSWER, payload: { index, answer}};
}

export function changeQuestion(index){
    return {type: CHANGE_QUESTION, payload: {index}}
}

export function submit(questions){
    return {type: SUBMIT, payload: {questions}}
}

export function initQuestions(questions) {
    return {type: INIT_QUESTIONS, payload: {questions}}
}

export function getQuestions(){
    return fetch(`https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=3639bc1de811b869adf5`)
        .then(response => response.json())
}