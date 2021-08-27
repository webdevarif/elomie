import React from 'react'
import { useTranslation } from 'react-i18next';

function Lang() {
    const { i18n } = useTranslation();

    const handleClick=(lang) => {
        i18n.changeLanguage(lang)
    }
    return (
        <div className="change__lang">
            <span className={i18n.language === 'en' ? 'active' : null} onClick={()=>handleClick('en')}>EN</span>
            <span className={i18n.language === 'bn' ? 'active' : null} onClick={()=>handleClick('bn')}>BN</span>
        </div>
    )
}

export default Lang
