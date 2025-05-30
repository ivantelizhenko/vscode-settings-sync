import React from "react";
import styled from "styled-components";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index, arr) => (
            <OpinionStory
              key={story.id}
              {...story}
              $isFirstChild={index === 0}
              $isLastChild={index === arr.length - 1}
            />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  --border-padding: 16px;

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
    gap: 1;
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 5fr 4fr 3fr;
    gap: 1px;
    background-color: var(--color-gray-300);
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  background-color: var(--color-gray-100);
  @media ${QUERIES.tabletAndUp} {
    padding-right: var(--border-padding);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  background-color: var(--color-gray-100);

  @media ${QUERIES.tabletAndUp} {
    padding: var(--border-padding);
    padding-top: 0;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  background-color: var(--color-gray-100);

  @media ${QUERIES.laptopAndUp} {
    padding-left: var(--border-padding);
    padding-bottom: var(--border-padding);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletOnly} {
    ${OpinionSection} & {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 32px;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  background-color: var(--color-gray-100);

  @media ${QUERIES.laptopAndUp} {
    padding-top: var(--border-padding);
    padding-left: var(--border-padding);
  }
`;

export default MainStoryGrid;
