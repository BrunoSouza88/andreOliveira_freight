"use client";

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    originAddress: '',
    destinationAddress: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePlaceholder = () => {
    let placeholder = 'Sua mensagem aqui.';
    if (formData.name) {
      placeholder = `Me chamo ${formData.name} e gostaria de fazer um orçamento para o frete de origem: ${formData.originAddress} para o destino: ${formData.destinationAddress}.`;
    }
    return placeholder;
  };


  const generateWhatsAppLink = () => {
    const phoneNumber = '+5581992820928';
    const name = encodeURIComponent(formData.name);
    const contact = encodeURIComponent(formData.email);
    const telephone = encodeURIComponent(formData.telephone);
    const originAddress = encodeURIComponent(formData.originAddress);
    const destinationAddress = encodeURIComponent(formData.destinationAddress);
    const userMessage = encodeURIComponent(formData.message || `Me chamo ${formData.name} e gostaria de fazer um orçamento para o frete de origem: ${formData.originAddress} para o destino: ${formData.destinationAddress}.`);

    const fullMessage = `Nome: ${name}%0AE-mail: ${contact}%0ATelefone: ${telephone}%0AOrigem: ${originAddress}%0ADestino: ${destinationAddress}%0A%0AMensagem: ${userMessage}`;

    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${fullMessage}`;
  };

  const handleSendMessage = () => {
    const whatsappLink = generateWhatsAppLink();
    window.open(whatsappLink, '_blank');
    // resetForm();
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSendMessage}>
      <div className={`${styles.formGroup} ${styles.label}`}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={`${styles.formGroup} ${styles.label}`}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}/>
      </div>
      <div className={`${styles.formGroup} ${styles.label}`}>
        <label htmlFor="telephone">Telefone:</label>
        <input
          type="tel" 
          id="telephone"
          name="telephone"
          className={styles.input}
          value={formData.telephone}
          onChange={handleChange}
          required
        />
      </div>
      <div className={`${styles.formGroup} ${styles.label}`}>
        <label htmlFor="originAddress">Endereço de Origem:</label>
        <input
          type="text"
          id="originAddress"
          name="originAddress"
          className={styles.input}
          value={formData.originAddress}
          onChange={handleChange}
        />
      </div>
      <div className={`${styles.formGroup} ${styles.label}`}>
        <label htmlFor="destinationAddress">Endereço de Destino:</label>
        <input
          type="text"
          id="destinationAddress"
          name="destinationAddress"
          className={styles.input}
          value={formData.destinationAddress}
          onChange={handleChange}
        />
      </div>
      <div className={`${styles.formGroup} ${styles.label}`}>
        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          placeholder={generatePlaceholder()}
        />
      </div>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <button
          type="submit"
          className={styles.button}>Enviar Mensagem
        </button>
      </a>
    </form>
  );
};

export default ContactForm;
