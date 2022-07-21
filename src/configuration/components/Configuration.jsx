import React from 'react'
import {Dialog, Input, DialogContentText, DialogTitle, Slider, Checkbox} from  '@mui/material'
import ConfigurationSimple from './ConfigurationSimple'
import ConfigurationProgressive from './ConfigurationProgressive'
import styled from 'styled-components'

const Configuration = ({type}) =>{
    console.log(type)
    return(
        <Dialog open maxWidth='lg' fullWidth onClose={()=> console.log('Closing')}>
            <DialogTitle>{"Configuration "}{type}</DialogTitle>
            {type === 'Progressive' ? <ConfigurationProgressive/> : <ConfigurationSimple/>}
        </Dialog>
    )
}

export default Configuration;