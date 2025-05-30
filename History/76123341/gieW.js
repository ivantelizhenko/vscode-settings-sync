import { useState } from 'react';

const wordsBefore = [
  { id: 0, text: 'hello', translation: 'привіт' },
  { id: 1, text: 'dog', translation: 'собака' },
  { id: 2, text: 'four', translation: 'чотири' },
];

export default function App() {
  const [words, setWords] = useState(wordsBefore);

  return (
    <div className="app">
      <div className="container">
        <h2 className="header">Words</h2>
        <List words={words} />
        <Form onSetWords={setWords} words={words} />
        <button className="container__button">Switch</button>
      </div>
    </div>
  );
}

function List({ words }) {
  return (
    <div className="list__box">
      <ListItem words={words} />
    </div>
  );
}

function ListItem({ words }) {
  return (
    <div>
      <ul className="list">
        {words.map((word, i) => (
          <li
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
            key={i}
          >
            {word.text}
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

  function handleAddWord(word, e) {
    const check = words.filter(wordArr => wordArr.text === word.text).length;
    if (word.text && word.translation && !check) {
      onSetWords([...words, word]);
    }
    e.preventDefault();
    setNewWordText('');
    setNewWordTranslation('');

    console.log(words);
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
        onSubmit={() => handleAddWord(newWord, 0)}
      />
      <label>translation</label>
      <input
        className="input2"
        type="text"
        placeholder="Translation"
        value={newWordTranslation}
        onChange={e => setNewWordTranslation(e.target.value)}
        onSubmit={() => handleAddWord(newWord, 0)}
      />
      <button className="form__button" onClick={e => handleAddWord(newWord, e)}>
        Add word
      </button>
    </form>
  );
}
