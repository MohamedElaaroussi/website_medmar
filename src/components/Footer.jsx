import React from 'react'
import logo from '../assets/images/logo_medmar_23.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


export default function Footer() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  const links = [
    { path: '/', link: t("Home") },
    { path: '/realisation', link: t('réalisation') },
    { path: '/sommes-nous', link: t('Somme Nous') },
    { path: '/services', link: t('Services') },
  ]
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
          </div>
          <div>
            <a className="me-4 text-reset" >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>

          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <Link to={'/'} className="text-uppercase fw-bold mb-4">
                  <img src={logo} alt="logo" style={{ width: "170px" }} />
                </Link>
                <p className='pt-3'>
                  {/* Medmar est une agence de médias, marketing et publicité , qui offre des services de qualité par une équipe expérimentée en conception et design, développement web, shooting , réalisation des vidéos publicitaires ,des reportages .... */}
                  {t("Medmar est une agence de médias, marketing et publicité...")}
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  {t("Pages")}
                </h6>
                {
                  links.map((item, index) => (
                    <p key={index}>
                      <Link to={item.path} className="text-reset">{item.link}</Link>
                    </p>
                  ))
                }
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  {t("Social media")}
                </h6>
                <p>
                  <i className="fab fa-facebook "></i>
                  <a target='_blank' href="https://www.facebook.com/profile.php?id=100092279935083"
                    className="text-reset">
                    Facebook
                  </a>
                </p>
                <p>
                  <i className="fab fa-instagram "></i>
                  <a target='_blank' href="https://www.instagram.com/medmarmaroc/?hl=fr" className="text-reset">
                    Instagram
                  </a>
                </p>
                <p>
                  <i className="fab fa-linkedin "></i>
                  <a target='_blank' href="https://www.linkedin.com/company/medmarmaroc/" className="text-reset">
                    Linkedin
                  </a>
                </p>
                <p>
                  <i className="fab fa-twitter "></i>
                  <a target='_blank' href="https://twitter.com/MediaMedmar" className="text-reset">
                    Twitter
                  </a>
                </p>
                <p>
                  <i className="fab fa-youtube "></i>
                  <a target='_blank' href="https://www.youtube.com/@medmar5878" className="text-reset">
                    Youtube
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  {t("Contact")}
                </h6>
                <p><i className="fas fa-home me-3"></i>App N 7 Imm N 109 rue Abdellah Ganoune Étage 3, Agadir 80000</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  contact@medmarmedia.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 212 675-264999</p>
                <p><i className="fas fa-phone me-3"></i> + 212 529-980505</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4 bg-bluefaint light-bg">
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://medmarmedia.com/">medmarmedia.com</a>
        </div>
      </footer>
    </div>
  )
}
