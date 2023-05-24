import React from "react";
import styles from "../../styles/Home.module.css";
import { useSelector } from "react-redux";

const Career = () => {
  const mode = useSelector((state) => state.DarkModeReducer);
  return (
    <div className={mode ? styles.darkTheme : ""}>
      <div className={styles.home}>Career page </div>
    </div>
  );
};

export default Career;
