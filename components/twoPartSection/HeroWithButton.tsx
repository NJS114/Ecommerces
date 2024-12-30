import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/HeroWithButton.module.css';

interface HeroWithButtonProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
}

const HeroWithButton: React.FC<HeroWithButtonProps> = ({ backgroundImage, title, subtitle, buttonText, buttonLink }) => {
  return (
    <motion.div
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <a href={buttonLink} className="btn btn-secondary">
          {buttonText}
        </a>
      </div>
    </motion.div>
  );
};

export default HeroWithButton;
