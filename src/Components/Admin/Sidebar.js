import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Adminstyle.css";

function Sidebar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav_admin">
        <Container>
        <Nav variant="pills" defaultActiveKey="">
          <Nav.Item>
            <Nav.Link id='Access' className="title"><strong>Active</strong></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id='Access' className='bg-primary text-white' eventKey="link-1"><b>User Approvals</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link id='Access' className='bg-primary text-white' eventKey="link-1"><b>Teacher Approvals</b></Nav.Link>
          </Nav.Item>
        </Nav>
        </Container>
        </Navbar>
      );
}

export default Sidebar;