import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
        <Nav className="flex-column bg-body-tertiary">
            <Nav.Link href="/account"></Nav.Link>
            <Nav.Link href="/account/collection">My Profile</Nav.Link>
            <Nav.Link eventKey="link-2">My Collection</Nav.Link>
            <Nav.Link eventKey="link-2">Sign out</Nav.Link>
        </Nav>
    );
}

export default Navbar;