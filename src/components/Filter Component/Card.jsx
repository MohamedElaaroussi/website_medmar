import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';



const Card = ({ item }) => {
  // destructuring props
  return (
    <>
     
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.slice(0, 11).map((item, index) => {
            return (
              <div class="container_2">
                <div class="flipper">
                  <div class="front">

                    {
                      item.img ? (
                        <img src={item.img} alt="img" />
                      ) : (
                        <video src={item.video} autoPlay muted loop
                          style={{ maxWidth: "100%", maxheight: "30rem" }} />
                      )
                    }
                    <p class="caption"></p>
                  </div>
                  <div class="back">
                    <span >
                      <h1 className="row justify-content-center text-primary"
                        style={{ marginLeft: ".1rem" }}
                      >{item.title}</h1>
                    </span>

                    <p className="description" style={{ maxHeight: "7.4em", overflow: "hidden", textOverflow: "ellipsis", textAlign: "center" }}>
                      {item.desc}
                    </p>


                    {/* <div className="col justify-content-center mt-4" style={{ marginTop: "1rem", marginLeft: ".7rem" }}> {/* Utilisation de la classe justify-content-center pour centrer les icônes */}
                    {/* <i className="fab fa-whatsapp mx-2" style={{ fontSize: "26px" }}></i> */}
                    {/* <i className="fab fa-facebook mx-2" style={{ fontSize: "26px" }}></i> */}
                    {/* <i className="fab fa-instagram mx-2" style={{ fontSize: "26px" }}></i> */}
                    {/* <i className="fab fa-tiktok mx-2" style={{ fontSize: "26px" }}></i> */}
                    {/* <i class='fab fa-chrome mx-2' style={{ fontSize: "26px" }}></i> */}

                    {/* </div> */}

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div >



    </>
  );
};

export default Card;