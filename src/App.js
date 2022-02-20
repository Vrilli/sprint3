
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { Login } from "./components/Login";
import { LandingPage } from "./pages/LandingPage";




 function App() {
  return (

    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/private" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}


export default App;
