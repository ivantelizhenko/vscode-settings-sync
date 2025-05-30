import React from "react";
import styled from "styled-components";
import StoryBorders from "../StoryBorders/StoryBorders";

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <StoryBorders as="a" gap={16} href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Wrapper>
    </StoryBorders>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    "image heading"
    "image abstract";
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);

  &:not(:first-child) {
    padding-top: 16px;
  }

  &:not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
`;

const Abstract = styled.p`
  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  hyphens: auto;

  max-height: calc(var(--global-line-height) * 3em);
`;

export default SecondaryStory;
