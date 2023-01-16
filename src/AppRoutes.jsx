    import React from "react";
    import { Routes , Route } from "react-router-dom";
import Header from "./components/Header/index.jsx";
    import Error from "./pages/Error/index.jsx";
    import Home from "./pages/Home/index.jsx";
    import SignIn from "./pages/SignIn/index.jsx";
    import SignUp from "./pages/SignUp/index.jsx";
  const AppRoutes = () => {
    
    return(
      <>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/sign_in" element={<SignIn/>}/>
            <Route exact path="/sign_up" element={<SignUp/>}/>
            <Route exact path="*" element={<Error/>}/>
        </Routes>
      </>
    )
  }

  export default AppRoutes;