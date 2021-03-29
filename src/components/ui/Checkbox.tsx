/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import check from '../../stories/assets/chekbox/check.svg'

export interface CheckboxProps {
  label: string;
  name: string;
  error: boolean;
  disabled?: boolean;
  errorMessage?: string;
  register?: (field: HTMLInputElement) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label = 'test',
  name,
  error = false,
  errorMessage,
  disabled = false,
  register
}) => {
  return (
    <FormGroupCheck>
      <FormInput disabled={disabled} name={name} type="checkbox" id={name} ref={register} />
      <FormLabel className={error ? 'error' : ''} htmlFor={name}>{ label }</FormLabel>
      {error && <div><FormInputValidate htmlFor={name}>{errorMessage}</FormInputValidate></div> }
    </FormGroupCheck>
  ) 
}

const FormGroupCheck = styled.div`
  display: flex;
  margin: 24px 0;
  flex-direction: column;
  align-items: flex-start;
  & input {
    display: none;
    z-index: -1;
    opacity: 0;
  }

  & input + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  & input + label::before {
    content: '';
    display: inline-block;
    transition: 0.3s;
    cursor: pointer;
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #707070;
    border-radius: 2px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 70% 70%;
  }

  & input:checked+label::before {
    border-color: #E4163A;
    background-color: #E4163A;
    background-image: url(${check});
  }

  & input:not(:disabled):not(:checked)+label:hover::before { 
    border-color: #E4163A;
  }

  & input + .error::before {
    content: '';
    display: inline-block;
    cursor: pointer;
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #E4163A;
    border-radius: 2px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  & label {
    margin: 0;
  }
`
const FormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  transition: top 1s ease-out 0.5s;
  font-size: 14px;
  font-weight: 500;
  color: #303030;
  background-color: #F6F6F6;
  border: none;
  padding: 8px 33px 8px 12px;
  border-radius: 4px;
  transition: 0.3s;
  &.error {
    border: 1px solid #FF768E;
  }
  &:hover {
    background-color: #D1D1D1;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #D9D9D9;
    &:hover {
      background: #F6F6F6;
    }
  }
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
const FormInputValidate = styled.label`
  margin: 8px 0 0 0;
  color: #FF768E;
  font-weight: 500;
  font-size: 12px;
`