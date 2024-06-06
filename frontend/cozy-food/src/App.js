import React, { useState } from "react";
import styles from "./App.module.css";
import 'animate.css';

// Reusable Component: Section
const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
};

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    console.log('Hamburger clicked');
    setIsActive(!isActive);
  };

  return (
    <div className={styles.start}>
      <img src="/chibi2.png" alt="Chibi Logo" className={styles.logoImage} />
      <header className={styles.container}>
        <nav className={styles.navbar}>
          <h1 href='#home' className={styles.logo}>
            Cozy Food
          </h1>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ""}`} onClick={toggleMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li>
              <a href='#home' className={styles.navLink}>Catalogo</a>
            </li>
            <li>
              <a href='#home' className={styles.navLink}>Recetas</a>
            </li>
            <li>
              <a href='#home' className={styles.navLink}>Sobre nosotros</a>
            </li>
            <li>
              <a href='#home' className={styles.navLink}>Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Sections */}
      <main className={styles.mainContent}>
        <Section>
          
        </Section>
      </main>
    </div>
  );
}

export default App;
