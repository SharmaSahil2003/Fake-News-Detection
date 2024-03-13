import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase";

function Login() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
                navigate("/News");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };

    const handleForgotPassword = () => {
        if (!values.email) {
            setErrorMsg("Enter your email address to reset your password");
            return;
        }
        setSubmitButtonDisabled(true);
        sendPasswordResetEmail(auth, values.email)
            .then(() => {
                setSubmitButtonDisabled(false);
                setErrorMsg("Password reset email sent. Check your inbox.");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };

    return (
        <div className="container-xxl py-5 mt-5">
            <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Login</h5>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            onChange={(event) =>
                                                setValues((prev) => ({ ...prev, email: event.target.value }))
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            placeholder="Enter your password"
                                            style={{ marginBottom: "10px" }}
                                            onChange={(event) =>
                                                setValues((prev) => ({ ...prev, pass: event.target.value }))
                                            }
                                        />
                                    </div>
                                    <b className="error">{errorMsg}</b>
                                    <div className="form-group text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={submitButtonDisabled}
                                            onClick={handleSubmission}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                    <p className="text-center">
                                        Don't have an account?{" "}
                                        <Link to="/Signup">
                                            <b>Sign up</b>
                                        </Link>
                                    </p>
                                    <p className="text-center">
                                        <Link to="#" onClick={handleForgotPassword}>
                                            Forgot Password?
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
