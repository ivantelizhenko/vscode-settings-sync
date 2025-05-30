import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: var(--color-primary);
  padding: 24px 16px;
`;

export default Footer;
