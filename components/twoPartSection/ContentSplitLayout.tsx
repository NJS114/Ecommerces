import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/ContentSplitLayout.module.css';

interface ContentSplitLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const ContentSplitLayout: React.FC<ContentSplitLayoutProps> = ({ leftContent, rightContent }) => {
  return (
    <motion.div
      className={styles.layout}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.left}>{leftContent}</div>
      <div className={styles.right}>{rightContent}</div>
    </motion.div>
  );
};

export default ContentSplitLayout;

