// components/ServicesSection.js
import React, { useState } from 'react';
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const openModal = (service: string) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
        <div className={styles.serviceList}>
          <div className={styles.serviceItem} onClick={() => openModal('Serviço Local')}>
            <h3>Serviço Local</h3>
            <p>Transporte de carga dentro da região local.</p>
          </div>
          <div className={styles.serviceItem} onClick={() => openModal('Serviço Interestadual')}>
            <h3>Serviço Interestadual</h3>
            <p>Transporte de carga entre estados.</p>
          </div>
          <div className={styles.serviceItem} onClick={() => openModal('Serviço Internacional')}>
            <h3>Serviço Internacional</h3>
            <p>Transporte de carga para destinos internacionais.</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedService}</h2>
            <p>Aqui ficam mais informações acerca do serviço.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
