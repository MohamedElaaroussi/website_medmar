import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NavDash from '../../components/NavDash'
import axios from 'axios';
import API_URL from '../../Api/config';

export default function ModifierSiteWeb() {
  const navigate = useNavigate();
  const [lien, setLien] = useState('');
  const [image, setImage] = useState('');
  const token = localStorage.getItem('user_token');
  const { id } = useParams();
  const [error, setError] = useState(null);

  const uploadSite = async () => {
    try {
      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('lien', lien);
      formData.append('image', image);

      await axios.post(`${API_URL}update-site-web/` + id, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      setTimeout(() => {
        navigate('/dashboard/site-web');
      }, 1000);
    } catch (error) {
      // Handle and display the error
      setError('An error occurred while updating the site.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear previous errors
    setError(null);
    await uploadSite();
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
        <h1 className="h2">Modifier SiteWeb</h1>

      </div>


<form onSubmit={handleSubmit} encType="multipart/form-data">
{error && <div className='alert alert-danger'>tous les champs sont obligatoires</div>}

<div className="mb-3 mt-3" >
    <label  className="form-label">Lien de site web:</label>
    <input onChange={(e)=>setLien(e.target.value)}   type="text" className="form-control"   name="lien"/>
</div>
  <div className="mb-3 mt-3" >
    <label  className="form-label">Image:</label>
    <input onChange={(e)=>setImage(e.target.files[0])}   type="file" className="form-control"   name="image"/>
    <p className='text-danger mt-1'>size:600x400</p>
  </div>

  <button type="submit" className="btn btn-success">Modifier</button>
</form>

    </main>
  </div>
</div>
</div>
  )
}
