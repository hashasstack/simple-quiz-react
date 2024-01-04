import { createContext, useState } from "react"

const DataContext = createContext();

export const DataProvider = ({children}) => {
const [quizs, setQuizs] = useState([]);
const [showStart, setShowStart] = useState(true);
const [showQuiz, setShowQuiz] = useState(false);

function getQuiz() {
    const url = 'https://opentdb.com/api.php?amount=10&category=18';
    fetch(url)
    .then((response) => response.json())
    .then(data => setQuizs(transformData(data.results)))
}

function transformData(data) {
    let questions = [];
    data.forEach(result  => {
        questions.push(createDataObj(result));
    })
    return questions;
}

function getRandomAnswer(answer) {
    return answer.sort();
}

function createDataObj(data) {
    const allAnswer = [...data.incorrect_answers, data.correct_answer];
    return {
        question: data.question,
        options: getRandomAnswer(allAnswer),
        answer: data.correct_answer
    }
}

const startQuiz = () => {
    getQuiz();
    setShowStart(false);
    setShowQuiz(true);
}
  return (
    <DataContext.Provider value={{showStart, setShowStart, showQuiz, setShowQuiz, startQuiz}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext;
