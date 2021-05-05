import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Info } from '../dashboard/Info';

import { getTeams, teamSelector } from '../../api/TeamSlice';
import {typeStateGlobal} from "../../helpers/types";


export const TeamInfo = () => {
  const dispatch = useDispatch(); 
  const { id } = useParams<{id: string}>();
  
  useEffect(() => {
    dispatch(getTeams());
  }, []);


  const team = useSelector((state: typeStateGlobal) => teamSelector(state, id));

  console.log(team);
  
  return (
    <Info team={team} />
  )
}