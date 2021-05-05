/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import addIcon from './img/button/add.svg'

export interface ButtonProps {
  label: string;
  type: "submit" | "button" | "reset";
  disable?: boolean;
  add?: boolean;
  cancel?: boolean;
  link?: boolean;
  linkPath?: string | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type,
  disable = false,
  add = false,
  cancel = false,
  link = false,
  linkPath

}) => {
  const history = useHistory()
  const linkPush = () => {
    if(link) {
      history.replace(linkPath + '/add')
    }
  }
  return (
    <FormButton onClick={linkPush} className={add ? 'add' : '' || cancel ? 'cancel' : ''} disabled={disable} type={type}>
      { label } {add && <img src={addIcon} alt="test" />}
    </FormButton>
  )
}


const FormButton = styled.button`
  width: 100%; 
  background-color:  ${({theme}) => theme.colors.red};
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
    background-color: ${({theme}) => theme.colors.lightRed};
  }
  &:active {
    background-color: ${({theme}) => theme.colors.darkRed};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({theme}) => theme.colors.lightestGrey};
    color: ${({theme}) => theme.colors.lightGrey};
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
    border: 1px solid ${({theme}) => theme.colors.grey};
    background-color: transparent;
    color: #9C9C9C;
    &:hover {
      background-color: ${({theme}) => theme.colors.lightGrey};
    }
    &:active {
      background-color: ${({theme}) => theme.colors.grey};
      color: ${({theme}) => theme.colors.middleGrey};
    }
    &:disabled {
      cursor: not-allowed;
      background-color: ${({theme}) => theme.colors.lightestGrey};
      color: ${({theme}) => theme.colors.lightGrey};
    }
  }
`