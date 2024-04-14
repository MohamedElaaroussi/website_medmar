import React from 'react'
import headerImg from '../assets/images/service-featureImg3.png'
import ListeEvent from '../components/ListeEvent'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function Evenementiel() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n


  return (
    <div>
      <div className="container-fluid py-4 py-md-5 bg-bluelight light-bg">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-lg-6 py-3">
              <div className="pt-lg-5">

                <h1 className="cl-blue-900 mt-3">
                  {/* Créez des Moments Inoubliables avec Nous */}
                  {t("Créez des Moments Inoubliables avec Nous")}
                </h1>
                <p className="my-4">
                  {/* Bienvenue dans l'univers des événements exceptionnels avec MedMar Agence. Que ce soit pour une conférence d'entreprise, un lancement de produit, ou tout autre événement spécial, notre équipe dévouée est prête à transformer vos idées en expériences mémorables. Remplissez le formulaire ci-dessous pour discuter de votre vision, et laissez-nous prendre en charge chaque détail, vous permettant de profiter pleinement de chaque instant. Ensemble, rendons vos événements extraordinaires. */}
                  {t("Bienvenue dans l'univers des événements exceptionnels avec MedMar Agence")}
                </p>
              </div>

              <Link
                to={'/contact'}
                className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill" F
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
      <ListeEvent />
    </div>


  )
}
