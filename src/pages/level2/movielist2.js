import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../css/style.css'
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const MovieList2 = () => {





    const [movies, setmovies] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

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



    useEffect(() => {
        years()
        getMovies()
    }, []);


    const deleteMovie = async (id) => {

        try {
            await axios.delete(`/movies/${id}/`).then((response) => {
                getMovies()
                console.log(response.data)
            })

        } catch (error) {
            console.log(error)
        }

    }


    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = movies.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            console.log(filteredData)
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(movies)
        }
    }


    const searchYear = (searchValue) => {
        // console.log(searchValue)
    //    setSearchInput(searchValue)
        
       
            const filteredData = movies.filter((item) => {
                if(item.year == searchValue){
                    return item;
                }
            })
            console.log(filteredData)
            setFilteredResults(filteredData)
      
    }




    return (
        <>
            {/* <div className="container text-center" style={{ marginTop: "20px", padding: "50px" }}>
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
            </div> */}



            <div className="container text-center" style={{ marginTop: "20px", padding: "50px" }}>
                <div className="row">

                   

                        <div className="col-12">

                            <input style={{width:"80%"}}
                                placeholder='Search...'
                                onChange={(e) => searchItems(e.target.value)}
                            />

                               <select className="custom-select" id="year" name="year" style={{width:"5%"} }  onChange={(e) => searchYear(e.target.value)} ></select>

                        </div>

                        {/* <div className="col-2">

                       

                        </div> */}


                    {searchInput.length > 1 ? (
                        filteredResults.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Card style={{ width: '18rem', marginTop: '20px' }}>
                                        <Card.Header>{item.title} </Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>{item.year}</ListGroup.Item>
                                            <ListGroup.Item>{item.budget}</ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link className="btn btn-danger" to={`/editmovie/${item.id}/`}>Edit</Link>
                                                <button className="btn btn-success" onClick={() => deleteMovie(item.id)} >Delete</button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>

                                </div>
                            )
                        })
                    ) : (
                        movies.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Card style={{ width: '18rem', marginTop: '20px' }}>
                                        <Card.Header>{item.title} </Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>{item.year}</ListGroup.Item>
                                            <ListGroup.Item>{item.budget}</ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link className="btn btn-danger" to={`/editmovie/${item.id}/`}>Edit</Link>
                                                <button className="btn btn-success" onClick={() => deleteMovie(item.id)} >Delete</button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>

                                </div>
                            )
                        })
                    )}
                </div>
            </div>





        </>
    );


}

export default MovieList2;
