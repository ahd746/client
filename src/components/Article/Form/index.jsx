import React, { useContext, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

const ArticleForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);

  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
      ...inputs,
      secret_token: (user && user.token)
    })
    .then(({ data }) => {
      if (data) {
        setNotification({
          type: "success",
          message: "Article was updated successfully"
        });
      }
      setRedirect(true);
    })
    .catch((error) => {
      setNotification({
        type: "danger",
        message: `There was an error updating the Article: ${error.message}`
      });
    });
  };

  if (redirect) return <Redirect to="/articles"/>;
  return (
    <Form className = "form-group"onSubmit={handleSubmit}>
      <input 
        onChange={handleChange} 
        className="form-control"
        name="title" 
        placeholder="Enter tile of the article here"
        defaultValue={inputs.title}
      />
      <textarea
        onChange={handleChange}
        className="form-control my-3" 
        name="body" 
        placeholder="Enter your article here"
        defaultValue={inputs.body}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default ArticleForm;