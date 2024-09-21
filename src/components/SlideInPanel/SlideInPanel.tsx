import React from 'react';
import styles from './SlideInPanel.module.css';

interface SlideInPanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const SlideInPanel: React.FC<SlideInPanelProps> = ({ isOpen, onClose, children }) => {
  const handlePanelClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.show : ''}`}
      onClick={onClose}
    >
      <div
        className={`${styles.slideInPanel} ${isOpen ? styles.open : ''}`}
        onClick={handlePanelClick}
      >
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};