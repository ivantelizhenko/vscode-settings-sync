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
  gap: 48px;
`;

export default Overview;
