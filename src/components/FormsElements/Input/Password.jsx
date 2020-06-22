import React from 'react'
import './Input.css'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField';

export const Password = ({ input, label, meta: { touched, invalid, error }, ...props }) => {
    const [hidden, setHidden]=useState(true)
    const [password, setPassword]=useState('')
    const toggle=()=>{
        setHidden(!hidden)
    }
    const  handlePasswordChange=(e) =>{
      setPassword( e.target.value )
    }
    return (
      <div className="password">
  <div className="formControl" style={{position:"relative"}}>
             {hidden?<img onClick={toggle}style={{position:"absolute",top:"11px",left:"15px",zIndex:'2'}}src="images/svg/eyeGrey.svg" alt=""/>:<img onClick={toggle}style={{position:"absolute",top:"11px",left:"15px",zIndex:'2'}}src="images/svg/eyeBlack.svg" alt=""/>} 
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
               
                 onChange={handlePasswordChange} 
                 value={password} 
                 type={hidden ? "password" : "text"}
            />
         
        </div>
      </div>
           
    )
}