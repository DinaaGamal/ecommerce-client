import React,{Component} from 'react';
import { register} from '../services/api';

class RigesterPage extends Component{
    registerHandler = async (e) => {
        e.preventDefault();
        const {
          username: { value: username },
          password: { value: password },
          email: { value: email }
        } = e.target.elements;
        console.log(username, password);
        const res = await register({ username, password, email });
        alert('you are registers');
      }
    render(){
        return(
            <div className="form">
          
              <form  onSubmit={this.registerHandler} >
              <label>Name</label>
              <input type="text" name="username" />
              <label>Email</label>
              <input type="email" name="email" />
              <label>Password</label>
              <input type="password" name="password" />
              <button className="btn btn-register btn-fluid" type="submit" >
                Register
              </button>
          </form> 
            </div>
        )
    }
}
export default RigesterPage;
