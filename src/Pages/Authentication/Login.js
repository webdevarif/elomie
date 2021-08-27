import React, { Component } from 'react'
import Config from '../../Utils/Config';
import { withTranslation } from 'react-i18next';
import './index.scss';

export class Login extends Component {
    
    render() {
        const { t } = this.props;

        return (
            <div>
                <div className="headbar">
                    <img src={Config.logoSm} alt={Config.siteTitle} className="s-50" />

                    <h3 className="mb-1">{t('page.login.title')}</h3>
                    <p className="fs-xs">{t('page.login.paragraph')}</p>
                </div>
                <form action="#">
                    <div className="form-group mb-3">
                        <label className="label-sm" htmlFor="label--email">{t('form.field.email.title')}</label>
                        <input type="text" id="label--email" className="form-control" placeholder={t('form.field.email.placeholder')}/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label-sm" htmlFor="label--password">{t('form.field.password.title')}</label>
                        <input type="text" id="label--password" className="form-control" placeholder={t('form.field.password.placeholder')}/>
                    </div>
                    <div className="form-checkbox mb-3">
                        <input type="checkbox" id="label--loggedin" />
                        <label className="label-sm" htmlFor="label--loggedin">{t('page.login.keep_logged_in')}</label>
                    </div>
                    <div className="button-area">
                        <button className="btn disabled btn-primary btn-block">{t('page.login.title')}</button>
                    </div>
                </form>

                <div className="other-links text-center mt-3">
                    <p className="mb-1"><span className="text-muted">{t('page.login.dont_have_account')}</span> <a href={Config.registerPageUrl}>{t('page.login.sign_up')}</a></p>
                    <a href={Config.forgetPageUrl}>{t('page.login.forget_password')}</a>
                    
                </div>
            </div>
        )
    }
}
export default withTranslation()(Login)