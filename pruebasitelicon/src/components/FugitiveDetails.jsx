// FugitiveDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import './css/FugitiveDetails.css';

const FugitiveDetails = () => {
    const { id } = useParams(); 
    const [fugitive, setFugitive] = useState(null);

    useEffect(() => {
        const fetchFugitiveDetails = async () => {
            try {
                const response = await fetch(`https://api.fbi.gov/@wanted-person/${id}`);
                const data = await response.json();
                setFugitive(data);
            } catch (error) {
                console.error('Error fetching fugitive details:', error);
            }
        };

        fetchFugitiveDetails();
    }, [id]);
    

    if (!fugitive) {
        return <div>Cargando...</div>;
    }

    return (
        
        <div className="fugitive-details">
           
            <div className='contenedor-todo'>
            <Link to="/" className="close-button">&#x2716;</Link>
                <div className='contenedor-arriba'>
                <div className='div-imagen'> 
              <figure className="container-img">
                                {fugitive.images && fugitive.images.length > 0 && (
                                    <img src={fugitive.images[0].thumb} alt={fugitive.title} />
                                )}
                            </figure>
              </div>
              <div className='div-datos'> 
              <h2>{fugitive.title}</h2>
         
         <p>Sex: {fugitive.sex || 'Unknown'}</p>
         <p>Nationality: {fugitive.nationality || 'Unknown'}</p>
         <p>Hair: {fugitive.hair || 'Unknown'}</p>
         <p>Eyes: {fugitive.eyes ? fugitive.eyes : "Unknown"}</p>
                                <p >Age_min: {fugitive.age_min ? fugitive.age_min : "Unknown"}</p>
                                <p >Age_max: {fugitive.age_max ? fugitive.age_max : "Unknown"}</p>
              </div>

                </div>
                <div className='contenedor-abajo'>
              <div className='detalles'>
              <div className='detalles' dangerouslySetInnerHTML={{ __html: fugitive.details || 'Unknown' }}></div>
              </div>
              <div className='contenedor-de-fotos'>

<div className='foto1'>
  {fugitive.images && fugitive.images.length > 0 && fugitive.images[0] && fugitive.images[0].thumb && (
    <img src={fugitive.images[0].thumb} alt={fugitive.title} />
  )}
</div>

<div className='foto2'>
  {fugitive.images && fugitive.images.length > 1 && fugitive.images[1] && fugitive.images[1].thumb && (
    <img src={fugitive.images[1].thumb} alt={fugitive.title} />
  )}
</div>

<div className='foto3'>
  {fugitive.images && fugitive.images.length > 2 && fugitive.images[2] && fugitive.images[2].thumb && (
    <img src={fugitive.images[2].thumb} alt={fugitive.title} />
  )}
</div>

<div className='foto4'>
  {fugitive.images && fugitive.images.length > 3 && fugitive.images[3] && fugitive.images[3].thumb && (
    <img src={fugitive.images[3].thumb} alt={fugitive.title} />
  )}
</div>

</div>

     </div>       

            </div>
         
        </div>
    );
};

export default FugitiveDetails;
