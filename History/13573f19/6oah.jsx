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
  /* background-image: ${props => `linear-gradient(
    rgba(0, 0, 0, .75),
    rgba(0,0,0, .75)
  ),url('${props.$src}')`}; */

  background-size: cover;
  background-position: 30% 15%;

  background-color: gray;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr 4fr;

  align-items: center;
  justify-content: center;
  overflow: hidden;

  padding: 2.4rem 0;

  z-index: 999;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 10rem;
  left: 10rem;
  width: 50%;
  /* opacity: 50%; */
  filter: grayscale(80%);

  z-index: -9999;
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
      <BackgroundImage src={cats[page].image} />
    </StyledCarouseLayout>
  );
}

export default CarouselLayout;
