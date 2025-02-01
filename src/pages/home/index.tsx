import React from 'react';
import styles from './Home.module.css';
import HeroSection from '../../components/organism/heroSection';

interface Props {
}

const Home : React.FC<Props> = () => { 
  return (
    <HeroSection />
  )
}

export default Home