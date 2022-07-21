import React from 'react'
import {Dialog, Input, DialogContentText, DialogTitle, Slider, Checkbox} from  '@mui/material'
import styled from 'styled-components'

export const StyledContainer = styled.div`
    padding: 2rem;
`

export const SmallContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:1rem;
`

const ConfigurationSimple = () => {
    return (
        <StyledContainer>
            <SmallContainer>
                <DialogContentText>{"Pomodoro Time per session (Minutes)"}</DialogContentText>
                <Input/>
            </SmallContainer>
            <SmallContainer>
                <DialogContentText>{"Rest time (Minutes)"}</DialogContentText>
                <Input/>
            </SmallContainer>
            <SmallContainer>
                <DialogContentText>{"Auto Start"}</DialogContentText>
                <Checkbox/>
            </SmallContainer>
        </StyledContainer>
    )
}

export default ConfigurationSimple;