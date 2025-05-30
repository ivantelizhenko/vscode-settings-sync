import styled from "styled-components";
import ButtonLink from "./ButtonLink";

const StyledNavLinkList = styled.ul`
  margin: 3.2rem 0;
  padding: 0 2.4rem;
  text-align: start;
  display: flex;
  flex-wrap: wrap;
`;
const NavListItem = styled.li`
  margin-bottom: 0.8rem;
  margin-right: 1.2rem;
`;

function NavLinkList() {
  // Ideally use array.map with objects with label and path
  return (
    <StyledNavLinkList>
      <NavListItem>
        <ButtonLink to="#" label="Юридична інформація" />
      </NavListItem>
      <NavListItem>
        <ButtonLink to="#" label="Центр безпеки й конфіденційності" />
      </NavListItem>
      <NavListItem>
        <ButtonLink to="#" label="Політика конфіденційності" />
      </NavListItem>
      <NavListItem>
        <ButtonLink to="#" label="Політика щодо файлів cookie" />
      </NavListItem>
      <NavListItem>
        <ButtonLink to="#" label="Про рекламу" />
      </NavListItem>
      <NavListItem>
        <ButtonLink to="#" label="доступність;" />
      </NavListItem>
    </StyledNavLinkList>
  );
}

export default NavLinkList;
