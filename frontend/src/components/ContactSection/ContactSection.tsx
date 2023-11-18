import React from 'react';
import styles from './ContactSection.module.css';
import ContactForm from '../ContactForm/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Entre em Contato</h2>
        <p>
          Preencha o formulário abaixo para entrar em contato conosco.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
