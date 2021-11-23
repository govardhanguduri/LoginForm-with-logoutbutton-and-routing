import {Component} from 'react'
import { Navigate } from 'react-router'
//import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    submitSuccess: false,
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }


  // onSubmitSuccess = (jwt_Token) => {
  //   const { history } = this.props;

  //   Cookies.set("jwt_token", jwt_Token, {
  //     expires: 30,
  //     path: "/",
  //   });
  //   history.redirect("/");
  // };
  onSubmitSuccess = () => {
     this.setState({submitSuccess: true})
     return (
       <redirect to exact path= "/" />
     )
  }
//   componentDidMount() {
//     const user = localStorage.getItem('token') // your saved token in localstorage
//     if (user !== 'undefined') {            // check for not undefined
//         this.props.redirect('/')               // now you can redirect your desired route
//     }
// }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  

  

  submitForm = async event => {
    event.preventDefault()
    const {email, password} = this.state
    const userDetails = {email, password}
    const url = 'https://reqres.in/api/login'
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer QpwL5tke4Pnpja7X4"
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    localStorage.setItem("token",data.token);
    if (response.ok === true) {
      this.onSubmitSuccess();
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderEmailField = () => {
    const {email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          className="username-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </>
    )
  }

  redirect(){
    return(
      <Navigate to ="/" />
    )
  }

  render() {
    const {showSubmitError, errorMsg, submitSuccess} = this.state
    
    return (
    <>
    {submitSuccess ? <Navigate to ="/" /> : <navigate to="/login"/>}
    <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
          src="https://res.cloudinary.com/dlrefvd5m/image/upload/v1637662088/Extended_image_gx7weu.jpg"
          className="login-image"
          alt="website login"
        />
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*Invalid Email & Password {errorMsg}</p>}
        </form>
      </div>
  )
      </>
    )
  }
}

export default (LoginForm)
