import './QuizMain.scss'

const QuizMain = ({ step, onQuestion, onClickVariant, questions }) => {

    const {title, variants} = onQuestion;

    const percentage = Math.round((step / questions.length) * 100);

    return (
      <div className='quiz'>
        <div className="quiz__progress">
          <div style={{ width: `${percentage}%` }} className="quiz__progress-inner"></div>
        </div>
        <h1 className='quiz__title'>{title}</h1>
        <ul className='quiz__answer-list'>
          {variants.map((variant, i) => (<li className='quiz__answer-item' onClick={() => onClickVariant(i)} key={i}>{variant}</li>))}
        </ul>
      </div>
    );
  }

  export default QuizMain;