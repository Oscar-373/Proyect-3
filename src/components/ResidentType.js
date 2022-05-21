import React from 'react';
import ResidentItem from './ResidentItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ResidentType = () => {

    const [residentType, setResidentType] = useState({});
    const [id, setId] = useState("");

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
          .then((res) => setResidentType(res.data));
      }, []);

      //console.log(residentType)

      const searchType = () => {
        console.log(id);
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
          .then((res) => setResidentType(res.data));
      };

    return (
        <div>
            <img src="https://static2.srcdn.com/wordpress/wp-content/uploads/2020/09/Rick-and-Morty-teleportation-portal.jpg" alt="" className='img-banner' />
                <div className='header'>
                    <h1>Rick and Morty Wiki</h1>
                    <h2>{residentType.name}</h2>
                    <div className='button'>
                        <input type="text" placeholder="Escribe" onChange={(e) => setId(e.target.value)} value={id} />
                        <button onClick={searchType}>Buscar</button>
                    </div>
                    <div className='sub-header'>
                        <h2>Type: {residentType.type}</h2>
                        <h2>Dimension: {residentType.dimension}</h2>
                        <h2>Population: {residentType.residents?.length}</h2>
                    </div>
                    
                </div>
                <div>
                    <ul className='resident-list'>
                        {residentType.residents?.map((resident) => (
                            <ResidentItem url={resident} />
                        ))}
                    </ul>
                </div>
        </div>
    );
};

export default ResidentType;