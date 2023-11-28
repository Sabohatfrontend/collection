import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../hooks/useAuthContext";

const Register = (props) => {
    const navigate = useNavigate();
    const [value, handleChange] = useForm({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });
    const [hasError, setHasError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const fnameInput = useRef();
    const lnameInput = useRef();
    const loginInput = useRef();
    const passInput = useRef();
    const { dispatch } = useAuthContext();

    const fetchData = async (data) => {
        const response = await fetch("/api/users", {
            method: 'POST',
            body: JSON.stringify({
                firstname: value.firstname[0],
                lastname: value.lastname[0],
                email: value.email[0],
                password: value.password[0]
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            setHasError(true);
        }

        if (response.ok) {
            const token = response.headers.get('x-auth-token');
            window.localStorage.setItem('x-auth-token', token);
            dispatch({ type: 'LOGIN', payload: token });
            navigate("/");
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!value.firstname) {
            fnameInput.current.focus();
            setIsEmpty(true);
            return;
        }

        if (!value.lastname) {
            lnameInput.current.focus();
            setIsEmpty(true);
            return;
        }
        if (!value.email) {
            loginInput.current.focus();
            setIsEmpty(true);
            return;
        }

        if (!value.password) {
            loginInput.current.focus();
            setIsEmpty(true);
            return;
        }


        setIsEmpty(false);
        fetchData();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header">
                            Register
                        </div>
                        <div className="card-body">
                            {
                                hasError ? <div className="alert alert-danger" role="alert">
                                    Incorrect email or password. Please try again.
                                </div> : <></>
                            }
                            {
                                isEmpty ? <div className="alert alert-danger" role="alert">
                                    Error: Please fill the required fields
                                </div> : <></>
                            }
                            <form onSubmit={onFormSubmit}>
                                <div className="form-group mb-4" >
                                    <label className="mb-2" htmlFor="firstname">First name</label>
                                    <input
                                        ref={fnameInput}
                                        type="text"
                                        className="form-control"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Enter firstname"
                                        value={value.firstname}
                                        onChange={handleChange}
                                        autoComplete="on" />
                                </div>
                                <div className="form-group mb-4" >
                                    <label className="mb-2" htmlFor="lastname">Last name</label>
                                    <input
                                        ref={lnameInput}
                                        type="text"
                                        className="form-control"
                                        name="lastname"
                                        id="lastname"
                                        placeholder="Enter lastname"
                                        value={value.lastname}
                                        onChange={handleChange}
                                        autoComplete="on" />

                                </div>

                                <div className="form-group mb-4" >
                                    <label className="mb-2" htmlFor="email">Email address</label>
                                    <input
                                        ref={loginInput}
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={value.email}
                                        onChange={handleChange}
                                        autoComplete="on" />

                                </div>
                                <div className="form-group mb-4" >
                                    <label className="mb-2" htmlFor="password">Password</label>
                                    <input
                                        ref={passInput}
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={value.password}
                                        onChange={handleChange}
                                        autoComplete="on" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>

        </div>
    )
}

export default Register;