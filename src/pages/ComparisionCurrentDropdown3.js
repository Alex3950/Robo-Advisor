import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ComparisionCurrentDropdown3.module.css";

const ComparisionCurrentDropdown3 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.comparisionCurrentDropdown3}>
      <img className={styles.asset22} alt="" src="../asset-2-2@2x.png" />
      <button className={styles.comparisionCurrentDropdown3Child} />
      <b className={styles.overview}>Overview</b>
      <div className={styles.investmentWrapper}>
        <b className={styles.investment}>Investment</b>
      </div>
      <b className={styles.gubairGenie}>Gubair Genie</b>
      <b className={styles.reports}>Reports</b>
      <b className={styles.notification}>Notification</b>
      <img
        className={styles.comparisionCurrentDropdown3Item}
        alt=""
        src="../vector-1271.svg"
      />
      <div className={styles.comparisionCurrentDropdown3Inner} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.level1Wrapper}>
            <b className={styles.current}>Level 1</b>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.cagrParent}>
              <button className={styles.cagr}>
                <b className={styles.cagr1}>CAGR</b>
              </button>
              <div className={styles.level1Wrapper}>
                <b className={styles.current}>Beta</b>
              </div>
              <div className={styles.level1Wrapper}>
                <b className={styles.current}>Sector Exposure</b>
              </div>
              <div className={styles.level1Wrapper}>
                <b className={styles.current}>Beta</b>
              </div>
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="../ellipse-122.svg"
                />
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../ellipse-132.svg"
                />
                <div className={styles.div}>50%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.level1Wrapper}>
            <b className={styles.current}>Level 2</b>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.cagrParent}>
              <button className={styles.cagr}>
                <b className={styles.cagr1}>CAGR</b>
              </button>
              <div className={styles.level1Wrapper}>
                <b className={styles.current}>Beta</b>
              </div>
              <div className={styles.level1Wrapper}>
                <b className={styles.current}>Sector Exposure</b>
              </div>
              <div className={styles.level1Wrapper}>
                <b className={styles.current}>Beta</b>
              </div>
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="../ellipse-123.svg"
                />
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="../ellipse-133.svg"
                />
                <div className={styles.div}>50%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gubairGenieWrapper}>
        <b className={styles.current}>Gubair Genie</b>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.frameParent3}>
          <div className={styles.level1Wrapper}>
            <b className={styles.current}>Current</b>
          </div>
          <div className={styles.groupFrame}>
            <img
              className={styles.frameChild}
              alt=""
              src="../group-289510.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.level1Wrapper}>
            <b className={styles.current}>Proposed</b>
          </div>
          <div className={styles.groupFrame}>
            <img
              className={styles.frameChild}
              alt=""
              src="../group-2895101.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.mutualFundEquityParent}>
          <b className={styles.investment}>Mutual Fund: Equity</b>
          <b className={styles.cr}>13.2 Cr</b>
          <b className={styles.cr1}>13.2 Cr</b>
          <b className={styles.b}>57%</b>
          <b className={styles.b1}>57%</b>
          <div className={styles.buy}>Buy</div>
        </div>
        <div className={styles.chooseAnyAdditional2FundsParent}>
          <b className={styles.current}>Choose any additional 2 funds</b>
          <img className={styles.frameInner} alt="" src="../vector-808.svg" />
        </div>
        <div className={styles.mutualFundEquityParent}>
          <b className={styles.investment}>Mutual Fund: Equity A</b>
          <b className={styles.cr}>13.2 Cr</b>
          <b className={styles.cr1}>13.2 Cr</b>
          <b className={styles.b}>57%</b>
          <b className={styles.b1}>57%</b>
          <b className={styles.buy1}>Buy</b>
        </div>
        <div className={styles.mutualFundEquityParent}>
          <b className={styles.investment}>Mutual Fund: Equity B</b>
          <b className={styles.cr}>13.2 Cr</b>
          <b className={styles.cr1}>13.2 Cr</b>
          <b className={styles.b}>57%</b>
          <b className={styles.b1}>57%</b>
          <b className={styles.buy1}>Buy</b>
        </div>
        <div className={styles.mutualFundEquityParent}>
          <b className={styles.investment}>Mutual Fund: Equity C</b>
          <b className={styles.cr}>13.2 Cr</b>
          <b className={styles.cr1}>13.2 Cr</b>
          <b className={styles.b}>57%</b>
          <b className={styles.b1}>57%</b>
          <b className={styles.buy1}>Buy</b>
        </div>
        <div className={styles.mutualFundEquityParent}>
          <b className={styles.investment}>Mutual Fund: Equity D</b>
          <b className={styles.cr}>13.2 Cr</b>
          <b className={styles.cr1}>13.2 Cr</b>
          <b className={styles.b}>57%</b>
          <b className={styles.b1}>57%</b>
          <b className={styles.buy1}>Buy</b>
        </div>
        <div className={styles.frameParent6}>
          <button
            className={styles.viewAllTheFundParent}
            onClick={onFrameButtonClick}
          >
            <b className={styles.viewAllThe}>View all the fund</b>
            <img className={styles.frameInner} alt="" src="../vector-809.svg" />
          </button>
          <div className={styles.compareTheFundsParent}>
            <b className={styles.current}>Compare the funds</b>
            <img className={styles.groupIcon} alt="" src="../group-21734.svg" />
          </div>
        </div>
      </div>
      <div className={styles.comparisionCurrentDropdown3Inner1}>
        <div className={styles.mutualFundEquityParent}>
          <b className={styles.investment}>Mutual Fund: Debt</b>
          <b className={styles.cr}>13.2 Cr</b>
          <b className={styles.cr1}>13.2 Cr</b>
          <b className={styles.b}>57%</b>
          <b className={styles.b1}>57%</b>
        </div>
      </div>
      <div className={styles.searchBell}>
        <div className={styles.searchBar}>
          <div className={styles.current}>Search</div>
        </div>
        <div className={styles.level1Wrapper}>
          <img className={styles.vectorIcon1} alt="" src="../vector.svg" />
        </div>
      </div>
      <div className={styles.welcomeJohnDoe}>
        <b className={styles.welcomeJohnDoe1}>Welcome John Doe</b>
        <b className={styles.current}>Portfolio Name: Jasper_Dec_22</b>
        <b className={styles.current}>30-Dec-22</b>
      </div>
      <div className={styles.riskProfile}>
        <input
          className={styles.riskProfile1}
          type="text"
          placeholder="Risk Profile : Moderate"
        />
        <input
          className={styles.totalInvestment232}
          type="text"
          placeholder="Total investment: 23.2 Cr"
        />
        <input
          className={styles.totalInvestment232}
          type="text"
          placeholder="F.C.V : 7.4"
        />
      </div>
    </div>
  );
};

export default ComparisionCurrentDropdown3;
