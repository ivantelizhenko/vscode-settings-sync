import styled from "styled-components";

function MobileMenu() {
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.dialog``;

export default MobileMenu;
