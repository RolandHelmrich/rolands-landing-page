import styles, { layout } from "../style";
import Email from "./Email";

const Landing = () => {
  return (
    <div className="flex flex-col justify-start">
     
     <div className="max-width-24 mt-16">
        <h1 className={styles.heading1}>
          Roland <br className="sm:block hidden" />{" "}
          <span className="sm:px-6">Helmrich</span>
          {/** <span className="text-gradient px-6">Helmrich</span>  */} <br />
        </h1>
      </div>

      
      <div className="flex flex-col sm:flex-row justify-between items-center mt-16">
      <div classname="flex flex-col justify-start items-center">
          <p className={`${styles.paragraph} px-6 py-6`}>
            I'm passionate about:
            <ul
              role="list"
              class="marker:text-myGrey list-disc pl-10 space-y-5 text-myGrey mt-6 mb-6" 
            >

              <li>mastering the complexity of projects</li>
              <li>mentoring startups</li>
              <li>designing and crafting Bitcoin use cases and applications</li>
            </ul>
          </p>
        </div>

        <div>
          <Email />
        </div>
        
        
      </div>

     
    </div>
  );
};

export default Landing;
