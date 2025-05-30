interface Infobox

function InfoBox({ children }) {
  return (
    <aside>
      <p>War</p>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
