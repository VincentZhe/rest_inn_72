import "./assets/css/App.css";

import React, { useState, useEffect } from "react";

import Home from "./pages/Home";

import PropertyListingPage from "./pages/PropertyListingPage";

import PropertyDescription from "./pages/PropertyDescription";

import PropertyType from "./pages/PropertyType";

import Signup from "./pages/Signup";

import Login from "./pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [newUser, setNewUser] = useState();

  const [modal, setModal] = useState({
    msg: "",
    visiable: false,
  });

  const putHideModal = () => {
    setModal({
      msg: "",
      visiable: false,
    });
  };

  const putNewUser = (newUser) => {
    setNewUser(newUser);
    setModal({
      msg: `${newUser.lastName} was successfully added`,
      visiable: true,
    });
  };

  useEffect(() => {
    //Get the data from API; automatically set to POST

    fetch("http://localhost:5000/newUsers", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        setNewUser(json);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, [newUser]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="propertylisting" element={<PropertyListingPage />} />
        <Route path="propertylisting/:id" element={<PropertyDescription />} />
        <Route path="propertydesc" element={<PropertyDescription />} />
        <Route path="propertytype" element={<PropertyType />} />
        <Route path="propertytype/:type" element={<PropertyType />} />
        <Route path="login" element={<Login />} />
        <Route
          path="signup"
          element={
            <Signup
              onNewUser={putNewUser}
              putHideModal={putHideModal}
              putModalState={modal}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
