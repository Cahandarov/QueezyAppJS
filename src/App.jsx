import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./components/ui/SideMenu";
import RigthComponent from "./components/ui/RigthComponent";
import Login from "./components/LogIn/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "./components/Mobile/mobileSlice";

function App() {
  const dispatch = useDispatch();
  const showSideBar = useSelector((state) => state.mobile.showSidebar);
  const isLogined = useSelector((state) => state.login.isLogined);
  const isRegistered = useSelector((state) => state.login.isRegistered);
  function handleMobileMenu() {
    if (showSideBar) {
      dispatch(setShowSidebar(false));
    }
  }
  return (
    <Router>
      {isLogined && isRegistered ? (
        <div
          className="container flex w-full max-h-fit min-h-[1190px]"
          onClick={() => handleMobileMenu()}
        >
          <SideMenu />
          <RigthComponent />
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
