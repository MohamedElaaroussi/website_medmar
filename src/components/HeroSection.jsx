import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import maj1 from "../assets/images/maj1.jpg"
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next



export default function HeroSection() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  const data = [
    {
      id: 1, title: t('Notre agence digitale répond aux problématiques...')
      , image: "Untitled-3.png"
      , description:t('Medmar est une agence de médias, marketing et publicité...'),
      icons: "brand1.png"
    }
  ]

  return (
    <div>
      <div className="bg-bluelight container-fluid  light-bg  ">
        <div className="container">
          {
            data.map((item, index) => (
              <div key={index} className="row" >
                <div className="col-md-5 col-lg-6 py-3 section-hero">
                  <div className="text-animation"
                  >
                    <h1 className="cl-blue-900 Font_Title">{item.title}</h1>
                    <p className='Font_desc'>{item.description}</p>
                  </div>

                  <div className="mt-4">
                    <Link
                      to={'/services'}
                      className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill "
                    >
                      {t('Services')}
                    </Link>
                    <Link
                      to={'/realisation'}
                      className="btn cl-blue-900 fw-smbold rounded-pill ms-sm-3 ms-md-0 ms-lg-3"
                    // className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill "
                    >

                      {t('réalisation')}
                    </Link>
                  </div>
                  <div className="mt-5">
                    <div className="mt-3">
                      <img
                        className="w-85"
                        src={`images/${item.icons}`}
                        alt="headerLogos"
                      />
                    </div>
                  </div>
                </div>
                <div className="header-img-wrapper col-md-7 col-lg-6 overflow-hidden">
                  <img
                    className="img-fit-cover mt-5 rounded b-6 "
                    src={maj1}
                    alt="heroSectionImg"
                  />

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
