import React, { Component } from 'react'
import {Badge} from 'react-bootstrap'
class Departments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: []
        }
    }

    componentWillMount(){
        fetch('http://localhost:3000/api/v1/departments')
            .then(res => res.json())
            .then(data => this.setState({ departments: data.departments }));
    }

    render() {
        const departmentItems = this.state.departments.map(department => (
            <li className="nav-item" key={department.id}>
                <a className="nav-link" href="#">
                    {department.name}
                    <Badge>[{department.count_of_employees}]: employees</Badge>
                </a>
            </li>
        ));
        return (<ul className="nav flex-column">
            {departmentItems}
        </ul>);
    }
}

export default Departments;