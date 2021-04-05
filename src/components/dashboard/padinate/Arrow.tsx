/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import React, { FC } from 'react';
import styled from 'styled-components';

import ArrowIcon from '../img/arrow.svg';

interface IProps {
  type: 'prev' | 'next' | 'break';
}

export const Arrow: FC<IProps> = ({ type }) => (
  <ArrowWrapper className={type === 'prev' ? 'prev' : ''}>
    <img src={ArrowIcon} alt=""/>
  </ArrowWrapper>
);

const ArrowWrapper = styled.div`
  display: flex;
  outline: none;
  & img {
    outline: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  &.prev {
    transform: rotate(180deg);
  }
`