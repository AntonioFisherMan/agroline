import React from 'react'
import Order from './Order'
import { connect } from 'react-redux'
import {GetOrder} from '../../redux/OrderReducer'
import { compose } from 'redux'
import {SiteMessageData} from '../../hoc/SiteMessageData'


class OrderContainer extends React.Component{
    onChangeDate=(orderNumber,startDate)=>{
        this.props.GetOrder(orderNumber,startDate)
    }
    render(){
        return(
            <Order {...this.props} onChangeDate={this.onChangeDate}/>
        )
    }
}

let MapStateToProps=(state)=>{
    return{
        orders:state.orders.orders
    }
}

export default compose(
    SiteMessageData,
    connect(MapStateToProps,{GetOrder})
)(OrderContainer)
