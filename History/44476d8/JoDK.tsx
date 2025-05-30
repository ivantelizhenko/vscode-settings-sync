import _ from 'lodash';
import Card from './features/cardQuest/Card';

const testData = {
  id: Math.random().toString(),
  title: 'title',
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

  return (
    <div className="bg-secondary h-fit w-full p-20">
      <div>
        <h3>{_.upperFirst(title)}</h3>
        <span>time</span>
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <Card />

      <div>
        <p>Author</p>
        <p>description</p>
      </div>
    </div>
  );
}

export default CardsQuest;
