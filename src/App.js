import React from 'react';
import './index.scss';


const questions = [
  {
    title: 'Первый элемент в таблице Менделеева — это…',
    variants: ['Магний', 'Железо', 'Водород'],
    correct: 2,
  },
  {
    title: 'Как называется корабль Джека Воробья из фильма «Пираты Карибского моря»?',
    variants: ['Черная жемчужина', 'Летучий Голландец', 'Месть королевы Анны'],
    correct: 0,
  },
  {
    title: 'Какая планета расположена ближе всех к Солнцу?',
    variants: ['Меркурий', 'Венера', 'Марс'],
    correct: 0,
  },
  {
    title: 'Как правильно поставить ударение в слове крапива?',
    variants: [
      'крапивА',
      'крапИва',
    ],
    correct: 1,
  },
  {
    title: 'Назовите столицу Европейского Союза?',
    variants: [
      'Вена',
      'Кёльн',
      'Брюссель',
      'Париж',
    ],
    correct: 2,
  },
  {
    title: 'Что быстрее: свет или звук?',
    variants: [
      'Свет',
      'Звук',
    ],
    correct: 0,
  },
  {
    title: 'В какой стране национальной валютой является Вона?',
    variants: [
      'Китай',
      'Венгрия',
      'Чили',
      'Южная Корея',
    ],
    correct: 3,
  },
  {
    title: '13-21=?',
    variants: [
      '-9',
      '-8',
      '-7',
    ],
    correct: 1,
  },
  {
    title: 'Сколькими способами можно рассадить 5 человек за столом?',
    variants: [
      '130',
      '720',
      '120',
      '256',
    ],
    correct: 2,
  },
  {
    title: 'С чем нужно закончить университет?',
    variants: [
      'С красным дипломом',
      'С дипломом',
      'Со справкой о том, что вы здоровы',
      'Со слезами на глазах',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href = "/">
        <button>Попробовать снова</button>
        </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {

  const percentange = Math.round((step/questions.length) *100);


  return (
    <>
      <div className="progress">
        <div style={{ width:`${percentange}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>{
        question.variants.map((text,index) => 
        (<li onClick={() => onClickVariant(index)} key = {text}> {text} </li>))
      }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
      console.log(step, index);
      setStep(step + 1);

    if(index == question.correct){
      setCorrect(correct + 1);
    }

  };

  return (
    <div className="App">
      {
        step !== questions.length ? 
        (<Game step = {step} question = {question} onClickVariant = {onClickVariant} />) 
        : 
        (<Result correct = {correct}/>)
      }

    </div>
  );
}

export default App;
