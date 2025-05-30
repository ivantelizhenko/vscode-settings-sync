import { useState } from 'react';
import './App.css';

const info = [
  {
    id: 0,
    sectionName: 'Section title 1!',
    videos: [
      { id: 0, videoName: 'Video Name 1', length: 3, checked: true },
      { id: 1, videoName: 'Video Name 2', length: 19, checked: true },
      { id: 2, videoName: 'Video Name 3', length: 5, checked: false },
      { id: 3, videoName: 'Video Name 4', length: 1, checked: false },
      { id: 4, videoName: 'Video Name 5', length: 4, checked: false },
    ],
  },
  {
    id: 1,
    sectionName: 'Section title 2!',
    videos: [
      { id: 0, videoName: 'Video Name 1', length: 1, checked: true },
      { id: 1, videoName: 'Video Name 2', length: 1, checked: true },
    ],
  },
  {
    id: 2,
    sectionName: 'Section title 3!',
    videos: [
      { id: 0, videoName: 'Video Name 1', length: 1, checked: false },
      { id: 1, videoName: 'Video Name 2', length: 10, checked: false },
      { id: 2, videoName: 'Video Name 3', length: 7, checked: false },
      { id: 3, videoName: 'Video Name 4', length: 9, checked: false },
      { id: 4, videoName: 'Video Name 5', length: 9, checked: false },
      { id: 5, videoName: 'Video Name 6', length: 15, checked: false },
      { id: 6, videoName: 'Video Name 7', length: 3, checked: false },
      { id: 7, videoName: 'Video Name 8', length: 8, checked: false },
      { id: 8, videoName: 'Video Name 9', length: 13, checked: false },
    ],
  },
];

function App() {
  const [sections, setSections] = useState(info);

  function canSwitch(sectionId, videoId, check) {
    const sectionIdentify = sections[sectionId];
    const videoIdentify = sectionIdentify.videos[videoId];

    const videoNew = {
      ...videoIdentify,
      checked: check ? true : false,
    };
    const videosNew = sectionIdentify.videos.map(el =>
      el === videoIdentify ? videoNew : el
    );

    const sectionNew = { ...sectionIdentify, videos: videosNew };
    const sectionsNew = sections.map(el =>
      el === sectionIdentify ? sectionNew : el
    );
    setSections(sectionsNew);
  }
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {sections.map((section, i) => (
        <Page
          key={section.id}
          number={i + 1}
          numberSection={section.id}
          name={section.sectionName}
          videos={section.videos}
          onSwitch={canSwitch}
          show={show}
          onShow={setShow}
        >
          <ListTitle />
          <List />
        </Page>
      ))}
    </div>
  );
}

function Page({ number, name, videos, numberSection, onSwitch, show, onShow }) {
  function handleShow() {
    onShow(!show);
  }

  return (
    <div className="list">
      <ListTitle
        number={number}
        name={name}
        videos={videos}
        onShow={handleShow}
      />
      {show && (
        <List
          videos={videos}
          numberSection={numberSection}
          onSwitch={onSwitch}
        />
      )}
    </div>
  );
}

function List({ videos, numberSection, onSwitch }) {
  return (
    <ul>
      {videos.map((video, i) => (
        <ListItem
          video={video}
          key={i}
          number={i + 1}
          numberSection={numberSection}
          onSwitch={onSwitch}
        />
      ))}
    </ul>
  );
}

function ListTitle({ name, number, videos, onShow }) {
  const length = videos.reduce((acc, el) => {
    return acc + el.length;
  }, 0);
  const time =
    length <= 59
      ? `${length}min`
      : `${Math.floor(length / 60)}h ${length % 60}min`;

  return (
    <div className="list__title">
      <div>
        <h2 className="list__title--heading">
          Section {number}: {name}
        </h2>
        <span>
          {videos.filter(video => video.checked === true).length} /{' '}
          {videos.length} | {time}
        </span>
      </div>
      <button onClick={onShow} className="list__button">
        &darr;
      </button>
    </div>
  );
}

function ListItem({ number, video, numberSection, onSwitch }) {
  const [newChecked, setNewChecked] = useState(video.checked);
  const numberVideo = number - 1;

  return (
    <li className="list__item">
      <input
        type="checkbox"
        className="list__item--input"
        checked={newChecked ? 'checked' : ''}
        value={newChecked}
        onChange={() => {
          setNewChecked(!newChecked);
          onSwitch(numberSection, numberVideo, !newChecked);
        }}
      />
      <div>
        <p className="list__item--heading">
          <span>{number}</span>.{video.videoName}!
        </p>

        <p className="list__item--text">{video.length}min</p>
      </div>
    </li>
  );
}

export default App;
