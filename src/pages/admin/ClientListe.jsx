import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavDash from '../../components/NavDash'
import axios from 'axios';
import API_URL from '../../Api/config';
import API_STORAGE from '../../Api/storage';


export default function ClientListe() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('user_token');
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}clients`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
       setData(data);
        setLoading(false); // Set loading to false when data is received
      });
  }, []);

  const deletClient = (id) => {
    axios
      .delete(`${API_URL}clients/delete/` + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        alert('Successfully Deleted');
      });
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
        <h1 className="h2">Clients</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
        <Link className='btn btn-primary' to={'/dashboard/clients/ajouter'}>
            Ajouter
        </Link>
        </div>
      </div>


      <div className="table-responsive">

        <table className="table table-striped table-sm">

          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((item,index)=> (
                    <tr key={index}>
                
                    <td>
                        <img src={`${API_STORAGE}${item.image}`} height={100} width={100} alt="image"/>
                    </td>
                    <td>
                    <button onClick={() => deletClient(item.id)} className='btn btn-danger'>Supprimer</button>
                    </td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>
</div>
  )
}
