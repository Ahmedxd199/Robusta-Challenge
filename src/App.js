import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieInfo from './pages/level1/movieInfo';
import MovieList from './pages/level1/movielist';

function App() {
  return (
     <Router>

       <Navbar/>
        
        <Routes>
          <Route path="/movieinfo" element={<MovieInfo />}  />
          <Route path="/movielist" element={<MovieList />}  />
          {/* <Route path="/" element={<CardView />} />
          <Route path="/login" element={<Login />}  />
          <Route path="/signup" element={<SignUp />}  />
          <Route path="/film/:id" element={<Film />} />
          <Route path="/favmovie" element={<FavMovie />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
