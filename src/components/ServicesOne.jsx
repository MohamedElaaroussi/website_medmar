import React from 'react'
import ImgHeader from '../assets/images/headerImg-Serv.png'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next

export default function ServicesOne() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  return (
    <div>
      <div className="container-fluid py-4 py-md-5 light-bg overflow-hidden">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-lg-6 py-3">
              <div className="pt-lg-5">
                <h1 className="cl-blue-900 mt-3">
                  {/* Journalisme et Media   */}
                  {t("Journalisme et Media")}
                </h1>
                <p className="my-4">
                  {/* Notre équipe dédiée au journalisme et aux médias s'engage à fournir des contenus informatifs et captivants. Des reportages percutants aux articles bien recherchés, nous assurons une couverture médiatique de qualité, adaptée à vos besoins. */}
                  {t("Notre équipe dédiée au journalisme et aux médias")}
                </p>
              </div>
              <div className="mt-4">
                <a
                  target="_blank"
                  href="https://wa.me/212675264999?text=Remplissez le formulaire et notre équipe vous répondra dans 1 heur"
                  type="button"
                  className="btn  rounded-pill bg-brand-primay px-5 py-2"
                >
                  +212 640070464
                </a>
              </div>
            </div>
            <div className="col-md-7 col-lg-6 position-relative">
              <div className="img-bar"></div>


              <img
                className="img-fit-cover b-6"
                src={ImgHeader}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
