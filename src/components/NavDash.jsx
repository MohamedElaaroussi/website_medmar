import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../Api/config';

export default function NavDash() {
    const navigate = useNavigate();
    const token = localStorage.getItem('user_token');

    const handleLogout = async () => {
        try {
            await axios.post(
                `${API_URL}logout`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
            localStorage.removeItem('user_token');
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (token && 'status_code' != 200) {
            const fetchUser = async () => {
                try {
                    const response = await axios.get(
                        `${API_URL}user`,
                        {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                            },
                        }
                    );
                } catch (error) {
                    console.error(error);
                    // Handle error fetching user data
                }
            };

            fetchUser();  // Corrected: Call fetchUser here

            // Remove the following check, as it's not needed
        } else {
            navigate('/');
        }
    }, [navigate, token]);
  return (
    <div>
 <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Admin Hanane</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <button className="btn btn-success" onClick={handleLogout}>Sign out</button>
    </div>
  </div>
</header>


    </div>
  )
}
