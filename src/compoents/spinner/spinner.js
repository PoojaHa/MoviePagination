import React from 'react';
import styles from "./spinner.module.css";
const Spinner = () => {
  return (
<div className={styles.box} >
  <div className={styles.content}>
     <p>Loading....</p>
  </div>
</div>
  )
}

export default Spinner