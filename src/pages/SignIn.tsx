import React, { useEffect } from 'react';
import { SignForm } from '../components/sign/SignForm';
import styled from 'styled-components';
import signInImage from '../static/img/sign/sign_in.svg';
import { Link, useHistory } from 'react-router-dom';
import { authSelector, clearState } from '../api/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';


export const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(authSelector);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      if(errorMessage === 401) {
        toast('User with the specified username / password was not found.',  {
          style: {
            maxWidth: '500px',
            background: '#FF5761',
            color: 'white',
            borderRadius: '4px',
            boxShadow: 'none'
          }
        });
      }
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      history.push('/');
    }
  }, [isError, isSuccess]);
  
  return (
    <SignLayout>      
      <SignFormContainer>
        <SignForm typeForm={'Sign In'} />
        <SignText>
          <span>Not a member yet?</span> <Link to="signup"> Sign up </Link>
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
  src: signInImage,
  alt: 'Sign In'
};


