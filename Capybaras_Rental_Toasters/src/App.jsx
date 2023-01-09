import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import LoginForm from "./components/login-form";
import PriceList from "./components/price-list";
import AboutUs from "./components/about-us";
import Legal from "./components/legal";
import userProvider from "./provider/user.provider";
import ExpireDate from "./components/expire-date";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { getUsers, isLoggedIn, loginUser, logoutUser } = userProvider();
  const [page, setPage] = useState("");

  const Content = ({ page }) => {
    switch (page) {
      case "about-us":
        return <AboutUs />;
      case "legal":
        return <Legal />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    console.log("logged in status changed", isLoggedIn);
    isLoggedIn
      ? (document.cookie = "")
      : (document.cookie = `userID=''; max-age=0`);
  }, [isLoggedIn]); //nicht löschen sonst website kaputt irgendwie

  return (
    <div className="App">
      <ToastContainer />
      <Navbar
        isLoggedIn={isLoggedIn}
        changePageHandler={setPage}
        logoutHandler={logoutUser}
      />
      <h1 id="title">Capybara's Toaster Rental</h1>

      <section>
        <PriceList />
        {!isLoggedIn ? <LoginForm loginHandler={loginUser} /> : <></>}

        <ExpireDate isLoggedIn={isLoggedIn} />
      </section>

      <section>{Content({ page })}</section>
    </div>
  );
}

export default App;
