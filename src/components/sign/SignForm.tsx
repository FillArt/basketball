import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Button } from '../ui/Button'
import { Input } from '../ui/Input';
import { Checkbox } from '../ui/Checkbox';

import noHidden from '../../static/img/sign/eye.svg';
import hidden from '../../static/img/sign/close_eye.svg';
import check from '../../static/img/sign/check.svg';

import { signupUser, loginUser } from '../../api/AuthSlice';

interface IProps {
  typeForm: string;
}

interface IFormData {
  UserName?: any;
  login: string;
  password: string;
  checkPassword?: string;
  agreement?: boolean;
}

interface IFormErrors {
  [key: string]: string;
}

const formErrors: IFormErrors = {
  required: 'Required',
  pattern: 'Data input is incorrect',
  minLength: 'Value of at least 3 characters',
  maxLength: 'The value is too long',
  validate: 'Password and repeat password are not the same',
};



export const SignForm = (props: IProps) => {
  const { typeForm } = props;
  const { register, errors, handleSubmit, watch } = useForm<IFormData>();
  const dispatch = useDispatch();

  const password = useRef({});
  password.current = watch("password", "");
  
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenPasswordConfirm, setHiddenPasswordConfirm] = useState(true); 

  const onSubmit = (data: IFormData) => {
    if(typeForm === 'Sign Up') { 
      console.log('Регистрация пользователя с данными:', data);
      dispatch(signupUser(data));
    } else {
      console.log('Авторизация пользователя с данными:', data);
      dispatch(loginUser(data));
      console.log('error', errors);
    }  
  };

  return (
    <FormTemplate onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>{typeForm}</FormTitle>

      {typeForm === 'Sign Up' && (
      <Input
        label="Name"
        name="UserName"
        register={register({
          required: true,
        })}
        type="text"
        error={Boolean(errors.UserName)}
        errorMessage={formErrors[String(errors.UserName?.type)]}
      />
      )}

      <Input
        label="Login"
        name="login"
        register={register({
          required: true,
        })}
        type="text"
        error={Boolean(errors.login)}
        errorMessage={formErrors[String(errors.login?.type)]}
      />

      <Input
        label="Password"
        name="password"
        register={register({
          required: true,
          minLength: 3,
        })}
        type={hiddenPassword ? "password" : "text" }
        passwordControll={true}
        error={Boolean(errors.password)}
        errorMessage={formErrors[String(errors.password?.type)]}
        hiddenStatus={hiddenPassword}
        hidden={() => setHiddenPassword(!hiddenPassword)}
      />


      {typeForm === 'Sign Up' && (
      <Input
        label="Enter your password again"
        name="checkPassword"
        register={register({
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
        type="password"
        passwordControll={true}
        error={Boolean(errors.checkPassword)}
        errorMessage={formErrors[String(errors.checkPassword?.type)]}
        hiddenStatus={hiddenPasswordConfirm}
        hidden={() => setHiddenPasswordConfirm(!hiddenPasswordConfirm)}
      />
      )}

      {typeForm === 'Sign Up' && (
        <Checkbox 
          label="I accept the agreement"
          name="agreement"
          error={Boolean(errors.agreement)}
          register={register({
            required: true,
          })}
          errorMessage={formErrors[String(errors.checkPassword?.type)]}
        />        
      )}

      <FormGroup>
        <Button
          label={typeForm}
          disable={Object.keys(errors).length > 0} 
          type={'submit'} />
      </FormGroup>
      
    </FormTemplate>
  )
}

const FormTemplate = styled.form`
  width: 100%;
  max-width: 366px;
  padding: 0 24px;
`

const FormTitle = styled.h2`
  font-size: 36px;
  color: #344472;
  font-weight: 400;
  margin: 0 0 32px;
`

const FormGroup = styled.div`
  display: flex;
  margin: 0 0 24px 0;
  flex-direction: column;
`
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
const FormButton = styled.button`
  width: 100%;
  background-color: #E4163A;
  cursor: pointer;
  color: white;
  padding: 8px 0;
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
`
const FormInputValidate = styled.label`
  margin: 8px 0 0 0;
  color: #FF768E;
  font-weight: 500;
  font-size: 12px;
`
const FormWrapperPassword = styled.div`
  display: inline;
  position: relative;
`
const FormInputPasswordControl = styled.a`
  position: absolute;
  display: inline-block;
  cursor: pointer;
  top: 25%;
	right: 12px;
  background: url(${props => props.hidden ? noHidden : hidden}) 0 0 no-repeat;
  width: 16px;
  height: 16px;
`