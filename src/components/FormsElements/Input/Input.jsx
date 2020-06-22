import React from 'react'
import './Input.css'

import TextField from '@material-ui/core/TextField';
export const Input = ({ input, label, meta: { touched, invalid, error }, ...props }) => {
    return (
        <div className="formControl">
            <TextField
                dir="rtl"
                className={!error? "success" : ""}
                error={touched && invalid&&error}
                helperText={invalid&&touched && error}
                label={label}
                {...input}
                {...props}
                id={"outlined-basic"}
                variant={"outlined"}
               
            />
         
        </div>
    )
}