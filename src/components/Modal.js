import React from 'react';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={onClose}>
      <img src={imageUrl} alt="Detalle" style={{ display: 'block', margin: 'auto' }} />
    </div>
  );
};

export default Modal;