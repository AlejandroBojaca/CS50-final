import React from 'react'
import {Button} from '@mui/material'
import styled from 'styled-components'

import "./button-styles.css"

const StyledButton = styled(Button)`
  z-index: 1;
  width: 50%;
  height: 100vh;
  border-radius:0;
`

const BigButton = ({color}) =>{
    return (
        <StyledButton color={color} variant="contained" className="no-border-radius-radius" style={{borderRadius:0}}/>
    )
}

export default BigButton;