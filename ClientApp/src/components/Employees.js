import React, { Component } from 'react';

export class Employees extends Component {
  static displayName = Employees.name;

  constructor(props) {
    super(props);
    this.state = { employees: [], loading: true };
  }

  componentDidMount() {
    this.populateEmployeeData();
  }

  static renderEmployeeTable(employees) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job Title</th>
            <th>Birth Date</th>
            <th>Hire Date</th>
            <th>Separation Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee =>
              <tr key={employee.Id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.birthDate}</td>
              <td>{employee.hireDate}</td>
              <td>{employee.separationDate}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Employees.renderEmployeeTable(this.state.employees);

    return (
      <div>
        <h1 id="tabelLabel" >Employees</h1>
        <p></p>
        {contents}
      </div>
    );
  }

  async populateEmployeeData() {
    const response = await fetch('employees');
    const data = await response.json();
    this.setState({ employees: data, loading: false });
    }
}
