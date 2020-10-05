import React from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import LoginContainer from '../../containers/auth/LoginContainer';

function LoginPage() {
  return (
    <>
      <AuthTemplate>
        <LoginContainer />
      </AuthTemplate>
    </>
  );
}

export default LoginPage;
