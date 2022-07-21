import React, {useContext} from 'react'
import {Dialog, DialogTitle} from  '@mui/material'
import ConfigurationSimple from './ConfigurationSimple'
import ConfigurationProgressive from './ConfigurationProgressive'
import {TypeContext} from '../../contexts/type.context'

const Configuration = ({type}) =>{
    const {open, setOpen} = useContext(TypeContext);

    return(
        <Dialog open={open} maxWidth='lg' fullWidth onClose={()=>setOpen(false)}>
            <DialogTitle>{"Configuration "}{type}</DialogTitle>
            {type === 'Progressive' ? <ConfigurationProgressive/> : <ConfigurationSimple/>}
        </Dialog>
    )
}

export default Configuration;