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
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        setCurrentPage(1); // Reiniciar la página actual al cambiar el término de búsqueda
    
        const filtered = fugitives.filter(fugitive =>
            (fugitive.title && fugitive.title.toLowerCase().includes(searchTerm)) ||
            (fugitive.sex && fugitive.sex.toLowerCase().includes(searchTerm)) ||  
            (fugitive.nationality && fugitive.nationality.toLowerCase().includes(searchTerm))  
            // Puedes agregar más campos aquí para realizar la búsqueda
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
