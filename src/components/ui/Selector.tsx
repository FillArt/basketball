/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { buildStyleSelect } from '../../themes/selectorStyle';


export interface ISelectorProps {
  test?: string,
  text?: string,
}

export const Selector: React.FC<ISelectorProps> = ({text}) => {
  return(
    <SelectorContainer>
      {text && <TextLabel>{text}</TextLabel>}
      <Select styles={buildStyleSelect()} id="test" className="myclass" />
    </SelectorContainer>
  )
}
const SelectorContainer = styled.div`
  margin: 0 0 24px 0;
  position: relative;
`
const TextLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 14px;
  color: #707070;
  margin: 0 0 8px 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
`