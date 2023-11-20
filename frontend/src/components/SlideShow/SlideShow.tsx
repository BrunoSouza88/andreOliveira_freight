import { SlideshowProps } from '@/app/Interfaces/SlideshowProps';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './SlideShow.module.css';

const Slideshow: React.FC<SlideshowProps> = ({ slideshowData }) => {
  if (!slideshowData || slideshowData.length === 0) {
    return null;
  }

  return (
    <Carousel autoPlay interval={3000} transitionTime={1000} infiniteLoop showThumbs={false} className={styles.carousel}>
      {slideshowData.map((slide) => (
        <div key={slide.id} className={styles.slide}>
          <Image src={slide.imagePath} alt={slide.caption} width={800} height={800} className={styles.image} />
          <p className={`${styles.legend} legend`}>{slide.description}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Slideshow;
