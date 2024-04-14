import React from 'react'
import Service1 from '../assets/images/service-featureImg1.png'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function ServicesThree() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  return (
    <div>
      <div className="col-12">
        <div className="row gx-5 gy-3 align-items-center">
          <div
            className="col-12 col-md-6 p-3 p-lg-5 position-relative order-md-1 order-2"
          >
            <div className="position-relative">
              <div
                className="overlay-img--cubeSm p-lu position-absolute b-6"
              ></div>
              <img
                className="img-fit-cover b-6"
                src={Service1}
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-2 order-1">
            <h2>
              {/* Production Audio Visuelle */}
              {t("Production Audio Visuelle")}
            </h2>
            <p className="py-3">
              {/* Transformez votre message en une expérience visuelle mémorable avec nos vidéos publicitaires. Du concept à la production, nous créons des contenus vidéo percutants qui captivent votre audience et renforcent la notoriété de votre marque. */}
              {t("Transformez votre message en une expérience visuelle...")}
            </p>
            <div>
              <ul className="px-3">
                <li>{t("Videos")}</li>
                <li>{t("Voix off")}</li>
                <li>{t("Drone")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
