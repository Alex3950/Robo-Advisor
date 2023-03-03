import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionAnswer5.module.css";
import axios from "axios";
const QuestionAnswer5 = () => {
  const navigate = useNavigate();
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date();
  let dates = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  // console.log(date);
  const [select, setSelect] = useState("");
  const onBackClick = useCallback(() => {
    navigate("/question-answer-4");
  }, [navigate]);

  const onFrameButton4Click =  useCallback(() => {
   
    axios
    .post("http://127.0.0.1:5000/ques-5", {
      select})
      .then((response) => {
        if (response.status === 200)
         {
          console.log(response.data);
          navigate("/question-answer-6");}
          else {console.log("Failed");}
        }).catch((error) => 
        {console.log("Failed");});
      },
         [navigate,select]);

  return (
    <div className={styles.questionAnswer5}>
      <b className={styles.riskProfilingQuestionnaire}>
        Risk Profiling Questionnaire
      </b>
      <div className={styles.question5Parent}>
        <div className={styles.question5}>Question-5</div>
        <b className={styles.iNeedToContainer}>
          <p className={styles.iNeedTo}>
            I need to withdraw ------% of my total investments
          </p>
          <p className={styles.everyYear}>every year</p>
        </b>
      </div>
      <button className={styles.lessThan10Wrapper} style = {{backgroundColor:select == "Less than 10%"? 'lightblue': 'white'}} onClick={() => setSelect("Less than 10%")}>
        <b className={styles.submit}>Less than 10%</b>
      </button>
      <button className={styles.to20Wrapper} style = {{backgroundColor:select == "10% to 20%"? 'lightblue': 'white'}} onClick={() => setSelect("10% to 20%")}>
        <b className={styles.noPeriodicWithdrawal}>10% to 20%</b>
      </button>
      <button className={styles.noPeriodicWithdrawalNeededWrapper} style = {{backgroundColor:select == "No periodic withdrawal needed"? 'lightblue': 'white'}} onClick={() => setSelect("No periodic withdrawal needed")}>
        <b className={styles.noPeriodicWithdrawal}>
          No periodic withdrawal needed
        </b>
      </button>
      <button className={styles.above25Wrapper} style = {{backgroundColor:select == "Above 25%"? 'lightblue': 'white'}} onClick={() => setSelect("Above 25%")}>
        <b className={styles.noPeriodicWithdrawal}>Above 25%</b>
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
        <button className={styles.submitWrapper} onClick={onFrameButton4Click} >
          <div className={styles.submit} style={{color:'white'}}>Submit</div>
        </button>
      </div>
      <div className={styles.welcomeJohnDoe}>
        <b className={styles.welcomeJohnDoe1}>Welcome John Doe</b>
      </div>
      <b className={styles.dec22}>{dates}-{MONTHS[month]}-{year}</b>
      <img className={styles.asset22} alt="" src="../asset-2-23@2x.png" />
    </div>
  );
};

export default QuestionAnswer5;
