import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import GraphElements from '../Graph/Graph'

const DashBoard=(props)=>{
    return(
        <>
        {props.isAuth? <div className="container">
        <div className="row d-flex justify-content-center ">
        <h1 style={{color:'#5cb860'}}> You are successfuly login</h1>
        </div>
    </div>:<Redirect to="/"/>}
    {/* <GraphElements/> */}
       </>  
       
    )
}

let MapStateToProps=(state)=>{
    return{
        isAuth:state.auth.isAuth
    }
}
export default connect(MapStateToProps,null)(DashBoard)
