"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import styles from './page.module.css';
import AboutSection from '@/components/AboutSection/AboutSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import Slideshow from '@/components/SlideShow/SlideShow';
import { slideshow } from '../../public/IMGS/IMGS';
import { Slide } from './Interfaces/Slide';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';


const Page = () => {

  const [slideshowData, setSlideshowData] = useState<Slide[]>([]);

  useEffect(() => {
    const fetchSlideshowData = async () => {
      try {
        console.log(slideshow);
        
        setSlideshowData(slideshow);
      } catch (error) {
        
      }
    };

    fetchSlideshowData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={`${styles.description} ${styles.section}`}>
        <Header />
        <Slideshow slideshowData={slideshowData}/>
        <ScrollToTop />
        <AboutSection />
      </div>
      <div className={`${styles.section} ${styles.aboutSection}`}>
        <ServicesSection />
      </div>
      <div className={`${styles.section} ${styles.servicesSection}`}>
        <ContactSection />
      </div>
    </main>
  );
}

export default Page;
