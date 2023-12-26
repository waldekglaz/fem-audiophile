import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
