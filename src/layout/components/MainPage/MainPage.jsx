import React, {useState} from 'react';
import BigButton from './utils/BigButton'
import styled from 'styled-components'
import Configuration from '../../../configuration/components/Configuration'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow:1;
`

const MainPage = () =>{

    return (
        <StyledContainer maxWidth="fixed" disableGutters>
          <BigButton color="success">Progresive</BigButton>
          <BigButton>Classic</BigButton>
          <Configuration type={'Progressive'}/>
        </StyledContainer> 
    )
}

export default MainPage;