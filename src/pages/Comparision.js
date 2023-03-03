import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Comparision.module.css";
import axios from "axios";
const Comparision = () => {
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

  const [fund, setFund] = useState(data);
  const onOverviewClick = useCallback(() => {
    navigate("/overview");
  }, [navigate]);

  const [user, setUser] = useState({
    name: "",
    port_name: "",
    risk: "",
    invest: "",
    fcv: "",
  });
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/user")
      .then((response) => {
        if (response.status === 200) {
          console.log(response.status);
          console.log("Success");
          console.log(response);
        } else {
          console.log(response.status);
        }
      })
      .catch((error) => {
        console.log("Failed", error);
      });
  }, []);

  const onFrameButtonClick = useCallback(() => {
    axios
      .get("http://127.0.0.1:5000/comparision")
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          navigate("/comparision-current-dropdown-1");
        } else {
          console.log("Failed");
        }
      })
      .catch((error) => {
        console.log("Failed");
      });
  }, [navigate, fund]);

  return (
    <div className={styles.comparision}>
      <div className={styles.gubairGenieWrapper}>
        <b className={styles.gubairGenie}>Gubair Genie</b>
      </div>
      <div className={styles.leftItems}>
        <div className={styles.logo}>
          <img className={styles.logoIcon} alt="" src="../asset-2-2@2x.png" />
        </div>
        <div className={styles.overview}>
          <button className={styles.overview1} onClick={onOverviewClick}>
            Overview
          </button>
        </div>
        <div className={styles.investment}>
          <b className={styles.gubairGenie}>Investment</b>
        </div>
        <button className={styles.gubairGenie1}>
          <b className={styles.gubairGenie2}>Gubair Genie</b>
        </button>
        <div className={styles.investment}>
          <b className={styles.gubairGenie}>Reports</b>
        </div>
        <div className={styles.investment}>
          <b className={styles.gubairGenie}>Notification</b>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.investment}>
            <b className={styles.gubairGenie}>Level 1</b>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.cagrParent}>
              <button className={styles.cagr}>
                <b className={styles.cagr1}>CAGR</b>
              </button>
              <div className={styles.investment}>
                <b className={styles.gubairGenie}>Beta</b>
              </div>
              <div className={styles.investment}>
                <b className={styles.gubairGenie}>Sector Exposure</b>
              </div>
              <div className={styles.investment}>
                <b className={styles.gubairGenie}>Beta</b>
              </div>
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="../ellipse-128.svg"
                />
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../ellipse-138.svg"
                />
                <div className={styles.div}>50%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.investment}>
            <b className={styles.gubairGenie}>Level 2</b>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.cagrParent}>
              <button className={styles.cagr}>
                <b className={styles.cagr1}>CAGR</b>
              </button>
              <div className={styles.investment}>
                <b className={styles.gubairGenie}>Beta</b>
              </div>
              <div className={styles.investment}>
                <b className={styles.gubairGenie}>Sector Exposure</b>
              </div>
              <div className={styles.investment}>
                <b className={styles.gubairGenie}>Beta</b>
              </div>
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="../ellipse-129.svg"
                />
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../ellipse-139.svg"
                />
                <div className={styles.div}>50%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollLine}>
        <div className={styles.scrollLineChild} />
      </div>
      <div className={styles.leftLine}>
        <img className={styles.leftLineChild} alt="" src="../vector-1273.svg" />
      </div>
      <input className={styles.searchBell} type="text" placeholder="Search" />
      <div className={styles.welcomeJohnDoe}>
        <b className={styles.welcomeJohnDoe1}>Welcome {user.name}</b>
        <b className={styles.gubairGenie}>Portfolio Name: {user.port_name}</b>
        <b className={styles.gubairGenie}>
          {dates}-{MONTHS[month]}-{year}
        </b>
      </div>
      <div className={styles.frameParent2}>
        {fund.map(
          ({
            name,
            amount1,
            amount2,
            percentage1,
            percentage2,
            propagation,
          }) => (
            <div className={styles.frameWrapper}>
              <div className={styles.mutualFundEquityParent}>
                <b className={styles.mutualFundEquity}>{name}</b>
                <b className={styles.cr}>{amount1}</b>
                <b className={styles.cr1}>{amount1}</b>
                <b className={styles.b}>{percentage1}%</b>
                <b className={styles.b1}>{percentage2}%</b>
                <div className={styles.buy}>{propagation}</div>
              </div>
            </div>
          )
        )}

        <button className={styles.frameButton} onClick={onFrameButtonClick}>
          <div className={styles.detailRecommendationWrapper}>
            <div className={styles.detailRecommendation}>
              Detail Recommendation
            </div>
          </div>
        </button>
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.frameParent4}>
          <div className={styles.investment}>
            <b className={styles.gubairGenie}>Your Portfolio</b>
          </div>
          <div className={styles.groupFrame}>
            <img
              className={styles.frameChild}
              alt=""
              src="../group-2895106.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.investment}>
            <b className={styles.gubairGenie}>Model Portfolio</b>
          </div>
          <div className={styles.groupFrame}>
            <img
              className={styles.frameChild}
              alt=""
              src="../group-2895107.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.riskProfile}>
        <div className={styles.riskProfile1}>Risk Profile : {user.risk}</div>
        <div className={styles.gubairGenie}>
          Total investment: {user.investinvest} Cr
        </div>
        <div className={styles.gubairGenie}>F.C.V : {user.fcv}</div>
      </div>
    </div>
  );
};

export default Comparision;

const data = [
  {
    id: 0,
    name: "A",
    amount1: "1 Cr",
    percentage1: 97,
    amount2: "2 Cr",
    percentage2: 57,
    propagation: "Buy",
  },
  {
    id: 1,
    name: "B",
    amount1: "2 Cr",
    percentage1: 97,
    amount2: "2 Cr",
    percentage2: 57,
    propagation: "Buy",
  },
  {
    id: 2,
    name: "C",
    amount1: "3 Cr",
    percentage1: 97,
    amount2: "2 Cr",
    percentage2: 57,
    propagation: "Sell",
  },
  {
    id: 4,
    name: "D",
    amount1: "1 Cr",
    percentage1: 97,
    amount2: "6 Cr",
    percentage2: 57,
    propagation: "Sell",
  },
];
