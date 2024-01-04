import { useContext } from "react"
import DataContext from "../context/DataProvider"

export const Quiz = () => {
    const { showQuiz } = useContext(DataContext);
  return (
    <div style={{display: showQuiz ? 'block' : 'none'}}>Start a Quiz</div>
  )
}
