import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieInfo from './pages/level1/movieInfo';
import MovieList from './pages/level1/movielist';
import MovieInfo2 from './pages/level2/movieinfo2';
import MovieList2 from './pages/level2/movielist2';
import Editmovie from './pages/level2/editmovie';
import Home from './pages/home';

function App() {
  return (
     <Router>

       <Navbar/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/movieinfo" element={<MovieInfo />}  />
          <Route path="/movielist" element={<MovieList />}  />
          <Route path="/movieinfo2" element={<MovieInfo2 />}  />
          <Route path="/movielist2" element={<MovieList2 />}  /> 
          <Route path="/editmovie/:id" element={<Editmovie/>} />
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
