import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./components/ui/SideMenu";
import RigthComponent from "./components/ui/RigthComponent";
import Login from "./components/LogIn/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "./components/Mobile/mobileSlice";
import { getQuizzesThunk } from "./components/QuizLibary/quizzesSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuizzesThunk());
  }, [dispatch]);
  const getQuizzesStatus = useSelector(
    (state) => state.quizzes.GetQuizzes_status
  );
  const showSideBar = useSelector((state) => state.mobile.showSidebar);
  const isLogined = useSelector((state) => state.login.isLogined);
  const isRegistered = useSelector((state) => state.login.isRegistered);
  const sideBarPage = useSelector((state) => state.ui.sideBarPage);
  const rigthComponentPage = useSelector(
    (state) => state.ui.rigthComponentPage
  );

  function handleMobileMenu() {
    if (showSideBar) {
      dispatch(setShowSidebar(false));
    }
  }
  if (getQuizzesStatus === "loading") {
    return <p>Loading...</p>;
  }
  return (
    <Router>
      {isLogined && isRegistered ? (
        <div
          className={`container flex w-full max-h-fit ${
            sideBarPage ? "min-h-[1190px]" : ""
          }`}
          onClick={() => handleMobileMenu()}
        >
          {sideBarPage && <SideMenu />}
          {rigthComponentPage && <RigthComponent />}
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
