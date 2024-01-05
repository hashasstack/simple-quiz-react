import { useContext } from "react"
import DataContext from "../context/DataProvider"

export const Quiz = () => {
    const answerBtnStyle = 'option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark';
    const { showQuiz, quizs, questionIndex, question, checkAnswer, correctAnswer } = useContext(DataContext);
  return (
    <section className="text-white bg-dark" style={{display: showQuiz ? 'block' : 'none'}}>
        <div className="container">
            <div className="row vh-100 align-items-center justify-content-center">
                <div className="col-lg-8">
                    <div className="card p-4" style={{background: '#3d3d3d', borderColor: '#646464'}}>
                        <div className="d-flex justify-content-between gap-md-3">
                            <h5 className="mb-2 fs-normal lh-base text-white">{question?.question}</h5>
                            <h5 style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>{
                                questionIndex+1}/{quizs?.length
                            }</h5>
                        </div>
                        <div>
                            {
                                question?.options?.map((option, index) => 
                                    <button key={index} className={ `${answerBtnStyle} ${correctAnswer === option && 'bg-success'}` } onClick={(event) => checkAnswer(event, option)}>{option}</button>
                                )
                            }
                            
                        </div>
                        <button className="btn py-2 mt-3 w-100 bg-primary text-light fw-bold">Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
