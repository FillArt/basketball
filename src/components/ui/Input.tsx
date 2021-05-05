/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import noHidden from './img/input/eye.svg';
import hidden from './img/input/close_eye.svg';

export interface InputProps {
  label: string;
  name: string;
  type: string;
  register?: (field: HTMLInputElement) => void;
  error: boolean;
  errorMessage?: string;
  hidden?: () => void;
  hiddenStatus?: boolean;
  passwordControll?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  error = false,
  errorMessage,
  hiddenStatus = false,
  passwordControll = false,
  register,
  hidden
}) => {
  return (
    <FormGroup>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FormWrapper>
        <FormInput isError={error} type={type} name={name} ref={register} id={name} />
        {error && <FormInputValidate htmlFor={name}>{ errorMessage }</FormInputValidate>}
        {passwordControll && <FormInputPasswordControl hidden={hiddenStatus} onClick={hidden} />}
      </FormWrapper>           
    </FormGroup>
  ) 
}

const FormGroup = styled.div`
  display: flex;
  margin: 0 0 24px 0;
  flex-direction: column;
`
const FormLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #707070;
  margin: 0 0 8px 0;
  transition: 0.3s;
  &.error {
    color: #FF768E;
  }
`
const FormInput = styled.input<{isError: boolean}>`
  width: 100%;
  box-sizing: border-box;
  transition: top 1s ease-out 0.5s;
  font-size: 14px;
  font-weight: 500;
  color: #303030;
  background-color: #F6F6F6;
  border: ${({isError, theme }) => isError ? `1px solid ${theme.colors.lightestRed}` : 'none' };
  padding: 8px 33px 8px 12px;
  border-radius: 4px;
  transition: 0.3s;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.lightGrey};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #D9D9D9;
    &:hover {
      background: ${({theme}) => theme.colors.lightestGrey};
    }
  }
`
const FormInputValidate = styled.label`
  margin: 8px 0 0 0;
  color: ${({theme}) => theme.colors.lightestRed};
  font-weight: 500;
  font-size: 12px;
`

const FormWrapper = styled.div`
  display: inline;
  position: relative;
`

const FormInputPasswordControl = styled.a`
  position: absolute;
  display: inline-block;
  cursor: pointer;
  background: url(${props => props.hidden ? noHidden : hidden}) 0 0 no-repeat;
  top: 10px;
	right: 12px;
  width: 16px;
  height: 16px;
`