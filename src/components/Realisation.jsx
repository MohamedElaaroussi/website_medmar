import React from 'react'
import Img from '../assets/images/AboutUs-AbtSec.png'

export default function Realisation() {
  const works =  [
    {image:Img, span:'Support Assist', title:'Selby Stuart', paragraphe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {image:Img, span:'Support Assist', title:'Selby Stuart', paragraphe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {image:Img, span:'Support Assist', title:'Selby Stuart', paragraphe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {image:Img, span:'Support Assist', title:'Selby Stuart', paragraphe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {image:Img, span:'Support Assist', title:'Selby Stuart', paragraphe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {image:Img, span:'Support Assist', title:'Selby Stuart', paragraphe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {image:Img, span:'Support Assist', title:'Selby Stuart', paragraphe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {image:Img, span:'Support Assist', title:'Selby Stuart', paragraphe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  ]
  return (
    <div>
       <div className="container-fluid light-bg mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <h2>Teamwork is the only way we work</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et, mattis
                purus. Vivamus commodo suscipit tellus et pellentesque.
              </p>
            </div>
            <div className="col-12">
              <div
                className="row mt-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4"
              >
          {
            works.map((item,index) => (
              <div className="col overflow-hidden b-6 team-post">
              <div className="overflow-hidden position-relative b-6">
                <img
                  className="img-fit-cover b-6"
                  src={Img}
                  alt=""
                  srcset=""
                />
                <div className="team-detail b-6 p-3 p-lg-4">
                  <span className="cl-white opacity-75">Support Assist</span>
                  <h4 className="cl-white my-2">Selby Stuart</h4>
                  <p className="cl-white opacity-75 my-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet eros.
                  </p>
                </div>
              </div>
            </div>
      
            ))
          }


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
