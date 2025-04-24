import React from 'react';

const Banner = () => {
  return (
    <header style={styles.banner}>
      <h1 style={styles.title}>Sextant</h1>
    </header>
  );
};

const styles = {
  banner: {
    backgroundColor: '#282c34',
    padding: '1rem',
    color: 'white',
    textAlign: 'center',
    borderBottom: '2px solid #61dafb',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
};

export default Banner;
