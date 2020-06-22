import React from 'react'
import Nav from '../Nav/Nav'
import './Orders.css'







const Orders = () => {

    return (
        <div className="body">
            <Nav />
            <div className="container">
            <div className=" row dateBlock">
                <div className="col-5">
                    <div className="startDate">
                        <label htmlFor="startDate">עד תאריך</label>
                        <input type="date"  name="startDate" style={{color:' #1A1207',opacity: 0.6}}id="startDate" />
                    </div>

                </div>
                <div className="col-2 br">
                   <img src="images/svg/br.svg" alt=""/>
                </div>
                <div className="col-5">
                    <div className="endDate">
                        <label htmlFor="endDate">עד תאריך</label>
                        <input type="date"name="endDate" style={{color:' #1A1207',opacity: 0.6}}id="endDate" />
                    </div>
                </div>
            </div>
            </div>
         
            <div className="order">
                <div className="container">
                    <div className="row iconsBlock">
                        <div className="col-6 d-flex justify-content-end">
                            <img src="images/svg/Vector.svg" alt="" />
                        </div>
                        <div className="col-6 text-right">
                            <div className="icons d-flex justify-content-end">
                                <img src="images/svg/order2.svg" alt="" />
                                <img src="images/svg/order3.svg" alt="" />
                                <img src="images/svg/order1.svg" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <div className="price">
                                <div className="buttonBlock">
                                    <button>פתוחה</button>
                                </div>

                                <p>325</p>
                            </div>
                            <div className="name">
                                <p >GreenlineGreenline</p>
                            </div>

                            <p className="date">24.06.2020</p>

                        </div>
                        <div className="col-3">
                            <div className="ordersText " >
                                <p>להזמין</p>
                                <p>לקוח</p>
                                <p> ךיראת</p>
                            </div>

                        </div>
                        <p></p>
                    </div>

                </div>

            </div>
            <div className="order">
                <div className="container">
                    <div className="row iconsBlock">
                        <div className="col-6 d-flex justify-content-end">
                            <img src="images/svg/Vector.svg" alt="" />
                        </div>
                        <div className="col-6 text-right">
                            <div className="icons d-flex justify-content-end">
                                <img src="images/svg/order2.svg" alt="" />
                                <img src="images/svg/order3.svg" alt="" />
                                <img src="images/svg/order1.svg" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <div className="price">
                                <div className="buttonBlock">
                                    <button>פתוחה</button>
                                </div>

                                <p>325</p>
                            </div>
                            <div className="name">
                                <p >GreenlineGreenline</p>
                            </div>

                            <p className="date">24.06.2020</p>

                        </div>
                        <div className="col-3">
                            <div className="ordersText " >
                                <p>להזמין</p>
                                <p>לקוח</p>
                                <p> ךיראת</p>
                            </div>

                        </div>
                        <p></p>
                    </div>

                </div>

            </div>
            <div className="order">
                <div className="container">
                    <div className="row iconsBlock">
                        <div className="col-6 d-flex justify-content-end">
                            <img src="images/svg/Vector.svg" alt="" />
                        </div>
                        <div className="col-6 text-right">
                            <div className="icons d-flex justify-content-end">
                                <img src="images/svg/order2.svg" alt="" />
                                <img src="images/svg/order3.svg" alt="" />
                                <img src="images/svg/order1.svg" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <div className="price">
                                <div className="buttonBlock">
                                    <button>פתוחה</button>
                                </div>

                                <p>325</p>
                            </div>
                            <div className="name">
                                <p >GreenlineGreenline</p>
                            </div>

                            <p className="date">24.06.2020</p>

                        </div>
                        <div className="col-3">
                            <div className="ordersText " >
                                <p>להזמין</p>
                                <p>לקוח</p>
                                <p> ךיראת</p>
                            </div>

                        </div>
                        <p></p>
                    </div>

                </div>

            </div>
            
    <div className="addOrder">
        <img src="images/svg/absoluteIcon.svg" alt=""/>
    </div>
        </div>
    )
}


export default Orders