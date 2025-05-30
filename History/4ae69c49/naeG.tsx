function App() {
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={handleAddContact} />
      <InformationTable contacts={contacts} />
    </section>
  );
}

export default App;
