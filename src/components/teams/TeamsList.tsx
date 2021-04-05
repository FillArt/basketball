/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Actions } from '../dashboard/Actions';
import { Controlls } from '../dashboard/Controlls'
import { Card } from '../dashboard/Card';

import Test from './img/test-logo.svg';

import { Empty } from '../dashboard/Empty';

import { getTeams, teamSelector } from '../../api/TeamSlice';
import { useDispatch, useSelector } from 'react-redux';

export interface ITeam {
  name: string,
  foundationYear: number,
  division: string,
  conference: string,
  imageUrl: string,
  id: number,
}

export const TeamsList = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const { teams } = useSelector(teamSelector);

  console.log('Cписок команд', teams);

  return (
    <>
      <Actions pathname={'teams'} />

      <TeamsContent>
  
        { teams.length ?  
          <TeamsWrapper>
            {teams.map((team: ITeam) => (
              <Card img={team.imageUrl} name={team.name} id={team.id}  key={team.id} year={team.foundationYear} />
            ))}
          </TeamsWrapper>

          :

          <Empty />
        }

        
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
