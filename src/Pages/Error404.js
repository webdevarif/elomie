import React from 'react'
import { FiHome } from 'react-icons/fi';
import { withTranslation } from 'react-i18next';
import Config from '../Utils/Config';

export class Error404 extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="text-center">
                <h1 className="text-primary fs-5xl">{t('page.error.title')} <span className="text-danger">{t('page.error.404')}</span></h1>
                <p className="text-primary">{t('page.error.paragraph')}</p>
                <a href={Config.homePageUrl} className="btn btn-primary d-inline-flex align-items-center"><FiHome className="me-2" />{t('page.error.go_home')}</a>
            </div>
        )
    }
}

export default withTranslation()(Error404);


