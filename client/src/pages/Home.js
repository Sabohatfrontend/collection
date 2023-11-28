import { useEffect } from 'react';

import { useCollectionContext } from '../hooks/useCollectionContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
    const { collection, dispatch } = useCollectionContext();

    useEffect(() => {
        const fetchCollection = async () => {
            const response = await fetch('/api/collection');
            const json = await response.json();

            console.log(response);

            if (response.ok) {
                dispatch({ type: 'SET_COLLECTION', payload: json })
            }
        }

        fetchCollection();
    }, [dispatch]);

    return (
        <>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    collection && collection.map((data) => {
                        return (
                            <Col key={data._id}>
                                <Card>
                                    <Card.Img variant="top" src={data.img_url} style={{ width: '18rem', height: '24rem', marginRight: 'auto', marginLeft: 'auto', objectFit: 'contain' }} />
                                    <Card.Body>
                                        <Card.Link href="#">{data.category_id.tags}</Card.Link>
                                        <Card.Link href="#">{data.user_id.firstname} {data.user_id.lastname}</Card.Link>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>
                                            {data.description}
                                        </Card.Text>
                                        <Card.Link href="#">{data.category_id.name}</Card.Link>
                                        <small className="text-muted" style={{ display: 'block' }}>{formatDistanceToNow(new Date(data.createdAt), { addSuffix: true })}</small>
                                    </Card.Body>
                                </Card>
                            </Col>)
                    })
                }
            </Row>
        </>
    );
};

export default Home;
