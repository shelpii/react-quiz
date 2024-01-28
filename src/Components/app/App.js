import { useState } from 'react';
import QuizMain from '../quizMain/QuizMain';
import QuizResult from '../quizResult/QuizResult';


const questions = [
  {
    title: 'Что такое React?',
    variants: ['JavaScript библиотека', 'Фреймворк', 'Язык программирования'],
    correct: 0,
  },
  {
    title: 'Что такое компонент в React?',
    variants: ['Функция для создания анимаций', 'Часть веб-приложения', 'Специальный синтаксис JavaScript'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: ['Расширение синтаксиса JavaScript', 'Язык программирования', 'Фреймворк'],
    correct: 0,
  },
  {
    title: 'Что такое Virtual DOM в React?',
    variants: ['Виртуальное представление реального DOM', 'Функция для работы с внешними API', 'Часть стандартной библиотеки JavaScript'],
    correct: 2,
  },
  {
    title: 'Какой метод используется для рендеринга React-компонента?',
    variants: ['render()', 'ReactDOM.render()', 'displayComponent()'],
    correct: 1,
  }
];


function App() {

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const onQuestion = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === onQuestion.correct) {
      setCorrect(correct + 1);
    }
  }

  const content = step !== questions.length ? 
  <QuizMain step={step} onQuestion={onQuestion} questions={questions} onClickVariant={onClickVariant}/> : 
  <QuizResult correct={correct} questions={questions}/>;

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;