import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/ImageTextCTA.module.css';

interface ImageTextCTAProps {
  image: string;
  heading: string;
  paragraph: string;
  ctaText: string;
  ctaLink: string;
}

const ImageTextCTA: React.FC<ImageTextCTAProps> = ({ image, heading, paragraph, ctaText, ctaLink }) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.imageWrapper}>
        <Image src={image} alt={heading} width={500} height={300} />
      </div>
      <div className={styles.textWrapper}>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <a href={ctaLink} className="btn btn-primary">
          {ctaText}
        </a>
      </div>
    </motion.div>
  );
};

export default ImageTextCTA;
