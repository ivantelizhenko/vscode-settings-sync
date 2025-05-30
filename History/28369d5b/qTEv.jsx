import styled from "styled-components";
import Heading from "./Heading";

function CardDetails() {
  return (
    <Wrapper>
      <Heading>Оголошення</Heading>
      <ImageWrapper>
        <img src={img} alt={name} />
        <BookmarkButton>
          <Icon id="bookmark" size={24} strokeWidth={2} />
        </BookmarkButton>
      </ImageWrapper>
      <Details>
        <Line>
          <Icon
            id={gender === "he" ? "mars" : "venus"}
            size={24}
            strokeWidth={2}
          />
          <h3>
            <strong>{name}</strong>
          </h3>
        </Line>
        <Line>
          <Icon id="calendar" size={24} strokeWidth={2} />
          <p>{age}</p>
        </Line>
        <Line>
          <Icon id="map-pin" size={24} strokeWidth={2} />
          <p>{place}</p>
        </Line>
      </Details>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default CardDetails;
