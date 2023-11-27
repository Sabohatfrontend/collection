import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCategoryContext } from "../hooks/useCategoryContext";
import { useEffect } from "react";
import CategoryDetails from "./CategoryDetail";


const SiteNav = () => {
    const { category, dispatch } = useCategoryContext();

    useEffect(() => {
        const fetchCategory = async () => {
            const response = await fetch('/api/categories');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_CATEGORY', payload: json })
            }
        }

        fetchCategory();
    }, [dispatch]);


    return (
        <Navbar className="bg-body-tertiary">
            <Navbar.Brand href="/">Manage Collection</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Categories" id="navbarScrollingDropdown">
                        {
                            category && category.map((data) => {
                                return (<CategoryDetails data={data} />)
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
        </Navbar>
    )
};

export default SiteNav;