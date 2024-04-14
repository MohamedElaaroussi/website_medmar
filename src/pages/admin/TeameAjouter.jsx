import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../Api/config';
import NavDash from '../../components/NavDash';

export default function TeameAjouter() {
    const navigate = useNavigate();
    const [image, setImage] = useState('');
    const [nom, setNom] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const token = localStorage.getItem('user_token');

    const uploadTeam = async () => {
        try {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('nom', nom);
            formData.append('role', role);

            const response = await axios.post(`${API_URL}teams/ajouter`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response) {
                setTimeout(() => {
                    navigate('/dashboard/teams');
                }, 1000);
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setError(error.response.data.message || 'An error occurred');
            } else if (error.request) {
                // The request was made but no response was received
                setError('No response received from the server');
            } else {
                // Something happened in setting up the request that triggered an Error
                setError('An unexpected error occurred');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        await uploadTeam();
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
        <h1 className="h2">ajouter employé</h1>

      </div>


<form onSubmit={handleSubmit} >
{error && <div className='alert alert-danger'>{error}</div>}

   <div className="mb-3 mt-3" >
    <label  className="form-label">Nom:</label>
    <input onChange={(e)=>setNom(e.target.value)} type="text" className="form-control"   name="nom"/>
  </div>
  <div className="mb-3 mt-3" >
    <label  className="form-label">Role:</label>
    <input onChange={(e)=>setRole(e.target.value)} type="text" className="form-control"   name="role"/>
  </div>
  <div className="mb-3 mt-3" >
    <label  className="form-label">Image:</label>
    <input onChange={(e)=>setImage(e.target.files[0])} type="file" className="form-control"   name="image"/>
    <p className='text-danger mt-1'>size:290x521</p>
  </div>

  <button type="submit" className="btn btn-primary">Ajouter</button>
</form>

    </main>
  </div>
</div>
    </div>
  )
}
