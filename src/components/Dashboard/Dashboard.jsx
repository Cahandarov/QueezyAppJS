import DashboardMain from "./DashboardMain";
import Header from "./Header";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const dashboardMainPage = useSelector(
    (state) => state.dashboard.dashboardMainPage
  );
  return (
    <div className="w-full h-full max-h-max">
      <Header />
      {dashboardMainPage && <DashboardMain />}
    </div>
  );
}
