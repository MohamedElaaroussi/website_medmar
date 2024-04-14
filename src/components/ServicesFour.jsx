import React from 'react'
import Img from '../assets/images/service-featureImg2.png'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function ServicesFour() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  return (
    <div>
      <div className="col-12">
        <div className="row gx-5 gy-3 align-items-center">
          <div className="col-12 col-md-6">
            <h2>
              {/* Marketing Digital */}
              {t("Marketing Digital")}
            </h2>
            <p className="py-3">
              {/* Maximisez votre présence en ligne grâce à notre expertise en marketing digital. De la stratégie de médias sociaux à l'optimisation du référencement, nous vous aidons à atteindre vos objectifs numériques. */}
              {t("Maximisez votre présence en ligne grâce à notre expertise en marketing digital...")}
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
