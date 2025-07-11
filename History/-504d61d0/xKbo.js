import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent
          key={content.at(activeTab).summary}
          item={content.at(activeTab)}
        />
      ) : (
        <DifferentContent />
      )}
      <WannaTry />
    </div>
  );
}

function WannaTry() {
  function handleClick() {}

  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
        backgroundColor: "#91954f",
        height: "3rem",
      }}
    >
      <li
        style={{
          backgroundColor: "#5739df",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          height: "3rem",
          alignItems: "center",
        }}
      >
        <p
          style={{
            backgroundColor: "#000",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            height: "3rem",
            alignItems: "center",
          }}
        >
          hey
        </p>
      </li>
    </ul>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes((likes) => likes + 1);
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
  }

  function handleUndo2s() {
    setTimeout(handleUndo, 2000);
  }

  function handleTripleInc() {
    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1);

    // setLikes((likes) => likes + 1);
    // setLikes((likes) => likes + 1);
    // setLikes((likes) => likes + 1);

    handleInc();
    handleInc();
    handleInc();
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndo2s}>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}
