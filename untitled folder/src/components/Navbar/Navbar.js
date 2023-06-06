import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../logo.png";
const Navbar = () => {
  const [points, setPoints] = useState();

  const getpoint = async () => {
    const response = await fetch(`http://localhost:4000/getpoints`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body data type must match "Content-Type" header
    });
    const pjson = await response.json();
    console.log(pjson);
    setPoints(pjson);
    console.log(points);
  };

  useEffect(() => {
    getpoint();
  }, []);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-success "
        style={{ backgroundColor: "#E2E7A8" }}
      >
        <div className="container-fluid">
          <img className="ms-4 " src={logo1} height={80} alt=""></img>
          <a className="navbar-brand text-success ms-4" href="/">
            <b></b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a
                  className="nav-link "
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></a>
              </li>
            </ul>

            <button className="btn btn-outline-success" type="submit">
              <i className="fas fa-hand-point-right fa-xl me-2  "></i> Your
              Points : {points?.point}
            </button>
          </div>
        </div>
      </nav>

      {/* Side bar navigation  */}
    </>
  );
};

export default Navbar;
