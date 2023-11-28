import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column bg-body-tertiary">

                <Nav.Link href="/">Add Collection</Nav.Link>
                <Nav.Link eventKey="link-1">My Profile</Nav.Link>
                <Nav.Link eventKey="link-2">Sign out</Nav.Link>

        </Nav>
    );
}

export default Navbar;