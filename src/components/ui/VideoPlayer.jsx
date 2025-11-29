"use client";

import { useState, useRef } from 'react';
import styles from './VideoPlayer.module.css';

export default function VideoPlayer({ url, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        onClick={handleVideoClick}
        onEnded={handleVideoEnd}
        preload="metadata"
      >
        <source src={url} type="video/mp4" />
        הדפדפן שלך לא תומך בוידאו.
      </video>
      
      {!isPlaying && (
        <button 
          className={styles.playButton}
          onClick={togglePlay}
          aria-label={`נגן ${title}`}
        >
          <svg 
            width="60" 
            height="60" 
            viewBox="0 0 60 60" 
            fill="none"
          >
            <circle 
              cx="30" 
              cy="30" 
              r="28" 
              fill="rgba(196, 165, 114, 0.95)"
              stroke="white"
              strokeWidth="2"
            />
            <path 
              d="M24 18L24 42L42 30L24 18Z" 
              fill="white"
            />
          </svg>
        </button>
      )}
      
      <div className={styles.controls}>
        <button 
          className={styles.controlButton}
          onClick={togglePlay}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>
    </div>
  );
}
