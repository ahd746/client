import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../Authentication/UserProvider';

const Card = ({ article }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">By {article.author} on {article.date}</h6>
        <p className="card-text text-truncate">{article.body}</p>
      </div>

      {user && user.token ? (<>
        <p className="mx-3">
          <Link to={`/articles/show/${article._id}`}>Continue reading...</Link>
        </p>
      </>) : <p className="mx-3 text-danger">Log in to read the rest of the article</p>}
    </div >
  )
}

export default Card
