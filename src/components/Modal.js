import React from 'react';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
      <img src={imageUrl} alt="Detalle" style={{ maxWidth: '120%', maxHeight: '120%' }} />
    </div>
  );
};


export default Modal;