/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button'



import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ImgAdd } from './ImgAdd';

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


export interface IFormAdd {
  name: string,
  foundationYear: number,
  division: string,
  conference: string,
  imageUrl: string | null
}

export const FormAdd = () => {

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data: IFormAdd) => {
    console.log(data)
  }
  
  return (
    <Form method="post" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>

      <ImgAdd name="imageUrl" id="teams__img" register={register()} />
      <FormData>
        <Input
          label="Name"
          name="newName"
          register={register({
            required: true,
          })}
          type="text"
          error={Boolean(errors.newName)}
          errorMessage={formErrors[String(errors.newName?.type)]}
        />

        <Input
          label="Division"
          name="newDivision"
          register={register({
            required: true,
          })}
          type="text"
          error={Boolean(errors.newDivision)}
          errorMessage={formErrors[String(errors.newDivision?.type)]}
        />

        <Input
          label="Conference"
          name="newConference"
          register={register({
            required: true,
          })}
          type="text"
          error={Boolean(errors.newConference)}
          errorMessage={formErrors[String(errors.newConference?.type)]}
        />

        <Input
          label="Year of foundation"
          name="newYear"
          register={register({
            required: true,
          })}
          type="text"
          error={Boolean(errors.newYear)}
          errorMessage={formErrors[String(errors.newYear?.type)]}
        />
        <ButtonContainer>
            <Button
              cancel
              label="Cancel"
              type="reset" />

            <Button
              label={'Save'}
              disable={Object.keys(errors).length > 0} 
              type={'submit'} /> 
          </ButtonContainer>
      </FormData>
    </Form>
  )
}

const Form = styled.form`
  padding: 48px 73px;
  gap: 40px;
  display: flex;
`
const FormData = styled.div`
  max-width: 366px;
  width: 100%;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
`