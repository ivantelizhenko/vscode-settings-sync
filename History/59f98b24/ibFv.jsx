import styled from "styled-components";

function Image({ ...delegated }) {
  return (
    <ImageWrapper>
      <img {...delegated} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  // temporary
  height: 350px;
  background-color: red;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default Image;
