import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import API_URL from '../Api/config';
import API_STORAGE from '../Api/storage';

function SectionSiteWeb() {
    // const data = [
    //     {image:"siteweb.png",titre:"Créer un site vitrine",description:"Obtenez une présence en ligne efficace avec un site vitrine professionnel",lien:"https://www.google.com"},
    //     {image:"siteweb2.png",titre:"Créer un site E-commerce",description:"Créez votre boutique en ligne sur mesure avec notre agence web.",lien:"https://www.google.com"},
    //     {image:"siteweb3.png",titre:"Référencement naturel",description:"Occupez la première page de Google avec notre expertise SEO",lien:"https://www.google.com"},
    // ]
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get(`${API_URL}creation-site-web/user`)
      .then(res => {
        setData(res.data)
      })
    },[])
  return (
<div className="container">
  <div className="row">
    {
        data.map((item,index) => (
            <div key={index} className="col-md-4 mb-4">
            <Card >
              <Card.Img variant="top" src={`${API_STORAGE}${item.image}`}  />
              <Card.Body>
                <a href={item.lien} target='_blank' className='btn  my-2 rounded-pill bg-brand-primay'>voir le site</a>
              </Card.Body>
            </Card>
          </div>
        ))
    }
  </div>
</div>

  );
}

export default SectionSiteWeb;