import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionAnswer3.module.css";
import axios from "axios";
const QuestionAnswer3 = () => {
  const navigate = useNavigate();
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date();
  let dates = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  // console.log(date);
  const [select, setSelect] = useState("");
  const onBackClick = useCallback(() => {
    navigate("/question-answer-2");
  }, [navigate]);

  const onFrameButton5Click =  useCallback(() => {
   
    axios
    .post("http://127.0.0.1:5000/ques-3", {
      select})
      .then((response) => {
        if (response.status === 200)
         {
          console.log(response.data);
          navigate("/question-answer-4");}
          else {console.log("Failed");}
        }).catch((error) => 
        {console.log("Failed");});
      },
         [navigate,select]);

  return (
    <div className={styles.questionAnswer3}>
      <b className={styles.riskProfilingQuestionnaire}>
        Risk Profiling Questionnaire
      </b>
      <div className={styles.question3Parent}>
        <div className={styles.question3}>Question-3</div>
        <b className={styles.myEstimatedLiquidContainer}>
          <p className={styles.myEstimatedLiquid}>
            My estimated liquid net worth will be (all financial assets
          </p>
          <p className={styles.minusLiabilities}>minus liabilities)</p>
        </b>
      </div>
      <button className={styles.lessThan5CroresWrapper} style = {{backgroundColor:select == "Less than 5 crores"? 'lightblue': 'white'}} onClick={() => setSelect("Less than 5 crores")}>
        <div className={styles.lessThan5}>Less than 5 crores</div>
      </button>
      <button className={styles.croresTo10CroresWrapper} style = {{backgroundColor:select == "5 crores to 10 crores"? 'lightblue': 'white'}} onClick={() => setSelect("5 crores to 10 crores")}>
        <b className={styles.above50Crores}>5 crores to 10 crores</b>
      </button>
      <button className={styles.croresTo50CroresWrapper} style = {{backgroundColor:select == "20 crores to 50 crores"? 'lightblue': 'white'}} onClick={() => setSelect("20 crores to 50 crores")}>
        <b className={styles.above50Crores}>20 crores to 50 crores</b>
      </button>
      <button className={styles.croresTo20CroresWrapper} style = {{backgroundColor:select == "10 crores to 20 crores"? 'lightblue': 'white'}} onClick={() => setSelect("10 crores to 20 crores")}>
        <b className={styles.above50Crores}>10 crores to 20 crores</b>
      </button>
      <button className={styles.above50CroresWrapper} style = {{backgroundColor:select == "Above 50 crores"? 'lightblue': 'white'}} onClick={() => setSelect("Above 50 crores")}>
        <b className={styles.above50Crores}>Above 50 crores</b>
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
        <button className={styles.submitWrapper} onClick={onFrameButton5Click}>
          <div className={styles.submit}>Submit</div>
        </button>
      </div> 
      <div className={styles.welcomeJohnDoe}>
        <b className={styles.question3}>Welcome John Doe</b>
      </div>
      <b className={styles.dec22}>{dates}-{MONTHS[month]}-{year}</b>
      <img className={styles.asset22} alt="" src="../asset-2-23@2x.png" />
    </div>
  );
};

export default QuestionAnswer3;
