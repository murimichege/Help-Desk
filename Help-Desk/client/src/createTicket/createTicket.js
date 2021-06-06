import React from 'react'
import {Navbar, Nav, Container, Card, Form} from 'react-bootstrap'
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
            <div className="ticket-form">
                <Card>
                <Card.Header>New Ticket</Card.Header>
                <Card.Body>
                                
                    <Form.Group controlId="TicketForm.ControlSelect1">
                        <Form.Label>Department</Form.Label>      
                        <Form.Control as="select" multiple>
                            <option>
                                Administration
                            </option>
                            <option>
                                Finance
                            </option>
                            <option>
                                Marketing
                            </option>
                            <option>
                                ICT
                            </option>
                            <option>
                                General
                            </option>
                            </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="TicketForm.ControlInput1">
                        <Form.Label>Subject</Form.Label>      
                        <Form.Control as="textarea"/>
                    </Form.Group>

                    <Form.Group controlId="TicketForm.ControlInput1">
                        <Form.Label>Content</Form.Label>      
                        <Form.Control as="textarea" rows={4}/>
                    </Form.Group>

                    <Form.Group controlId="TicketForm.ControlInput1">
                        <Form.Label>Subject</Form.Label>      
                        <Form.Control as="textarea"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.File id="ticketFileAttachment" label="Attach a screenshot"/>
                    </Form.Group>

                </Card.Body>
                </Card>
            </div>
          
        </div>
    )
}

export default createTicket
