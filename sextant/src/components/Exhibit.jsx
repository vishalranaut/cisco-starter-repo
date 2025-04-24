import React from 'react';

const Exhibit = ({ title, children }) => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>{title}</h2>
      <div style={styles.content}>
        {children}
      </div>
    </section>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    marginBottom: '0.5rem',
    color: '#333',
  },
  content: {
    paddingLeft: '1rem',
  },
};

export default Exhibit;
