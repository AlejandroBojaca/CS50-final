import React from 'react'
import styled from 'styled-components'

const Navigation = styled.div`
  z-index: 3;
  position: fixed;
  text-align: center;
  top: 5%;
`

const Nav = () => {
    return (
        <Navigation style={{width:"100%"}}>
            <h1 style={{color:'white'}}>Progresive Pomodoro</h1>
        </Navigation>
    )
}

export default Nav;