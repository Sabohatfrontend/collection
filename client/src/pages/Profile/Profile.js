import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Profile = () => {
    return (
        <Row>
            <Col sm={3}>
                <Navbar />
            </Col>
            <Col sm={9}>
                <Outlet />
            </Col>
        </Row>
    )
}

export default Profile;