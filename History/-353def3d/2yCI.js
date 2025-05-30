import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showForm, setShowForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSwitch() {
    setShowForm(show => !show);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend(cur => (cur?.id === friend.id ? null : friend));
    setShowForm(false);
  }

  function handleSplitBill(value) {
    setFriends(friends =>
      friends.map(friend =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showForm && (
          <FormAddFriend setFriends={setFriends} showForm={setShowForm} />
        )}

        <Button onClick={handleSwitch}>
          {showForm ? 'Close' : 'Add friend'}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          info={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ info, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === info.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={info.image} alt={info.name} />
      <h3> {info.name}</h3>
      {info.balance < 0 && (
        <p className={'red'}>
          You owe {info.name} {Math.abs(info.balance)}€
        </p>
      )}
      {info.balance > 0 && (
        <p className={'green'}>
          {info.name} owes you {Math.abs(info.balance)}€
        </p>
      )}
      {info.balance === 0 && <p>You and {info.name} are even</p>}
      <Button onClick={() => onSelection(info)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}

function FormAddFriend({ showForm, setFriends }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48?u=499476');

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();

    if (!name || !image) return;

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    setFriends(friends => [...friends, newFriend]);
    setName('');
    setImage('https://i.pravatar.cc/48?u=499476');
    showForm(false);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👭 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />

      <label>🏞️Image URL</label>
      <input
        type="text"
        value={image}
        onChange={e => {
          setImage(e.target.value);
        }}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onChange={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={e => setBill(Number(e.target.value))}
      />

      <label>🏌️Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={e => setPaidByUser(e.target.value)}
      />

      <label>👭 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={e => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split a bill</Button>
    </form>
  );
}
