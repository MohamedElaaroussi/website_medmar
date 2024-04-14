import React, { useEffect, useState } from 'react';
import FeaturesSectionTitle from "./FeaturesSectionTitle.jsx";
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function FeaturesSection() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  const data = [
    { icon: "Transparence.svg", title: t('Tracking Lead'), description: t("Mettez en avant votre engagement envers l'innovation...") },
    { icon: "Innovation.svg", title: t("Innovation"), description: t("Mettez en avant votre engagement envers l'innovation...") },
    { icon: "Orienté.svg", title: t('Orienté client'), description: t("Exprimez votre engagement envers la satisfaction client") },
    { icon: "Qualité.svg", title: t('Qualité'), description: t('Nous sommes déterminés à fournir...') },
    { icon: "Responsabilité.svg", title: t("Responsabilité sociale"), description: t("En tant qu'entreprise, nous assumons notre responsabilité sociale") },
    { icon: "Agilité.svg", title: t("Agilité"), description: t("Dans un monde en constante évolution, nous embrassons l'agilité.") }
  ]

  // Fonction pour limiter la description à 15 mots et ajouter trois points à la fin
  const limitDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 15) {
      return words.slice(0, 15).join(" ") + " ...";
    } else {
      return description;
    }
  };

  return (
    <div>
      <FeaturesSectionTitle />
      <div>
        <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">

            {
              data.map((item, index) => (
                <div key={index} className="col d-flex flex-column">
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <img
                        src={`images/${item.icon}`}
                        type="image/svg"
                        alt="img"
                        style={{ width: "35px", color: "#fff" }}
                      />
                    </div>
                    <h3 className='Font_Title'>{item.title}</h3>
                    <p className='Font_desc'>
                      {limitDescription(item.description)}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  )
}
