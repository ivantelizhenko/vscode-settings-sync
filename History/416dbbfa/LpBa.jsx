import styled from "styled-components";

const StyledLogo = styled.img`
  display: flex;
  align-items: center;
  margin: 2rem;

  /* background-color: red; */
  width: 3.2rem;
  height: 3.2rem;
`;

function Logo() {
  return (
    <StyledLogo
      src="data/spotify-logo-icon/Spotify_Primary_Logo_RGB_White.png"
      alt=""
    />
  );
}

export default Logo;
