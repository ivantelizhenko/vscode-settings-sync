import { useState } from 'react';

const myStorage = window.localStorage;

const wordsBefore = [
  { id: 0, text: 'hello', translation: 'привіт' },
  { id: 1, text: 'dog', translation: 'собака' },
  { id: 2, text: 'four', translation: 'чотири' },
];

wordsBefore.map(word => {
  const { id, text, translation } = word;

  myStorage.setItem(id, [text: translation]);
});

console
  .log(myStorage)

  [(0, 1, 2, 3, 4, 5)].map(el => {
    console.log(myStorage.getItem('hello'));
  });

export default function App() {
  const [words, setWords] = useState(wordsBefore);
  return (
    <div className="app">
      <div className="container">
        <h2 className="header">Words</h2>
        <BoxList words={words} />
        <Form onSetWords={setWords} words={words} />
      </div>
    </div>
  );
}

function BoxList({ words }) {
  return (
    <div className="list__box">
      <List words={words} />
    </div>
  );
}

function List({ words }) {
  const [curId, setCurId] = useState('');

  return (
    <div>
      <ul className="list">
        {words.map((word, i) => (
          <li key={i} onClick={() => setCurId(word.id)}>
            {word.id === curId ? word.translation : word.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Form({ words, onSetWords }) {
  const [newWordText, setNewWordText] = useState('');
  const [newWordTranslation, setNewWordTranslation] = useState('');
  const id = words.length;
  const newWord = { id, text: newWordText, translation: newWordTranslation };

  function handleAddWord(word, e = 0) {
    const check = words.filter(wordArr => newWord.text === word.text).length;
    if (
      word.text &&
      word.translation &&
      word.translation.length < 12 &&
      word.text.length < 12 &&
      !check
    ) {
      onSetWords([...words, word]);
    }
    e.preventDefault();
    setNewWordText('');
    setNewWordTranslation('');
  }

  return (
    <form className="form">
      <label>Word</label>
      <input
        className="input1"
        type="text"
        placeholder="Text"
        value={newWordText}
        onChange={e => setNewWordText(e.target.value)}
        onSubmit={() => handleAddWord(newWord)}
      />
      <label>Translation</label>
      <input
        className="input2"
        type="text"
        placeholder="Translation"
        value={newWordTranslation}
        onChange={e => setNewWordTranslation(e.target.value)}
        onSubmit={() => handleAddWord(newWord)}
      />
      <button className="form__button" onClick={e => handleAddWord(newWord, e)}>
        Add word
      </button>
    </form>
  );
}
