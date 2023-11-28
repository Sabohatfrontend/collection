import NavDropdown from 'react-bootstrap/NavDropdown';

const CategoryDetails = ({ data }) => {
    return (
        <>
            <NavDropdown.Item href="#action3">{data.category_name}</NavDropdown.Item>
        </>
    )
}
export default CategoryDetails;