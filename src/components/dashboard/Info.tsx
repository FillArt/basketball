/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { HeaderAdd } from './add/HeaderAdd';
import { InfoCard } from './info/InfoCard';

export interface IInfoProps {
  team: any;
}

export const Info: React.FC<IInfoProps> = ({team}) => {
  return(
    <Container>
      <HeaderAdd pathname={'teams'} />
      <InfoCard team={team} />
    </Container>
  )
}

const Container = styled.div`
  border-radius: 10px;
  background: ${({theme}) => theme.colors.white};
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
`