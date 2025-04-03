import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = function (props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="w-100 ">
      <Container fluid={true}>
        <Navbar.Brand href="#home">Epibooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
