const testData = {
  id: Math.random().toString(),
  title: 'title5',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident asperiores culpa praesentium sed, aliquam incidunt quos suscipit ad dicta quod optio ipsam vel quasi unde saepe, recusandae reiciendis distinctio debitis.',
  author: 'autor5',
  time: 20,
  cards: [
    { id: Math.random().toString(), term: 'term1', definition: 'def1' },
    { id: Math.random().toString(), term: 'term2', definition: 'def2' },
    { id: Math.random().toString(), term: 'term3', definition: 'def3' },
    { id: Math.random().toString(), term: 'term4', definition: 'def4' },
    { id: Math.random().toString(), term: 'term5', definition: 'def5' },
    { id: Math.random().toString(), term: 'term6', definition: 'def6' },
  ],
};

function CardsQuest() {
  const { title, author, description, time, cards } = testData;

  return <div></div>;
}

export default CardsQuest;
