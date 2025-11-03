import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>Mi Tienda</h2>
      <ul style={styles.menu}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <CartWidget />
      </ul>
    </nav>
  )
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#333', color: 'white' },
  title: { margin: 0 },
  menu: { display: 'flex', gap: '20px', listStyle: 'none', alignItems: 'center' }
}

export default NavBar