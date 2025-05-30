import styled, { css } from "styled-components";
import ButtonLink from "./ButtonLink";

const StyledNavLinkList = styled.ul`
  margin: 3.2rem 0;
  padding: 0 2.4rem;
  text-align: start;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  ${(props) =>
    props.$type === "nav" &&
    css`
      font-size: 1.1rem;
    `}

  margin-bottom: 0.8rem;
  margin-right: 1.2rem;
`;

function NavLinkList() {
  // Ideally use array.map with objects with label and path
  return (
    <StyledNavLinkList>
      <ListItem $type="nav">
        <ButtonLink to="#" label="Юридична інформація" />
      </ListItem>
      <ListItem $type="nav">
        <ButtonLink to="#" label="Центр безпеки й конфіденційності" />
      </ListItem>
      <ListItem $type="nav">
        <ButtonLink to="#" label="Політика конфіденційності" />
      </ListItem>
      <ListItem $type="nav">
        <ButtonLink to="#" label="Політика щодо файлів cookie" />
      </ListItem>
      <ListItem $type="nav">
        <ButtonLink to="#" label="Про рекламу" />
      </ListItem>
      <ListItem $type="nav">
        <ButtonLink to="#" label="доступність;" />
      </ListItem>
    </StyledNavLinkList>
  );
}

export default NavLinkList;
