import React, { Component } from 'react'
import TopNav from './navigation/TopNav.jsx'
import LeftNav from './navigation/LeftNav.jsx'
import DepartmentForm from './departments/form.jsx'
// import 'public/assets/application.css'
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <TopNav/>
                <div className="container-fluid">
                    <div className="row">
                        <LeftNav/>
                        <div className="col-md-10" style={{padding: '48px 0 0'}}>
                            <DepartmentForm/>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default App;
