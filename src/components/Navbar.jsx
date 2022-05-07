import React from 'react'
import { Button, Container, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'


const Navbaro = () => {
  return (
      <div>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'><h2 className='text-xl text-white font-bold'>WJE Analytics</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>

            {/* <Nav.Link href='#features'>NY17</Nav.Link>
            <Nav.Link href='#pricing'>N40</Nav.Link>

            <NavDropdown title='Luling' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>7day Overall</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Map
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Danziger' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>7day Overall</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Lift List
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>More deets</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default Navbaro
