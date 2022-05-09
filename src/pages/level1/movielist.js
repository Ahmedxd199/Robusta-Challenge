import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';



const MovieList = () => {


    let [movies, setmovies] = useState([]);
    useEffect(() => {

        let movies = JSON.parse(localStorage.getItem('movies'));
        if (movies) {
            setmovies(movies);
        }

        console.log(movies)
    }, []);



    return (
        <>
            <div className="container text-center" style={{ marginTop: "20px", padding: "50px" }}>
                <div className="row">
                    {movies.map((movie, index) => {

                        return (
                            <div className="col" key={index}>
                                <Card style={{ width: '18rem', marginTop: '20px' }}>
                                    <Card.Header>{movie.moviename}</Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>{movie.movieyear}</ListGroup.Item>
                                        <ListGroup.Item>{movie.moviebudjet}</ListGroup.Item>
                                    </ListGroup>
                                </Card>

                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    );



}

export default MovieList;
