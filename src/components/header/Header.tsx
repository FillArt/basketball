/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import Logo from './img/logo.svg';
import AvatarNull from './img/profile.svg';

interface Header  {
  name: string | null;
  avatar: string | null;
}

export const Header: React.FC<Header> = ({
  name,
  avatar,
}) => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <img src={Logo} alt="Logo"/>
      </HeaderLogo>
      <HeaderUser>
        <span>{ name }</span>
        <img src={AvatarNull} alt="avatar"/>
      </HeaderUser>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 16px 50px;
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLogo = styled.a``
const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  & span {
    margin: 0 19px 0 0;
    font-size: 14px;
    font-weight: 500;
  }
  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
` 