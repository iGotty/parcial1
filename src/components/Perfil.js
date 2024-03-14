
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Perfil = () => {

      
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://65e7f80453d564627a8f8fc6.mockapi.io/user');
                setUserData(response.data);
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
        };

        fetchUserData();
    }, []);

  const useInput = Math.random() < 0.5;

  const renderUserData = (key, value) => {
    return useInput ? (
      <input type="text" value={value} readOnly />
    ) : (
      <p>{value}</p>
    );
  };

  return (
    <div>
      {Object.entries(userData).map(([key, value]) => (
        <div key={key}>
          {renderUserData(key, value)}
        </div>
      ))}
    </div>
  );
};

export default Perfil;
