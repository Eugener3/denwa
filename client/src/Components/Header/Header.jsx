import React from "react"

import styles from "./Header.module.scss"

import Logotype from "../../Assets/Images/Logotype.svg"

const Header = () => {
  const items = ["Home", "About", "Feature", "Resource"]

  return (
    <div className={styles.wrapper}>
      <div className={styles.logotype}>
        <img className={styles.stretchRight} src={Logotype} alt='Logotype' />
      </div>
      <div className={styles.navBar}>
        {items.map(item => (
          <p>{item}</p>
        ))}
      </div>
      <div className={styles.authButtons}>
        <button className={styles.btnSignIn}>Sign In</button>
        <button className={styles.btnSignUp}>Sign Up</button>
      </div>
    </div>
  )
}

export default Header
