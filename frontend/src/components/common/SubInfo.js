import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
  ${props => props.hasMarginTop &&
    css`
      margin-top: 1rem;
  `}
  color: ${palette.gray[6]};

  span{
    line-height: 1.5;
  }
  span + span:before {
      color: ${palette.gray[4]};
      padding: 0 0.25rem;
      content: '\\B7';
    }  
`;

function SubInfo({ username, publishedDate, hasMarginTop }) {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
}

export default SubInfo;