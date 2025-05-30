function Overview() {
  return (
    <Wrapper>
      <Hero />
      <Cta />
      <Donate />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ;
`;

export default Overview;
