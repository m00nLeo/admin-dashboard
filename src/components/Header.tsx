import { useLocation } from "react-router-dom";
import { Avatar, Button } from "antd";
import { BellOutlined } from "@ant-design/icons";
import Container from "./Container";
import adminava from "../assets/avatar/admin.png";

import { Input } from "antd";
import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const HeaderBar: React.FC = () => {
  const location = useLocation();
  const day = new Date().getDate();
  const month = new Date().toLocaleString("en-GB", { month: "short" });
  const year = new Date().getFullYear();

  const getDaySuffix = (day: number): string => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const today = `${day}${getDaySuffix(day)} ${month} ${year}`;

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <Container>
      <div className="text-black h-fit flex justify-between items-center py-4">
        <div className="flex flex-col gap-2">
          <div className="capitalize font-bold text-3xl">
            {location.pathname.split("/")[1]}
          </div>
          <p className="text-lg text-gray-600">{today}</p>
        </div>

        <div className="flex items-center justify-center space-x-4 text-lg">
          <Search
            placeholder="Search..."
            onSearch={onSearch}
            // style={{ width: 300 }}
            className="text-xl w-80"
          />
          <Button
            icon={<BellOutlined />}
            className="h-8 rounded-md border-none hover:bg-orange-600"
          />
          <Avatar
            src={adminava}
            size="large"
            className="w-16 h-16"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeaderBar;
