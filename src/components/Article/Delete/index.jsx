import React,{useEffect, useContext} from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import Axios from 'axios';
const Delete = () => {
  const { id } = useParams();
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  useEffect(() => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/articles/destroy/${id}`)
    .then(()=>{        
      setNotification({
        type: "success",
        message: "Article was deleted successfully"
    });});
  }, [globalStore, id, setNotification]);
  return (
    <Redirect to="/articles"/>
  )
}

export default Delete
