import DashboardMain from "./DashboardMain";
import Header from "./Header";

export default function Dashboard() {
  return (
    <div className="w-full h-full max-h-max">
      <Header />
      <DashboardMain />
    </div>
  );
}
