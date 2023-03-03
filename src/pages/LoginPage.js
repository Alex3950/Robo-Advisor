import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import axios from "axios";
const LoginPage = () => {
  const navigate = useNavigate();
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
  // const onLoginClick = useCallback(() => {
  //   navigate("/demographics");
  // }, [navigate]);

  const onLoginClick = useCallback(() => {
    console.log("After click email",email);
     console.log("empty_pass",password);
    axios
    .post("http://127.0.0.1:5000/login", {
      email,
      password})
      .then((response) => {
        if (response.status === 200)
         {
          // console.log(response.status)
          // console.log("Success");
          // console.log("email ",email);
          // console.log("pass",password);
          console.log(response.data);
          navigate("/demographics");}
          else {console.log("Failed");}
        }).catch((error) => 
        {console.log("Failed");});
      },
         [navigate,email,password]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.frameParent}>
        <div className={styles.leftItemsWrapper}>
          <div className={styles.leftItems}>
            <div className={styles.logo}>
              <img className={styles.logoIcon} alt="" src="../logo2@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.loginWrapper}>
            <b className={styles.login}>Login</b>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.emailParent}>
                  <div className={styles.email}>
                    <div className={styles.emailWrapper}>
                      <div className={styles.forgotPassword}>Email</div>
                    </div>
                    <input
                      className={styles.emailChild}
                      type="text"
                      placeholder="e.g. john@ncash.ai"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <div className={styles.email}>
                    <div className={styles.emailWrapper}>
                      <div className={styles.forgotPassword}>Password</div>
                    </div>
                    <input className={styles.passwordChild} type="text"  value={password}
                      onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                </div>
                <div className={styles.forgotPasswordWrapper}>
                  <div className={styles.forgotPassword}>Forgot Password?</div>
                </div>
              </div>
              <button className={styles.login1} onClick={onLoginClick}>
                <div className={styles.login2}>Login</div>
              </button>
            </div>
            <div className={styles.dontHaveAnAccountSignUpWrapper}>
              <div className={styles.forgotPassword}>
                <span>{`Don’t have an account? `}</span>
                <span className={styles.signUp}>Sign up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.welcomeToGubairOneWrapper}>
          <b className={styles.forgotPassword}>
            <span>Welcome to</span>
            <span className={styles.signUp}> Gubair One</span>
          </b>
        </div>
        <img
          className={styles.frameChild}
          alt=""
          src="../frame-759301578@2x.png"
        />
      </div>
    </div>
  );
};

export default LoginPage;
