import React,{Component} from 'react';
import { login} from '../services/api';

class LoginPage extends Component{
    loginHandler = async (e) => {
        e.preventDefault();
        const {
          email: { value: email },
          password: { value: password },
        } = e.target.elements;
        const res = await login({ email, password});
        localStorage.setItem('token',res.token);
        localStorage.setItem('userid',res.user._id)
        console.log(res);
      }
    render(){
        return(
            <div className="form">
         
          <form  onSubmit={this.loginHandler} >
              <label>Name</label>
              <input type="text" name="username" />
              <label>Password</label>
              <input type="password" name="password" />
              <button className="btn btn-register btn-fluid" type="submit" >
                Sign In
              </button>
          </form> 
            </div>
        )
    }
}
export default LoginPage;
