import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Link to="/" style={styles.link}>
      <header style={styles.header}>
        <h2 style={styles.title}>Ecocampus</h2>
      </header>
    </Link>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: '#7EB2EC',
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
    textDecoration: 'none', // Elimina el subrayado
    color: 'white', 
  },
};

export default NavBar;
