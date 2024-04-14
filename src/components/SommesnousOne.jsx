import React from 'react'
import headerImg from '../assets/images/agence.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function SommesnousOne() {
  const { t } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  return (
    <div>
      <div className="container-fluid py-4 py-md-5 bg-bluelight light-bg">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-lg-6 py-3">
              <div className="pt-lg-5">

                <h1 className="cl-blue-900 mt-3 Font_Title">
                  Medmar: {t('Votre Partenaire Numérique au Maroc')}
                </h1>
                <p className="my-4 Font_desc">
                  Medmar : {t('Medmar, votre agence de marketing...')}
                </p>
              </div>

              <Link
                to={'/contact'}
                // className="btn  my-2 rounded-pill bg-brand-primay"
                className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill "

              >
                {t('contactez-nous')}

              </Link>
            </div>
            <div className="col-md-7 col-lg-6 position-relative">
              <img
                className="img-fit-cover b-6"
                src={headerImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
