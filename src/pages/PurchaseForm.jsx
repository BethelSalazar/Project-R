// src/components/PurchaseForm/PurchaseForm.jsx
import React, { useState } from 'react';
import './PurchaseForm.css';

const PurchaseForm = ({ classData, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Datos del formulario enviados:', { name, email, cardNumber, expirationDate, cvv });
    onClose();
  };

  return (
    <div className="purchase-form-overlay">
      <div className="purchase-form">
        <h2>Comprar {classData.title}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Número de tarjeta:</label>
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
          </div>
          <div>
            <label>Fecha de expiración:</label>
            <input type="text" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} required />
          </div>
          <div>
            <label>CVV:</label>
            <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
          </div>
          <button type="submit">Confirmar Compra</button>
        </form>
        <button onClick={onClose} className="close-button">Cerrar</button>
      </div>
    </div>
  );
};

export default PurchaseForm;


