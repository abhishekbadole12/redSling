import SubHeader from "../../components/common/SubHeader/SubHeader";
import Card from "../../components/specific/Card/Card";
import { api_data } from "../../utils/constant";
import DashboardStyle from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={DashboardStyle.container}>
      <SubHeader />

      <div className={DashboardStyle.cardContainer}>
        {api_data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
