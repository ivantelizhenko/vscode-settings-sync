/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

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

const valueTest = {
  userFirstname: "Coder",
  userLastname: "Byte",
  userPhone: "8885559999",
};

function PhoneBookForm({ onAddContact }) {
  const [value, setValue] = useState(valueTest);

  function handleSubmit(e) {
    e.preventDefault();
    onAddContact({ ...value, id: Math.random() });
    setValue({});
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value.trim();
    setValue((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        name="userFirstname"
        value={(value.userFirstname ||= "")}
        onChange={handleChange}
        required
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        name="userLastname"
        value={(value.userLastname ||= "")}
        onChange={handleChange}
        required
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        name="userPhone"
        type="number"
        value={(value.userPhone ||= "")}
        onChange={handleChange}
        required
      />
      <br />
      <input style={style.form.submitBtn} type="submit" value="Add User" />
    </form>
  );
}

function InformationTable({ information }) {
  const sortedInformation = [...information].sort((a, b) =>
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
        {sortedInformation.map(
          ({ userFirstname, userLastname, userPhone, id }) => (
            <tr key={id}>
              <td style={style.tableCell}>{userFirstname}</td>
              <td style={style.tableCell}>{userLastname}</td>
              <td style={style.tableCell}>{userPhone}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

function Application() {
  const [informationValue, setInformationValue] = useState([]);

  function handleAddContact(contact) {
    setInformationValue((previousValue) => [...previousValue, contact]);
  }

  return (
    <section>
      <PhoneBookForm onAddContact={handleAddContact} />
      <InformationTable information={informationValue} />
    </section>
  );
}

function LetterCapitalize(phrase) {
  const phraseArray = phrase.split(" ");
  const phraseAllFirstLettersCapitalize = phraseArray
    .map((word) => {
      const wordArray = word.split("");
      const [firstLetter, ...restLetters] = wordArray;
      return firstLetter.toUpperCase() + restLetters.join("").toLowerCase();
    })
    .join(" ");

  return phraseAllFirstLettersCapitalize;
}
