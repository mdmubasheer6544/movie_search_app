import React from "react";
import "./login.css";

const Login = (props) => {
 

  return (
    <div className="loginContainer">
      <div className="login">
        <div className="frmContainer">
          <form action="">
            <div className="loginBtnContainer">
              <button className="login__signin" onClick={()=>{props.history.push('/home') }}>Wellcome to movies app </button>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
