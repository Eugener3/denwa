import React from "react"
import styles from "./Modal.module.scss"
const Modal = ({ active, setActive, children}) => {
  return (
    <div
      className={active ? styles.wrapperActive  : styles.wrapper}
      onClick={() => setActive(false)}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
