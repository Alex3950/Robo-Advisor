import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ComparisionCurrentDropdown2 from "./pages/ComparisionCurrentDropdown2";
import ComparisionCurrentDropdown3 from "./pages/ComparisionCurrentDropdown3";
import ComparisionCurrentDropdown1 from "./pages/ComparisionCurrentDropdown1";
import Overview from "./pages/Overview";
import Comparision from "./pages/Comparision";
import LoginPage from "./pages/LoginPage";
import Demographics from "./pages/Demographics";
import QuestionAnswer6 from "./pages/QuestionAnswer6";
import QuestionAnswer5 from "./pages/QuestionAnswer5";
import QuestionAnswer4 from "./pages/QuestionAnswer4";
import QuestionAnswer3 from "./pages/QuestionAnswer3";
import QuestionAnswer2 from "./pages/QuestionAnswer2";
import QuestionAnswer1 from "./pages/QuestionAnswer1";
import { useEffect } from "react";
import Upload from "./pages/Upload";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/comparision-current-dropdown-3":
        title = "";
        metaDescription = "";
        break;
      case "/comparision-current-dropdown-1":
        title = "";
        metaDescription = "";
        break;
      case "/overview":
        title = "";
        metaDescription = "";
        break;
      case "/comparision":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/demographics":
        title = "";
        metaDescription = "";
        break;
      case "/question-answer-6":
        title = "";
        metaDescription = "";
        break;
      case "/question-answer-5":
        title = "";
        metaDescription = "";
        break;
      case "/question-answer-4":
        title = "";
        metaDescription = "";
        break;
      case "/question-answer-3":
        title = "";
        metaDescription = "";
        break;
      case "/question-answer-2":
        title = "";
        metaDescription = "";
        break;
      case "/question-answer-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/comparision-current-dropdown-2" element={<ComparisionCurrentDropdown2 />} />

      <Route
        path="/comparision-current-dropdown-3"
        element={<ComparisionCurrentDropdown3 />}
      />

      <Route
        path="/comparision-current-dropdown-1"
        element={<ComparisionCurrentDropdown1 />}
      />

      <Route path="/overview" element={<Overview />} />
      
      <Route path="/upload" element={<Upload />} />

      <Route path="/comparision" element={<Comparision />} />

      <Route path="/" element={<LoginPage />} />

      <Route path="/demographics" element={<Demographics />} />

      <Route path="/question-answer-6" element={<QuestionAnswer6 />} />

      <Route path="/question-answer-5" element={<QuestionAnswer5 />} />

      <Route path="/question-answer-4" element={<QuestionAnswer4 />} />

      <Route path="/question-answer-3" element={<QuestionAnswer3 />} />

      <Route path="/question-answer-2" element={<QuestionAnswer2 />} />

      <Route path="/question-answer-1" element={<QuestionAnswer1 />} />
    </Routes>
  );
}
export default App;
