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
  return (
    <StyledNavLinkList>
      <NavListItem>
        <ButtonLink to="#" label="Юридична інформація" />
      </NavListItem>
      <NavListItem>
        <Link href="#">Центр безпеки й конфіденційності</Link>
      </NavListItem>
      <NavListItem>
        <Link href="#">Політика конфіденційності</Link>
      </NavListItem>
      <NavListItem>
        <Link href="#">Політика щодо файлів cookie</Link>
      </NavListItem>
      <NavListItem>
        <Link href="#">Про рекламу</Link>
      </NavListItem>
      <NavListItem>
        <Link href="#">доступність;</Link>
      </NavListItem>
    </StyledNavLinkList>
  );
}

export default NavLinkList;
