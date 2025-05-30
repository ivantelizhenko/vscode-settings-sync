import styled from 'styled-components';
import CarouselLayout from './CarouselLayout';
import Heading from './Heading';
import { useEffect } from 'react';
import { useCats } from '../context/CatsContext';
import onesMinusZeros from './Test';

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

  transition: all 0.2s;
`;

const BackgroundImage = styled.div`
  display: flex;
`;

function AppLayout() {
  const { setCats } = useCats();

  useEffect(() => {
    async function getData() {
      const res = await fetch('http://localhost:3000/cats');
      if (!res.ok) throw new Error('fatch was failed');
      const data = await res.json();
      setCats(data);
    }
    getData();
  }, [setCats]);

  return (
    <StyledAppLayout>
      <Heading as="h1"></Heading>

      <BackgroundImage>
        <CarouselLayout />
        <div></div>
      </BackgroundImage>
    </StyledAppLayout>
  );
}

export default AppLayout;
