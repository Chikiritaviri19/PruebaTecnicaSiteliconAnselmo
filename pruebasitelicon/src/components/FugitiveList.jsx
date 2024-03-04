// FugitiveList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from './Pagination';

import './css/FugitiveList.css';
import './css/SearchBar.css';

export const FugitiveList = () => {
    const [fugitives, setFugitives] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredFugitives, setFilteredFugitives] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const fugitivesPerPage = 8;

    const fugitiveList = async () => {
        try {
            const data = await fetch('https://api.fbi.gov/wanted/v1/list');
            const response = await data.json();
            const fugitivesData = response.items && Array.isArray(response.items) ? response.items : [];
            setFugitives(fugitivesData);
            setFilteredFugitives(fugitivesData);
        } catch (error) {
            console.error('Error fetching fugitives:', error);
        }
    };

    useEffect(() => {
        fugitiveList();
    }, []);

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        setCurrentPage(1); // Reiniciar la página actual al cambiar el término de búsqueda
    
        const filtered = fugitives.filter(fugitive =>
            (fugitive.title && fugitive.title.toLowerCase().includes(searchTerm)) ||
            (fugitive.sex && fugitive.sex.toLowerCase().includes(searchTerm)) ||  
            (fugitive.nationality && fugitive.nationality.toLowerCase().includes(searchTerm))  ||
            (fugitive.hair && fugitive.hair.toLowerCase().includes(searchTerm)) ||
            (fugitive.eyes && fugitive.eyes.toLowerCase().includes(searchTerm)) ||
            (fugitive.age_min && fugitive.age_min.toString().toLowerCase().includes(searchTerm)) ||
            (fugitive.age_max && fugitive.age_max.toString().toLowerCase().includes(searchTerm))
        );
        setFilteredFugitives(filtered);
    };
    
    const lastIndex = currentPage * fugitivesPerPage;
    const firstIndex = lastIndex - fugitivesPerPage;
    const currentFugitives = filteredFugitives.slice(firstIndex, lastIndex);

    return (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Buscar..." 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    className=''
                />
            </div>
            <div className="container-fugitives">
                {currentFugitives.map(fugitive => (
                    <div key={fugitive.uid} className="card-fugitive">
                        <Link to={`/fugitives/${fugitive.uid}`} className="card-link"> {/* Enlace al detalle del fugitivo */}
                            <figure className="container-img">
                                {fugitive.images && fugitive.images.length > 0 && (
                                    <img src={fugitive.images[0].thumb} alt={fugitive.title} />
                                )}
                            </figure>
                            <div className="info-fugitive">
                                <h3>{fugitive.title}</h3>
                                <p className='sex'>Sex: {fugitive.sex ? fugitive.sex : "Unknown"}</p>
                                <p className='sex'>Nationality: {fugitive.nationality ? fugitive.nationality : "Unknown"}</p>
                                <p className='sex'>Hair: {fugitive.hair ? fugitive.hair : "Unknown"}</p>
                                <p className='sex'>Eyes: {fugitive.eyes ? fugitive.eyes : "Unknown"}</p>
                                <p className='sex'>Age_min: {fugitive.age_min ? fugitive.age_min : "Unknown"}</p>
                                <p className='sex'>Age_max: {fugitive.age_max ? fugitive.age_max : "Unknown"}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination 
                fugitivesPerPage={fugitivesPerPage} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                totalFugitives={filteredFugitives.length} 
            />
        </>
    );
};
