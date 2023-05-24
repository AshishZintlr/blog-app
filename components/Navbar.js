import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../redux/action/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.DarkModeReducer);

  const handleDarkMode = () => {
    if (mode === false) {
      dispatch(darkMode(true));
    }else{
      dispatch(darkMode(false));
    }
  };
  return (
    <>
      <div className={`${styles.container} ${mode?styles.darkTheme:""}`}>
        <div className={styles.title}>Blog App</div>
        <ul className="flex ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <button onClick={handleDarkMode}>Dark Mode</button>
          </li>
        </ul>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default Navbar;
