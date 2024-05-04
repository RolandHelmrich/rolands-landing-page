import React from "react";
import styles from "./style";

import {
  Navbar,
  Landing,
} from "./components";

const App = () => (
  <div className="bg-gradient w-full h-full overflow-hidden">
    
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Landing />
      </div>
    </div>

  </div>
);

export default App;
