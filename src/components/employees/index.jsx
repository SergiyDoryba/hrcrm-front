import React, { Component } from 'react'

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentWillMount(){
        fetch('http://localhost:3000/api/v1/employees')
            .then(res => res.json())
            .then(data => this.setState({ employees: data.employees }));
    }

    render() {
        const employeeItems = this.state.employees.map(employee => (
            <li className="nav-item" key={employee.id}>
                <a className="nav-link" href="#">{employee.name}</a>
            </li>
        ));
        return (<ul className="nav flex-column">
            {employeeItems}
        </ul>);
    }
}

export default Employees;