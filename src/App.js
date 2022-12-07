import React from 'react';
import styles from './App.module.css';
import Main from './components/main'
//Change url on click: https://reactrouter.com/en/v6.3.0/getting-started/tutorial
//import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
<div className={styles.background}></div> <div className={styles.glass}></div>
         <Main/>

    </div>
  );
}

export default App;
