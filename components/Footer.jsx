import React from 'react'
import styles from "../styles/Footer.module.css";
import Image from "next/image";
function Footer() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <Image src="/img/bg.png" fill alt=''/>
    </div>
    <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>
        Join the Pizza Party - Order from Our Mouthwatering Selection
        </h2>
      </div>
      <div className={styles.card}>
      <h1 className={styles.title}>
          FIND OUR RESTAURANTS
        </h1>
        <p className={styles.text}>
          444 G4 Johar Town <br />
          Lahore, 54000 <br />
          +923044268316
        </p>
        <p className={styles.text}>
          441 G4 Johar Town <br />
          Lahore, 54000 <br />
          +923044268316
        </p>
        <p className={styles.text}>
          442 G4 Johar Town <br />
          Lahore, 54000 <br />
          +923044268316
        </p>
        <p className={styles.text}>
          443 G4 Johar Town <br />
          Lahore, 54000 <br />
          +923044268316
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
          MONDAY UNTIL FRIDAY
          <br /> 12:00 - 24:00
        </p>  
        <p className={styles.text}>
          MONDAY UNTIL FRIDAY
          <br /> 12:00 - 24:00
        </p>
      </div>
    </div>
      
    </div>
  )
}

export default Footer
