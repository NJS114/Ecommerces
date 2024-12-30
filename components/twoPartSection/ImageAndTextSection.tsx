import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/ImageAndTextSection.module.css';

interface ImageAndTextSectionProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const   ImageAndTextSection: React.FC<ImageAndTextSectionProps> = ({ imageSrc, title, subtitle, description, buttonText, buttonLink }) => {
  return (
    <motion.div
      className={styles.section}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={title} width={600} height={400} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        <p className={styles.description}>{description}</p>
        {buttonText && buttonLink && (
          <a href={buttonLink} className="btn btn-primary">
            {buttonText}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ImageAndTextSection;
