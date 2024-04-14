
import React from 'react'
import Img from '../assets/images/service-featureImg3.png'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function ServicesFive() {
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
                className="overlay-img--cubeSm p-lc position-absolute b-6"
              ></div>
              <img
                className="img-fit-cover b-6"
                src={Img}
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-2 order-1">
            <h2>{t("Événementiel")}</h2>
            <p className="py-3">
              {/* Créez des expériences inoubliables avec notre service événementiel. De la conception à la réalisation, nous gérons tous les aspects logistiques pour garantir le succès de vos événements. Que ce soit des conférences professionnelles, des lancements de produits ou des événements culturels, nous sommes là pour faire de chaque occasion un moment exceptionnel. */}
              {t("Créez des expériences inoubliables avec notre service événementiel...")}
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
