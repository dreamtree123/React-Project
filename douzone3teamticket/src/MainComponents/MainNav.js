import {Button, Container, Nav, Navbar, NavDropdown, Stack, Form} from "react-bootstrap";

function MainNav(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Douzone3team</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link href="#consert">콘서트</Nav.Link>
                            <Nav.Link href="#musical">뮤지컬</Nav.Link>
                            <Nav.Link href="#theater">연극</Nav.Link>
                            <Nav.Link href="#classic">클래식</Nav.Link>
                            <Nav.Link href="#exhibition">전시</Nav.Link>
                            <Nav.Link href="#child">아동</Nav.Link>
                        </Nav>

                        {/*<Nav>*/}
                        {/*    <Nav.Link href="#deets">More deets</Nav.Link>*/}
                        {/*    <Nav.Link eventKey={2} href="#memes">*/}
                        {/*        Dank memes*/}
                        {/*    </Nav.Link>*/}
                        {/*</Nav>*/}

                        <Stack direction="horizontal" gap={3}>
                            <Form.Control className="me-auto" placeholder="Enter what you want" />
                            <Button variant="secondary">search</Button>
                            <div className="vr" />
                        </Stack>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MainNav;