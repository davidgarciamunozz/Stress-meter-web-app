import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.header}>
      <Link to="/Stress-meter-web-app/" style={styles.link}>
        <h2 style={styles.title}>Ecocampus</h2>
      </Link>
      <div style={styles.menuContainer}>
        <button onClick={toggleMenu} style={styles.menuButton}>
          <Menu size={24} color="white" />
        </button>
        {isMenuOpen && (
          <nav style={styles.nav}>
            <Link to="/Stress-meter-web-app/" style={styles.navLink} onClick={toggleMenu}>Inicio</Link>
            <Link to="/Stress-meter-web-app/ecocampus" style={styles.navLink} onClick={toggleMenu}>¿Qué es Ecocampus?</Link>
            <Link to="/Stress-meter-web-app/test" style={styles.navLink} onClick={toggleMenu}>Hacer Test</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: '#3E81D9',
    color: 'white',
    padding: '1.5rem 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'white', 
  },
  menuContainer: {
    position: 'relative',
  },
  menuButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  nav: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#3E81D9',
    padding: '1rem',
    borderRadius: '0 0 0 5px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default NavBar;