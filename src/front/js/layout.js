import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";
import { Navbar } from "./component/navbar.js";
import { StylesInfo } from "./views/stylesInfo";
import { Pricing } from "./views/pricing";
import { SignUp } from "./views/sign-up";
import { Forgot } from "./views/forgot-password";
import { Footer } from "./component/footer";
import { UserProfile } from "./views/user-profile";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<StylesInfo />} path="/styles" />
          <Route element={<Pricing />} path="/prices" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<Forgot />} path="/forgot-password" />
          <Route element={<UserProfile/>} path="/user-profile" />
          {/* <Route element={<h1>Not found!</h1>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
