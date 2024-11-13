import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import Sidebar from "../components/Sidebar";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import HeaderBar from "../components/Header";

const sidebarWidth = "20%"; // Adjust this to set a fixed width for the sidebar

const AdminLayout = () => {
  return (
    <div>
      <Layout className="min-h-screen">
        {/* Sidebar */}
        <Sider width={sidebarWidth} theme="light" className="border-r-2 shadow-xl fixed top-0 left-0 h-screen">
          <Sidebar />
        </Sider>

        <Layout style={{ marginLeft: sidebarWidth }} className="bg-gray-300/40">
          {/* Header */}
          <HeaderBar />

          <Content>
            {/* Renders the current page content */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminLayout;