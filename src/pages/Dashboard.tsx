import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authSelector, clearState } from '../api/AuthSlice';
import { Header } from '../components/header/Header';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isError } = useSelector(authSelector);
  const { username, avatar } = useSelector(authSelector);
  
  const userData = {
    name: localStorage.getItem('username'),
    avatar: localStorage.getItem('avatar'),
  }

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      history.push('/login');
    }
  }, [isError]);

  const onLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('avatar');

    history.push('/login');
  };

  return (
    <div>
      <Header name={userData.name} avatar={userData.avatar} />
      <p>
        Мое имя: {username}
      </p>
      <button onClick={onLogOut}>Выйти</button>
    </div>
  )
}

