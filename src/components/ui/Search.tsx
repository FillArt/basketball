/* eslint-disable react/prop-types */
import React from 'react';
import SearchIcon from '../ui/img/search.svg';
import styled from 'styled-components';

export interface SearchProps {
  name: string;
}

export const Search: React.FC<SearchProps> =({
  name,
}) => {
  return (<SearchInput name={name} type="search" placeholder="Search..." />)
}

const SearchInput = styled.input`
  width: 100%;
  max-width: 364px;
  padding: 10px 12px;
  border: 0.5px solid #D1D1D1;
  border-radius: 4px;
  background: url(${SearchIcon}) no-repeat center right 2%;
  background-color: white;
  font-size: 14px;
  color: #707070;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`