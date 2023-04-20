import {React, useEffect, useState} from "react"
import logo from "../../../Assets/Images/Logotype.svg"
import "./Logotype.scss"
const Logotype = () => {
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true)
    }, 500) // задержка перед запуском анимации
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={showLogo ? "logo-container show" : "logo-container"}>
      <img src={logo} alt='' />
    </div>
  )
}

export default Logotype
