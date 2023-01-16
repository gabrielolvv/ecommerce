    import React from "react";
    import { Routes , Route } from "react-router-dom";
    import Error from "./pages/Error/index.jsx";
    import Home from "./pages/Home/index.jsx";
    


  const AppRoutes = () => {

    
    
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="*" element={<Error/>}/>
        </Routes>
    )
  }

  export default AppRoutes;