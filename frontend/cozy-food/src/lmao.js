<nav className={`${styles.navbar}`}>
          <a href='#home' className={`${styles.logo}`}>Cozy Food </a>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Catalogo</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Recetas</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Sobre nosotros</a>
            </li>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Contacto</a>
            </li>
          </ul>

          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>