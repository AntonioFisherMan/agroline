

import React from 'react'


import { reduxForm, Field, } from 'redux-form'
import { required } from '../common/validators'
import { Input } from '../FormsElements/Input/Input'
import ErrorMessage from '../SiteMessage/ErrorMessage'
import './Login.css'

import { Password } from '../FormsElements/Input/Password'




const LoginForm = (props) => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="menu">

                    </div>
                </div>
            </div>

            <div className="mainBlock">
             
                    <div className="formBlock">
                        <div className="container">
                        <div className="row d-flex justify-content-center">
                            <img className="logo" src="images/svg/logo.svg" alt="" />
                        </div>
                        </div>
                      


                        <form className="form" onSubmit={props.handleSubmit}>
                            <h4 className="headline">כניסה למערכת</h4>
                            <div className="inputs">
                                <Field component={Input} dir="rtl" validate={[required]} label='משתמש' name="name" />

                                <Field component={Password} dir="rtl" validate={[required]} name="password" label='סיסמה' />



                            </div>

                            <div className="switchBlock">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 text-left">
                                            <div class="center">
                                                <Field name="internal" type="checkbox" component="input" />
                                            </div>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>משתמש פנימי</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="btnBlock">
                                <button dir="rtl" className="btnLogin">כניסה</button>
                            </div>

                            <div className="text">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 text-left">
                                            <p className="orange">לשיר למעלה</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p>אין לך חשבון</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {props.errors && props.errors.id === 'LOGIN_FAIL' ? <ErrorMessage message={props.errors.message} /> : null}
                        </form>
                    </div>

                </div>

            

        </>
    )
}

export const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)


