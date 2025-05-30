import React from "react";
import styled from "styled-components";

import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar, ...styledProps }) => {
  return (
    <Link href={`/story/${id}`} {...styledProps}>
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
  padding-top: ${({ $isFirstChild }) =>
    $isFirstChild ? 0 : "var(--border-padding)"};
  padding-bottom: ${({ $isLastChild }) =>
    $isLastChild ? 0 : "var(--border-padding)"};
  border-bottom: ${({ $isLastChild }) =>
    $isLastChild ? "none" : "var(--border-divider)"};

  @media ${QUERIES.tabletOnly} {
    padding: 0;
    border: none;
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
