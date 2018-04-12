import React from "react";
import ietLogo from '../../assets/images/Ietlogo.png';
import styles from './Logo.css';

const logo = (props) => (
    <div className={styles.Logo}>
         <img src={ietLogo} alt="MyLogo" />
         <h2>Institute of Engineering & Technology </h2>
    </div>
);

export default logo;