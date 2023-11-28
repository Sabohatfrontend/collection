import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { useCollectionContext } from "../hooks/useCollectionContext";
import { useForm } from "../hooks/useForm";

const CollectionForm = () => {
    const navigate = useNavigate();
    const { dispatch } = useCollectionContext();
    const { category } = useCategoryContext();
    let { token } = useAuthContext();
    const initialState = {
        title: "",
        description: "",
        img_url: "",
        category_id: "",
        custom_string1: "",
        custom_string2: "",
        custom_string3: "",
        custom_int1: "",
        custom_int2: "",
        custom_int3: "",
        custom_bool1: "",
        custom_bool2: "",
        custom_bool3: "",
        custom_text1: "",
        custom_text2: "",
        custom_text3: "",
        custom_date1: "",
        custom_date2: "",
        custom_date3: "",
    }
    const [value, handleChange] = useForm(initialState);

    const [hasError, setHasError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const titleInput = useRef();
    const categoryInput = useRef();
    const collectionForm = useRef();

    const data = {
        title: value.title[0],
        description: value.description[0],
        img_url: value.img_url[0],
        custom_string1: value.custom_string1[0],
        custom_string2: value.custom_string2[0],
        custom_string3: value.custom_string3[0],
        custom_int1: value.custom_int1[0],
        custom_int2: value.custom_int2[0],
        custom_int3: value.custom_int3[0],
        custom_bool1: value.custom_bool1[0],
        custom_bool2: value.custom_bool2[0],
        custom_bool3: value.custom_bool3[0],
        custom_text1: value.custom_text1[0],
        custom_text2: value.custom_text2[0],
        custom_text3: value.custom_text3[0],
        custom_date1: value.custom_date1[0],
        custom_date2: value.custom_date2[0],
        custom_date3: value.custom_date3[0],
    };


    const fetchData = async (data) => {
        // TODO https://collection-server.onrender.com
        const response = await fetch("https://collection-server.onrender.com/api/collection", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
            }
        });

        if (!response.ok) {
            setHasError(true);
        }

        if (response.ok) {
            const json = await response.json();
            dispatch({ type: "CREATE_WORKOUT", payload: json });

        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!value.title) {
            titleInput.current.focus();
            setIsEmpty(true);
            return;
        }

        if (!categoryInput.current.value) {
            categoryInput.current.focus();
            setIsEmpty(true);
            return;
        }

        setIsEmpty(false);

        data.category_id = categoryInput.current.value;
        fetchData(data);
        navigate('/account/collection');
    }


    return (
        <form ref={collectionForm} onSubmit={onFormSubmit}>
            {
                hasError ? <div className="alert alert-danger" role="alert">
                    Error. Please try again.
                </div> : <></>
            }
            {
                isEmpty ? <div className="alert alert-danger" role="alert">
                    Error: Please fill the required fields
                </div> : <></>
            }
            <div className="form-group mb-4" >
                <label className="mb-2" htmlFor="title">Title*</label>
                <input
                    ref={titleInput}
                    type="text"
                    className="form-control"
                    name="title"
                    id="title"
                    placeholder="Enter title"
                    value={value.title}
                    onChange={handleChange}
                    autoComplete="on" />
            </div>
            <div className="form-group mb-4" >
                <label className="mb-2" htmlFor="description">Description</label>
                <input
                    type="text"
                    className="form-control"
                    name="description"
                    id="description"
                    placeholder="Enter description"
                    value={value.description}
                    onChange={handleChange}
                    autoComplete="on" />
            </div>

            <div className="form-group mb-4" >
                <label className="mb-2" htmlFor="img_url">Image URL</label>
                <input
                    type="text"
                    className="form-control"
                    name="img_url"
                    id="img_url"
                    placeholder="Enter URL"
                    value={value.img_url}
                    onChange={handleChange}
                    autoComplete="on" />

            </div>
            <div className="form-group mb-4">
                <label className="mb-2" htmlFor="category">Category</label>
                <select ref={categoryInput} name="category" className="form-control" id="category">
                    {
                        category && category.map((data) => {
                            return <option key={data._id} value={data._id}>{data.category_name}</option>
                        })
                    }
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Add collection</button>
        </form>
    )
}

export default CollectionForm;