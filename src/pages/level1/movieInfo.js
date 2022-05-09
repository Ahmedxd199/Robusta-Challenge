import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect  } from "react";



const MovieInfo = () => {


    // const [moviename, setMovieName] = useState("");
    // const [movieyear, setMovieYear] = useState("");
    // const [moviebudjet, setMovieBudjet] = useState("");


    function years(){

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
  }, []);


let saveStorage = () =>{

    let moviename = document.getElementById('moviename').value;
    let movieyear = document.getElementById('year').value;
    let moviebudjet = document.getElementById('moviebudjet').value;

    localStorage.setItem('MovieName', JSON.stringify(moviename));
    localStorage.setItem('MovieYear', JSON.stringify(movieyear));
    localStorage.setItem('MovieBudjet', JSON.stringify(moviebudjet))
    

}




return (
    <>

    <div className="container" style={{marginTop:"50px"}} >

    
<form>
  <div className="form-group">
    <label htmlFor="moviename">Movie Name</label>
    <input type="text" className="form-control" id="moviename"   />
  </div>
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" htmlFor="year">Movie Year: </label>
  </div>
  <select className="custom-select" id="year" name="year"  >
    
  </select>
</div>
   <div className="form-group">
    <label htmlFor="moviename">Movie Budget</label>
    <input type="text" className="form-control" id="moviebudjet"  />
  </div>
  
  <button onClick={saveStorage} className="btn btn-primary" style={{marginTop:"5px"}}>Submit</button>
</form>

</div>

    </>
); 



}

export default MovieInfo;
