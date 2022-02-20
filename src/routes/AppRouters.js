
import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../components/Login';
import {Registro} from '../components/Registro';
import { DashboardRoutes } from "../routes/DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRouter";
import { getAuth,onAuthStateChanged } from "firebase/auth";

 function AppRouter() {

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
         setIsLoggedIn(true)
        }
        else{
         setIsLoggedIn(false)
        }

        setChecking(false)
    })

 
}, [setIsLoggedIn,setChecking])


if(checking){
  return(
      <h1>Espere...</h1>
  )
}


  return (
    <Router>
        <Routes>
         
        <Route path="/Login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Login/> 
                    </PublicRoute>
                } />



                <Route path="/registro" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Registro/>
                    </PublicRoute>
                } />

                
                <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRoutes/>
                    </PrivateRoute>
                }/>
        </Routes>
    </Router>
  );
}

export default AppRouter;









// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Navigate,
//   } from "react-router-dom";
//   import { MovieDetails } from "./pages/MovieDetails";
//   import { Login } from "./components/Login";
//   import { LandingPage } from "./pages/LandingPage";
  
  
  
  
//    function App() {
//     return (
  
//       <Router>
//         <main>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="*" element={<Navigate replace to="/" />} />
//             <Route path="/movies/:movieId" element={<MovieDetails />} />
//             <Route path="/private" element={<LandingPage />} />
//           </Routes>
//         </main>
//       </Router>
//     );
//   }
  
  
//   export default App;
  