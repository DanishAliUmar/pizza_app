import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>123 456 789</div>
        </div>
      </div> 
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">     
            <li className={styles.listItem}>HomePage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Link href="/" className={styles.logo}>
            <li>Devi Pizza</li>
          </Link>
          <Link href="/admin">
          <li className={styles.listItem}>Admin</li>
          </Link>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/cart">
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="cart" width="30" height="30" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </Link>
        <div className={styles.hambar_box}>
          <i
            class="fa-solid fa-bars "
            style={{ color: "white", fontSize: "25px" }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
