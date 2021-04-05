/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import { Button } from '../ui/Button';
import { Search } from '../ui/Search';

export interface ActionsProps {
  pathname: string;
}


export const Actions: React.FC<ActionsProps> = ({
  pathname,
}) => {
  return (
    <Action>
      <Search name="search" />
      <Button label="Add" type="button" add link linkPath={pathname} />
    </Action>
  )
}

const Action = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 32px 0;
  max-height: 40px;
`