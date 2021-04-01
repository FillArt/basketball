import React from 'react';
import styled from 'styled-components';

import SearchIcon from '../ui/img/search.svg';
import { Button } from '../ui/Button';

export const Actions = () => {
  return (
    <Action>
      <input type="text" placeholder="Search..." name="" id=""/>
      <Button label="Add" type="button" add />
    </Action>
  )
}

const Action = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 32px 0;
  max-height: 40px;

  & input {
    width: 100%;
    max-width: 364px;
    padding: 10px 12px;
    border: 0.5px solid #D1D1D1;
    border-radius: 4px;
    background: url(${SearchIcon}) no-repeat center right 2%;
    background-color: white;
    font-size: 14px;
    color: #707070;
    font-weight: 500;
    &:focus {
      outline: none;
    }
  }
`