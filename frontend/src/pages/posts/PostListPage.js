import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PaginationContainer from '../../containers/post/PaginationContainer';
import PostListContainer from '../../containers/post/PostListContainer';
import { Helmet } from 'react-helmet-async';

function PostListPage() {
  return (
    <>
      <Helmet>
        <title>BLOG-LIST</title>
      </Helmet>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
}

export default PostListPage;
