type RowQuestProps = {
  title: string;
};

function RowQuests({ title }: RowQuestProps) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}

export default RowQuests;
