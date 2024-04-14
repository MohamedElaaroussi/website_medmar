import React, { useState }  from 'react'
import NavDash from '../../components/NavDash'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import API_URL from '../../Api/config';


export default function HeroModifier() {
    const navigate = useNavigate();
    const [image, setImage] = useState();
    const [titre, setTitre] = useState();
    const [description, setDescription] = useState();
    const token = localStorage.getItem('user_token');
    const {id} = useParams();
    const [error, setError] = useState(null);

    const uploadHero = async () => {
      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('image', image);
      formData.append('titre', titre);
      formData.append('description', description);
    
      try {
        const response = await axios.post(`${API_URL}hero/modifier/` + id, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });    
        setTimeout(() => {
          navigate('/dashboard/hero');
        }, 1000);
      } catch (error) {
        // Handle errors here
        if (error.response) {
          setError(error.response.data.message); // Assuming the error response has a 'message' property
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      }
    };
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        await uploadHero();
    
    }
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
        <h1 className="h2">Modifier Hero</h1>
        <div className="btn-toolbar mb-2 mb-md-0">

        </div>
      </div>


<form onSubmit={handleSubmit}>
{error && <div className='alert alert-danger'>{error}</div>}

  <div className="mb-3 mt-3" encType="multipart/form-data">
    <label  className="form-label">Image:</label>
    <input onChange={(e)=>setImage(e.target.files[0])} type="file" className="form-control"   name="image"/>
    <p className='text-danger mt-1'>size:621x493</p>
  </div>

  <div className="mb-3 mt-3">
    <label  className="form-label">Titre:</label>
    <input onChange={(e)=>setTitre(e.target.value)} type="text" className="form-control"   name="titre"/>
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
