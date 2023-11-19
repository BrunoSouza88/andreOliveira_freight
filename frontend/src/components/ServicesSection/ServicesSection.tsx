import React, { useState } from 'react';
import styles from './ServicesSection.module.css';
import { services } from '../../app/utils/ServicesOffered/services';

const ServicesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [serviceInfo, setServiceInfo] = useState<{ title: string, description: string } | null>(null);

  const openModal = (service: { title: string, description: string }) => {
    setSelectedService(service.title);
    setServiceInfo(service);
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
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem} onClick={() => openModal(service)}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <h2 className={styles.h2Service}>{selectedService}</h2>
            <p className={styles.pService}>{serviceInfo?.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
