import {useEffect } from 'react';

import CollectionDetails from '../components/CollectionDetails';
import CollectionForm from '../components/CollectionForm';
import { useCollectionContext } from '../hooks/useCollectionContext';

const Home = () => {
    const { collection, dispatch } = useCollectionContext();

    useEffect(() => {
        const fetchCollection = async () => {
            const response = await fetch('/api/collection');
            const json = await response.json();

            if (response.ok) {
               dispatch({ type: 'SET_WORKOUTS', payload: json })
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

export default Home;