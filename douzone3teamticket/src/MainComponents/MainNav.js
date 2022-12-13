import {Button, Container, Nav, Navbar, NavDropdown, Stack, Form} from "react-bootstrap";
<<<<<<< HEAD
import {useNavigate} from "react-router-dom";
=======
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
>>>>>>> origin/geonho

import '../css/Main.css'

function MainNav(){

    let navigate = useNavigate();

<<<<<<< HEAD
=======
    let state = useSelector((state) => {
        return state;
    });

>>>>>>> origin/geonho
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
<<<<<<< HEAD
                    <Navbar.Brand href="/">Douzone3team</Navbar.Brand>
=======
                    <Navbar.Brand onClick={ ()=>{ navigate('/'); }}>Douzone3team</Navbar.Brand>
>>>>>>> origin/geonho
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
<<<<<<< HEAD
=======
                            {/* <Nav.Link onClick={ ()=>{ navigate('/pagedetail'); }}>콘서트</Nav.Link> */}
>>>>>>> origin/geonho
                            <Nav.Link onClick={ ()=>{ navigate('/concert'); }}>콘서트</Nav.Link>
                            <Nav.Link onClick={ ()=>{ navigate('/musical'); }}>뮤지컬</Nav.Link>
                            <Nav.Link onClick={ ()=>{ navigate('/theater'); }}>연극</Nav.Link>
                            <Nav.Link onClick={ ()=>{ navigate('/classic'); }}>클래식</Nav.Link>
<<<<<<< HEAD
                            <Nav.Link onClick={ ()=>{ navigate('/exhibition'); }}>전시</Nav.Link>
                            <Nav.Link onClick={ ()=>{ navigate('/child'); }}>아동</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link onClick={ ()=>{ navigate('/login'); }}>
                                <img className={'userImg'} src={require('../image/login.png')} alt={'login'} title={'로그인'}/>
                            </Nav.Link>
                            <Nav.Link onClick={ ()=>{ navigate('/join'); }}>
                                <img className={'userImg'} src={require('../image/join.png')} alt={'join'} title={'회원가입'}/>
                            </Nav.Link>
=======
>>>>>>> origin/geonho
                        </Nav>

                        <Stack direction="horizontal" gap={3}>
                            <Form.Control className="me-auto" placeholder="Enter what you want" />
                            <Button variant="secondary">search</Button>
                            <div className="vr" />
                        </Stack>
<<<<<<< HEAD
=======

                        <Nav>
                            <Nav.Link onClick={ ()=>{
                                localStorage.getItem('userId') !== '' ? navigate('/mypage') : navigate('/user/login');
                            }}>
                                <img className={'userImg'} src={require('../image/login.png')} alt={'login'} title={'로그인'}/>
                            </Nav.Link>
                        </Nav>


>>>>>>> origin/geonho
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MainNav;