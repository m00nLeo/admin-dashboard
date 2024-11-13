import { Card, Col, Row } from "antd";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlinePayment,
  MdOutlineSavings,
} from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";


const DashboardSummaries: React.FC = () => {
  return <div>    <Row gutter={20}>
  <Col span={6}>
    <Card
      hoverable
      title={
        <span className="flex text-white items-center gap-2">
          <span className="rounded-full w-8 h-8 flex justify-center items-center bg-[#79b3ee]">
            <MdOutlineAccountBalanceWallet />
          </span>
          <span>Balance</span>
        </span>
      }
      bordered={false}
      className="rounded-lg bg-[#3399ff]"
    >
      <div className="text-white flex flex-col items-center gap-2">
        <p className="text-2xl font-bold">$42.65</p>
        <p className="text-sm italic">From the running month</p>
      </div>
    </Card>
  </Col>

  <Col span={6}>
    <Card
      hoverable
      title={
        <span className="flex text-white items-center gap-2">
          <span className="rounded-full w-8 h-8 flex justify-center items-center bg-[#e08282] ">
            <BsCashCoin />
          </span>
          <span>Incomes</span>
        </span>
      }
      bordered={false}
      className="rounded-lg bg-[#e55353]"
    >
      <div className="text-white flex flex-col items-center gap-2">
        <p className="text-2xl font-bold">$1000</p>
        <p className="text-sm italic">Daily earning of this month</p>
      </div>
    </Card>
  </Col>
  <Col span={6}>
    <Card
      hoverable
      title={
        <span className="flex text-white items-center gap-2">
          <span className="rounded-full w-8 h-8 flex justify-center items-center bg-[#7f7ddf]">
            <MdOutlinePayment />
          </span>
          <span>Expenses</span>
        </span>
      }
      bordered={false}
      className="rounded-lg bg-[#5856D6]"
    >
      <div className="text-white flex flex-col items-center gap-2">
        <p className="text-2xl font-bold">55.6%</p>
        <p className="text-sm italic"> +6% greater that last month</p>
      </div>
    </Card>
  </Col>
  <Col span={6}>
    <Card
      hoverable
      title={
        <span className="flex text-white items-center gap-2">
          <span className="rounded-full w-8 h-8 flex justify-center items-center bg-[#f7cf7a]">
            <MdOutlineSavings />
          </span>
          <span>Savings</span>
        </span>
      }
      bordered={false}
      className="rounded-lg bg-[#f9b115]"
    >
      <div className="text-white flex flex-col items-center gap-2">
        <p className="text-2xl font-bold">$4265</p>
        <p className="text-sm italic">From early this year</p>
      </div>
    </Card>
  </Col>
</Row></div>;
};

export default DashboardSummaries;
