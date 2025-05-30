import styled from 'styled-components';
import CarouselLayout from './CarouselLayout';
import Heading from './Heading';
import { useEffect } from 'react';
import { useCards } from '../context/CardsContext';

const StyledAppLayout = styled.div`
  background-color: #525252;

  color: #fcfcfc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 6.4rem 9.6rem;
  align-items: center;
  justify-content: start;
  gap: 4.8rem;
`;

function AppLayout() {
  const { setCards } = useCards();

  useEffect(() => {
    async function getData() {
      const res = await fetch('http://localhost:3000/carts');
      if (!res.ok) throw new Error('fatch was failed');
      const data = await res.json();
      setCards(data);
    }
    getData();
  }, [setCards]);

  return (
    <StyledAppLayout>
      <Heading as="h1">
        My implementation of carousel component by React
      </Heading>
      <CarouselLayout />
    </StyledAppLayout>
  );
}

export default AppLayout;
