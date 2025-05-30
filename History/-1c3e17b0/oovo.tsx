type RowQuestProps = {
  rowTitle: string;
  data: { title: string };
};

function RowQuests({ rowTitle }: RowQuestProps) {
  return (
    <div>
      <h3>{rowTitle}</h3>
    </div>
  );
}

export default RowQuests;
