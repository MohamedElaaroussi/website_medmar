import React from "react"
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function SommesnousFour() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  const data = [
    { number: "300", title: t("Clients"), description: "Medmar, votre agence de marketing digital au Maroc...." },
    { number: "300 ", title: t("Satisfaction client"), description: "Medmar, votre agence de marketing digital au Maroc...." },
    { number: "10", title: t("Equipe de Travail"), description: "Medmar, votre agence de marketing digital au Maroc...." },
    { number: "300", title: t("projet réalisé"), description: "Medmar, votre agence de marketing digital au Maroc...." },
  ]

  return (
    <div>
      <section className="container-fluid my-5 py-5 light-bg">
        <div className="container">
          <div className="row gy-3 gy-md-5">
            <div className="text-container col-12">
              <div className="text-wrapper row row-cols-2 gy-3">
                <h3 className="col col-12 col-md-6">
                  {/* Notre agence digitale répond aux problématiques de marketing et de communication */}
                  {t("Notre agence digitale répond aux problématiques...")}
                </h3>
                <p className="col col-12 col-md-6">
                  {t('Choisir Medmar,...')}

                </p>
              </div>
            </div>
            <div className="features col-12">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-3 gy-md-0">
                {
                  data.map((item, index) => (
                    <div key={index} className="col">
                      <span className="h2 cl-primary"> {item.number}+ </span>
                      <h5 className="">{item.title}</h5>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
