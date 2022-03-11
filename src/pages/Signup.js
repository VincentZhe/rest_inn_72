import React, { useState } from "react";

import Modal from "../components/Modal";

import Header from "../components/Header";

import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const Signup = (props) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorFirstName, setErrorFirstName] = useState();
  const [errorLastName, setErrorLastName] = useState();
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();

  const validateUser = () => {
    let isValidated = true;
    if (firstName === "") {
      setErrorFirstName("You have to enter your first name");
      return (isValidated = false);
    } else {
      setErrorFirstName("");
    }

    if (lastName === "") {
      setErrorLastName("You have to enter your last name");
      return (isValidated = false);
    } else {
      setErrorLastName("");
    }

    if (email === "") {
      setErrorEmail("You have to enter the valid email address");
      return (isValidated = false);
    } else {
      setErrorEmail("");
    }

    if (password === "") {
      setErrorPassword("You have to enter the pasword for your aacount");
      return (isValidated = false);
    } else {
      setErrorPassword("");
    }
    return isValidated;
  };

  return (
    <>
      <Header />
      <Modal
        onHideModal={props.putHideModal}
        modalState={props.putModalState}
      />
      <div className="signup-container">
        <div className="signup-wrapper">
          <h3 className="signup-title">Create an anncount</h3>
          <form className="signup-form">
            <label for="firstName">FirstName</label>
            <input
              name="firstName"
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <span className="error"> {errorFirstName}</span>
            <label for="lastName">LastName</label>
            <input
              name="lastName"
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <span className="error"> {errorLastName}</span>
            <label for="email">Email</label>
            <input
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span className="error"> {errorEmail}</span>
            <label for="password">Password</label>
            <input
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className="error"> {errorPassword}</span>
            <p>
              By creating an account. I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </p>
            <button
              type="button"
              className="signup-btn"
              onClick={() => {
                if (validateUser()) {
                  const newUser = {
                    id: Math.floor(Math.random() * 500000) + 1,
                    firstName,
                    lastName,
                    email,
                    password,
                  };
                  props.onNewUser(newUser);

                  setFirstName("");
                  setLastName("");
                  setEmail("");
                  setPassword("");
                }
              }}
            >
              Create Account
            </button>
            <p className="signup-haveaccount">
              Already have account? <a href="/">Log In</a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
