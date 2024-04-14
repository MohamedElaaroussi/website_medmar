import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API_URL from '../Api/config';
import API_STORAGE from '../Api/storage';
import { Rating } from '@mui/material';
export default function ListeEvent() {
  // const data = [
  //     {id:1,image:"eve.png",titre:"Titre de l'evenment",date:"lundi, 25 décembre 2023",icon:"terminer"},
  //     {id:2,image:"eve.png",titre:"Titre de l'evenment",date:"lundi, 25 décembre 2023",icon:"terminer"},
  //     {id:3,image:"eve.png",titre:"Titre de l'evenment",date:"lundi, 25 décembre 2023",icon:"terminer"},
  //     {id:4,image:"eve.png",titre:"Titre de l'evenment",date:"lundi, 25 décembre 2023",icon:"terminer"},
  //     {id:5,image:"eve.png",titre:"Titre de l'evenment",date:"lundi, 25 décembre 2023",icon:"terminer"},
  //     {id:6,image:"eve.png",titre:"Titre de l'evenment",date:"lundi, 25 décembre 2023",icon:"avenir"},
  //     {id:7,image:"eve.png",titre:"Titre de l'evenment",date:"lundi, 25 décembre 2023",icon:"avenir"}
  //   ]
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}events/user`)
      .then(res => {
        setData(res.data)
      })
  }, [])
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-col-lg-3 row-cols-xl-4 justify-content-center">
            {
              //   data.map((item, index) => (
              //     <div key={index} className="col mb-5">
              //       <div className="card h-100">
              //         {item.status === "avenir" ? (
              //           <div className="badge bg-success text-white position-absolute">{item.status}</div>
              //         ) : (
              //           <div className="badge bg-danger text-white position-absolute">{item.status}</div>
              //         )}
              //         <img className="card-img-top" src={`${API_STORAGE}${item.image}`} alt="" />
              //         <div className="card-body p-4">
              //           <div className="text-center">
              //             <h5 className="fw-bolder">{item.titre}</h5>
              //             {/* <div className="d-flex justify-content-center small text-warning mb-2">
              //     <div className="bi-star-fill"></div>
              //     <div className="bi-star-fill"></div>
              //     <div className="bi-star-fill"></div>
              //     <div className="bi-star-fill"></div>
              //     <div className="bi-star-fill"></div>
              // </div> */}
              //             {item.date}
              //           </div>
              //         </div>
              //         <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              //           <div className="text-center">
              //             <Link to={`/événementiel/detail/${item.id}`} className="btn  my-2 rounded-pill bg-brand-primay">
              //               Voire plus
              //             </Link>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //   ))
            }
            {
              data.map((item, index) =>
                <div key={index} className="card ">
                  <div className="profile-pic">
                    <img src={`${API_STORAGE}${item.image}`} alt=" Profile Pic" />
                  </div>
                  <div className="conteneur">
                    {item.status === "avenir" ? (
                      <div className="badge bg-success text-white">{item.status}</div>
                    ) : (
                      <div className="badge bg-danger text-white">{item.status}</div>
                    )}
                  </div>
                  <div className="details">
                    <div className="content">
                      <h2>{item.titre}</h2>
                      {/* <p className="tag">{item.titre}</p> */}
                      <p className="about">
                        {item.date}
                      </p>
                    </div>

                    <div className="buttons">
                      <div className="social">

                        <Rating name="half-rating" defaultValue={4.5} precision={0.5} />


                      </div>
                      <Link to={`/événementiel/detail/${item.id}`} href="#" className="link">

                        Views
                        <i className="fa-solid fa-up-right-from-square">
                        </i>
                      </Link>
                    </div>

                  </div>

                </div>
              )
            }

          </div>
        </div>
      </section>
    </div>
  )
}
