import "bootstrap/dist/css/bootstrap.min.css";
import {Container } from 'react-bootstrap';
import { Link } from "react-router-dom";



const Navbar = () => {

 
return (
    <>


<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Container>
    <div>
    <Link className="navbar-brand text-warning" to="/">Ahmed Ashraf</Link>

    </div>
  
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/movieinfo">Level1</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-light" to="/login">level2</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-light" to="/signup">level3</Link>  
      </li> 
   
    </ul>
    

  </div>
  </Container>
</nav>











    
    </>
); 

  

}

export default Navbar;


