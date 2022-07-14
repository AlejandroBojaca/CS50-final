import {Button, Container} from '@mui/material'
import styled from 'styled-components'
import "./button-styles.css"

const StyledButton = styled(Button)`
  width: 50vw;
  height: 100vh;
  border-radius:0;
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow:1;
`

function App() {
  return (
    <div className="App">
        <StyledContainer maxWidth="fixed" disableGutters>
          <StyledButton variant="contained" className="no-border-radius" style={{borderRadius:0}}>Classic</StyledButton>
          <StyledButton variant="contained" color="success" className="no-border-radius-radius" style={{borderRadius:0}}>Progresive</StyledButton>
        </StyledContainer>      
      
    </div>
  );
}

export default App;
