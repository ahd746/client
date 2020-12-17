import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Header title="Log In">
        <p>Log in and start writing your awesomep stories</p>
      </Header>
      
      <Container>
        <LoginForm/>
      </Container>
    </>
  );
}
 
export default Login;