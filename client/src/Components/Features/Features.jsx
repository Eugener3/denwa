import React from "react"
import styles from "./Features.module.scss"
import { useQuery } from "react-query"
import { getLimitedCategories } from "../../Utils/api/api"

import image from "../../Assets/Images/Apple.svg"
import { AiFillStar } from "react-icons/ai"
import { BsCircleFill } from "react-icons/bs"

const Features = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery("limitedCategories", () => getLimitedCategories(5))

  if (isLoading) {
    return console.log("loading...")
  }
  if (isError) {
    return console.log("error.")
  }
  if (!categories) {
    return console.log("no data")
  }
  

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.workers}>
            <h4>Popular Workers</h4>
            <div className={styles.workerCard}>
              <div className={styles.workerImageWrapper}>
                <img
                  src={image}
                  alt='userLogo'
                  className={styles.workerImage}
                />
              </div>
              <div className={styles.workerInfo}>
                <p className={styles.workerName}>Apple Workername</p>
                <p className={styles.category}>
                  Designer <p className={styles.dash}>-</p> <p>4.45</p>{" "}
                  <AiFillStar />
                </p>
              </div>
            </div>
          </div>
          <div className={styles.skills}>
            <h4>Skills & Expertise</h4>
            <div className={styles.skillsWrapper}>

            {/* {items.map(item => (
            <p key={item} className={styles.item}>
              {item}
            </p>
          ))} */}
              {categories.map((category) => (
                <p className={styles.categoryText}>{category.nameCategory}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.rightContent}>
            <h2>Streamline Your Job Search with Advanced Features</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              sint unde temporibus rerum accusantium nemo molestias harum quo.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <BsCircleFill color='#1d5cc7' size='0.9em' />{" "}
                <p>Search by advanced search engine</p>
              </div>
              <div className={styles.feature}>
                <BsCircleFill color='#1d5cc7' size='0.9em' />{" "}
                <p>Filter by your own personalized location</p>
              </div>
              <div className={styles.feature}>
                <BsCircleFill color='#1d5cc7' size='0.9em' />{" "}
                <p>Refining jobs with popular industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
