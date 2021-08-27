import React, { Component } from 'react'
import Config from '../../Utils/Config';
import { withTranslation } from 'react-i18next';
import './index.scss';

export class Register extends Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                <div className="headbar">
                    <img src={Config.logoSm} alt={Config.siteTitle} className="s-50" />

                    <h3 className="mb-1">{t('page.register.title')}</h3>
                    <p className="fs-xs">{t('page.register.paragraph')}</p>
                </div>
                <form action="#">
                    <div className="form-group mb-3">
                        <label className="label-sm" htmlFor="label--first-name">{t('form.field.first_name.title')}</label>
                        <input type="text" id="label--first-name" className="form-control" placeholder={t('form.field.first_name.placeholder')}/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label-sm" htmlFor="label--last-name">{t('form.field.last_name.title')}</label>
                        <input type="text" id="label--last-name" className="form-control" placeholder={t('form.field.last_name.placeholder')}/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label-sm" htmlFor="label--email">{t('form.field.email.title')}</label>
                        <input type="text" id="label--email" className="form-control" placeholder={t('form.field.email.placeholder')}/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="label-sm" htmlFor="label--password">{t('form.field.password.title')}</label>
                        <input type="text" id="label--password" className="form-control" placeholder={t('form.field.password.placeholder')}/>
                    </div>
                    <div className="form-checkbox mb-3">
                        <input type="checkbox" id="label--agree" />
                        <label className="label-xs text-muted" htmlFor="label--agree">{t('page.register.corfirm_account')} <a href={Config.termsConditionPageUrl}>{t('page.register.terms_use')}</a> {t('page.register.and')} <a href={Config.privacyPolicyPageUrl}>{t('page.register.privacy_policy')}</a> .</label>
                    </div>
                    <div className="button-area">
                        <button className="btn btn-primary btn-block">{t('page.register.title')}</button>
                    </div>
                </form>

                <div className="other-links text-center mt-3">
                    <p className="mb-0"><span className="text-muted">{t('page.register.already_have_account')}</span> <a href={Config.loginPageUrl}>{t('page.login.title')}</a></p>                    
                </div>
            </div>
        )
    }
}

export default withTranslation()(Register)