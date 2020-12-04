import React from 'react';
import { Route } from 'react-router-dom';
import GlobalStyles from './lib/styles/GlobalStyles.js';
import PostListPage from './pages/posts/PostListPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import PostPage from './pages/posts/PostPage';
import WritePage from './pages/posts/WritePage';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>BLOG</title>
      </Helmet>
      <GlobalStyles />
      <Route path={['/@:username', '/']} component={PostListPage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/write" component={WritePage} />
      <Route path="/@:username/:postId" component={PostPage} />
    </>
  );
}

export default App;
