import React, { Component } from 'react'
import Config from '../../Utils/Config';
import './index.scss';
import { FiBarChart2, FiDollarSign, FiGrid, FiPower, FiRss, FiSettings, FiUser } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

export class Sidebar extends Component {  

    render({isActive, handleClick} = this.props) {
        const { t } = this.props;

        const sidebar_menu = [
            {
                id: 1,
                icon: <FiGrid />,
                title: `${t('menu.dashboard')}`,
                url: "/dashboard"
            },
            {
                id: 2,
                icon: <FiBarChart2 />,
                title: `${t('menu.reports')}`,
                url: "/reports"
            },
            {
                id: 3,
                icon: <FiDollarSign />,
                title: `${t('menu.earnings')}`,
                url: "/earnings"
            },
            {
                id: 4,
                icon: <FiUser />,
                title: "Skills",
                url: "/skills"
            },
            {
                id: 4,
                icon: <FiRss />,
                title: `${t('menu.blog')}`,
                url: "/blog"
            },
            {
                id: 4,
                icon: <FiSettings />,
                title: `${t('menu.settings')}`,
                url: "/settings"
            },
            {
                id: 5,
                icon: <FiPower />,
                title: `${t('menu.logout')}`,
                url: "/logout"
            }
        ]
        return (
            <React.Fragment>
            <div className={isActive ? "sidebar open" : "sidebar" }>
                <div className="sidebar-logo mb-4">
                    <img src={Config.logo_white} alt="" />
                </div>

                <ul className="sidebar-menu list-unstyled">
                    {sidebar_menu.map((link, idx) => (
                    <li key={idx}>
                        <NavLink exact to={link.url} activeClassName="active">
                            <span className="d-inline-flex me-2">
                                {link.icon}
                            </span>
                            {link.title}
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </div>
            {isActive? <span className="sidebar-overlay" onClick={handleClick}></span>:null}
            </React.Fragment>
        )
    }
}

export default withTranslation()(Sidebar)