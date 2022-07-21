import React, {useContext} from 'react';
import BigButton from './utils/BigButton'
import styled from 'styled-components'
import Configuration from '../../../configuration/components/Configuration'
import {TypeContext} from '../../../contexts/type.context';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow:1;
`

const MainPage = () =>{
    const {type} = useContext(TypeContext)

    return (
        
          <StyledContainer maxWidth="fixed" disableGutters>
            <BigButton color="success" child={'Progressive'} type={'Progressive'}/>
            <BigButton child={'Classic'} type={'Classic'}/>
            <Configuration type={type}/>
          </StyledContainer> 
    )
}

export default MainPage;