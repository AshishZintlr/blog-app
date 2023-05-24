import styles from "../styles/Home.module.css"
import { useSelector } from 'react-redux';

export default function Home() {
  const mode = useSelector((state) => state.DarkModeReducer);

  return (
    <div className={mode?styles.darkTheme:""}>
      <div className={styles.home}>Home</div>
    </div>
  )
}
