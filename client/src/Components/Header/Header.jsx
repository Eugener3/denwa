import { React, useState } from "react"

import styles from "./Header.module.scss"
import Logotype from "../UI/Logotype/Logotype"

import Modal from "../UI/Modal/Modal"

import SignInForm from "../UI/Forms/SignInForm/SignInForm"
import SignUpForm from "../UI/Forms/SignUpForm/SignUpForm"

const Header = () => {
  const items = ["Home", "About", "Feature", "Resource"]

  const [modalActive, setModalActive] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const handleSignInClick = () => {
    setModalContent(<SignInForm />)

    setModalActive(true)
  }

  const handleSignUpClick = () => {
    setModalContent(<SignUpForm />)

    setModalActive(true)
  }

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        {modalContent}
      </Modal>
      <div className={styles.wrapper}>
        <div className={styles.logotype}>
          <Logotype />
        </div>
        <div className={styles.navBar}>
          {items.map(item => (
            <p key={item} className={styles.item}>
              {item}
            </p>
          ))}
        </div>
        <div className={styles.authButtons}>
          <button
            className={styles.btnSignIn}
            onClick={() => handleSignInClick()}
          >
            Sign In
          </button>
          <button
            className={styles.btnSignUp}
            onClick={() => handleSignUpClick()}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
