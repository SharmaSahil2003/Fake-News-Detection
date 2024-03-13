import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../Firebase";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = (event) => {
    event.preventDefault();
    if (!values.email || !values.password || !values.confirmPassword) {
      setErrorMsg("Fill all fields");
      return;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        // Send email verification to user
        await sendEmailVerification(auth.currentUser);
        setSubmitButtonDisabled(false);
        // Display message that verification email has been sent
        setErrorMsg("Verification email sent. Please check your inbox.");
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
                <h5 className="card-title text-center">Sign up</h5>
                <form onSubmit={handleSubmission}>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          email: event.target.value,
                        }))
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
                        setValues((prev) => ({
                          ...prev,
                          password: event.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control"
                      placeholder="Confirm your password"
                      style={{ marginBottom: "10px" }}
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          confirmPassword: event.target.value,
                        }))
                      }
                    />
                  </div>
                  <b className="error">{errorMsg}</b>
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={submitButtonDisabled}
                    >
                      Submit
                    </button>
                  </div>
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link to="/Login">
                      <b>Login</b>
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

export default Signup;
