import React, { Component } from 'react';
import './App.css';
import '../../components/Button/button.css';
import '../../components/Textbox/textbox.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="sub_container">
          <div class="container_content">
            <div class="container_content1">
                  About Us
            </div>
            <div class="container_content2">
              <p>Lawshram is a lawyer
                  - to - lawyer (B2B)
                  international technology-driven platform with
                  time-tested components that enables lawyers
                  to work form their optimal environments and in
                  their own timelines while maintaining the
                  highest of professional standards and services
                      to their clients.?
              </p>


                 Queries ?<br/><br/>
                 <input type="button"  class="contact_us" id="" value="Contact Us"/>
              </div>
            </div>
            <div class = "container_content3">
              <div class="welcome"> Welcome to The Lawshram Platform (TLP)</div>
                <div class="login">
                  <label for="email">EMAIL</label>
                  <input class = "email" type="text"/>
                  <label for="password">PASSWORD</label>
                  <input class="password" type="password" id="myInput"/>
              <br/><input type="checkbox" onclick =""/>show password
                </div>
                <div class="log_but"><br/>
                  <a href="" class="forgot_password" >Forgot Password ?</a>
                  <input class="login_btn" type="button" value="Login"/>
              </div>
            </div>
          </div>.
          <div class="footer">powered by <b>LAWSHRAM</b></div>
      </div>

    );
  }
}
export default App;
