import React from 'react'
import oneImg from '../assets/images/CTA-Img.png'

export default function SectionOne() {
  return (
    <div>
      <div
        className="container-fluid p-0 overflow-hidden bg-brand-primay dark-bg align-items-center"
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              className="img-fit-cover"
              src={oneImg}
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 dark-bg py-5 px-5">
            <h2 className="w-75">
              Energy of a start-up combined with 30 years of experience.
            </h2>
            <a
              href="./careers.html"
              className="btn bg-white px-4 my-4 rounded-pill"
            >
              See Job Vacancies
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
