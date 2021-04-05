/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';


export interface InfoCardProps {
  team: any;
}

export const InfoCard: React.FC <InfoCardProps> = ({team}) => {
  return(
    <Info>
      <InfoAvatar>1</InfoAvatar>
      <InfoData>
        <h1>{team.name}</h1>
        <InfoWrapper>
          <InfoItem>
            <h2>Year of foundation</h2>
            <span>{team.foundationYear}</span>
          </InfoItem>
          <InfoItem>
            <h2>Division</h2>
            <span>{team.division}</span>
          </InfoItem>
          <InfoItem>
            <h2>Conference</h2>
            <span>{team.conference}</span>
          </InfoItem>
        </InfoWrapper>
      </InfoData>
    </Info>
  )
}

const Info = styled.section`
  display: flex;
  padding: 65px 146px;
  gap: 40px;
  background: rgb(112,112,112);
  background: linear-gradient(90deg, rgba(112,112,112,1) 35%, rgba(57,57,57,1) 100%); 
`

const InfoAvatar = styled.div`
  outline: 1px solid red;
  width:40%;
`

const InfoData = styled.div`
  outline: 1px solid green;
  width:60%;
  & h1 {
    font-size: 36px;
    margin: 0 0 40px 0;
    color: white;
    font-weight: 800;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
`
const InfoItem = styled.div`
  width: 45%;
  color: white;
  &:not(:last-child) {
    margin: 0 0 54px 0;
  }
  & h2 {
    font-weight: 800;
    font-size: 24px;
    margin: 0 0 8px 0;
  }
  & span {
    font-weight: 500;
    font-size: 18px;
  }
`