/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { imgSelector, addImg } from '../../../api/ImgSlice';

import Add from '../img/addphoto.svg';

export interface ImgAddProps {
  name: string;
  id: string;
  register?: (field: HTMLInputElement) => void;
  test?: string;
}

export const ImgAdd: React.FC<ImgAddProps> = ({
  name,
  id,
  register,
  test,
}) => {

  const dispath = useDispatch();
  const { imgSrc } = useSelector(imgSelector);


  const loadImage = (e: any) => {
    const imgData = e.target.files[0];
    const formData = new FormData();

    formData.set('file', imgData);
    // console.log(formData);
    dispath(addImg(formData))
  }

  console.log(imgSrc);


  return (
    <Uploading>
      <input onChange={loadImage} type="file" name={name} ref={register} id={id} />
      <FakeUploading htmlFor={id}>
        <UploadingButton>
          <img src={Add} alt=""/>
        </UploadingButton>
      </FakeUploading>
    </Uploading>
  )
}

const Uploading = styled.div`
  width: 50%;
  & input {
    display: none;
  }
`
const FakeUploading = styled.label`
background: url(${(props :any) => props.test}) 0 0 no-repeat;

`
const UploadingButton = styled.div`
  cursor: pointer;
  background-color: #9C9C9C;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  width: 100%;
  height: 100%; 
  opacity: 50%;
  max-width: 336px;
  max-height: 261px;
`