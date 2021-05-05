/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/display-name */

import React from 'react';
import styled from 'styled-components';

import { HeaderAdd } from '../dashboard/add/HeaderAdd';
import { FormAdd } from '../dashboard/add/FormAdd';


export const TeamsAdd = () => {

  return(
    <Container>
      <HeaderAdd pathname={'teams'} type={'add'} />
      <FormAdd type={'player'} />
    </Container>
  )
}

const Container = styled.div`
  border-radius: 10px;
  background: #FFFFFF;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
`