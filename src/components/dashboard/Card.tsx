/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export interface CardProps {
  name: string;
  year: number;
  imgPath: string | FormData;
  id: number;
  
}

export const Card: React.FC<CardProps> = ({
  name,
  imgPath,
  year,
  id
}) => {
  return (
    <CardContainer>
      <Link to={'/teams/' + id}>
        <CardImg>
          <img src={'http://dev.trainee.dex-it.ru' + imgPath} alt=""/>
        </CardImg>
        <CardText>
          <h2>{ name }</h2>
          <span>Year of foundation: { year }</span>
        </CardText>
      </Link>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  position: relative;
  background: rgb(112,112,112);
  background: linear-gradient(90deg, rgba(112,112,112,1) 35%, rgba(57,57,57,1) 100%);
  border-radius: 4px;
  & a{
    text-decoration: none;
  }
`
const CardImg = styled.div`
  padding: 65px 0;
  text-align: center;
  min-height: calc(100% - 98px);
  & img {
    max-width: 150px;
  }
`

const CardText = styled.div`
  background: #303030;
  padding: 24px;
  text-align: center;
  border-radius: 0 0 4px 4px;
  text-decoration: none;
  font-weight: 500;
  & h2 {
    font-size: 18px;
    color: white;
    margin: 0 0 12px 0;
  }
  & span {
    font-size: 14px;
    color: ${({theme}) => theme.colors.grey};
  }
`