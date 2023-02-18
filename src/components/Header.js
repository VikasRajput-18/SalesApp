import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SALES APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/addSales">
              <NavLink activeclassname="" to="/addSales" className="textColor">
                ADD SALES
              </NavLink>
            </Nav.Link>
            <Nav.Link href="/topSales">
              <NavLink activeclassname="" to="/topSales" className="textColor">
                TOP 5 SALES
              </NavLink>
            </Nav.Link>
            <Nav.Link href="/total">
              <NavLink activeclassname="" to="/total" className="textColor">
                TODAY'S TOTAL REVENUE
              </NavLink>
            </Nav.Link>
            <Nav.Link href="/login">
              <NavLink activeclassname="" to="/login" className="textColor">
                LOGIN
              </NavLink>
            </Nav.Link>
            <Nav.Link href="/register">
              <NavLink activeclassname="" to="/register" className="textColor">
                REGISTER
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#pricing" onClick={() => navigate("/login")}>
              LOGOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
