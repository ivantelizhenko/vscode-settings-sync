import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 2.4rem 6.4rem;
  margin-top: auto;
  width: 100%;
  background-color: #6c584c;
  color: #fff;
`;

const Link = styled.a`
  color: inherit;
`;

function Footer() {
  return (
    <StyledFooter>
      <Link href="https://github.com/ivantelizhenko" target="_blank">
        Git hub
      </Link>
      <Link href="https://github.com/ivantelizhenko" target="_blank">
        Git hub
      </Link>
      <Link href="https://github.com/ivantelizhenko" target="_blank">
        Git hub
      </Link>
      <Link href="https://github.com/ivantelizhenko" target="_blank">
        Git hub
      </Link>
      <Link href="https://github.com/ivantelizhenko" target="_blank">
        Git hub
      </Link>
      <Link href="https://github.com/ivantelizhenko" target="_blank">
        Git hub
      </Link>
    </StyledFooter>
  );
}

export default Footer;
