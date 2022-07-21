import React from 'react'
import { SmallContainer, StyledContainer } from "./ConfigurationSimple"
import {Dialog, Input, DialogContentText, DialogTitle, Slider, Checkbox} from  '@mui/material'

const ConfigurationProgressive = () =>{
    return(
        <StyledContainer>
            <SmallContainer>
                <DialogContentText>{"Total time (Minutes)"}</DialogContentText>
                <Input/>
            </SmallContainer>
            <SmallContainer>
                <DialogContentText>{"How Productive do you want to be 🔥?"}</DialogContentText>
                <Slider/>
            </SmallContainer>
            <SmallContainer>
                <DialogContentText>{"Auto Start"}</DialogContentText>
                <Checkbox/>
            </SmallContainer>
        </StyledContainer>
    )
}

export default ConfigurationProgressive;