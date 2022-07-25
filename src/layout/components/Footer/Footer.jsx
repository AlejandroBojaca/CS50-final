import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  z-index: 3;
  position: fixed;
  text-align: right;
  bottom: 5%;
  font-family: 'pacifico', sans-serif;
  font-size: 20px;
  margin-right: 15px;
`

const Footer = () => {
    return (
        <StyledFooter style={{width:"100%"}}>
                <h3 style={{color:'white', fontWeight: 100, margin:'1rem 2rem'}}>Made for CS50💟</h3>
                <h3 style={{color:'white', fontWeight: 100, margin:'1rem 2rem'}}>David Bojaca</h3>
        </StyledFooter>
    )
}

export default Footer;