import React from 'react'
import styles from './MainTitle.module.scss'


export const MainTitle = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.mainTitle}>
            <h1>Найдите работу на нашей платформе для фрилансеров.</h1>
            <h3>Оптимизируйте свой фриланс-бизнес с помощью нашей платформы поиска работы. </h3>

            <div className={styles.btnsWrapp}>
                <button>Пробный период</button>
                <button>Узнать детали</button>
            </div>
        </div>

      
    </div>
  )
}

export default MainTitle