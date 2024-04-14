import axios from 'axios'
import React, { useRef } from 'react'
import API_URL from '../Api/config'

export default function UpdateService() {
    const inputIcon = useRef(null)
    const inputTitle = useRef(null)
    const inputDescription = useRef(null)

    const handleServices = async (e) => {
        e.preventDefault();
        const id = 1;
        const icon = inputIcon.current.value;
        const title = inputTitle.current.value;
        const description = inputDescription.current.value;

        await axios.put(`${API_URL}home-services/edit/${id}`,{
            icon:icon,
            title:title,
            description:description
        },{
            withCredentials:true
        },
        )
        .then(response => {console.log(response)})
        return await  axios.get(`${API_URL}user`,{
            headers: {
              Authorization: `Bearer ${cookies.get("Authorization")}`
            }
          })
    }
  return (
    <div>
        
      <form onSubmit={handleServices}>
        <label>icon</label>
        <input ref={inputIcon} type="text" placeholder='icon' />
        <label>title</label>
        <input ref={inputTitle} type="text" placeholder='title' />
        <label>description</label>
        <input ref={inputDescription} type="text" placeholder='description' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
