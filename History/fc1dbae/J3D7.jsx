import styled from "styled-components";

const StyledLinkList = styled.ul`
  margin: 3.2rem 0;
  padding: 0 2.4rem;
  text-align: start;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;
const ListItem = styled.li`
  margin-bottom: 8px;
`;

const LinkItem = styled.a`
  &:link,
  &:visited {
    background-color: red;
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
        <LinkItem>Юридична інформація</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem>Центр безпеки й конфіденційності</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem>Політика конфіденційності</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem>Політика щодо файлів cookie</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem>Про рекламу</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem>доступність;</LinkItem>
      </ListItem>
    </StyledLinkList>
  );
}

export default LinkList;
