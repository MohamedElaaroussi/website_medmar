import React from 'react'
import img from '../assets/images/drone.png'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function LasteSection() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  return (
    <div>
      <section className="container-fluid light-bg pb-5 overflow-hidden">
        <div className="container">
          <div className="row row-cols-2 gx-5 align-items-center mt-5">
            <div className="col-12 col-md-6">
              <h2 className='Font_Title'>
                {t("Élevez Votre Marketing Digital ...")}
              </h2>
              <p className="py-4 Font_desc">
                {t("Les drones révolutionnent le paysage du marketing.")}
                {/* Les drones révolutionnent le paysage du marketing digital en offrant une perspective aérienne unique et captivante.En intégrant cette technologie de pointe dans la production de vidéos professionnelles,notre agence transcende les limites conventionnelles pour vous offrir des contenus visuels qui captivent instantanément votre audience. */}
              </p>

            </div>
            <div className="col-12 col-md-6 img-wrapper position-relative p-0">
              <div className="p-4">
                <div className="overlay-img--cubeLg position-absolute b-6"></div>
                <img
                  className="img-fit-cover b-6"
                  src={img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
