import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import LoginForm from "./components/login-form";
import PriceList from "./components/price-list";
import AboutUsButton from "./components/about-us";
import Rechtliches from "./components/rechtliches";
import userProvider from "./provider/user.provider";
import "./App.css";

function App() {
  const { getUsers, isLoggedIn, loginUser, logoutUser } = userProvider();
  const [page, setPage] = useState("");

  const Content = ({ page }) => {
    switch (page) {
      case "about-us":
        return <AboutUsButton />;
      case "rechtliches":
        return <Rechtliches />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    console.log("logged in status changed", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} changePageHandler={setPage} logoutHandler={logoutUser} />
      <h1 id="title">Capybara's Toaster Rental</h1>

      <section>
        {!isLoggedIn ? <LoginForm loginHandler={loginUser} /> : <></>}
        <PriceList />
      </section>

  
      <section>{Content({ page })}</section>
    </div>
  );
}

export default App;
