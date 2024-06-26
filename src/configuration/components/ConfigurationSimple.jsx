import React from 'react'
import {DialogContentText} from  '@mui/material'
import Input from './utils/Input'
import styled from 'styled-components'
import MyButton from './utils/Button'

export const StyledContainer = styled.div`
    padding: 2rem 3rem 3rem 3rem;
`

export const SmallContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:1rem;
    min-height: 5rem;
`

const ConfigurationSimple = () => {
    return (
        <StyledContainer>
            <SmallContainer>
                <DialogContentText>{"Working Time"}</DialogContentText>
                <Input inputField={'time-per-session'} timeType={'Min'}/>
            </SmallContainer>
            <SmallContainer>
                <DialogContentText>{"Rest Time"}</DialogContentText>
                <Input inputField={'rest-time'} timeType={'Min'}/>
            </SmallContainer>
            <SmallContainer>
                <DialogContentText>{"Repetitions"}</DialogContentText>
                <Input inputField={'repetitions'} timeType={'Reps'}/>
            </SmallContainer>
            {/* <SmallContainer>
                <DialogContentText>{"Auto Start"}</DialogContentText>
                <Checkbox/>
            </SmallContainer> */}
            <MyButton type={'classic'} child={'Submit'}/>
        </StyledContainer>
    )
}

export default ConfigurationSimple;