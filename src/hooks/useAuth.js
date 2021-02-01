import axios from 'axios';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function useAuth() {
  let history = useHistory();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  const setUserContext = async () => {
    return await axios
      .get(`/api/users/check`)
      .then((res) => {
        setUser(res.data);
        history.push('/home');
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  const registerUser = async (data) => {
    return axios.post(`/api/users`, data).catch((err) => {
      setError(err.response.data);
    });
  };

  const loginUser = async (data) => {
    return axios
      .post(`/api/users/login`, data)
      .then(async (res) => {
        console.log(res);
        await setUserContext();
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return {
    registerUser,
    loginUser,
    error
  };
}
