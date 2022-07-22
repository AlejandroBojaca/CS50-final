import React, {useContext} from 'react'
import {Checkbox} from '@mui/material'
import {StatsContext} from '../../../contexts/stats.context';

const MyCheckBox = () =>{
    const {checked, setChecked} = useContext(StatsContext);

    const handleCheck = (e) => {
        setChecked(!checked);
    }
    console.log(checked)
    return (
        <Checkbox
            checked={checked}
            onChange={(e)=>handleCheck(e)}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        > 
        </Checkbox>
    )
}

export default MyCheckBox;