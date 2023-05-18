import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CircularProgress from '@mui/material/CircularProgress';
import './ScrollToTop.css';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => { 
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percent = (winScroll / height) * 100;
      setProgress(percent);
    }
      
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top'>
        <ArrowUpwardIcon fontSize='large' />
        <CircularProgress variant="determinate" value={progress} />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
