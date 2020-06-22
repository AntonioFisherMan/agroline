import { testAPI } from "../api/api"
import { returnErrors } from "./SiteMessageReducer"
var XMLParser = require('react-xml-parser');

const GET_ORDER="GET_ORDER"

let initialState={
    orders:[]
}



const OrderReducer=(state=initialState,action)=>{
    switch(action.type){
       case GET_ORDER:
           return{...state,orders:[...action.payload.children]}
    default: return state
    }
}


//ACTION
const OrderAction=(payload)=>({type:GET_ORDER,payload})


//THUNK
export const GetOrder = (orderNumber,startDate) => async (dispatch,getState) => {
    testAPI.getOrder(orderNumber,startDate,getState().auth.token).then(res => { 
        var payload = new XMLParser().parseFromString(res.data)
        dispatch(OrderAction(payload))
    }).catch(err=>{
        dispatch(returnErrors(err.response.data.message,err.response.status,"ORDER_FAIL"))
    })
  }


export default OrderReducer