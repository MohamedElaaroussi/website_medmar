import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next
import logo from '../assets/images/logo_medmar_23.png';



export default function Navbar() {
  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  const links = [
    { path: '/', link: t('Home') }, // Traduisez les liens en utilisant la fonction t
    { path: '/realisation', link: t('réalisation') },
    { path: '/sommes-nous', link: t('Somme Nous') },
    { path: '/services', link: t('Services') },
    { path: '/événementiel', link: t('Événementiel') },
   
  ];
 

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Changez la langue en utilisant la fonction i18n.changeLanguage
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 ">
        <div className="container-fluid">
          <Link to={'/'}>
            <img className="navbar-brand" src={logo} style={{ width: "120px" }} />
          </Link>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              {
                links.map((link, index) => (
                  <li key={index} className="nav-item">
                    <Link className="nav-link mx-2 active fw-smbold" aria-current="page"
                      to={link.path}>
                      <span clas>  {link.link}</span>
                    </Link>
                  </li>


                ))
              }
              <span className='d-flex'>
                <li className='nav-item'>
                  <button className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill" onClick={() => changeLanguage('en')}>
                    English
                  </button>
                </li>
                <li className='nav-item'>
                  <button className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill" onClick={() => changeLanguage('fr')}>
                    Français
                  </button>
                </li>
                <li className='nav-item'>
                  <button className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill" onClick={() => changeLanguage('ar')}>
                    العربية
                  </button>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
