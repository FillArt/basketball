import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '../components/header/Header';
import { Sidebar } from '../components/sidebar/Sidebar';

import { authSelector, clearState } from '../api/AuthSlice';
import { TeamsList } from '../components/teams/TeamsList'
import { TeamsAdd } from '../components/teams/TeamsAdd';
import { TeamInfo } from '../components/teams/TeamInfo';


export const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isError } = useSelector(authSelector);

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


  return (
    <Template>
      <Header name={userData.name} avatar={userData.avatar} />

      <Layout>
        <Sidebar />

        <Content>
          <Switch>
            <Route exact path="/teams" component={TeamsList} />
            <Route exact path="/teams/add" component={TeamsAdd} />
            <Route path="/teams/:id" component={TeamInfo} />
          </Switch>
        </Content>

      </Layout>
    </Template>  
  )
}

const Template = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Layout = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
`

const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 32px 80px;
  background-color: #F6F6F6;
`