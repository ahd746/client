import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import Card from './Card'

const Articles = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);

  const [articles, setArticle] = useState([]);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/articles`)
    .then(({ data }) => {
      setArticle(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the articles: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header title="Articles"/>
      <Container>
        {articles && articles.length > 0 ? (
          articles.map((article) => (
            <>
              <Card key={article._id} article={article} />
            </>
          ))
        ) : null}
      </Container>
    </>
  );
} 
export default Articles;