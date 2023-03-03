import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionAnswer2.module.css";
import axios from "axios";
const QuestionAnswer2 = () => {
  const navigate = useNavigate();
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  let dates = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  const [select, setSelect] = useState(data);
  const named = select.filter((select) => select.selected == true);
  console.log(named);
  const onFrameButton16Click = useCallback(() => {
    axios
      .post("http://127.0.0.1:5000/ques_2", {
        named,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          navigate("/question-answer-3");
        } else {
          console.log("Failed");
        }
      })
      .catch((error) => {
        console.log("Failed");
      });
  }, [navigate, named]);

  const onBackClick = useCallback(() => {
    navigate("/question-answer-1");
  }, [navigate]);

  return (
    <div className={styles.questionAnswer2}>
      <div className={styles.riskProfilingQuestionnaire}>
        Risk Profiling Questionnaire
      </div>
      <div className={styles.question2Parent}>
        <div className={styles.question2}>Question-2</div>
        <div className={styles.pleaseChooseTheContainer}>
          <p className={styles.pleaseChooseThe}>
            Please choose the investment avenues that you
          </p>
          <p className={styles.haveInvestedSo}>have invested so far</p>
        </div>
      </div>
      <div className={styles.frameParent}>
        <button
          className={styles.directstockEquitiesWrapper}
          style={{
            backgroundColor: select[0].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 1 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.directstockEquities}>
            Direct/Stock Equities
          </div>
        </button>
        <button
          className={styles.stockOptionsesoprsuWrapper}
          style={{
            backgroundColor: select[1].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 2 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.stockOptionsesoprsu}>
            Stock options/ESOP/RSU
          </div>
        </button>
        <button
          className={styles.bondsdebenturesWrapper}
          style={{
            backgroundColor: select[2].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 3 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.stockOptionsesoprsu}>Bonds/Debentures</div>
        </button>
      </div>
      <div className={styles.frameGroup}>
        <button
          className={styles.goldWrapper}
          style={{
            backgroundColor: select[3].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 4 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.stockOptionsesoprsu}>Gold</div>
        </button>
        <button
          className={styles.mutualFundsEquitiesAndHybrWrapper}
          style={{
            backgroundColor: select[4].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 5 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.mutualFundsEquities}>
            Mutual Funds Equities and Hybrids
          </div>
        </button>
        <button
          className={styles.mutualFundsDebtWrapper}
          style={{
            backgroundColor: select[5].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 6 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.stockOptionsesoprsu}>Mutual Funds Debt</div>
        </button>
        <button
          className={styles.realEstateWrapper}
          style={{
            backgroundColor: select[6].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 7 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.stockOptionsesoprsu}>Real Estate</div>
        </button>
      </div>
      <div className={styles.frameContainer}>
        <button
          className={styles.smallSavingSchemesPpfNscWrapper}
          style={{
            backgroundColor: select[7].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 8 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.stockOptionsesoprsu}>
            Small Saving Schemes (PPF, NSC, KVP etc)
          </div>
        </button>
        <button
          className={styles.cryptoCurrenciesdigitalAsseWrapper}
          style={{
            backgroundColor: select[8].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 9 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.stockOptionsesoprsu}>
            Crypto Currencies/Digital assets.
          </div>
        </button>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.frameWrapper}>
          <button
            className={styles.pmsaifWrapper}
            style={{
              backgroundColor:
                select[9].selected == true ? "lightblue" : "white",
            }}
            onClick={() =>
              setSelect(
                select.map((item) =>
                  item.id == 10 ? { ...item, selected: !item.selected } : item
                )
              )
            }
          >
            <div className={styles.stockOptionsesoprsu}>PMS/AIF</div>
          </button>
        </div>
        <div className={styles.groupDiv}>
          <button
            className={styles.derivativesWrapper}
            style={{
              backgroundColor:
                select[10].selected == true ? "lightblue" : "white",
            }}
            onClick={() =>
              setSelect(
                select.map((item) =>
                  item.id == 11 ? { ...item, selected: !item.selected } : item
                )
              )
            }
          >
            <div className={styles.stockOptionsesoprsu}>Derivatives</div>
          </button>
        </div>
        <button
          className={styles.ventureCapitalangelInvestinWrapper}
          style={{
            backgroundColor:
              select[11].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 12 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.stockOptionsesoprsu}>
            Venture capital/Angel investing/Private Equity
          </div>
        </button>
      </div>
      <div className={styles.frameParent1}>
        <button
          className={styles.currenciesWrapper}
          style={{
            backgroundColor:
              select[12].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 13 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.stockOptionsesoprsu}>Currencies</div>
        </button>
        <div className={styles.frameWrapper1}>
          <button
            className={styles.reitsInvitsWrapper}
            style={{
              backgroundColor:
                select[13].selected == true ? "lightblue" : "white",
            }}
            onClick={() =>
              setSelect(
                select.map((item) =>
                  item.id == 14 ? { ...item, selected: !item.selected } : item
                )
              )
            }
          >
            <div className={styles.stockOptionsesoprsu}>{`REITs & InvITs`}</div>
          </button>
        </div>
        <div className={styles.frameWrapper2}>
          <button
            className={styles.fixedDepositsWrapper}
            style={{
              backgroundColor:
                select[14].selected == true ? "lightblue" : "white",
            }}
            onClick={() =>
              setSelect(
                select.map((item) =>
                  item.id == 15 ? { ...item, selected: !item.selected } : item
                )
              )
            }
          >
            <div className={styles.stockOptionsesoprsu}>Fixed Deposits</div>
          </button>
        </div>
        <button
          className={styles.internationalInvestmentsWrapper}
          style={{
            backgroundColor:
              select[15].selected == true ? "lightblue" : "white",
          }}
          onClick={() =>
            setSelect(
              select.map((item) =>
                item.id == 16 ? { ...item, selected: !item.selected } : item
              )
            )
          }
        >
          <div className={styles.stockOptionsesoprsu}>
            International Investments
          </div>
        </button>
      </div>
      <button className={styles.submitWrapper} onClick={onFrameButton16Click}>
        <div className={styles.directstockEquities} style={{ color: "white" }}>
          Submit
        </div>
      </button>
      <b className={styles.b}>
        <span>{`1  `}</span>
        <span className={styles.span}>2..... 7</span>
      </b>
      <button className={styles.back} onClick={onBackClick}>
        <img className={styles.back1Icon} alt="" src="../back-1@2x.png" />
        <img className={styles.back2Icon} alt="" src="../back-1@2x.png" />
      </button>
      <div className={styles.welcomeJohnDoe}>
        <div className={styles.question2}>Welcome John Doe</div>
      </div>
      <div className={styles.dec22}>
        {dates}-{MONTHS[month]}-{year}
      </div>
      <img className={styles.asset22} alt="" src="../asset-2-23@2x.png" />
    </div>
  );
};

export default QuestionAnswer2;

const data = [
  {
    id: 1,
    name: "Direct/Stock Equities",
    selected: false,
  },
  { id: 2, name: "Stock options/ESOP/RSU", selected: false },
  { id: 3, name: "Bonds/Debentures", selected: false },
  { id: 4, name: "Gold", selected: false },
  { id: 5, name: "Mutual Funds Equities and Hybrids", selected: false },
  { id: 6, name: "Mutual Funds Debt", selected: false },
  { id: 7, name: "Real Estate", selected: false },
  { id: 8, name: "Small Saving Schemes (PPF, NSC, KVP etc)", selected: false },
  { id: 9, name: "Crypto Currencies/Digital assets", selected: false },
  { id: 10, name: "PMS/AIF", selected: false },
  { id: 11, name: "Derivatives", selected: false },
  {
    id: 12,
    name: "Venture capital/Angel investing/Private Equity",
    selected: false,
  },
  { id: 13, name: "Currencies", selected: false },
  { id: 14, name: "REITs & InvITs", selected: false },
  { id: 15, name: "Fixed Deposits", selected: false },
  { id: 16, name: "International Investments", selected: false },
];
