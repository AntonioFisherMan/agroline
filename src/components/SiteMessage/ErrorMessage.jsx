import React from 'react'
import { Alert } from 'reactstrap'
import './ErrorMessage.css'

const ErrorMessage = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="errorMessage">
                        {props.message ? <Alert color="danger">{props.message}</Alert> : null}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ErrorMessage