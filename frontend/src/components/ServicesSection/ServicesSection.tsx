// components/ServicesSection.js
import React from 'react';
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
        <div className={styles.serviceList}>
          <div className={styles.serviceItem}>
            <h3>Serviço Local</h3>
            <p>Transporte de carga dentro da região local.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Serviço Interestadual</h3>
            <p>Transporte de carga entre estados.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Serviço Internacional</h3>
            <p>Transporte de carga para destinos internacionais.</p>
          </div>
          {/* Adicione mais serviços conforme necessário */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
