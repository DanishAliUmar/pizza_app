import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";
function Featured() {
  const [index, setIndex] = useState(0);
  const slidshow = {
    images: [
      "/img/pizza_img/hero_img01.jpg",
      "/img/pizza_img/hero_img02.jpg",
      "/img/pizza_img/hero_img03.jpg",
    ],
    heading: [
      "Order the Best Pizza Online Fast Delivery | Devi Pizza",
      "Satisfy Your Pizza Cravings with Our Delicious Menu | Devi Pizza",
      "Get Your Favorite Pizza Delivered - Order Now | Devi Pizza",
    ],
    tagline:["Experience the ultimate pizza indulgence today.","Savor the flavor with our mouth-watering pizzas.","Delivering delicious pizza straight to your door."]
  };
  const slider = slidshow.images.map((imgPath, index) => {
    const slideStyle = {
      background: ` linear-gradient(to right, #000000b7, #243b5567),url(${imgPath}) center center/cover no-repeat`,
    };
    return (
      <div key={index} className={styles.imgContainer} style={slideStyle}>
        <h1 className={styles.main_heading}>{slidshow.heading[index]}</h1>
        <h4 className={styles.tagline}>{slidshow.tagline[index]}</h4>
        <button className={styles.btn}>BUY NOW</button>
      </div>
    );
  });
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          className={styles.arrow}
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {slider}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          className={styles.arrow}
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default Featured;
