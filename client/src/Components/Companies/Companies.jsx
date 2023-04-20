import React from "react"
import styles from "./Companies.module.scss"
import Marquee from "react-fast-marquee";

import Pornhub from "../../Assets/Images/Pornhub.svg"
import Google from "../../Assets/Images/Google.svg"
import Tesla from "../../Assets/Images/Tesla.svg"
import Pipedrive from "../../Assets/Images/Pipedrive.svg"
import Laravel from "../../Assets/Images/Laravel.svg"

const Companies = () => {
  const items = [Google, Laravel, Pipedrive, Pornhub, Tesla]

  return (
    <div className={styles.wrapper}>
      <Marquee pauseOnClick='true' speed={100} gradientWidth={10}>
        <div className={styles.content}>
          {items.map(item => (
            <img className={styles.image} src={item} alt={item} />
          ))}
        </div>
        </Marquee>
    </div>
  )
}

export default Companies
