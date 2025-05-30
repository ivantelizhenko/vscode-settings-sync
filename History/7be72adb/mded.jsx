import React from "react";
import styled from "styled-components";

import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  &:not(:first-child) {
    padding-top: var(--link-gap, --border-gap);
  }
  &:not(:last-child) {
    padding-bottom: var(--link-gap, --border-gap);
    border-bottom: var(--link-border, 1px solid var(--color-gray-300));
  }

  @media ${QUERIES.tabletOnly} {
    --link-border: none;
    --link-gap: 0;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media ${QUERIES.tabletOnly} {
    display: revert;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;

  @media ${QUERIES.tabletOnly} {
    margin: 3px;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
