import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ResidentItem = ({url}) => {

    const [ resident, setResident ] = useState({});

    useEffect(() => {
        axios.get(url)
        .then((res) => setResident(res.data));
      }, [url]);

      //console.log(resident)

    return (

        <li>
            <div className="card">
                <img
                src={resident.image}
                alt=""
                />
                <div className='card-info'>
                    <h3>Name: <b>{resident.name}</b></h3>
                    <h3>Status: <b>{resident.status} {resident.species}</b></h3>
                    <h3>Episodes where appear: <b>{resident.episode?.length}</b></h3>
                </div>
            </div>
      </li>
    );
};

export default ResidentItem;
