/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import addIcon from '../../stories/assets/button/add.svg'

export interface ButtonProps {
  label: string;
  type: "submit" | "button" | "reset";
  disable: boolean;
  add?: boolean;
  cancel?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type,
  disable = false,
  add = false,
  cancel = false,

}) => {
  return (
    <FormButton className={add ? 'add' : '' || cancel ? 'cancel' : ''} disabled={disable} type={type}>
      { label } {add && <img src={addIcon} alt="test" />}
    </FormButton>
  )
}


const FormButton = styled.button`
  width: 100%; 
  background-color:  #E4163A;
  cursor: pointer;
  color: white;
  padding: 8px 24px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  transition: 0.3s;
  &:hover {
    background-color: #FF5761;
  }
  &:active {
    background-color: #C60E2E;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #F6F6F6;
    color: #D1D1D1;
  }

  &.add {
    max-width: 104px;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }

  &.cancel {
    max-width: 171px;
    border: 1px solid #9C9C9C;
    background-color: transparent;
    color: #9C9C9C;
    &:hover {
      background-color: #D1D1D1;
    }
    &:active {
      background-color: #9C9C9C;
      color: #707070;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #F6F6F6;
      color: #D1D1D1;
    }
  }
`