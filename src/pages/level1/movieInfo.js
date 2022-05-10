import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../css/style.css' 

const MovieInfo = () => {


    // const [moviename, setMovieName] = useState("");
    // const [movieyear, setMovieYear] = useState("");
    // const [moviebudjet, setMovieBudjet] = useState("");


    function years() {

        let year_satart = 1940;
        let year_end = (new Date).getFullYear(); // current year
        let year_selected = 1992;

        let option = '';
        option = '<option>Year</option>'; // first option

        for (let i = year_satart; i <= year_end; i++) {
            let selected = (i === year_selected ? ' selected' : '');
            option += '<option value="' + i + '"' + selected + '>' + i + '</option>';
        }

        document.getElementById("year").innerHTML = option;

    }

    let [movies, setmovies] = useState([]);


    useEffect(() => {

        let movies = JSON.parse(localStorage.getItem('movies'));
        if (movies) {
            setmovies(movies);
        }

        years()
    }, []);


    const [errorMessage, setErrorMessage] = useState('');

    let saveStorage = (event) => {
        event.preventDefault();
        let moviename = document.getElementById('moviename').value;
        let movieyear = document.getElementById('year').value;
        let moviebudjet = document.getElementById('moviebudjet').value;
        let err = document.getElementById('error')
        let movie = {
            moviename: moviename,
            movieyear:movieyear,
            moviebudjet: moviebudjet,
        }

        movies = [...movies, movie]


        if(moviename === null || moviename === ""){
            setErrorMessage("movie name is required")
            err.style.visibility = "visible"
        }else if(movieyear === null ||movieyear  === ""){
            setErrorMessage("movieyear is required")
            err.style.visibility = "visible"
        }else if(isNaN(movieyear)){
            setErrorMessage("movieyear should be a number not text")
            err.style.visibility = "visible"
        }else if(moviebudjet === null || moviebudjet ===""){
            setErrorMessage("moviebudjet is required")
            err.style.visibility = "visible"
        }else if(isNaN(moviebudjet)){
            setErrorMessage("moviebudjet should be a number not text")
        }else{
              err.style.visibility = "hidden"
              localStorage.setItem('movies', JSON.stringify(movies));
        }


        

    }





    return (
        <>

            <div className="container" style={{ marginTop: "50px" }} >

                <div align="center" className="col-12 text-center" id="error" >
                    <span>{errorMessage}</span>
                    <br />
                </div>

                <form onSubmit={saveStorage}>
                    <div className="form-group">
                        <label htmlFor="moviename">Movie Name</label>
                        <input type="text" className="form-control" id="moviename" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="year">Movie Year: </label>
                        </div>
                        <select className="custom-select" id="year" name="year"  >

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="moviename">Movie Budget</label>
                        <input type="text" className="form-control" id="moviebudjet" />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: "5px" }}>Submit</button>
                    <a className="btn btn-primary" style={{ marginTop: "5px" }} href="movielist">movielist</a>
                </form>

            </div>

        </>
    );



}

export default MovieInfo;
