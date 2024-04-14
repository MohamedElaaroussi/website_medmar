import React, { useState } from 'react';
import NavDash from '../../components/NavDash';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../Api/config';
import { Link } from 'react-router-dom';

export default function EventModifier() {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [titre, setTitre] = useState();
  const [date, setDate] = useState();
  const [status, setStatus] = useState();
  const [prix, setPrix] = useState();
  const [description, setDescription] = useState();
  const [error, setError] = useState(null); // Add this line
  const token = localStorage.getItem('user_token');
  const { id } = useParams();

  const uploadEvent = async () => {
    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('image', image);
    formData.append('titre', titre);
    formData.append('date', date);
    formData.append('status', status);
    formData.append('prix', prix);
    formData.append('description', description);

    try {
      const response = await axios.post(`${API_URL}events/modifier/`+id, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(response);

      setTimeout(() => {
        navigate('/dashboard/events');
      }, 1000);
    } catch (error) {
      // Handle errors here
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);

        setError(error.response.data.message); // Assuming the error response has a 'message' property
      } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear the previous error
    await uploadEvent();
  };

  return (
<div>
<NavDash />
<div className="container-fluid">
  <div className="row">
  <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
      <ul className="nav flex-column">
          <li className="nav-item">
            <Link to={'/dashboard'} className="nav-link active text-white" aria-current="page" href="#">
              <span data-feather="home" className="align-text-bottom "></span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to={'/dashboard/realisation'}>
              <span data-feather="home" className="align-text-bottom"></span>
              Realisation
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to={'/dashboard/site-web'}>
              <span data-feather="home" className="align-text-bottom"></span>
              Site Web
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to={'/dashboard/youtube'}>
              <span data-feather="home" className="align-text-bottom"></span>
              Video 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to={'/dashboard/teams'}>
              <span data-feather="home" className="align-text-bottom"></span>
              Teams Work 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to={'/dashboard/events'}>
              <span data-feather="home" className="align-text-bottom"></span>
              Events 
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to={'/dashboard/clients'}>
              <span data-feather="home" className="align-text-bottom"></span>
              Clients 
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to={'/dashboard/hero'}>
              <span data-feather="home" className="align-text-bottom"></span>
              Hero 
            </Link>
          </li>
        </ul>



      </div>
    </nav>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Modifier Event</h1>
        <div className="btn-toolbar mb-2 mb-md-0">

        </div>
      </div>


      <form onSubmit={handleSubmit}>
      {error && <div className='alert alert-danger'>{error}</div>}

  <div className="mb-3 mt-3" encType="multipart/form-data">
    <label  className="form-label">Image:</label>
    <input onChange={(e)=>setImage(e.target.files[0])} type="file" className="form-control"   name="image"/>
    <p className='text-danger mt-1'>size:450x300</p>
  </div>

  <div className="mb-3 mt-3">
    <label  className="form-label">Titre:</label>
    <input onChange={(e)=>setTitre(e.target.value)} type="text" className="form-control"   name="titre"/>
  </div>

  <div className="mb-3 mt-3">
    <label  className="form-label">Date:</label>
    <input onChange={(e)=>setDate(e.target.value)} type="text" className="form-control"   name="date"/>
  </div>

  <div className="mb-3 mt-3">
    <label  className="form-label">Status:</label>
    <input onChange={(e)=>setStatus(e.target.value)} type="text" className="form-control"   name="status"/>
  </div>

  <div className="mb-3 mt-3">
    <label  className="form-label">Prix:</label>
    <input onChange={(e)=>setPrix(e.target.value)} type="text" className="form-control"   name="prix"/>
  </div>

  <div className="mb-3 mt-3">
    <label  className="form-label">Description:</label>
    <input onChange={(e)=>setDescription(e.target.value)} type="text" className="form-control"   name="description"/>
  </div>

  <button type="submit" className="btn btn-success">Modifier</button>
</form>

    </main>
  </div>
</div>
</div>
  )
}
