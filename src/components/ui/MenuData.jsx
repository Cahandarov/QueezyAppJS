import img1 from "./images/DashboardIcon.svg";
import img2 from "./images/SearchIcon.svg";
import img3 from "./images/QuizLibraryIcon.svg";
import img4 from "./images/LeaderBoardIcon.svg";
import img5 from "./images/SettingsIcon.svg";
import Dashboard from "../Dashboard/Dashboard";
import Discover from "../Discover/Discover";
import QuizLibrary from "../QuizLibary/QuizLibrary";
import Leaderboard from "../LeaderBoard/Leaderboard";
import Settings from "../Settings/Settings";

export const MenuData = [
  {
    button: "dashboard",
    btnIcon: img1,
    path: "/",
    component: <Dashboard />,
  },
  {
    button: "discover",
    btnIcon: img2,
    path: "/discover",
    component: <Discover />,
  },
  {
    button: "quizLibrary",
    btnIcon: img3,
    path: "/quizlibrary",
    component: <QuizLibrary />,
  },
  {
    button: "leaderboard",
    btnIcon: img4,
    path: "/leaderboard",
    component: <Leaderboard />,
  },
  {
    button: "settings",
    btnIcon: img5,
    path: "/settings",
    component: <Settings />,
  },
];
