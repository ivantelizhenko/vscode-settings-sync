function App(props) {
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

export default App;
