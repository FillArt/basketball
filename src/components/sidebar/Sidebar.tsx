/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Person from './img/person.svg'
import Teams from './img/teams.svg'
import Logout from './img/logout.svg'
import { SidebarNav } from './SidebarNav';

interface IProps {
  test?: string;
}


export const Sidebar = (props: IProps) => {

  const history = useHistory();

  const onLogOut = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <SidebarContainer>
      <SidebarRoute>
        <Link to="/teams">
          <SidebarNav name={'Team'} link img={Teams}  />
        </Link>  

        <Link to="/players">
          <SidebarNav name={'Players'} link img={Person}  />
        </Link> 
      </SidebarRoute>

      <SidebarLogOut>
        <SidebarNav name={'Sign out'} img={Logout} logout={onLogOut}  />
      </SidebarLogOut>
    </SidebarContainer>
    
  )
}

const SidebarContainer = styled.aside`
  display: flex;
  flex-basis: 140px;
  padding: 35px 0;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFFFFF;
  box-sizing: border-box;
  transition: 0.7s ease-out;
`
const SidebarRoute = styled.div`
  & a {
    display: block;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    margin: 0 0 40px 0;
    color: #9C9C9C;
    &:hover {
      color: #E4163A;
    }
    &:last-child {
      margin: 0;
    }
  }
`
const SidebarLogOut = styled.div``