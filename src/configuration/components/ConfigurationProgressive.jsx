import React, { useContext } from 'react'
import { SmallContainer, StyledContainer } from "./ConfigurationSimple"
import {DialogContentText} from  '@mui/material'
import Slider from './utils/Slider'
import Input from './utils/Input'
import Checkbox from './utils/CheckBox'
import MyButton from './utils/Button'

const ConfigurationProgressive = () =>{
    

    return(
        <StyledContainer>
            <SmallContainer>
                <DialogContentText>{"Total time"}</DialogContentText>
                <Input inputField={'total-progressive-time'}/>
            </SmallContainer>
            <SmallContainer>
                <DialogContentText>{"How Productive do you want to be 🔥?"}</DialogContentText>
                <Slider/>
            </SmallContainer>
            <SmallContainer>
                <DialogContentText>{"Auto Start"}</DialogContentText>
                <Checkbox/>
            </SmallContainer>
            <MyButton type={'progressive'} child={'Submit'}/>        </StyledContainer>
    )
}

export default ConfigurationProgressive;