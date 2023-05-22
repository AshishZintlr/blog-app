import styles from "../styles/Navbar.module.css"
import Link from "next/link"

const Navbar = () => {
  return (
    <>
    <div className={styles.container} >
        <div className={styles.title}>Blog App</div>
        <ul className='flex '>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </div>
    <div className={styles.line}></div>
    </>
  )
}

export default Navbar;