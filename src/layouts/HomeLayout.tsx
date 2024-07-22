import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function HomeLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;