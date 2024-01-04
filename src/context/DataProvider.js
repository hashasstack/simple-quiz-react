import { createContext, useState } from "react"

const DataContext = createContext();

export const DataProvider = ({children}) => {
const [showStart, setShowStart] = useState(true);
const [showQuiz, setShowQuiz] = useState(false);

const startQuiz = () => {
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
