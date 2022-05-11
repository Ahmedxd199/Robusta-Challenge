import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../css/style.css'
import axios from "axios";


const MovieInfo2 = () => {



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


    const [cats, setCat] = useState([]);

 

    const getCategory = async () => {
        try {
            const response = await axios.get('/categories')
            const { data } = response
            console.log(data)
            setCat(data)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
         getCategory()
        years()
    }, []);


    const [errorMessage, setErrorMessage] = useState('');


    const [addFormData, setAddFormData] = useState({
        moviename: "",
        moviebudjet: "",
        category: [],
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const name = event.target.getAttribute("name");
        const value = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[name] = value;

        setAddFormData(newFormData);
    };




    let saveIntoApi = async (event) => {
        event.preventDefault();
        let moviename = document.getElementById('moviename').value;
        let movieyear = document.getElementById('year').value;
        let moviebudjet = document.getElementById('moviebudjet').value;
        let err = document.getElementById('error')

        var select = document.getElementById('category');
        var selected = [...select.selectedOptions].map(option => parseInt(option.value));
        console.log(selected, "skjfvibfiojoijvdopkvopdkjvbopkofkbopfj");


        if (moviename === null || moviename === "") {
            setErrorMessage("movie name is required")
            err.style.visibility = "visible"
        } else if (movieyear === null || movieyear === "") {
            setErrorMessage("movieyear is required")
            err.style.visibility = "visible"
        } else if (isNaN(movieyear)) {
            setErrorMessage("movieyear should be a number not text")
            err.style.visibility = "visible"
        } else if (moviebudjet === null || moviebudjet === "") {
            setErrorMessage("moviebudjet is required")
            err.style.visibility = "visible"
        } else if (isNaN(moviebudjet)) {
            setErrorMessage("moviebudjet should be a number not text")
        } else if (select.value === null || select.value === "") {
            setErrorMessage("category is required")
            err.style.visibility = "visible"
        } else {

            try {
                axios.post('/movies', {
                    "title": addFormData.moviename,
                    "year": parseInt(movieyear),
                    "budget": parseInt(addFormData.moviebudjet),
                    "category_ids": selected
                }).then((response) => {
                    setErrorMessage('')
                    err.style.visibility = "hidden"
                    console.log(response.data)
                })

            } catch (error) {
                console.log(error)
            }
        }




    }





    return (
        <>

            <div className="container" style={{ marginTop: "50px" }} >

                <div align="center" className="col-12 text-center" id="error" >
                    <span>{errorMessage}</span>
                    <br />
                </div>

                <form onSubmit={saveIntoApi}>
                    <div className="form-group">
                        <label htmlFor="moviename"><b>Movie Name </b></label>
                        <input  type="text" className="form-control input" id="moviename" name="moviename" onChange={handleAddFormChange} />
                    </div>
                    <div className="input-group mb-3" style={{marginTop:"20px"}}>
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="year"> <b>Movie Year: </b></label>
                        </div>
                        <select className="custom-select" id="year" name="year" onChange={handleAddFormChange}   >
                        </select>
                    </div>



                    <div className="form-group">
                        <label htmlFor="moviename"><b>Movie Budget</b></label>
                        <input type="text" className="form-control input" id="moviebudjet" name="moviebudjet" onChange={handleAddFormChange} />
                    </div>

                    <div style={{ marginTop: "25px"  }}>
                        <select style={{ width: "80%" }} size="8" multiple id="category" name="category" onChange={handleAddFormChange} >
                            {

                                cats.map((cat, index) => {
                                    return (
                                        <>
                                            <option key={index} value={cat.id}>{cat.title}</option>

                                        </>
                                    );
                                })


                            }
                        </select>

                    </div>

                    <div>

                        <button type="submit" className="btn  btnSub"  >Submit</button>
                        <Link className="btn  btnSub"  to="/movielist2">movielist</Link>


                    </div>

                </form>

            </div>

        </>
    );



}

export default MovieInfo2;
