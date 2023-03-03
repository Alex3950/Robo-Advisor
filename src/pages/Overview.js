import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Overview.module.css";
import axios from "axios";
const Overview = () => {
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
  console.log(date);
  const [select, setSelect] = useState("");
  const [fund, setFund] = useState(data);
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
  const onGubairGenieClick = useCallback(() => {
    navigate("/comparision");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    axios
      .get("http://127.0.0.1:5000/overview")
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          navigate("/comparision");
        } else {
          console.log("Failed");
        }
      })
      .catch((error) => {
        console.log("Failed");
      });
  }, [navigate, fund]);

  return (
    <div className={styles.overview}>
      <div className={styles.gubairGenieWrapper}>
        <b className={styles.gubairGenie}>Gubair Genie</b>
      </div>
      <div className={styles.leftItems}>
        <div className={styles.logo}>
          <img className={styles.logoIcon} alt="" src="../asset-2-2@2x.png" />
        </div>
        <div className={styles.overview1}>
          <b className={styles.gubairGenie}>Overview</b>
        </div>
        <div className={styles.investment}>
          <b className={styles.gubairGenie}>Investment</b>
        </div>
        <div className={styles.gubairGenie1}>
          <button className={styles.gubairGenie2} onClick={onGubairGenieClick}>
            Gubair Genie
          </button>
        </div>
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
              <div className={styles.cagr}>
                <b className={styles.gubairGenie}>CAGR</b>
              </div>
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
                  src="../ellipse-126.svg"
                />
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../ellipse-136.svg"
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
              <div className={styles.cagr}>
                <b className={styles.gubairGenie}>CAGR</b>
              </div>
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
                  src="../ellipse-127.svg"
                />
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../ellipse-137.svg"
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
      <div className={styles.searchBell}>
        <div className={styles.searchBar}>
          <div className={styles.gubairGenie}>Search</div>
        </div>
        <div className={styles.investment}>
          <img className={styles.vectorIcon} alt="" src="../vector2.svg" />
        </div>
      </div>
      <div className={styles.riskProfile}>
        <div className={styles.riskProfile1}>Risk Profile : {user.risk}</div>
        <div className={styles.gubairGenie}>
          Total investment: {user.invest} Cr
        </div>
        <div className={styles.gubairGenie}>F.C.V : {user.fcv}</div>
      </div>
      <div className={styles.welcomeJohnDoe}>
        <b className={styles.welcomeJohnDoe1}>Welcome {user.name}</b>
        <b className={styles.gubairGenie}>Portfolio Name: {user.port_name}</b>
        <b className={styles.gubairGenie}>
          {dates}-{MONTHS[month]}-{year}
        </b>
      </div>
      <div className={styles.frameParent2}>
        {fund.map(({ name, amount, percentage }) => (
          <div className={styles.frameWrapper}>
            <div className={styles.mutualFundEquityParent}>
              <div className={styles.mutualFundEquity}>{name}</div>
              <div className={styles.cr}>{amount}</div>
              <div className={styles.b}>{percentage}%</div>
            </div>
          </div>
        ))}

        <button className={styles.frameButton} onClick={onFrameButtonClick}>
          <div className={styles.genieRecommendationWrapper}>
            <b className={styles.genieRecommendation}>Genie Recommendation</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Overview;

const data = [
  {
    id: 0,
    name: "A",
    amount: "1 Cr",
    percentage: 97,
  },
  {
    id: 1,
    name: "B",
    amount: "1 Cr",
    percentage: 33,
  },
  {
    id: 2,
    name: "C",
    amount: "1 Cr",
    percentage: 67,
  },
  {
    id: 4,
    name: "D",
    amount: "1 Cr",
    percentage: 67,
  },
];
