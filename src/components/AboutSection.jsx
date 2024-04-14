import React from 'react'
import Service1 from '../assets/images/service-featureImg1.png'
import API_URL from '../Api/config';
import axios from 'axios';
import { useState, useEffect } from 'react';
import API_STORAGE from '../Api/storage';
import vidéo1 from "../assets/Video/video_Logo.mp4"


export default function AboutSection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}hero-home/user`)
      .then(res => {
        setData(res.data)
      })
  }, [])

  return (
    <div className='container'>
      {
        data.map((item, index) => (
          <div key={index} className="col-12">
            <div className="row gx-5 gy-3 align-items-center">
              <div
                className="col-12 col-md-12 p-3 p-lg-5 position-relative order-md-1 order-2"
              >
                <div className="position-relative">
                  <div
                    className="overlay-img--cubeSm p-lu position-absolute b-6"
                  ></div>
                  {/* <img
                  className="img-fit-cover b-6 "
                  src={`${API_STORAGE}${item.image}`}               
                  alt=""
                /> */}
                  <video className="img-fit-cover b-6 w-10" src={vidéo1}
                   autoPlay muted loop style={{ maxWidth: "100%", maxheight: "25rem" }}></video>
                </div>
              </div>
              
            </div>
          </div>
        ))
      }
    </div>
  )
}
