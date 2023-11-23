import { useState } from "react";
import {useCollectionContext} from '../hooks/useCollectionContext';

const CollectionForm = () => {
    const {dispatch} = useCollectionContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const collection = { title, load, reps };
        const response = await fetch('/api/collection',{
            method: 'POST',
            body:JSON.stringify(collection),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if(response.ok){
setTitle('');
setLoad('');
setReps('');
setError(null);
setEmptyFields([]);
console.log('Added',json);
dispatch({type:'CREATE_WORKOUT', payload:json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Collection</h3>

            <label>Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className = {emptyFields.includes('title')?'error':''}
            />

            <label>Load:</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className = {emptyFields.includes('load')?'error':''}
            />

            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className = {emptyFields.includes('reps')?'error':''}
            />
            <button>Add</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default CollectionForm;