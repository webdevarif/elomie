import React, { Component } from 'react'
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import './index.scss';

export class HeaderDashboard extends Component {
    render() {
        return (
            <header className="header dashboard d-flex justify-content-between align-items-center p-3">
                <FiMenu className="fs-3xl pointer" onClick={this.props.handleClick} />

                <div className="dashboard_right">
                    <FiSearch />
                    <FiUser />
                </div>
            </header>
        )
    }
}

export default HeaderDashboard
