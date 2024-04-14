import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../Api/config';
import API_STORAGE from '../Api/storage';
import { Rating } from '@mui/material';
import { DataImage } from './Data';

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [selectedImageId, setSelectedImageId] = useState(1); // ID de l'image sélectionnée

  useEffect(() => {
    axios.get(`${API_URL}events/user`)
      .then(res => {
        const eventData = res.data;
        const foundEvent = eventData.find(item => item.id.toString() === id);
        setEvent(foundEvent);
      })
      .catch(error => {
        console.error('Error fetching event details:', error);
      });
  }, [id]);

  // Fonction pour gérer le clic sur une miniature d'image
  const handleImageClick = (imageId) => {
    setSelectedImageId(imageId);
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <>
      {/* <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="card-img-top mb-5 mb-md-0" src={`${API_STORAGE}${event.image}`} alt="..." />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">{event.date}</div>
              <h1 className="display-5 fw-bolder">{event.titre}</h1>
              <div className="fs-5 mb-5">
                <span>Gratuit</span>
              </div>
              <p className="lead">{event.description}</p>
              <div className="d-flex">
                <Link
                  target="_blank"
                  href='https://wa.me/212675264999?text=Remplissez le formulaire et notre équipe vous répondra dans 1 heur'
                  className="btn  rounded-pill bg-brand-primay px-5 py-2"
                  type="button">
                  <i className="fas fa-phone me-3"></i>
                  + 212 675-264999
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */
      }
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <Link className="col-lg-6">
              <div className="mb-3 d-flex justify-content-center">
                <span data-fslightbox="mygalley" className="rounded-4" data-type="image">
                  <img
                    className="selected-image"
                    src={selectedImageId === 1 ? `${API_STORAGE}${event.image}` : DataImage[selectedImageId - 1].image}
                    alt="Selected Image"
                  />
                </span>
              </div>
              <div className="d-flex justify-content-center mb-3">
                {DataImage.map((imageData, index) => (
                  <span
                    key={index}
                    data-fslightbox="mygalley"
                    className="affiche border mx-1 rounded-2"
                    onClick={() => handleImageClick(index + 1)}
                  >
                    <img width="60" height="60" className="rounded-2" src={imageData.image} alt={`Image ${index}`} />
                  </span>
                ))}
              </div>
            </Link>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">{event.titre}</h4>
                <div className="d-flex flex-row my-3">
                  <div className=" d-flex text-warning mb-1 me-2">
                    <div>
                      <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                    </div>
                    <span className="ms-2 mx-2 mt-1/2 fs-5">4.5</span>
                  </div>
                  <span className="text-muted mt-1 fs-6">
                    <i className="fas fa-calendar-check fa-sm mx-1 mt-2"></i>{event.date}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="h5 fs-4">7K</span>
                  <span className="text-muted fs-4"> Participant </span>
                </div>
                <p>{event.description}</p>
                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-3">Mariages</dd>
                  <dd className="col-3">Vestivale</dd>
                  <dd className="col-3">Anniversaire.</dd>
                  <dt className="col-3">Place</dt>
                  <dd className="col-5">Agadir</dd>
                  <dd className="col-4">Marakech</dd>
                  <dt className="col-3">Equipe</dt>
                  <dd className="col-3">Stratège</dd>
                  <dd className="col-3">Directrice</dd>
                  <dd className="col-3">Graphiste</dd>
                  <dt className="col-3">Role</dt>
                  <dd className="col-3">Gestionnaire de contenu</dd>
                  <dd className="col-6">Responsable des activités Promotionnel</dd>
                </div>
                
              </div>
              <div class="social-links " style={{marginLeft:"1rem"}}>
                <p className='mt-3'>Share At: </p>
                <Link to="https://www.facebook.com/profile.php?id=100092279935083" target='_blank'>
                  <i class="fab fa-facebook-f"></i>
                </Link>
                <Link to="https://www.instagram.com/medmarmaroc/" target='_blank'>
                  <i class="fab fa-instagram"></i>
                </Link>
                <Link to="https://wa.me/+212675264999?text=Bonjour medmar Media.com" target='_blank'>
                  <i class="fab fa-whatsapp"></i>
                </Link>
                <Link to="https://medmarmedia.com/" target='_blank'>
                  <i class="fab fa-google"></i>
                </Link>
                <Link to="https://www.youtube.com/@medmar5878" target='_blank'>
                  <i class="fab fa-youtube"></i>
                </Link>

              </div>
            </main>

          </div>
        </div>
      </section>
    </>
  );
}
