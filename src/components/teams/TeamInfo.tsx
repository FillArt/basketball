import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Info } from '../dashboard/Info';

import { getTeams, teamSelector } from '../../api/TeamSlice';


export const TeamInfo = () => {
  const dispatch = useDispatch(); 
  const { id } = useParams<{id: string}>();
  
  useEffect(() => {
    dispatch(getTeams());
  }, []);


  const { teams } = useSelector(teamSelector);
  const team = teams.find((t: { id: string; }) => t.id == id);

  console.log(team);
  
  return (
    <Info team={team} />
  )
}