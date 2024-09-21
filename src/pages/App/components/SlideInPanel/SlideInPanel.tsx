import React from 'react';
import styles from './SlideInPanel.module.css';

interface SlideInPanelProps {
  handleClose: () => void;
  url: string;
}

export const SlideInPanel: React.FC<SlideInPanelProps> = ({ handleClose, url }) => {
  const handlePanelClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleClose}
    >
      <div
        className={styles.slideInPanel}
        onClick={handlePanelClick}
      >
        <button onClick={handleClose}>Close</button>
        <iframe src={url} className={styles.iframe} title="Slide In Panel Content" />
      </div>
    </div>
  );
};