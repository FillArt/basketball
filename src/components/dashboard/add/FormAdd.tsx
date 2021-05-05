/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button'
import { Selector } from '../../ui/Selector'

// import Select from 'react-select'



import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ImgAdd } from './ImgAdd';
import { imgSelector } from '../../../api/ImgSlice';
import { addTeam } from '../../../api/TeamSlice';

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

export interface IProps {
  type: 'team' | 'player'
}
export interface IFormAdd {
  name: string,
  foundationYear: number,
  division: string,
  conference: string,
  imageUrl: string,
}

export const FormAdd: React.FC<IProps> = ({
  type = 'team',
}) => {

  const dispath = useDispatch()
  const { register, errors, handleSubmit } = useForm();
  const { imgSrc } = useSelector(imgSelector);

  const [logoImg, setLogoImg] = useState<string>('');

  useEffect(()=> {
    setLogoImg(imgSrc.replace(/"/g, ''))
  }, [imgSrc])
  

  const onSubmit = (data: IFormAdd) => {
    if(type === 'team') {
      dispath(addTeam({...data, logoImg}))
      console.log({...data, logoImg});
    } else if(type === 'player') {
      console.log('Игрок добавлен!')
    }
    
  }
  

  return (
    <Form method="post" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
      <ImgAdd name="imageUrl" id="teams__img" />
      <FormData> 
        <Input
          label="Name"
          name="name"
          register={register({
            required: true,
          })}
          type="text"
          error={Boolean(errors.name)}
          errorMessage={formErrors[String(errors.name?.type)]}
        />

        {type === 'player' && (
          <>

            <Selector text="test" />
            <Selector test="test" />

            <PlayerParameters>
              <PlayerParametersItem>
                <Input
                  label="Height (cm)"
                  name="height"
                  register={register({
                    required: true,
                  })}
                  type="text"
                  error={Boolean(errors.height)}
                  errorMessage={formErrors[String(errors.height?.type)]}
                />
              </PlayerParametersItem>
              <PlayerParametersItem>
                <Input
                  label="Weight (kg)"
                  name="weight"
                  register={register({
                    required: true,
                  })}
                  type="text"
                  error={Boolean(errors.weight)}
                  errorMessage={formErrors[String(errors.weight?.type)]}
                />
              </PlayerParametersItem>
              <PlayerParametersItem>
                <Input
                  label="Birthday"
                  name="birthday"
                  register={register({
                    required: true,
                  })}
                  type="text"
                  error={Boolean(errors.birthday)}
                  errorMessage={formErrors[String(errors.birthday?.type)]}
                />
              </PlayerParametersItem>
              <PlayerParametersItem>
                <Input
                  label="Number"
                  name="number"
                  register={register({
                    required: true,
                  })}
                  type="text"
                  error={Boolean(errors.number)}
                  errorMessage={formErrors[String(errors.number?.type)]}
                />
              </PlayerParametersItem>
            </PlayerParameters>
          </>
        )}

        {type === 'team' && (
          <>
            <Input
              label="Division"
              name="division" 
              register={register({
                required: true,
              })}
              type="text"
              error={Boolean(errors.division)}
              errorMessage={formErrors[String(errors.division?.type)]}
            />

            <Input
              label="Conference"
              name="conference"
              register={register({
                required: true,
              })}
              type="text"
              error={Boolean(errors.conference)}
              errorMessage={formErrors[String(errors.conference?.type)]}
            />

            <Input
              label="Year of foundation"
              name="foundationYear"
              register={register({
                required: true,
              })}
              type="text"
              error={Boolean(errors.foundationYear)}
              errorMessage={formErrors[String(errors.foundationYear?.type)]}
            />
          </>
        )}
        
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
const PlayerParameters = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap-x: 24px;
`
const PlayerParametersItem = styled.div`
  width: 46%;
`