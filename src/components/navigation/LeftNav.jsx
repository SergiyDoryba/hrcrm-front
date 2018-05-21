import React, { Component } from 'react'
import Depatments from '../departments/index.jsx'
// import Employees from '../employees/index.jsx'

class LeftNav extends Component {
    componentWillMount(){
        console.log('mount TopNav');
    }

    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar" style={{padding: '48px 0 0'}}>
              <div className="sidebar-sticky">
                 <Depatments/>
              </div>
            </nav>
        );
    }
}

export default LeftNav;