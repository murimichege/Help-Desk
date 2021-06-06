import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
function createTicket() {
    return (
        <div className = "container">
            <div className="Navigation">
            <Navbar collapseOnSelect fixed="top" bg="dark">
               <Navbar.Brand href="#home">
                   <img src="/helpdesk" width="30" height="30" className="d-inline-top align-top"/>
                   </Navbar.Brand>
               <Container>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                   <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav>

                       </Nav>
                   </Navbar.Collapse>

               </Container>
           </Navbar>
            </div>
          
        </div>
    )
}

export default createTicket
