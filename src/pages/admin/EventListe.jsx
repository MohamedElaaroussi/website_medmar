import React, { useEffect, useState } from 'react'
import NavDash from '../../components/NavDash'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import API_URL from '../../Api/config';
import API_STORAGE from '../../Api/storage';

export default function EventListe() {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('user_token');

    useEffect(() => {
        axios.get(`${API_URL}events`,{
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        .then(({data}) => {
            setData(data);
        })
    },[]);

    const deleteEvent = (id) => {
      axios.delete(`${API_URL}events/delete/`+id,{
        headers: {
          Authorization: `Bearer ${token}`,
      },
      })
      .then(function(response){
        alert('Successfully Deleted');
    })
    }

    const activer = (id) => {
      axios.put(`${API_URL}event/status/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function(response) {
        //  alert('Successfully activated');
        window.location.reload();

      })
      .catch(function(error) {
        console.error('Error activating event:', error);
        // Handle error, display an error message, etc.
      });
    }

    const desactiver = (id) => {
      axios.put(`${API_URL}event/status/desactiver/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function(response) {
        //  alert('Successfully activated');
        window.location.reload();

      })
      .catch(function(error) {
        console.error('Error activating event:', error);
        // Handle error, display an error message, etc.
      });
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
        <h1 className="h2">Events</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
        <Link className='btn btn-primary' to={'/dashboard/events/ajouter'}>
            Ajouter
        </Link>
        </div>
      </div>


      <div className="table-responsive">

        <table className="table table-striped table-sm">

          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">titre</th>
              <th scope="col">date</th>
              <th scope="col">status</th>
              <th scope="col">prix</th>
              <th scope="col">description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((item,index) => (
                    <tr key={index}>
                        <td>
                        <img src={`${API_STORAGE}${item.image}`} height={100} width={100} alt="image"  />
                        </td>
                        <td>{item.titre}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.prix}</td>
                        <td>{item.description}</td>
                        <td>
                        <Link to={`/dashboard/event/modifier/${item.id}`} className='btn btn-success m-1'>modifier</Link>
                        <button onClick={() => deleteEvent(item.id)} className='btn btn-danger'>Supprimer</button>
                        {
                          item.status === "avenir" ? (
                            <button onClick={() => desactiver(item.id)}  className='btn btn-primary m-1'>Desactiver</button>
                          ) : (
                            <button onClick={() => activer(item.id)} className='btn btn-primary m-1'>activer</button>
                          )
                        }
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
