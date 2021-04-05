/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface HeaderAddProps {
  test?: string;
  pathname: string
  type?: 'add' | 'card'
}

export const HeaderAdd: React.FC <HeaderAddProps> = ({ pathname, type = 'card' }) => {
  return (
    <Header>
      <div>
        <Link to={'/' + pathname}>Teams</Link> / <Link to={'/' + pathname + '/add'}>Add new team</Link>
      </div>
      {type === 'card' && 
        <div>
          <span>1111</span>
        </div>
      } 
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 24px;
  & a {
    color: #E4163A;
    text-decoration: none;
  }
`