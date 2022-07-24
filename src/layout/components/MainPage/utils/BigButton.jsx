import React, {useContext} from 'react'
import {Button} from '@mui/material'
import styled from 'styled-components'
import {TypeContext} from '../../../../contexts/type.context';

import "./button-styles.css"

const StyledButton = styled(Button)`
  z-index: 1;
  width: 50%;
  height: 100vh;
  border-radius:0;
`

const BigButton = ({color, child, type}) =>{
    const {setType, setOpen} = useContext(TypeContext);

    const handleClick = () => {
      setType(type);
      setOpen(true);
    }
    return (
        <StyledButton 
          color={color} 
          variant="contained" 
          className="no-border-radius-radius" 
          style={{borderRadius:0, fontFamily: 'pacifico', fontWeight:100}}
          onClick={handleClick}>
          {child}
        </StyledButton>
    )
}

export default BigButton;