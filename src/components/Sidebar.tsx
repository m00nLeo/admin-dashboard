import { Menu, Avatar } from "antd";
import {
  SettingOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  WalletOutlined,
  TransactionOutlined,
  FundProjectionScreenOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import adminava from "../assets/avatar/admin.png";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  // Define menu items as an array of objects
  const menuItems = [
    {
      key: "dashboard",
      icon: <AppstoreOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "transaction",
      icon: <TransactionOutlined />,
      label: <Link to="/transaction">Transaction</Link>,
    },
    {
      key: "wallet",
      icon: <WalletOutlined />,
      label: <Link to="/wallet">Wallet</Link>,
    },
    {
      key: "analytics",
      icon: <FundProjectionScreenOutlined />,
      label: <Link to="/analytics">Analytics</Link>,
    },
    {
      key: "personal",
      icon: <UserOutlined />,
      label: <Link to="/personal">Personal</Link>,
    },
    {
      key: "message",
      icon: <MailOutlined />,
      label: <Link to="/message">Message</Link>,
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: <Link to="/settings">Settings</Link>,
    },
  ];

  // Get user data from local Storage
  const user = localStorage.getItem("loginData");
  const parsedUser = user ? JSON.parse(user) : null;

  // Logout logic
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="flex flex-col shadow-2xl text-white h-full">
      {/* Logo */}
      <div className="logo p-6 text-2xl font-semibold flex justify-center">
        <img src={logo} alt="" width={"90%"} />
      </div>

      {/* Menu */}
      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        className="text-xl px-12 flex flex-col gap-3"
        items={menuItems}
      />

      {/* Login User */}
      <div className="mt-auto p-6 flex flex-col items-center">
        <Avatar
          src={adminava}
          size="large"
          className="w-16 h-16"
        />

        <div className="mt-4 mb-8 flex flex-col items-center">
          <p className="font-semibold text-lg text-black">
            {parsedUser ? parsedUser?.email : "User Name"}
          </p>
          <p className="text-base text-gray-500 italic">HR Manager</p>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex justify-center items-center gap-2 pb-10 text-lg text-slate-500 hover:text-red-600/80 font-bold transition-all duration-150 delay-75"
        >
          <LogoutOutlined />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
