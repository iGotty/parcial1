import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; 

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [users, setUsers] = useState([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://65e7f80453d564627a8f8fc6.mockapi.io/user');
        setUsers(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUsers();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const calculateMatrix = () => {
    if (windowWidth > 800) {
      return { rows: 3, columns: 4 };
    } else if (windowWidth > 500) {
      return { rows: 4, columns: 3 };
    } else {
      return { rows: 6, columns: 2 };
    }
  };

  const renderImageGrid = () => {
    const { rows, columns } = calculateMatrix();
    const images = [];

    for (let i = 0; i < rows * columns; i++) {
      const imageUrl = `https://picsum.photos/350?random=${i}`; 
      images.push(
        <img
          src={imageUrl}
          alt="Random"
          key={i}
          onClick={() => handleImageClick(imageUrl)} 
          style={{ cursor: 'pointer' }}
        />
      );
    }

    return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '10px' }}>
        {images}
      </div>
    );
  };

  const handleImageClick = (imageUrl) => {
    setModalImageUrl(imageUrl); 
    setModalVisible(true);
  };

  const handleProfileClick = () => {
    navigate('/perfil');
  };

  return (
    <div>
      <div onClick={() => navigate('/perfil')} style={{ cursor: 'pointer' }}>
        {users.length > 0 && (
          <div>
            <img src={users[currentUserIndex].profile_pic} alt={t('Profile Pic')} />
            <h2>{users[currentUserIndex].username}</h2>
            <p>{users[currentUserIndex].descripcion}</p>
            <div>
              <p>{t('# Followers')}: {users[currentUserIndex].no_seguidores}</p>
              <p>{t('# Following')}: {users[currentUserIndex].no_seguidos}</p>
            </div>
          </div>
        )}
      </div>
      {renderImageGrid()}
      {modalVisible && <Modal imageUrl={modalImageUrl} onClose={() => setModalVisible(false)} />}
    </div>
  );
};

export default Home;