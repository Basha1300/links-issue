import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.nav}>
        <div>Frontend</div>
        <ul style={{ display: "flex" }}>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/product"}>Product</Link>
          </li>
        </ul>
      </div>
      <div className={styles.content}>Hello world</div>
    </div>
  );
}
