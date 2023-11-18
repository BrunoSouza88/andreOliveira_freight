import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
      <Link legacyBehavior href="/">
          <button className={styles.homeButton}>
            <Image src="/house-moving-truck.svg" alt="Home" width={100} height={100}/>
          </button>
        </Link>
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
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
