import React from "react";
import styled from "styled-components";
import { COLORS, QUERIES } from "../../constants";

const Breadcrumbs = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Breadcrumbs.Crumb = ({ href, children, delegated }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} {...delegated}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const CrumbWrapper = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: "/";
      margin-right: 8px;
      color: ${COLORS.gray[300]};
    }
  }
`;

export const CrumbLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;

  &:hover {
    color: ${COLORS.gray[900]};
  }
`;

const Wrapper = styled.nav`
  display: flex;
  font-size: 0.875rem;

  @media ${QUERIES.tabletAndSmaller} {
    position: absolute;
    top: -20px;
    left: 1px;
  }
`;
export default Breadcrumbs;
