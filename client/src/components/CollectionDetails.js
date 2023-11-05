import { useCollectionContext } from "../hooks/useCollectionContext";

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const CollectionDetails = ({ data }) => {
    const { dispatch } = useCollectionContext();
    const handleClick = async () => {
        const response = await fetch('api/collection/' + data._id, { method: 'DELETE' });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE', payload: json })
        }
    }

    return (
        <div className="workout-details">
            <h4>{data.title}</h4>
            <p><strong>Load (kg):</strong>{data.load}</p>
            <p><strong>Reps :</strong>{data.reps}</p>
            <p>{formatDistanceToNow(new Date(data.createdAt),{addSuffix: true})}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default CollectionDetails;