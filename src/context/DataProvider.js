import { createContext, useState } from "react"

const DataContext = createContext();

export const DataProvider = ({children}) => {
const [showStart, setShowStart] = useState(true);
const [showQuiz, setShowQuiz] = useState(false);

function getQuiz() {
    const url = 'https://opentdb.com/api.php?amount=10&category=18';
    fetch(url)
    .then((response) => response.json())
    .then(data => console.log(data))
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
