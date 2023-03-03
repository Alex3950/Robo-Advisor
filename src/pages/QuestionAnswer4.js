import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionAnswer4.module.css";
import axios from "axios";
const QuestionAnswer4 = () => {
  const navigate = useNavigate();
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date();
  let dates = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  // console.log(date);
  const [select, setSelect] = useState("");
  const onBackClick = useCallback(() => {
    navigate("/question-answer-3");
  }, [navigate]);

  const onFrameButton5Click =  useCallback(() => {
   
    axios
    .post("http://127.0.0.1:5000/ques-4", {
      select})
      .then((response) => {
        if (response.status === 200)
         {
          console.log(response.data);
          navigate("/question-answer-5");}
          else {console.log("Failed");}
        }).catch((error) => 
        {console.log("Failed");});
      },
         [navigate,select]);
 
  return (
    <div className={styles.questionAnswer4}>
      <b className={styles.riskProfilingQuestionnaire}>
        Risk Profiling Questionnaire
      </b>
      <div className={styles.question4Parent}>
        <div className={styles.question4}>Question-4</div>
        <b className={styles.iWishTo}>
          I wish to invest for the following time horizon
        </b>
      </div>
      <button className={styles.lessThanAYearWrapper} style = {{backgroundColor:select == "Less than a year"? 'lightblue': 'white'}} onClick={() => setSelect("Less than a year")}>
        <b className={styles.lessThanA}>Less than a year</b>
      </button>
      <button className={styles.to3YearsWrapper} style = {{backgroundColor:select == "1 to 3 years"? 'lightblue': 'white'}} onClick={() => setSelect("1 to 3 years")}>
        <b className={styles.to3Years}>1 to 3 years</b>
      </button>
      <button className={styles.to10YearsWrapper} style = {{backgroundColor:select == "5 to 10 years"? 'lightblue': 'white'}} onClick={() => setSelect("5 to 10 years")}>
        <b className={styles.to3Years}>5 to 10 years</b>
      </button>
      <button className={styles.to5YearsWrapper} style = {{backgroundColor:select == "3 to 5 years"? 'lightblue': 'white'}} onClick={() => setSelect("3 to 5 years")}>
        <b className={styles.to3Years}>3 to 5 years</b>
      </button>
      <button className={styles.yearsAndAboveWrapper} style = {{backgroundColor:select == "10 years and above"? 'lightblue': 'white'}} onClick={() => setSelect("10 years and above")}>
        <b className={styles.to3Years}>10 years and above</b>
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
        <button className={styles.submitWrapper} onClick={onFrameButton5Click} style={{color:'white'}}>
          <div className={styles.lessThanA}>Submit</div>
        </button>
      </div>
      <div className={styles.welcomeJohnDoe}>
        <b className={styles.question4}>Welcome John Doe</b>
      </div>
      <b className={styles.dec22}>{dates}-{MONTHS[month]}-{year}</b>
      <img className={styles.asset22} alt="" src="../asset-2-23@2x.png" />
    </div>
  );
};

export default QuestionAnswer4;
