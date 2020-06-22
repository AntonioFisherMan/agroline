import React from 'react'
import preloader from '../../assets/loader.gif'


const Preloader=()=>{
    return(
        <div className="row d-flex justify-content-center">
        <img src={preloader} alt="Preloader" />
               </div>
              
    )
}

export default Preloader