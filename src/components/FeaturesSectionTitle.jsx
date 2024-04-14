import React from 'react'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


const FeaturesSectionTitle = () => {
    const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

    return (
        <div>
            <section className="container-fluid py-5 bg-bluefaint light-bg">
                <div className="container">
                    <div className="row gy-3 gy-md-5">
                        <div className="text-container col-12">
                            <div className="text-wrapper row row-cols-2 gy-3">
                                <h3 className="col col-12 col-md-6 Font_Title">
                                    {t('Nos Fondements...')}
                                </h3>
                                <p className="col col-12 col-md-6 Font_desc">
                                {t('Choisir Medmar,...')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesSectionTitle
