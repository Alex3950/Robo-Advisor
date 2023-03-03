import { useCallback, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionAnswer1.module.css";
import axios from "axios";
const QuestionAnswer1 = () => {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date();
  let dates = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  console.log(date);
  const [select, setSelect] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onBackClick = useCallback(() => {
    navigate("/demographics");
  }, [navigate]);

  const onFrameButton4Click =   useCallback(() => {
   
    axios
    .post("http://127.0.0.1:5000/ques_1", {
      select})
      .then((response) => {
        if (response.status === 200)
         {
          console.log(response.data);
          navigate("/question-answer-2");}
          else {console.log("Failed");}
        }).catch((error) => 
        {console.log("Failed");});
      },
         [navigate,select]);

  return (
    <div className={styles.questionAnswer1}>
      <img className={styles.asset22} alt="" src="../asset-2-23@2x.png" />
      <div className={styles.riskProfilingQuestionnaire}>
        Risk Profiling Questionnaire
      </div>
      <div className={styles.question1Parent}>
        <div className={styles.question1}>Question-1</div>
        <div className={styles.howLongHave}>
          How long have you been investing in financial Products
        </div>
      </div>
      <button className={styles.above20YearsWrapper} style = {{backgroundColor:select == "Above 20 years"? 'lightblue': 'white'}} onClick={() => setSelect("Above 20 years")}>
        <div className={styles.above20Years} >Above 20 years</div>
      </button>
      <button className={styles.to10YearsWrapper} style = {{backgroundColor:select == "5 to 10 years"? 'lightblue': 'white'}} onClick={() => setSelect("5 to 10 years")}>
        <div className={styles.above20Years}>5 to 10 years</div>
      </button>
      <button className={styles.lessThan5YearsWrapper} data-animate-on-scroll style = {{backgroundColor:select == "Less than 5 years"? 'lightblue': 'white'}} onClick={() => setSelect("Less than 5 years")}>
        <div className={styles.above20Years}>Less than 5 years</div>
      </button>
      <button className={styles.to20YearsWrapper} style = {{backgroundColor:select == "10 to 20 years"? 'lightblue': 'white'}} onClick={() => setSelect("10 to 20 years")}>
        <div className={styles.above20Years}>10 to 20 years</div>
      </button>
      <b className={styles.b}>
        <span>{`1  `}</span>
        <span className={styles.span}>2..... 7</span>
      </b>
      <div className={styles.backParent}>
        <button className={styles.back} onClick={onBackClick}>
          <img className={styles.back1Icon} alt="" src="../back-11@2x.png" />
          <img className={styles.back2Icon} alt="" src="../back-11@2x.png" />
        </button>
        <button className={styles.submitWrapper} onClick={onFrameButton4Click}>
          <div className={styles.submit}>Submit</div>
        </button>
      </div>
      <div className={styles.welcomeJohnDoe}>
        <div className={styles.question1}>Welcome John Doe</div>
      </div>
      <div className={styles.dec22}>{dates}-{MONTHS[month]}-{year}</div>
    </div>
  );
};

export default QuestionAnswer1;
