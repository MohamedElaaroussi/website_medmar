import React, { useEffect, useState } from 'react'
import section from '../assets/images/medmar svg.svg'
import ribbon from '../assets/images/Artboard_1.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function ServicesSection() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  const data = [{ image: "" }]
  return (
    <>
      <div >

        {
          data.map((item, index) => (
            <section key={index}
              id="services"
              className="container-fluid py-5 overflow-hidden light-bg "
            >
              <div className="container b-6 bg-bluefaint p-4 position-relative bg-dark ">
                <div className="row">
                  <div className="serviceTabs-wrapper col-12">
                    <button
                      type="button"
                      className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill"
                    // disabled
                    >
                      {t("Journalisme et Media")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill"
                    // disabled
                    >
                      {t("Vidéos Publicitaires")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill"

                    // disabled
                    >
                      {t("Marketing Digital")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill"
                    // disabled
                    >
                      {t("Événementiel")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-white text-outline-white btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill"
                    // disabled
                    >
                      {t("Formations")}
                    </button>
                  </div>
                  <div className="service-section-wrappper col-12">
                    <div className="row pt-4 pt-md-5 gx-5 row-cols-2">
                      <div className="col-12 col-md-6 py-4 py-md-5 order-2 order-md-1">
                        <h2 className="Font_Title">
                          {t("L'importance du Design pour les Posts sur Instagram et Facebook")}
                        </h2>
                        <div className="p-body mt-3 mt-sm-4 mt-md-5">
                          <p className='Font_desc'>
                            {t("Le design de posts sur Instagram et Facebook .")}
                          </p>
                          <p>
                            {t("De plus, un design cohérent crée une identité visuelle forte")}
                          </p>
                        </div>
                        <div className="mt-3 mt-sm-4 mt-md-5">
                          <Link
                            to={'/contact'}
                            // className="btn  my-2 rounded-pill bg-brand-primay"
                            className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill"

                          >
                            {t('contactez-nous')}
                          </Link>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 overflow-hidden b-6 position-relative order-1
                       order-md-2 d-flex ">
                        <div className="img-bar"></div>
                        <img
                          className="mt-4"
                          src={section}
                          alt="test page"
                          style={{ maxWidth: "100%", height: "auto" }} // Assurez-vous que l'image est réactive
                        />
                      </div>

                    </div>
                  </div>
                </div>
                <img
                  className="overlay-img--ribbon position-absolute"
                  src={ribbon}
                  alt=""
                  type="image/svg"
                  style={{ width: "160px" }}
                />
              </div>
            </section>
          ))
        }
      </div>
    </>
  )
}
