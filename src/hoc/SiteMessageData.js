import React from 'react';
import { connect } from 'react-redux';
import {clearErrors,clearSuccess} from '../redux/SiteMessageReducer'


let mapStateToProps=(state)=>{
    return{
     errors:state.messages.errorsMessage
    }
}

 export const SiteMessageData=(Component)=>{
    class RedirectComponent extends React.Component {
         componentWillMount(){
            this.props.clearErrors();
            this.props.clearSuccess();
         }
          render(){
          return(
            <Component {...this.props}/>
          )
        } 
    }  
    let Connect=connect(mapStateToProps,{clearSuccess,clearErrors})(RedirectComponent)
    return Connect
}

