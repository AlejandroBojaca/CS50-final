import React from 'react'
import styled from 'styled-components'

const Navigation = styled.div`
  z-index: 3;
  position: fixed;
  text-align: center;
  top: 5%;
  font-family: 'pacifico', sans-serif;
  font-size: 25px;
  margin-right: 15px;
`

const Nav = () => {
    return (
        <Navigation style={{width:"100%"}}>
                <h1 style={{color:'white', fontWeight: 100}}>Progresive Pomodoro</h1>
        </Navigation>
    )
}

export default Nav;