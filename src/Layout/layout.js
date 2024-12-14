import React, { Fragment } from "react";
import NavBar from "../Navbar/nav";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";

const Layout = () => {
  return (
    <Fragment>
      <div>
        <NavBar />
        <main>
          <Outlet /> {/* هذا سيعرض المكونات بناءً على المسار */}
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
