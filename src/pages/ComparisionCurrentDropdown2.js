import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ComparisionCurrentDropdown2.module.css";
import axios from "axios";
const ComparisionCurrentDropdown2 = () => {
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
      .get("http://127.0.0.1:5000/comparision-2")
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
    <div className={styles.comparisionCurrentDropdown2}>
      <img className={styles.asset22} alt="" src="../asset-2-2@2x.png" />
      <button className={styles.comparisionCurrentDropdown2Child} />
      <b className={styles.overview}>Overview</b>
      <div className={styles.investmentWrapper}>
        <b className={styles.investment}>Investment</b>
      </div>
      <b className={styles.gubairGenie}>Gubair Genie</b>
      <b className={styles.reports}>Reports</b>
      <b className={styles.notification}>Notification</b>
      <img
        className={styles.comparisionCurrentDropdown2Item}
        alt=""
        src="../vector-127.svg"
      />
      <div className={styles.gubairGenieWrapper}>
        <b className={styles.current}>Gubair Genie</b>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.currentWrapper}>
            <b className={styles.current}>Current</b>
          </div>
          <div className={styles.groupWrapper}>
            <img
              className={styles.frameChild}
              alt=""
              src="../group-289510.svg"
            />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.currentWrapper}>
            <b className={styles.current}>Proposed</b>
          </div>
          <div className={styles.groupWrapper}>
            <img
              className={styles.frameChild}
              alt=""
              src="../group-2895101.svg"
            />
          </div>
        </div>
      </div>
      {fund.map(
        ({
          name,
          is_class,
          is_prop,
          to_class,
          to_prop,
          propagation,
          name1,
          is_class1,
          is_prop1,
          to_class1,
          to_prop1,
          propagation1,
          visible,
          exist,
          ex_visible,
          id,
        }) => (
          <div className={styles.frameDiv}>
            <div className={styles.mutualFundEquityParent}>
              <b className={styles.investment}>{name}</b>
              <b className={styles.cr}>{is_class}</b>
              <b className={styles.cr1}>{is_prop}%</b>
              <b className={styles.b}>{to_class}</b>
              <b className={styles.b1}>{to_prop}%</b>
              <div className={styles.buy}>{propagation}</div>
            </div>
            {visible === true ? (
              <div>
                <div
                  className={styles.buyTheFollowingFundParent}
                  style={{ paddingRight: "60%", paddingBottom: "1%" }}
                >
                  <div className={styles.current}>Buy the following fund</div>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="../vector-80.svg"
                  />
                </div>
                <div className={styles.mutualFundEquityParent}>
                  <b className={styles.investment}>{name1}</b>
                  <b className={styles.cr}>{is_class1} </b>
                  <b className={styles.cr1}>{is_prop1}%</b>
                  <b className={styles.b}>{to_class1}</b>
                  <b className={styles.b1}>{to_prop1}%</b>
                  <b className={styles.buy}>{propagation1}</b>
                </div>{" "}
              </div>
            ) : null}
            <div className={styles.frameParent1}>
              <button
                className={styles.frameWrapper}
                onClick={() => {
                  setFund(
                    fund.map((item) =>
                      item.id == id
                        ? { ...item, ex_visible: !item.ex_visible }
                        : item
                    )
                  );
                }}
              >
                <div className={styles.hideExistingFundParent}>
                  <div className={styles.hideExistingFund}>
                    {ex_visible === false
                      ? "Hide existing fund"
                      : "Show existing fund"}
                  </div>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="../vector-801.svg"
                  />
                </div>
              </button>
              {exist.map(
                ({
                  name,
                  amount1,
                  percentage1,
                  amount2,
                  prop,
                  percentage2,
                }) => (
                  <div
                    className={styles.mutualFundEquityParent}
                    hidden={ex_visible}
                  >
                    <b className={styles.investment}>{name}</b>
                    <b className={styles.cr}>{amount1}</b>
                    <b className={styles.b}>{percentage1}</b>
                    <b className={styles.cr1}>{amount2}</b>
                    <b className={styles.b1}>{percentage2}</b>
                    <div className={styles.buy2}>{prop}</div>
                  </div>
                )
              )}
            </div>
          </div>
        )
      )}

      <input className={styles.searchBell} type="text" placeholder="Search" />
      <div className={styles.welcomeJohnDoe}>
        <b className={styles.welcomeJohnDoe1}>Welcome {user.name}</b>
        <b className={styles.current}>Portfolio Name: {user.port_name}</b>
        <b className={styles.current}>
          {dates}-{MONTHS[month]}-{year}
        </b>
      </div>
      <div className={styles.riskProfile}>
        <div className={styles.riskProfile1}>Risk Profile : {user.risk}</div>
        <div className={styles.gubairGenie1}>
          Total investment: {user.invest} Cr
        </div>
        <div className={styles.gubairGenie1}>F.C.V : {user.fcv}</div>
      </div>
      <div className={styles.frameParent8}>
        <div className={styles.frameParent9}>
          <div className={styles.currentWrapper}>
            <b className={styles.current}>Level 1</b>
          </div>
          <div className={styles.frameParent10}>
            <div className={styles.cagrParent}>
              <button className={styles.cagr}>
                <b className={styles.cagr1}>CAGR</b>
              </button>
              <div className={styles.currentWrapper}>
                <b className={styles.current}>Beta</b>
              </div>
              <div className={styles.currentWrapper}>
                <b className={styles.current}>Sector Exposure</b>
              </div>
              <div className={styles.currentWrapper}>
                <b className={styles.current}>Beta</b>
              </div>
            </div>
            <div className={styles.groupFrame}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="../ellipse-12.svg"
                />
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../ellipse-13.svg"
                />
                <div className={styles.div}>50%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent9}>
          <div className={styles.currentWrapper}>
            <b className={styles.current}>Level 2</b>
          </div>
          <div className={styles.frameParent10}>
            <div className={styles.cagrParent}>
              <button className={styles.cagr}>
                <b className={styles.cagr1}>CAGR</b>
              </button>
              <div className={styles.currentWrapper}>
                <b className={styles.current}>Beta</b>
              </div>
              <div className={styles.currentWrapper}>
                <b className={styles.current}>Sector Exposure</b>
              </div>
              <div className={styles.currentWrapper}>
                <b className={styles.current}>Beta</b>
              </div>
            </div>
            <div className={styles.groupFrame}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="../ellipse-121.svg"
                />
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../ellipse-131.svg"
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
    </div>
  );
};

export default ComparisionCurrentDropdown2;

const data = [
  {
    id: 0,
    name: "A",
    is_class: "1 Cr",
    is_prop: 97,
    to_class: "2 Cr",
    to_prop: 57,
    propagation: "Buy",
    visible: true,
    name1: "AA",
    is_class1: "1 Cr",
    is_prop1: 97,
    to_class1: "2 Cr",
    to_prop1: 57,
    propagation1: "Buy",
    ex_visible: true,
    exist: [
      {
        id: 0,
        name: "A",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 1,
        name: "B",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
      {
        id: 2,
        name: "C",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 3,
        name: "D",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
      {
        id: 4,
        name: "E",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 5,
        name: "F",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
    ],
  },
  {
    id: 1,
    name: "B",
    is_class: "1 Cr",
    is_prop: 97,
    to_class: "2 Cr",
    to_prop: 57,
    propagation: "Buy",
    visible: true,
    name1: "BB",
    is_class1: "1 Cr",
    is_prop1: 97,
    to_class1: "2 Cr",
    to_prop1: 57,
    propagation1: "Buy",
    ex_visible: true,
    exist: [
      {
        id: 0,
        name: "A",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 1,
        name: "B",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
      {
        id: 2,
        name: "C",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 3,
        name: "D",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
      {
        id: 4,
        name: "E",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 5,
        name: "F",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
    ],
  },
  {
    id: 2,
    name: "C",
    is_class: "1 Cr",
    is_prop: 97,
    to_class: "2 Cr",
    to_prop: 57,
    propagation: "Buy",
    visible: true,
    name1: "CC",
    is_class1: "1 Cr",
    is_prop1: 97,
    to_class1: "2 Cr",
    to_prop1: 57,
    propagation1: "Buy",
    ex_visible: true,
    exist: [
      {
        id: 0,
        name: "A",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 1,
        name: "B",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
      {
        id: 2,
        name: "C",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 3,
        name: "D",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
      {
        id: 4,
        name: "E",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 5,
        name: "F",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
    ],
  },
  {
    id: 3,
    name: "D",
    is_class: "1 Cr",
    is_prop: 97,
    to_class: "2 Cr",
    to_prop: 57,
    propagation: "Buy",
    visible: true,
    name1: "DD",
    is_class1: "1 Cr",
    is_prop1: 97,
    to_class1: "2 Cr",
    to_prop1: 57,
    propagation1: "Buy",
    ex_visible: true,
    exist: [
      {
        id: 0,
        name: "A",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 1,
        name: "B",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
      {
        id: 2,
        name: "C",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 3,
        name: "D",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
      {
        id: 4,
        name: "E",
        amount1: "1 Cr",
        percentage1: "97%",
        amount2: null,
        percentage2: null,
        prop: "Buy",
      },
      {
        id: 5,
        name: "F",
        amount1: null,
        percentage1: null,
        amount2: "1 Cr",
        percentage2: "97%",
        prop: "Sell",
      },
    ],
  },
];
