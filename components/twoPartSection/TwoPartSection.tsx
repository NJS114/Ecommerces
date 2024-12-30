import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/TwoPartSection.module.css';  // Importer le fichier CSS Module

interface TwoPartSectionProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const TwoPartSection: React.FC<TwoPartSectionProps> = ({
  image,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
}) => {
  // Définir les animations pour l'image et le texte
  const imageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  return (
    <div className={styles['two-part-section']}>
      {/* Partie gauche : image */}
      <motion.div
        className={styles['image-container']}
        initial="initial"
        animate="animate"
        variants={imageVariants}
      >
        <img src={image} alt={title} className={styles['section-image']} />
      </motion.div>

      {/* Partie droite : texte et bouton */}
      <motion.div
        className={styles['text-container']}
        initial="initial"
        animate="animate"
        variants={textVariants}
      >
        <h2 className={styles['section-title']}>{title}</h2>
        <h3 className={styles['section-subtitle']}>{subtitle}</h3>
        <p className={styles['section-description']}>{description}</p>
        <a href={buttonLink} className={`${styles['btn']} btn-success`}>
          {buttonText}
        </a>
      </motion.div>
    </div>
  );
};

export default TwoPartSection;
