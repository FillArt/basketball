import React from 'react';
import { SignForm } from '../components/sign/SignForm';
import styled from 'styled-components';
import signInImage from '../static/img/sign/sign_in.svg';
import { Link } from 'react-router-dom';


export const SignIn = () => {
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

