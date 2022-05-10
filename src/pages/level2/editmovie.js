import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../css/style.css'
import axios from "axios";
import {useParams} from "react-router-dom";


const Editmovie = (props) => {

    const params  = useParams()

    function years() {

        let year_satart = 1940;
        let year_end = (new Date).getFullYear(); // current year
        let year_selected = 1992;

        let option = '';
        option = '<option>Year</option>'; // first option

        for (let i = year_satart; i <= year_end; i++) {
            let selected = (i === year_selected ? ' selected' : '');
            option += '<option  value="' + i + '"' + selected + '>' + i + '</option>';
        }

        document.getElementById("year").innerHTML = option;

    }


    const [cats, setCat] = useState([]);


	const [filmInfo, setInfo] = useState({})

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
        axios.get(`/movies/${params.id}`).then((res)=> {
			console.log(res)
			setInfo(res.data)

		})
		.catch((err) => {
			console.log(err)
		})
	}, [])




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




    let saveIntoApi = async (event , id) => {
        event.preventDefault();
        let movieyear = document.getElementById('year').value;

        var select = document.getElementById('category');
        var selected = [...select.selectedOptions].map(option => parseInt(option.value));
        console.log(selected, "skjfvibfiojoijvdopkvopdkjvbopkofkbopfj");


      

            try {
                axios.put(`/movies/${params.id}`, {
                    "title": addFormData.moviename,
                    "year": parseInt(movieyear),
                    "budget": parseInt(addFormData.moviebudjet),
                    "category_ids": selected
                }).then((response) => {
                    console.log(response.data)
                })

            } catch (error) {
                console.log(error)
            }
   




    }





    return (
        <>

            <div className="container" style={{ marginTop: "50px" }} >


                <form onSubmit={saveIntoApi}>
                    <div className="form-group">
                        <label htmlFor="moviename">Movie Name</label>
                        <input type="text" className="form-control" id="moviename" name="moviename"  onChange={handleAddFormChange} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="year">Movie Year: </label>
                        </div>
                        <select className="custom-select" id="year" name="year"  onChange={handleAddFormChange}   >
                        </select>
                    </div>



                    <div className="form-group">
                        <label htmlFor="moviename">Movie Budget</label>
                        <input type="text" className="form-control" id="moviebudjet" name="moviebudjet" onChange={handleAddFormChange} />
                    </div>

                    <div style={{ marginTop: "5px" }}>
                        <select style={{ width: "350px" }} size="8" multiple id="category" name="category" onChange={handleAddFormChange} >
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

                        <button type="submit" className="btn btn-primary" style={{ marginTop: "5px", marginRight: "5px" }} >Submit</button>
                        <Link className="btn btn-primary" style={{ marginTop: "5px" }} to="/movielist2">movielist</Link>

                    </div>

                </form>

            </div>

        </>
    );



}

export default Editmovie;