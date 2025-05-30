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
