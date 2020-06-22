import 'date-fns';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Order.css'
import  Preloader  from '../common/Preloader';


const Order = (props) => {
    debugger
    const setDate = (startDate) => {
        var orderNumber = 0
        props.onChangeDate(orderNumber = 246, startDate.value)
    }
    return (
        <div className="container">
            <div className="filterBlock">
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <div className="filterDate">
                            <div className="filterDateField">
                                <TextField
                                    onChange={event => {
                                        setDate({ value: event.target.value });
                                    }}
                                    id="date"
                                    label="Start Date"
                                    type="date"
                                    defaultValue="2020-06-15"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className="filterDateField">
                                <TextField
                                    onChange={event => {
                                        setDate({ value: event.target.value });
                                    }}
                                    id="date"
                                    label="End Date"
                                    type="date"
                                    defaultValue="2020-06-15"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>


                        </div>

                    </div>

                </div>
            </div>
            <div className="row">
                <div className="orderBlock">
                    <div className="col">
                    <h1>{props.orders.length}</h1>
                          {props.orders?props.orders.map(order=><div className="order d-flex" key={order._id}>
                          <p> {order.name} </p>
                      </div>) :<Preloader/>}
                    </div>
                </div>

            </div>


        </div>


    )
}


export default Order



