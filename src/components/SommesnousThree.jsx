import React from 'react'
import Img from '../assets/images/Circle.svg'
import Header from '../assets/images/numirique.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function SommesnousThree() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  return (
    <div>
      <div className="container-fluid py-4 py-md-5 light-bg overflow-hidden">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-lg-6 py-3">
              <div>
                <h1 className="cl-blue-900 mt-3 Font_Title">
                  Medmar : {t('Façonnons Ensemble Votre Succès Numérique au Maroc')}
                </h1>
                <p className="my-4 Font_desc">
                  {t('votre agence de marketing digital au Maroc...')}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  to={'/contact'}
                  // className="btn  my-2 rounded-pill bg-brand-primay"
                  className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill "
                >
                  {t('contactez-nous')}

                </Link>
              </div>
            </div>
            <div className="col-md-7 col-lg-6 position-relative">
              <div className="img-bar"></div>

              <img
                className="img-fit-cover b-6"
                src={Header}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
