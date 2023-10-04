import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const LayoutTest = styled.div`
  .main-page {
    display: flex;
    width: 100%;

    .content {
      background-color: red;
    }
  }
  // ss//
  .header {
    width: 100%;
  }
`;

const Layout = () => {
  return (
    <LayoutTest>
      <Header className="header" />
      <div className="main-page">
        <Sidebar />
        <Outlet />
      </div>
    </LayoutTest>
  );
};

export default Layout;
