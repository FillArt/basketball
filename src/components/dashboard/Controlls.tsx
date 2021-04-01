import React from 'react';
import styled from 'styled-components';


export const Controlls = () => {
  return (
    <ControllsContainer>
      <ControllsPaginate>
        <span>Paginate</span>
      </ControllsPaginate>
      <ControllsSelect>
        <span>Select</span>
      </ControllsSelect>
    </ControllsContainer>
  )
}


const ControllsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const ControllsPaginate = styled.div``
const ControllsSelect = styled.div``
