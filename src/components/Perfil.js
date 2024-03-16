import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

const Perfil = () => {
  const navigate = useNavigate(); 
  const [userData, setUserData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://65e7f80453d564627a8f8fc6.mockapi.io/user');
        setUserData(response.data[0]); 
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, []);

  const renderUserData = (key, value) => {
    const useInput = Math.random() < 0.5; 

    return useInput ? (
      <div key={key}>
        <label>{key}: <input type="text" value={value} readOnly /></label>
      </div>
    ) : (
      <p key={key}>{key}: {value}</p>
    );
  };

  return (
    <div>
      {userData && Object.entries(userData).map(([key, value]) => renderUserData(key, value))}
      <button className="btn btn-primary" onClick={() => {}}>{t('Save changes')}</button>
      <button className="btn btn-secondary" onClick={() => navigate('/')}>{t('Go to Home')}</button>
    </div>
  );
};

export default Perfil;
