import React from "react";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div>
          <span className={styles.logo}>Product System</span>
        </div>
        <div>
          <nav className={styles.nav}>
            <a className={styles.nav_item} href={"/"}>
              List Products
            </a>
            <a className={styles.nav_item} href={"/"}>
              Add Product
            </a>
            <a className={styles.nav_item} href={"/"}>
              About
            </a>
          </nav>
        </div>
        <div>
          <div className={styles.header_button_container}></div>
          <button className={styles.header_toggler}></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
