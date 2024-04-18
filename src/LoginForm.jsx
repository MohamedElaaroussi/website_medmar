import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { login } from '../actions/authActions';
import { login } from './Redux/actions/authActions';
const LoginForm = ({ login }) => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const { email, password } = formData;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
    //   setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     [name]: value,
    //   }));
        console.log("Voici Name",name)
        console.log("Voici password",password)
    };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   // Création de l'objet JSON avec les données du formulaire
    //   const jsonData = JSON.stringify({ email, password });
  
    //   // Appel de l'action de connexion en passant les données JSON
    //   login(jsonData);
    // };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    );
  };
  
  export default connect(null, { login })(LoginForm);