import React, { Component } from 'react'
import Config from '../../Utils/Config';
import { withTranslation } from 'react-i18next';
import './index.scss';

export class ForgotPassword extends Component {
    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <div className="headbar">
                    <img src={Config.logoSm} alt={Config.siteTitle} className="s-50" />

                    <h3 className="mb-1">{t('page.forget_password.title')}</h3>
                    <p className="fs-xs">{t('page.forget_password.paragraph')}</p>
                </div>
                <form action="#">
                    <div className="form-group mb-3">
                        <label className="label-sm" htmlFor="label--email">{t('form.field.email.title')}</label>
                        <input type="text" id="label--email" className="form-control" placeholder={t('form.field.email.placeholder')}/>
                    </div>
                    <div className="button-area">
                        <button className="btn btn-primary btn-block">{t('page.forget_password.send_reset_link')}</button>
                    </div>
                </form>

                <div className="other-links text-center mt-3">
                    <a href={Config.loginPageUrl}>{t('page.forget_password.back_to_login')}</a>                  
                </div>
            </React.Fragment>
        )
    }
}

export default withTranslation()(ForgotPassword)