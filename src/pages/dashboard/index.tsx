import Container from "../../components/Container";
import "./Dashboard.css";
import DashboardSummaries from "./DashboardSummaries";
import DashboardStats from "./DashboardStats";
import DashboardCards from "./DashboardCards";

const Dashboard = () => {
  return (
    <Container>
      <DashboardSummaries />

      <DashboardStats />

      <DashboardCards />
    </Container>
  );
};

export default Dashboard;
