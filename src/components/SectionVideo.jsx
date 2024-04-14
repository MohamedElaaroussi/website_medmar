import React, { useEffect, useState } from 'react'
import '../video.css'
import axios from 'axios';
import API_URL from '../Api/config';


export default function SectionVideo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}youtube-url/user`)
    .then(res => {
      setData(res.data)
    })
  },[])
  return (
    <div>
     <div className="ratio ratio-16x9">
      {
        data.map((item,index) => (
              <iframe key={index} src={`https://www.youtube.com/embed/${item.lien}`} title="YouTube video" ></iframe>
        ))
      }
</div>
    </div>
  )
}
