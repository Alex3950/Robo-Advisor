import { useState, useCallback } from "react";
import {
  TextField,
  Icon,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import styles from "./Demographics.module.css";
import axios from "axios";
const Demographics = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);

  const date = new Date(frameDateTimePickerValue);
  let dates = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  const navigate = useNavigate();
  const [demodata, setDemodata] = useState({
    firstName: "",
    lastName: "",
    dob: year,
  });
  console.log(demodata);
  // console.log(frameDateTimePickerValue)
  const onFrameButtonClick = useCallback(() => {
    axios
      .post("http://127.0.0.1:5000/demographics", {
        demodata,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          navigate("/question-answer-1");
        } else {
          console.log("Failed");
        }
      })
      .catch((error) => {
        console.log("Failed");
      });
  }, [navigate, demodata]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.demographics}>
        <div className={styles.customerOnboardingWrapper}>
          <div className={styles.customerOnboarding}>Customer Onboarding</div>
        </div>
        <div className={styles.leftItems}>
          <div className={styles.logo}>
            <img className={styles.logoIcon} alt="" src="../logo3@2x.png" />
          </div>
        </div>
        <div className={styles.frameParent}>
          <input
            className={styles.frameChild}
            type="text"
            placeholder="First Name"
            value={demodata.firstName}
            onChange={(event) => {
              setDemodata({ ...demodata, firstName: event.target.value });
            }}
          />
          <input
            className={styles.frameItem}
            type="text"
            placeholder="Last Name"
            value={demodata.lastName}
            onChange={(event) => {
              setDemodata({ ...demodata, lastName: event.target.value });
            }}
          />
        </div>
        <input className={styles.uploadImage} type="file" />
        <div className={styles.dob}>
          <div className={styles.dateOfBirth}>Date of Birth</div>
          <div className={styles.wrapper}>
            <DatePicker
              label="Date"
              value={frameDateTimePickerValue}
              onChange={(newValue) => {
                setFrameDateTimePickerValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  variant="standard"
                  size="medium"
                  renderInput={{ placeholder: "Month" }}
                  helperText="Year"
                />
              )}
            />
          </div>
          <div className={styles.calendar1Wrapper}>
            <img
              className={styles.calendar1Icon}
              alt=""
              src="../calendar-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.gender}>
          <div className={styles.genderWrapper}>
            <div className={styles.customerOnboarding}>Gender:</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.groupParent}>
              <input className={styles.frameInner} type="radio" name="gender" />
              <div className={styles.male}>Male</div>
            </div>
            <div className={styles.groupParent}>
              <input
                className={styles.rectangleInput}
                type="radio"
                name="gender"
              />
              <div className={styles.male}>Female</div>
            </div>
          </div>
        </div>
        <div className={styles.dob1}>
          <div className={styles.customerOnboarding}>Marital Status</div>
          <FormControl sx={{ width: 119 }} variant="outlined">
            <InputLabel color="primary">Single</InputLabel>
            <Select color="primary" size="medium" label="Single">
              <MenuItem value="married">married</MenuItem>
              <MenuItem value="divorced">divorced</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.genderWrapper}>
            <div className={styles.customerOnboarding}>Mobile No.</div>
          </div>
          <input
            className={styles.frameInput}
            type="text"
            defaultValue="+91 "
            placeholder="+91"
            maxLength={14}
            minLength={14}
          />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.genderWrapper}>
            <div className={styles.customerOnboarding}>PAN number</div>
          </div>
          <input
            className={styles.frameInput}
            type="text"
            defaultValue="Enter your PAN number"
            placeholder="Enter your PAN number"
            maxLength={10}
            minLength={10}
          />
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.genderWrapper}>
            <div className={styles.customerOnboarding}>Occupation</div>
          </div>
          <input className={styles.frameInput} type="text" />
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.genderWrapper}>
            <div className={styles.customerOnboarding}>
              Reseidential Address
            </div>
          </div>
          <textarea
            className={styles.frameTextarea}
            placeholder="Enter your Address"
          />
        </div>
        <button className={styles.submitWrapper} onClick={onFrameButtonClick}>
          <div className={styles.submit}>Submit</div>
        </button>
      </div>
    </LocalizationProvider>
  );
};

export default Demographics;
