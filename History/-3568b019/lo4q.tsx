import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

const initialState = {
  userFirstname: "Coder",
  userLastname: "Byte",
  userPhone: "8885559999",
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [onChangeData, setOnChangeData] = useState(initialState);

  function onSubmit(e) {
    e.preventDefault();
    addEntryToPhoneBook({ ...onChangeData, id: Math.random() });
    setOnChangeData({
      userFirstname: "",
      userLastname: "",
      userPhone: "",
    });
  }

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value.trim();
    setOnChangeData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form onSubmit={onSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        value={onChangeData.userFirstname}
        onChange={onChange}
        required
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        value={onChangeData.userLastname}
        onChange={onChange}
        required
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        value={onChangeData.userPhone}
        onChange={onChange}
        required
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable({ contacts }) {
  const sortedContacts = contacts.toSorted((a, b) =>
    a.userLastname.localeCompare(b.userLastname)
  );

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody style={style.tableBody}>
        {sortedContacts.map((contact) => (
          <tr key={contact.id}>
            <td style={style.tableCell}>{contact.userFirstname}</td>
            <td style={style.tableCell}>{contact.userLastname}</td>
            <td style={style.tableCell}>{contact.userPhone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [contacts, setContacts] = useState([]);

  function handleAddContact(contact) {
    setContacts((prev) => [...prev, contact]);
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={handleAddContact} />
      <InformationTable contacts={contacts} />
    </section>
  );
}
