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
  @media ${QUERIES.laptopAndUp} {
    grid-area: image;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default Image;
