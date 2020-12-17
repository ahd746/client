import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import ImageURL from '../../../images/1.jpg';

const Home = () => {
  return (
    <>
      <Header title="Welcome to CRUD Blog">
        <p>
          Read, Create, Update, Delete your Blogs
        </p>
        <img src={ImageURL} className="img-fluid" alt=""/>
      </Header>
      <Container>
        <p>Have fun read our blogs and create account to create your own blogs</p>
      </Container>
    </>
  );
}
 
export default Home;