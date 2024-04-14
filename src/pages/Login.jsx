import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import API_URL from '../Api/config';

export default function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(false);

  // useEffect(() => {
  //   handleSubmit();
  // },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}admin/login-login-admin`,{
      email: email,
      password: password,
    })
    .then((res) => {
      // console.log(res.data)
      if(res.data.status_code == 200){
        localStorage.setItem("user_token",res.data.token)
        navigate('/dashboard')
      }else if(res.data.status_code == 403){
        setError(true)

      }
    })
    .catch((err) => {
      setError(true)
    })
  }
  return (
    <div>
<section className="vh-100" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{ "borderRadius": "1rem" }}>
          <div className="card-body p-5 text-center">
            <h3 className="mb-5">Admin Login</h3>
            {error === true && (
                    <div className="alert alert-danger" role="alert">
                      Les coordonnées sont inconnues
                    </div>
                  )}
            <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" >Email</label>
            </div>

            <div className="form-outline mb-4">
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" >Password</label>
            </div>



            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
