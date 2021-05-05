/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Actions } from '../dashboard/Actions';
import { Controlls } from '../dashboard/Controlls'
import { Card } from '../dashboard/Card';

import Test from './img/test-logo.svg';

import { Empty } from '../dashboard/Empty';

import { getTeams, teamsAllSelector } from '../../api/TeamSlice';
import { useDispatch, useSelector } from 'react-redux';
import {ITeam} from "../../helpers/intefaces/storeInterfaces/TeamInterfaces";

// export interface ITeam {
//   name: string,
//   foundationYear: string,
//   division: string,
//   conference: string,
//   imageUrl: string,
//   id: string,
// }

export const TeamsList = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const { teams } = useSelector(teamsAllSelector);

  console.log('Cписок команд', teams);

  return (
    <>
      <Actions pathname={'teams'} />

      <TeamsContent>
  
        { teams.length ?  
          <TeamsWrapper>
            {teams.map((team: ITeam) => (
              <Card name={team.name} id={team.id}  key={team.id} year={team.foundationYear} imgPath={team.imageUrl} />
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
