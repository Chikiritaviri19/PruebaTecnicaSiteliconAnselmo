import React, { useEffect, useState } from 'react';
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
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reiniciar la página actual al cambiar el término de búsqueda
    };

    useEffect(() => {
        const filtered = fugitives.filter(fugitive =>
            fugitive.title.toLowerCase().includes(searchTerm.toLowerCase())||
            fugitive.sex.toLowerCase().includes(searchTerm) ||  // Agregar búsqueda por género
          fugitive.nationality.toLowerCase().includes(searchTerm)  // Agregar búsqueda por nacionalidad
        );
        setFilteredFugitives(filtered);
    }, [searchTerm, fugitives]);

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
                        <figure className="container-img">
                            {fugitive.images && fugitive.images.length > 0 && (
                                <img src={fugitive.images[0].thumb} alt={fugitive.title} />
                            )}
                        </figure>
                        <div className="info-fugitive">
                            <h3>{fugitive.title}</h3>
                            <p className='sex'>{fugitive.sex}</p>
                            <p className='sex'>{fugitive.nationality}</p>
                        </div>
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
