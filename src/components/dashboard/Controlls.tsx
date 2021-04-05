import React from 'react';
import styled from 'styled-components';

import ReactPaginate from 'react-paginate';
import paginateStyle from '../../themes/paginate.module.scss';
import { Arrow } from './padinate/Arrow';


export const Controlls = () => {
  return (
    <ControllsContainer>
      <ControllsPaginate>
        <ReactPaginate 
          pageCount={3}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}

          previousLabel={<Arrow type="prev" />}
          nextLabel={<Arrow type="next" />}
          breakLabel={<Arrow type="break" />}

          pageClassName={paginateStyle.itemPagination}
          pageLinkClassName={paginateStyle.itemLinkPagination}
          containerClassName={paginateStyle.paginationContainer}
          activeClassName={paginateStyle.activeClassName}  
        />
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
