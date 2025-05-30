import React from "react";
import styled from "styled-components";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const picturePath = src.split(".")[0];
  console.log(alt);
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={`
            ${picturePath}.avif 1x,
            ${picturePath}@2x.avif 2x,
            ${picturePath}@3x.avif 3x, 
          `}
          />
          <source
            type="image/jpg"
            srcSet={`
              ${picturePath}.jpg 1x,
              ${picturePath}@2x.jpg 2x,
              ${picturePath}@3x.jpg 3x, 
              `}
          />
          <Image alt={alt} src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;

  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  white-space: nowrap;

  &:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      transform: scale(50%), translate(-100px -200px);
      text-overflow: revert;
      overflow: revert;
    }
  }
`;

export default PhotoGridItem;
