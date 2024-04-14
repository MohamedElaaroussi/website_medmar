import React from 'react'
import Img from '../assets/images/service-featureImg4.png'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next

export default function ServicesSix() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  return (
    <div>
      <div className="col-12">
        <div className="row gx-5 gy-3 align-items-center">
          <div className="col-12 col-md-6">
            <h2>{t("Formations")}</h2>
            <p className="py-3">
              {/* Investissez dans le développement de vos compétences avec nos programmes de formation sur mesure. Que vous aspiriez à perfectionner vos talents professionnels ou à rester à jour avec les dernières tendances, nos sessions dynamiques et interactives offrent un apprentissage pratique pour exceller dans votre domaine. Faites évoluer votre parcours professionnel avec nos formations adaptées à vos besoins. */}
              {t("Investissez dans le développement de vos compétences...")}
            </p>
          </div>
          <div className="col-12 col-md-6 p-3 p-lg-5 position-relative">
            <div className="position-relative">
              <div
                className="overlay-img--cubeSm p-rc position-absolute b-6"
              ></div>
              <img
                className="img-fit-cover b-6"
                src={Img}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
