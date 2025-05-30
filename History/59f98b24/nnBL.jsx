import styled from "styled-components";
import { QUERIES } from "../constants";

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

  @media ${QUERIES.laptopAndUp} {
    // temporary
    height: 650px;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default Image;
