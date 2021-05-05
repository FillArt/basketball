/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';

export interface SidebarNavProps {
  name: string;
  img: string;
  link?: boolean;
  button?: boolean;
  logout?: () => void;
  isActive?: boolean;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  name,
  img,
  logout,
  link = false,
  button = false,
  isActive = false
}) => {
  return (
    <SidebarItem className={ isActive ? 'current' : ''} onClick={logout}>
      <img className={link ? 'link' : '' } src={img} alt={name} />
      <span className={button ? 'button-text' : ''}>{name}</span>
    </SidebarItem>
  )  
}


const SidebarItem = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  margin: 0 0 40px 0;
  transition: 0.3s;
  &.current {
    & img {
      filter: none !important;
      opacity: 1 !important;
    }
    & span {
      color: ${({theme}) => theme.colors.red};
    }
  }
  &:hover {
    & img {
      &.link {
        filter: none;
        opacity: 1;
      }
    }
  }
  &:last-child {
    margin: 0;
  }
  & img {
    transition: 0.3s;
    margin: 0 0 8px 0;
    &.link {
      filter: grayscale(1);
      opacity: 0.5;
    }
  }

  & span {
    font-size: 12px;
    &.button-text {
      color: ${({theme}) => theme.colors.lightestRed};
    }
  }
`  