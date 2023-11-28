
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCategoryContext } from "../hooks/useCategoryContext";
import { useEffect} from "react";
import CategoryDetails from "./CategoryDetail";
import { useAuthContext } from "../hooks/useAuthContext";


const SiteNav = () => {
    const { token } = useAuthContext();
    const { category, dispatch } = useCategoryContext();
    useEffect(() => {
        const fetchCategory = async () => {
            // TODO https://collection-server.onrender.com
            const response = await fetch('https://collection-server.onrender.com/api/categories', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_CATEGORY', payload: json })
            }
        }

        fetchCategory();
    }, [dispatch]);

    return (
        <Navbar expand='lg' className="bg-body-tertiary justify-content-between">
            <Navbar.Brand href="/">Manage Collection</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '150px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Categories" id="navbarScrollingDropdown">
                        {
                            category && category.map((data) => {
                                return (<CategoryDetails key={data._id} data={data} />)
                            })
                        }
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            <Nav>
                {
                    token ? <Nav.Link href="/account">Profile</Nav.Link> : <>
                        <Nav.Link href="/login">Sign in</Nav.Link>
                        <Nav.Link href="/register">Sign Up</Nav.Link>
                    </>
                }
            </Nav>

        </Navbar>
    )
};

export default SiteNav;