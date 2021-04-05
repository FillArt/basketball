import React from 'react';
import styled from 'styled-components';

import EmptyTeam from './img/empty-teams.svg';

export const Empty = () => {
  return (
    <EmptyContainer>
      <EmptyCard>
        <img src={EmptyTeam} alt=""/>
        <h2>Empty here</h2>
        <span>Add new teams to continue</span>
      </EmptyCard>
    </EmptyContainer>
  )
}

const EmptyContainer = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
`

const EmptyCard = styled.div`
  max-width: 556px;
  text-align: center;
  padding: 78px 87px 48px 87px;
  border-radius: 15px;
  background-color: white;
  margin: 0 auto;
  & h2 {
    font-size: 36px;
    color: #FF768E;
    margin: 76px 0 24px 0;
    font-weight: 800;
  }
  & span {
    font-size: 24px;
    color: #707070;
  }
`