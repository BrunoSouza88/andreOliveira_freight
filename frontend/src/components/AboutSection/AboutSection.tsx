import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Sobre Nós</h2>
        <div className={styles.content}>
          <p>
            Somos uma empresa dedicada ao transporte de carga, oferecendo serviços confiáveis ​​para atender às necessidades dos nossos clientes.
          </p>
          <p>
            Com uma equipe experiente e uma frota de caminhões moderna, garantimos a entrega segura e pontual de suas mercadorias.
          </p>
          {/* Adicione mais informações sobre a empresa conforme necessário */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
