/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Actions } from '../dashboard/Actions';
import { Controlls } from '../dashboard/Controlls'
import { Card } from '../dashboard/Card';

import Test from './img/test-logo.svg';

// import { Empty } from '../dashboard/Empty';

import { getTeams, teamSelector } from '../../api/TeamSlice';
import { useDispatch } from 'react-redux';

export const TeamsList = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTeams());
  }, [])

  return (
    <>
      <Actions />

      <TeamsContent>
        {/* <Empty /> */}
        <TeamsWrapper>
          <Card img={Test} name={'Portland trail blazers'} year={'2021'} />
        </TeamsWrapper>
      </TeamsContent>

      <Controlls />
    </>
  )

}


const TeamsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;

  gap: 24px;
`

const TeamsContent = styled.div`
  height: 100%;
`
