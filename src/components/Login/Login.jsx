import React from 'react'
import { ReduxLoginForm}  from './LoginForm'
import {login} from '../../redux/AuthReducer'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { SiteMessageData } from '../../hoc/SiteMessageData'
import { Redirect } from 'react-router-dom'





class Login extends React.Component{
    onSubmit = (formData) => {
       this.props.login(formData.name, formData.password,formData.internal)
    }
 render(){
    if (this.props.isAuth) {
        return <Redirect to="/dashboard" />
    }
     return(
      <>
       <ReduxLoginForm onSubmit={this.onSubmit} errors={this.props.errors} />
     
      </>
          )
 }
}

let mapStateToProps=(state)=>{
    return{
        isAuth:state.auth.isAuth
    }
}
export default compose(
    SiteMessageData,
    connect(mapStateToProps,{login})
)(Login)

