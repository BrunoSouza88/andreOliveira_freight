import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
            <h3 className={styles.h3Name}>Andre Oliveira Frete</h3>
        <ul className={styles.navList}>
          <li>
            <Link legacyBehavior href="/#about">
              <a>Sobre Nós</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/#services">
              <a>Serviços</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/#contact">
              <a>Orçamento</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;