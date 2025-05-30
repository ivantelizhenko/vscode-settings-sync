import styled from "styled-components";

const StyledLinkList = styled.ul`
  margin: 3.2rem 0;
  padding: 0 2.4rem;
  text-align: start;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;
const ListItem = styled.li``;

const LinkItem = styled.a`
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

function LinkList() {
  return (
    <StyledLinkList>
      <ListItem>
        <LinkItem href="#">Юридична інформація</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem href="#">Центр безпеки й конфіденційності</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem href="#">Політика конфіденційності</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem href="#">Політика щодо файлів cookie</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem href="#">Про рекламу</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem href="#">доступність;</LinkItem>
      </ListItem>
    </StyledLinkList>
  );
}

export default LinkList;
