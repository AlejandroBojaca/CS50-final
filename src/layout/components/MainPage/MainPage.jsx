import React, {useContext} from 'react';
import BigButton from './utils/BigButton'
import styled from 'styled-components'
import Configuration from '../../../configuration/components/Configuration'
import Counter from '../Counter/Counter';
import {TypeContext} from '../../../contexts/type.context';
import {CounterContext} from '../../../contexts/counter.context';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow:1;
`

const MainPage = () =>{
    const {type} = useContext(TypeContext);
    const {counterActive} = useContext(CounterContext);

    return (
          <StyledContainer maxWidth="fixed" disableGutters>
            {counterActive ?
            <Counter/> :
            <>
              <BigButton color="success" child={'Progressive'} type={'Progressive'}/>
              <BigButton child={'Normal'} type={'Classic'}/>
              <Configuration type={type}/>
            </>
            }
          </StyledContainer> 
          )
}

export default MainPage;