import React from 'react'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function SectionContactTwo() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  const data = [
    { location: "App N 7 Imm N 109 rue Abdellah Ganoune Étage 3, Agadir 80000", phone: "0675264999", email: "contact@medmarmedia.com" }
  ]

  return (
    <div>
      <div className="container-fluid py-5 light-bg overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-11">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h1 className="cl-blue-900">
                    {/* Avoir une question? Contactez-nous. */}
                    {t("Avoir une question? Contactez-nous.")}

                  </h1>
                  <p>
                    {/* Remplissez le formulaire et notre équipe vous répondra dans les 24 heures. */}
                    {t("Remplissez le formulaire et notre équipe vous répondra dans les 24 heures.")}

                  </p>
                </div>
                <div className="col-6 col-md-3 py-4">
                  <div className="h5">
                    {/* Emplacement */}
                    {t("Emplacement")}
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      {
                        data.map((item, index) => (
                          <p key={index}>{item.location}</p>
                        ))
                      }
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3 py-4">
                  <div className="h5">{t("contactez-nous")}</div>
                  <ul className="list-unstyled">
                    <li>
                      {
                        data.map((item, index) => (
                          <p key={index}>{item.phone}</p>
                        ))
                      }
                    </li>
                    <li>
                      {
                        data.map((item, index) => (
                          <p key={index}>{item.email}</p>
                        ))
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
