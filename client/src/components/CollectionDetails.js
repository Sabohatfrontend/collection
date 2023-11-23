import { useCollectionContext } from "../hooks/useCollectionContext";

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const CollectionDetails = ({ data }) => {
    const { dispatch } = useCollectionContext();
    // const handleClick = async () => {
    //     const response = await fetch('api/collection/' + data._id, { method 'DELETE' });
    //     const json = await response.json();

    //     if (response.ok) {
    //         dispatch({ type 'DELETE', payload json })
    //     }
    // }

    return (
        <div className="workout-details">
            <img src={data.img_url} alt="Collection" width={100} height={50} />
            <p>{data.category_id.name}</p>
            <p>{data.category_id.tags}</p>
            <p>{data.user_id.firstname} {data.user_id.lastname}</p>
            <h4>{data.title}</h4>
            {/* <p>{data.description}</p> */}
            <p>{formatDistanceToNow(new Date(data.createdAt), { addSuffix:true})}</p>
            {/* <p>{data.custom_string1}</p>
            <p>{data.custom_string2}</p>
            <p>{data.custom_string3}</p>
            <p>{data.custom_int1}</p>
            <p>{data.custom_int2}</p>
            <p>{data.custom_int3}</p>
            <p>{data.custom_bool1}</p>
            <p>{data.custom_bool2}</p>
            <p>{data.custom_bool3}</p>
            <p>{data.custom_text1}</p>
            <p>{data.custom_text2}</p>
            <p>{data.custom_text3}</p>
            <p>{data.custom_date1}</p>
            <p>{data.custom_date2}</p>
            <p>{data.custom_date3}</p> */}

            {/* <span onClick={handleClick}>Delete</span> */}
        </div >
    )
}




export default CollectionDetails;