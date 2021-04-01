import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { SignForm } from '../components/sign/SignForm';
import signUpImage from '../components/sign/img/sign-up.svg';
import { authSelector, clearState } from '../api/AuthSlice';

export const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isSuccess, isError, errorMessage } = useSelector(authSelector);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      history.push('/');
    }

    if (isError) {
      console.log('Произошла ошибка')
      console.log(errorMessage);
      // toast.error(errorMessage);
      // dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return (
    <SignLayout>      
      <SignFormContainer>
        <SignForm typeForm={'Sign Up'} />
        <SignText>
          <span>Already a member?</span> <Link to="login">Sign in</Link>
        </SignText>
      </SignFormContainer>
      
      <SignImgComtainer>
        <SignImg />
      </SignImgComtainer>
    </SignLayout>
  )
}

const SignLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  height: 100vh;
`
const SignFormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const SignImgComtainer = styled.div`
  background: #F5FBFF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SignText = styled.div`
  font-size: 14px;
  color: #707070;
  font-weight: 500;
  & a {
    color: #E4163A;
  }
`

const SignImg = styled.img`
  user-select: none;
`

SignImg.defaultProps = {
  src: signUpImage,
  alt: 'Sign Up'
};