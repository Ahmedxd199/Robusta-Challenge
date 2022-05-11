import "bootstrap/dist/css/bootstrap.min.css";
import {Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Navbar = () => {

 
return (
    <>


<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Container>
    <div>
    <Link className="navbar-brand text-warning cardH" to="/"><b>Ahmed Ashraf</b></Link>

    </div>
  
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/movieinfo"><b>Level1</b></Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-light" to="/movieinfo2"><b>level2</b></Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-light" to="/movielist2"><b>level3</b></Link>  
      </li> 
   
    </ul>
    

  </div>
  </Container>
</nav>











    
    </>
); 

  

}

export default Navbar;


