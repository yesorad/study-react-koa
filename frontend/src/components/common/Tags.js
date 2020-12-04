import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagsBlock = styled.div`
  margin-top: 0.5rem;

  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    margin-right: 0.5rem;
    &:hover{
      color: ${palette.cyan[6]};
    }
  }
`;

function Tags({ tags }) {
  return (
    <TagsBlock>
      {tags.map(tag => (
        <Link className="tag" key={tag} to={`/?tag=${tag}`} >#{tag}</Link>
      ))}
    </TagsBlock>
  );
}

export default Tags;