import React, { Component } from 'react'
import Config from '../../Utils/Config'
import { withTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export class HeaderHome extends Component {
    render() {
        const { t } = this.props;

        const header_menu = [
            {
                id: 1,
                title: `${t('menu.home')}`,
                url: `${Config.homePageUrl}`
            },
            {
                id: 2,
                title: `${t('menu.dashboard')}`,
                url: `${Config.dashboardPageUrl}`
            },
            {
                id: 3,
                title: `${t('menu.blog')}`,
                url: `${Config.blogPageUrl}`
            },
            {
                id: 4,
                title: `${t('menu.forum')}`,
                url: "/forum"
            },
            {
                id: 5,
                title: `${t('menu.logout')}`,
                url: `${Config.logoutPageUrl}`
            }
        ]
        return (
            <header className="header pt-3">
                <div className="container">
                    <nav className="navbar">
                        <div className="header__logo">
                            <img src={Config.logo_dark} alt="" />
                        </div>
                        <ul className="header__menu list-unstyled ms-auto">
                            {header_menu.map((link, idx) => (
                            <li key={idx}><NavLink exact to={link.url}>{link.title}</NavLink></li>

                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default withTranslation()(HeaderHome)