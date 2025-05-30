import styled from "styled-components";

const StyledLinkList = styled.ul`
  margin: 3.2rem 0;
  padding: 0 2.4rem;
  text-align: start;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  margin-bottom: 0.8rem;
  margin-right: 1.2rem;
`;

const Link = styled.a`
  &:link,
  &:visited {
    font-size: 1.1rem;
    text-decoration: none;
    line-height: inherit;
    border: none;
    padding: 0px;
    color: var(--text-subdued, #656565);
  }
`;

function NavLinkList() {
  return (
    <StyledLinkList>
      <ListItem>
        <Link href="#">Юридична інформація</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Центр безпеки й конфіденційності</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Політика конфіденційності</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Політика щодо файлів cookie</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Про рекламу</Link>
      </ListItem>
      <ListItem>
        <Link href="#">доступність;</Link>
      </ListItem>
    </StyledLinkList>
  );
}

export default NavLinkList;
