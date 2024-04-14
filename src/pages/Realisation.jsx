





import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';
import '../style.css'
import SectionSiteWeb from '../components/SectionSiteWeb';
import SectionVideo from '../components/SectionVideo';
import axios from 'axios';
import API_URL from '../Api/config';
import API_STORAGE from '../Api/storage';
import { Link } from 'react-router-dom';
import headerImg from '../assets/images/drone.png'
import App2 from '../components/Filter Component/App2';
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


// const data = [
//     { image: "realisation11.png", span: "Support Assist", title: "Selby Stuart", paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
//     { image: "realisation2.jpg", span: "Support Assist", title: "Selby Stuart", paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
//     { image: "realisation3.jpg", span: "Support Assist", title: "Selby Stuart", paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
//     { image: "realisation12.png", span: "Support Assist", title: "Selby Stuart", paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
//     { image: "realisation5.jpg", span: "Support Assist", title: "Selby Stuart", paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
//     { image: "realisation6.jpg", span: "Support Assist", title: "Selby Stuart", paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
//     { image: "realisation7.jpg", span: "Support Assist", title: "Selby Stuart", paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
//     { image: "realisation8.jpg", span: "Support Assist", title: "Selby Stuart", paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
//     // { image: "realisation10.png", span: "Support Assist", title: "Selby Stuart", paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
//     // { video: 'jcNWvAgofJ8', span: "Support Assist", title: "Selby Stuart", paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
// ];


const options = {
  width: '100%',
  height: '450px',
  playerVars: {
    autoplay: 1,
  },
};

const Gallery = () => {

  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}realisations/user`)
      .then(({ data }) => {
        setData(data)
      })
  }, [])

  const handleItemClick = (item) => {
    if (item.video) {
      setSelectedVideo(item.video);
    } else {
      setSelectedImage(item.image);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
    setShowModal(false);
  };


  return (
    <div>
      <div className="container-fluid py-4 py-md-5 bg-bluelight light-bg">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-lg-6 py-3">
              <div className="pt-lg-5">

                <h1 className="cl-blue-900 mt-3 Font_Title">
                  {/* Créez des Moments Inoubliables avec Nous */}
                  {t("Créez des Moments Inoubliables avec Nous")}

                </h1>
                <p className="my-4 Font_desc">
                  {/* Bienvenue dans l'univers des événements exceptionnels avec MedMar Agence. Que ce soit pour une conférence d'entreprise, un lancement de produit, ou tout autre événement spécial, notre équipe dévouée est prête à transformer vos idées en expériences mémorables. Remplissez le formulaire ci-dessous pour discuter de votre vision, et laissez-nous prendre en charge chaque détail, vous permettant de profiter pleinement de chaque instant. Ensemble, rendons vos événements extraordinaires. */}
                  {t("Bienvenue dans l'univers des événements exceptionnels avec MedMar Agence")}

                </p>
              </div>

              <Link
                to={'/contact'}
                // className="btn  my-2 rounded-pill bg-brand-primay"
                className="btn btn-outline-danger mt-1 mt-sm-0 fs-7 rounded-pill"
              >
                {t('contactez-nous')}

              </Link>
            </div>
            <div className="col-md-7 col-lg-6 position-relative">
              <img
                className="img-fit-cover b-6"
                src={headerImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className="container">
          <div className='mt-2 text-center'>
            <h3>
              {/* 𝕊𝕥𝕒𝕥𝕚𝕤𝕥𝕚𝕢𝕦𝕖𝕤 𝕚𝕞𝕡𝕣𝕖𝕤𝕤𝕚𝕠𝕟𝕟𝕒𝕟𝕥𝕖𝕤 */}

              {t("𝕊𝕥𝕒𝕥𝕚𝕤𝕥𝕚𝕢𝕦𝕖𝕤 𝕚𝕞𝕡𝕣𝕖𝕤𝕤𝕚𝕠𝕟𝕟𝕒𝕟𝕥𝕖𝕤")}

            </h3>
          </div>
        </div>
        <div>
          <App2 />
        </div>
      </div>
    </div>
  );
}

export default Gallery;