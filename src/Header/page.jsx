import Link from "next/link";
import styles from "./index.module.css"

const Header = () => {
  return (
    <>
        <div className={styles.box}>
          <Link href="/" passHref>Home</Link>
          <Link href="/about" passHref>About</Link>
          <Link href="/contact" passHref>Contact</Link>
          <Link href="/users" passHref>Users</Link>
        </div>
    
    </>
  )
}

export default Header