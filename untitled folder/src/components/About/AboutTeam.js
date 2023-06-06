import React from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../Navbar/SideNav";
import logo from "../Tayyab.jpeg";
import logo1 from "../abdulmanan.jpeg";
import logo2 from "../shah.jpeg";
import logo3 from "../Mam.png";
const AboutTeam = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid row  ">
        <SideNav />
        <div className=" col ">
          <h1 className="mt-5 text-success">
            <b>Meet Our Team</b>
            <br></br>___________
          </h1>
          <div className="row justify-content-center">
            <div className="col-3   bg-success " style={{ marginTop: "200px" }}>
              <img
                width={250}
                height={250}
                style={{
                  outline: "2px solid red",
                  outlineOffset: "10px",
                  marginTop: "-120px",
                }}
                src={logo1}
              ></img>
              <h4 className="mt-4">
                <b>Abdul Manan</b>
              </h4>
              <h5 className="mb-3 text-light"> BackEnd Developer</h5>
              <p className="mb-4 text-light">
                Researching, designing, implementing, and managing software
                programs. Testing and evaluating new programs. Identifying areas
                for modification in existing programs and subsequently
                developing these modifications.
              </p>
            </div>
            <div
              className="col-3   bg-success "
              style={{ marginTop: "200px", marginLeft: "20px" }}
            >
              <img
                width={250}
                height={250}
                style={{
                  outline: "2px solid red",
                  outlineOffset: "10px",
                  marginTop: "-120px",
                }}
                src={logo}
              ></img>
              <h4 className="mt-4">
                <b>Tayyab Hussain </b>
              </h4>
              <h5 className="mb-3 text-light">Documentation + Testing</h5>
              <p className="text-light">
                Researching, designing, implementing, and managing software
                programs. Testing and evaluating new programs. Identifying areas
                for modification in existing programs and subsequently
                developing these modifications.
              </p>
            </div>
            <div
              className="col-3   bg-success "
              style={{ marginTop: "200px", marginLeft: "20px" }}
            >
              <img
                width={250}
                height={250}
                style={{
                  outline: "2px solid red",
                  outlineOffset: "10px",
                  marginTop: "-120px",
                }}
                src={logo2}
              ></img>
              <h4 className="mt-4">
                <b>Shahzaib Shakeel Cheema</b>
              </h4>
              <h5 className="mb-3 text-light">FrontEnd Developer</h5>
              <p className="text-light">
                Researching, designing, implementing, and managing software
                programs. Testing and evaluating new programs. Identifying areas
                for modification in existing programs and subsequently
                developing these modifications.
              </p>
            </div>

            <div className="row  mb-5">
              <h1 className="mt-5 text-success">
                <b>Our Supervisor</b>
                <br></br>___________
              </h1>
              <div className="col-6  pb-5 ">
                <img
                  className=" "
                  width={450}
                  height={450}
                  style={{
                    outline: "2px solid red",
                    outlineOffset: "7px",
                    marginTop: "100px",
                  }}
                  src={logo3}
                ></img>
              </div>
              <div className="col-6  bg-success mt-5 ">
                <div
                  style={{
                    transform: "translateY(20%)",
                  }}
                >
                  <h2 className="text-light">
                    <b>Hafsa Shareef Dar</b>
                  </h2>
                  <p>
                    <strong>Affiliation:</strong>University of Gujrat,
                    International Islamic University Islamabad<br></br>
                    <b>____________________</b>
                  </p>
                  <p className="mb-4 text-light pe-4 ps-4">
                    Ms. Hafsa Shareef Dar is a PhD (Software Engineering)
                    scholar at the International Islamic University Islamabad,
                    and a senior lecturer in the Dept. of Software Engineering
                    at the University of Gujrat. She is responsible for teaching
                    various core software engineering courses and advising
                    undergrad students. She is a focal person to NCEAC, member
                    of BOS (Dept. of SE), PMO, external subject expert in BOS of
                    University of Sialkot, lifetime member of AI AUJ Labs India,
                    and technical committee member of GS conferences UAE. Her
                    research work has been published in reputed journals and top
                    computing conferences. She has been awarded with Research
                    Publication Award in 2019, as an acknowledgement of her work
                    in the area of requirements engineering. Lecturer, PMO,
                    Co-Director WiBD Pakistan, Alumna #IVLP2019 USA, Empowering
                    Women in #STEM Fields
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
