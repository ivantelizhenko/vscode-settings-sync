import styled from 'styled-components';
import Carousel from './Carousel';
import Pagination from './Pagination';
import Details from './Details';
import { useCats } from '../context/CatsContext';
import { usePage } from '../context/PageContext';
import Loading from './Loading';

/* Розібратися із фото на фоні:
    1. Змістити його ближче наліво(60/40)
    2. Pagination component
    3. Button "See details"
*/

const StyledCarouseLayout = styled.div`
  background-image: ${props => `linear-gradient(
    rgba(0, 0, 0, .75),
    rgba(0,0,0, .75)
  ),url('${props.$src}')`};

  background-size: cover;
  background-position: top;

  background-color: gray;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr 4fr;

  align-items: center;
  justify-content: center;
  overflow: hidden;

  grid-column: 1/-1;
`;

function CarouselLayout() {
  const { cats } = useCats();
  const { page } = usePage();

  if (!cats.length) return <Loading />;

  return (
    <StyledCarouseLayout $src={cats[page].image}>
      <Pagination />
      <Details />
      <Carousel />
    </StyledCarouseLayout>
  );
}

export default CarouselLayout;
