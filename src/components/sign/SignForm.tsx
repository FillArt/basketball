import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import noHidden from '../../static/img/sign/eye.svg';
import hidden from '../../static/img/sign/close_eye.svg';
import check from '../../static/img/sign/check.svg';

import { signupUser, loginUser } from '../../api/AuthSlice';

interface IProps {
  typeForm: string;
}

interface IFormData {
  UserName?: string;
  login: string;
  password: string;
  checkPassword?: string;
  agreement?: boolean;
}


export const SignForm = (props: IProps) => {
  const { typeForm } = props;
  const { register, errors, handleSubmit, watch } = useForm<IFormData>();
  const dispatch = useDispatch();

  const password = useRef({});
  password.current = watch("password", "");
  
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenPasswordConfirm, setHiddenPasswordConfirm] = useState(true); 

  // console.log(errors);

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
      <FormGroup>
        <FormLabel htmlFor="UserName">Name</FormLabel>
        <FormInput className={errors.UserName ? 'error' : ''} name="UserName" ref={register({
          required: "You must specify a name",
        })} id="UserName" />
        {errors.UserName && <FormInputValidate htmlFor="username">{errors.UserName.message}</FormInputValidate>}            
      </FormGroup>
      )}

      <FormGroup>
        <FormLabel htmlFor="login">Login</FormLabel>
        <FormInput name="login" className={errors.login ? 'error' : ''} ref={register({
          required: "You must specify a login",
        })} id="login" />
        {errors.login && <FormInputValidate htmlFor="login">{errors.login.message}</FormInputValidate>}            
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="password">Password</FormLabel>

        <FormWrapperPassword>
          <FormInput name="password" type={hiddenPassword ? 'password' : 'text'} className={errors.password ? 'error' : ''} ref={register({
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            }
          })} id="password" />
          <FormInputPasswordControl hidden={hiddenPassword} onClick={() => setHiddenPassword(!hiddenPassword)}/>
        </FormWrapperPassword>

        {errors.password && <FormInputValidate htmlFor="password">{errors.password.message}</FormInputValidate>}            
      </FormGroup>

      {typeForm === 'Sign Up' && (
      <FormGroup>
        <FormLabel htmlFor="checkPassword">Enter your password again</FormLabel>

        <FormWrapperPassword>    
          <FormInput id="checkPassword" name="checkPassword" className={errors.checkPassword ? 'error' : ''} ref={register({
            validate: value =>
              value === password.current || "The passwords do not match"
          })} type={hiddenPasswordConfirm ? 'password' : 'text'} />
          <FormInputPasswordControl hidden={hiddenPasswordConfirm} onClick={() => setHiddenPasswordConfirm(!hiddenPasswordConfirm)}/>
        </FormWrapperPassword>

        {errors.checkPassword && <FormInputValidate htmlFor="checkPassword">{errors.checkPassword.message}</FormInputValidate>}            
      </FormGroup>
      )}

      {typeForm === 'Sign Up' && (    
      <FormGroupCheck>
        <FormInput name="agreement" type="checkbox" ref={register({
          required: "You must be accept the agreement."
        })} id="agreement" />
        <FormLabel className={errors.agreement ? 'error' : ''} htmlFor="agreement">I accept the agreement</FormLabel>
        {errors.agreement && <div><FormInputValidate htmlFor="agreement">{errors.agreement.message}</FormInputValidate></div>}
      </FormGroupCheck>       
      )}

      <FormGroup>
        <FormButton disabled={Object.keys(errors).length > 0} type="submit">{ typeForm }</FormButton>
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