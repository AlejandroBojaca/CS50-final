import {Button} from '@mui/material'
import styled from 'styled-components'

import "./button-styles.css"

const StyledButton = styled(Button)`
  z-index: 1;
  width: 50%;
  height: 100vh;
  border-radius:0;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow:1;
`

const MainPage = () =>{

    return (
        <StyledContainer maxWidth="fixed" disableGutters>
          <StyledButton variant="contained" className="no-border-radius" style={{borderRadius:0}}>Classic</StyledButton>
          <StyledButton variant="contained" color="success" className="no-border-radius-radius" style={{borderRadius:0}}>Progresive</StyledButton>
        </StyledContainer> 
    )
}

export default MainPage;