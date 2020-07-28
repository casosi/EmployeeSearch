import React, { Component } from 'react';
import logo from './EXLLogo.jpg';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <img src={logo} alt="EXL Services" width="150" height="150" />
            <br></br>
            <h1>Welcome to Employee Search</h1>
            <br></br>
            <p>This simple, single-page application was built with:</p>
            <ul>
                <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            </ul>
            <br></br>
            <p>Simply click <b>Employees</b> in the top, right navigation menu to see a list of Employees.</p>
            <br></br>
            <p>Information about <a href='https://carrieasosi.wixsite.com/carrieasosi' target="_blank">Carrie Asosi</a>.</p>
        </div>
    );
  }
}