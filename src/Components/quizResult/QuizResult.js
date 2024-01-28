import './QuizResult.scss'
import result from '../../assets/result.png';

const QuizResult = ({ correct, questions }) => {
    return (
      <div className="result">
        <img src={result} alt={result}/>
        <h2 className='result__title' >Вы ответили правильно на {correct} вопроса из {questions.length}</h2>
        <a className='result__button' href='/'>Начать заново</a>
      </div>
    );
  }

export default QuizResult;