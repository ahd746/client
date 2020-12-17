import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';
import { UserContext } from '../../Authentication/UserProvider';
import { Link } from 'react-router-dom';

const Show = () => {

  const { id } = useParams();
  const { globalStore } = useContext(GlobalStoreContext);
  const { user } = useContext(UserContext);
  const [article, setArticle] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  const [articleLoading, setArticleLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const isUser = () => {
    if (articleLoading && userLoading) {
      if (userDetails.name === article.author) {
        setLoading(true);
      }
    }
  }
  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/articles/${id}`)
      .then(({ data }) => {
        setArticle(data);
        setArticleLoading(true);
        isUser();
      })

  }, [globalStore, article, id, isUser]);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/users/show?secret_token=${user.token}`)
      .then(({ data }) => {
        setUserDetails(data);
        setUserLoading(true);
        isUser();
      });
  }, [globalStore, isUser]);


  return (
    <div className="container bg-light my-2">
      <h1>{article.title}</h1>
      <p>By {article.author} on {article.date}</p>
      <p>{article.body}</p>


      {user && user.token && loading ? (<>
        <Link className="btn btn-primary" to={`/articles/edit/${article._id}`}>Edit</Link>
        <Link className="btn btn-danger mx-1" to={`/articles/destroy/${article._id}`} >Delete</Link>
      </>) : null}
    </div >
  )
}

export default Show
