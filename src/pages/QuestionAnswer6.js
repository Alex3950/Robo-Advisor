import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionAnswer6.module.css";
import axios from "axios";
const QuestionAnswer6 = () => {
  const navigate = useNavigate();
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date();
  let dates = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  // console.log(date);
  const [select, setSelect] = useState("");
  const onBackClick = useCallback(() => {
    navigate("/question-answer-5");
  }, [navigate]);

  const onFrameButton4Click =  useCallback(() => {
   
    axios
    .post("http://127.0.0.1:5000/ques-6", {
      select})
      .then((response) => {
        if (response.status === 200)
         {
          console.log(response.data);
          navigate("/upload");}
          else {console.log("Failed");}
        }).catch((error) => 
        {console.log("Failed");});
      },
         [navigate,select]);

  return (
    <div className={styles.questionAnswer6}>
      <b className={styles.riskProfilingQuestionnaire}>
        Risk Profiling Questionnaire
      </b>
      <div className={styles.question6Parent}>
        <div className={styles.question6}>Question-6</div>
        <b className={styles.iAmInvesting}>
          I am investing for the following objective
        </b> 
      </div>
      <button className={styles.wealthPreservationWrapper} style = {{backgroundColor:select == "Wealth Preservation"? 'lightblue': 'white'}} onClick={() => setSelect("Wealth Preservation")}>
        <b className={styles.wealthPreservation}>Wealth Preservation</b>
      </button>
      <button className={styles.wealthTransferWrapper} style = {{backgroundColor:select == "Wealth Transfer"? 'lightblue': 'white'}} onClick={() => setSelect("Wealth Transfer")}>
        <b className={styles.wealthTransfer}>Wealth Transfer</b>
      </button>
      <button className={styles.moderateAppreciationWrapper} style = {{backgroundColor:select == "Moderate Appreciation"? 'lightblue': 'white'}} onClick={() => setSelect("Moderate Appreciation")}>
        <b className={styles.wealthTransfer}>Moderate Appreciation</b>
      </button>
      <button className={styles.highAppreciationWrapper} style = {{backgroundColor:select == "High Appreciation"? 'lightblue': 'white'}} onClick={() => setSelect("High Appreciation")}>
        <b className={styles.wealthTransfer}>High Appreciation</b>
      </button>
      <b className={styles.b}>
        <span>{`1  `}</span>
        <span className={styles.span}>2..... 7</span>
      </b>
      <div className={styles.backParent}>
        <button className={styles.back} onClick={onBackClick}>
          <img className={styles.back1Icon} alt="" src="../back-1@2x.png" />
          <img className={styles.back2Icon} alt="" src="../back-1@2x.png" />
        </button>
        <button className={styles.submitWrapper} onClick={onFrameButton4Click}>
          <div className={styles.wealthPreservation} style={{color:'white'}}>Submit</div>
        </button>
      </div>
      <div className={styles.welcomeJohnDoe}>
        <b className={styles.question6}>Welcome John Doe</b>
      </div>
      <b className={styles.dec22}>{dates}-{MONTHS[month]}-{year}</b>
      <img className={styles.asset22} alt="" src="../asset-2-23@2x.png" />
    </div>
  );
};

export default QuestionAnswer6;
