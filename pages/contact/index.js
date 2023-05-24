import styles from "../../styles/Home.module.css";
import { useSelector } from "react-redux";

const Contact = () => {
  const mode = useSelector((state) => state.DarkModeReducer);
  return (
    <div className={mode ? styles.darkTheme : ""}>
      <div className={styles.home}> contact page </div>
    </div>
  );
};

export default Contact;
