import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API_URL from '../Api/config';
import API_STORAGE from '../Api/storage';
import { Link } from 'react-router-dom';
import mag1 from "../assets/images/AboutUs-teampost1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next'; // Importez useTranslation depuis react-i18next


// Import Swiper styles
import 'swiper/css';


export default function TeamWork() {

  const { t, i18n } = useTranslation(); // Utilisez useTranslation pour obtenir les fonctions de traduction t et i18n

  const teams = [
    { image: "https://placehold.co/290x521", span: "développeur web", title: "Mohamed Amine", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros." },
    { image: "https://placehold.co/290x521", span: "graphic designer", title: "Mohamed Amine", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros." },
    { image: "https://placehold.co/290x521", span: "développeur web", title: "Mohamed Amine", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros." },
    { image: "https://placehold.co/290x521", span: "graphic designer", title: "Mohamed Amine", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros." },
    { image: "https://placehold.co/290x521", span: "graphic designer", title: "Mohamed Amine", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros." },
    { image: "https://placehold.co/290x521", span: "graphic designer", title: "Mohamed Amine", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros." },
    { image: "https://placehold.co/290x521", span: "graphic designer", title: "Mohamed Amine", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros." },
    { image: "https://placehold.co/290x521", span: "graphic designer", title: "Mohamed Amine", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros." },
  ];
  // const [teams, setTeams] = useState([]);
  // useEffect(() => {
  //   axios.get(`${API_URL}teams/user`)
  //     .then(({ data }) => {
  //       setTeams(data)
  //     })
  // }, [])




  return (
    <div>
      <div className="container-fluid light-bg mt-5">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 Font_Title">
              <h2>
                {/* Le travail d'équipe est la seule façon dont nous travaillons */}
                {t("Le travail d'équipe est la seule façon dont nous travaillons")}
              </h2>
              <p className='Font_desc'>
                {/* Travailler en équipe présente un ensemble d'avantages cruciaux pour le succès d'une entreprise. La synergie qui émerge de la collaboration permet une créativité accrue, générant des idées novatrices */}
                {t("Travailler en équipe présente un ensemble d'avantages")}
              </p>
            </div>
            <div className="col-12">
              <div
                className="row mt-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4"
              >

                {
                  // teams.map((item,index) => (
                  //     <div key={index} className="col overflow-hidden b-6 team-post">
                  //     <div className="overflow-hidden position-relative b-6">
                  //       <img
                  //         className="img-fit-cover b-6"
                  //         src={`${API_STORAGE}${item.image}`}                        alt=""
                  //       />
                  //       <div className="team-detail b-6 p-3 p-lg-4">
                  //         <span className="cl-white opacity-75">{item.role}</span>
                  //         <h4 className="cl-white my-2">{item.nom}</h4>

                  //       </div>
                  //     </div>
                  //   </div>
                  // ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          teams.map((item, index) => (
            <SwiperSlide key={index}>
              <section>

                <div class="cards">
                  <div class="card">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Franklin Carlson" />
                    <div class="card-content">
                      <h3>franklin carlson</h3>
                      <p>UX Designer</p>
                      <ul>
                        <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </section>

            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )
}
