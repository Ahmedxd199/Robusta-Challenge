import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../css/style.css'
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


const MovieList2 = () => {



  

    const [movies, setmovies] = useState([]);

    const getMovies = async () => {
        try {
            const response = await axios.get('/movies')
            const { data } = response
            console.log(data)
            setmovies(data)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getMovies()
    }, []);






   

    
      const deleteMovie = async (id) =>{

        try{
            await axios.delete(`/movies/${id}/`).then((response)=>{
                getMovies()
                console.log(response.data)
            })

        }catch(error){
            console.log(error)
        }

      }





      return (
        <>
            <div className="container text-center" style={{ marginTop: "20px", padding: "50px" }}>
                <div className="row">
                    {movies.map((movie, index) => {

                        return (
                            <div className="col" key={index}>
                                <Card style={{ width: '18rem', marginTop: '20px' }}>
                                    <Card.Header>{movie.title} </Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>{movie.year}</ListGroup.Item>
                                        <ListGroup.Item>{movie.budget}</ListGroup.Item>
                                        <ListGroup.Item>
                                            <Link className="btn btn-danger" to={`/editmovie/${movie.id}/`}>Edit</Link> 
                                            <button className="btn btn-success" onClick={() => deleteMovie(movie.id)} >Delete</button>
                                        </ListGroup.Item>
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

export default MovieList2;
