import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import axios from 'axios';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [users, setUsers] = useState([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

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

  const renderImageGrid = () => {
    const columns = windowWidth > 800 ? 4 : windowWidth > 500 ? 3 : 2;
    const rows = Math.ceil(12 / columns);
    const images = [];

    for (let i = 0; i < rows * columns; i++) {
      images.push(<img src={`https://picsum.photos/350?random=${i}`} alt="Random" key={i} />);
    }

    return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {images}
      </div>
    );
  };

const [modalVisible, setModalVisible] = useState(false);

const handleImageClick = () => {
setModalVisible(true);

};

return (
    <div>
        <div>
            {users.length > 0 ? (
                <div>
                    <img
                        src={users[currentUserIndex].profile_pic}
                        alt="Profile Pic"
                        onClick={handleImageClick}
                    />
                    <h1>username: {users[currentUserIndex].username}</h1>
                    <p>nombre_completo: {users[currentUserIndex].nombre_completo}</p>
                    <p>URL_pagina_personal: {users[currentUserIndex].URL_pagina_personal}</p>
                    <p>Descripcion: {users[currentUserIndex].descripcion}</p>
                    <p>no_posts: {users[currentUserIndex].no_posts}</p>
                    <p>no_seguidores: {users[currentUserIndex].no_seguidores}</p>
                    <p>no_seguidos: {users[currentUserIndex].no_seguidos}</p>
                </div>
            ) : (
                <p>Cargando usuarios...</p>
            )}
        </div>
        {renderImageGrid()}
    </div>
);
};

export default Home;