import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

const MainStory = ({ id, title, image, location, abstract, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <a href={`/story/${id}`}>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
      </a>
      <Abstract>
        <Location>{location}</Location> — {abstract}
      </Abstract>
      <ReadMore href="/story">Continue Reading…</ReadMore>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 12px;
`;

const Heading = styled.h2`
  margin-bottom: 8px;
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

const Abstract = styled.p`
  --line-clamp: 8;
  font-size: 1rem;
  margin-bottom: 1em;
  white-space: pre-wrap;
  line-height: 24px;
  line-height: 2;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line-clamp);
  overflow: hidden;
  hyphens: auto;

  @media ${QUERIES.tabletOnly} {
    -webkit-line-clamp: calc(var(--line-clamp) * 2);
  }
`;

const Location = styled.span`
  text-transform: uppercase;
`;

const ReadMore = styled.a`
  font-weight: var(--font-weight-medium);
  font-style: italic;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 1px;
  }
`;

export default MainStory;
