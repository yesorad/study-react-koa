import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Reponsive from '../common/Reponsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Helmet } from 'react-helmet-async';

const PostViewerBlock = styled(Reponsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.4;
    margin: 0;
  }
  b {
    font-weight: bold;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
  b {
    font-weight: bold;
  }
`;

function PostViewer({ post, error, loading, actionButtons }) {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <PostViewerBlock>
      <Helmet>
        <title>BLOG-{title}</title>
      </Helmet>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
}

export default PostViewer;
