import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const statusVarian = {
    "new-release": { bgColor: COLORS.secondary, title: "Just Released!" },
    "on-sale": { bgColor: COLORS.primary, title: "Sale" },
  };

  console.log(salePrice);

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          {variant !== "default" && (
            <Status style={{ backgroundColor: statusVarian[variant].bgColor }}>
              {statusVarian[variant].title}
            </Status>
          )}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <PriceWrapper>
            <Price $isSalePrice={!salePrice}>{formatPrice(price)}</Price>
            {salePrice && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
          </PriceWrapper>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  flex: 1;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const Status = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  padding: 8px;
  color: ${COLORS.white};
  position: absolute;
  top: 12px;
  right: -4px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.span``;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
