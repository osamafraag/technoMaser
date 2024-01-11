import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from './../../assets/pictures/Rectangle 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

function HeaderNav() {
  return (
    <Navbar style={{backgroundColor: "var(--secondary-color)"}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto w-100">
            <NavLink className='nav-link fs-1 my-auto ms-5' to="/">
            <img src={Logo} className=''></img>
            </NavLink>
            <NavLink className='nav-link fs-2 my-auto ms-auto m-2' style={{color: "var(--main-color)"}} to="/loved">
                <FontAwesomeIcon icon={faHeart} />
            </NavLink>
            <NavLink className='nav-link fs-2 my-auto m-2' style={{color: "var(--main-color)"}} to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;