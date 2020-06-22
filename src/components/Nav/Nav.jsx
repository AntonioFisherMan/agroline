import React from 'react'
import './Nav.css'
import { connect } from 'react-redux'
import { logout } from '../../redux/AuthReducer'
import { Link } from 'react-router-dom'

const Nav = (props) => {

    return (
        <>
            <div class="nav">
                <div className="container"> 
                    <div className="row">
                        <div className="col-2 backToPage">
                            <img src="images/svg/back.svg" alt="" />
                        </div>
                        <div className="col-10">
                            <div className="d-flex align-items-center">
                                <input dir="rtl"type="search" className="search" placeholder="הזמנות לקוח"/>
                                <span class="icon"><img src="images/svg/search.svg" alt="" /></span>
                  
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
        // <div className="nav d-flex ">
        //     <div className="icon">
        //     {props.isAuth? <div onClick={props.logout}><i  className="fas fa-sign-out-alt"></i></div>:null}
        //     </div>
        //     <div>
        //     <Link style={{color:"pink",marginRight:'20px'}}to="/">Main</Link>
        //     <Link style={{color:"pink"}}to="/order">Orders</Link>
        //     </div>

        //     <div className="logo">
        //     <p>AGROLINE</p>
        //     </div>


        //  </div>
    )
}

let MapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(MapStateToProps, { logout })(Nav)
