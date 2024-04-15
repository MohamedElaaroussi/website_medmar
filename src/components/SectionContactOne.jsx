import React from 'react'
import Img from '../assets/images/contact.png'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function SectionContactOne() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  return (
    <div className="container">
  <div className="row gy-5 gy-md-0">

<div className="col-12">
  <div className="row gx-5 gy-3 align-items-center">
    <div className="col-12 col-md-6 ">
      {/* <h2>Contactez-nous, Prenons Ensemble la Voie du Succès</h2> */}
      <h2 className='Font_Title'>{t('Contactez-nous, Prenons Ensemble la Voie du Succès')}</h2>

      <p className="py-3">
      {/* Nous sommes impatients de vous entendre ! Que vous ayez une question, un projet passionnant en tête ou que vous souhaitiez simplement en savoir plus sur nos services, notre équipe dévouée est là pour vous. Remplissez le formulaire ci-dessous, et nous vous contacterons rapidement pour discuter de la meilleure façon dont MedMar Agence peut vous aider à atteindre vos objectifs en matière de marketing digital. Votre succès commence ici. */}
      {t('Nous sommes impatients de vous entendre ! Que vous ayez une question...')}

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
    </div>
  )
}
