import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import {theme } from '../../themes/theme'

import { Button } from '../ui/Button'
import { Input } from '../ui/Input';
import { Checkbox } from '../ui/Checkbox';

import { signupUser, loginUser } from '../../api/AuthSlice';
import {useHistory} from "react-router";
import {routePaths} from "../../helpers/constants/routePath";

interface IProps {
  typeForm: string;
}

interface IFormData {
  UserName: string;
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
  const history = useHistory();
  const { register, errors, handleSubmit, watch } = useForm<IFormData>();
  const dispatch = useDispatch();

  const password = useRef({});
  password.current = watch("password", "");
  
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenPasswordConfirm, setHiddenPasswordConfirm] = useState(true); 

  const changeRouteSucces = () => {
      console.log('ИРЕКТ!!!!!')
      history.replace(routePaths.teams);
  }

  const onSubmit = (data: IFormData) => {
    if(typeForm === 'Sign Up') { 
      dispatch(signupUser({data, redirect: changeRouteSucces }));
    } else {
      dispatch(loginUser({data, redirect: changeRouteSucces }));
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
          errorMessage={formErrors[String(errors.agreement?.type)]}
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
  color: ${({theme}) => theme.colors.blue};
  font-weight: 400;

  margin: 0 0 32px;
`

const FormGroup = styled.div`
  display: flex;
  margin: 0 0 24px 0;
  flex-direction: column;
`