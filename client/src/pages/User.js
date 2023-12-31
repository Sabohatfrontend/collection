import {useEffect } from 'react';

import CollectionDetails from '../components/CollectionDetails';
import CollectionForm from '../components/CollectionForm';
import { useCollectionContext } from '../hooks/useCollectionContext';

const User = () => {
    const { collection, dispatch } = useCollectionContext();

    useEffect(() => {
        const fetchCollection = async () => {
             // TODO
            const response = await fetch('https://collection-server.onrender.com/api/account');
            const json = await response.json();

            if (response.ok) {
               dispatch({ type: 'SET_COLLECTION', payload: json })
            }
        }

        fetchCollection();
    }, [dispatch]);
    return (
        <div className='home'>
            <div className='workouts'>
                {collection && collection.map((data) => (
                    <CollectionDetails key={data._id} data={data} />
                ))}
            </div>
            <CollectionForm />
        </div>
    );
};

export default User;