import React, { useEffect, useState } from "react";
import "../Style/all.css";
import "../Style/modern-business.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

function Body() {
  const [categories, setCategories] = useState([]);
console.log(categories ,">>>>");
  const fetchCategories = () => {
    axios
      .get("https://digitalfatehabad-production.up.railway.app/categories/getCategoryall", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data.categories[0]._id,">>>>>");
          // localStorage.setItem("SubId" ,response.data.categories[0]._id)
          console.log("SubId" ,response);
        setCategories(response.data.categories);
      })
      .catch((error) => console.log(error))
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div>
      <br></br>

      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 col-sm-12 portfolio-item"
            style={{ marginTop: "-10px" }}
          >
            <div className="card h-100 bg-dark 1px groove rounded">
              <div
                className="col-lg-12 portfolio-item rounded"
                style={{
                  textAlign: "center",
                  marginBottom: "5px",
                  background: "#1a538e",
                }}
              >
                <img
                  src="../Style/businessdirectory.png"
                  alt=""
                  style={{ marginTop: "5px", marginBottom: "5px" }}
                />
                <br />
                <a href="https://www.digitalatehabad.com/a">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    A
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/b">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    B
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/c">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    C
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/d">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    D
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/e">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    E
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/f">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    F
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/g">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    G
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/h">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    H
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/i">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    I
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/j">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    J
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/k">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    K
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/l">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    L
                  </div>
                  &nbsp;
                </a>

                <a href="https://www.digitalatehabad.com/m">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    M
                  </div>
                  &nbsp;
                </a>

                <a href="https://www.digitalatehabad.com/n">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    N
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/o">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    O
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/p">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    P
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/q">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    Q
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/r">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    R
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/s">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    S
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/t">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    T
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/u">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    U
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/v">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    V
                  </div>
                  &nbsp;
                </a>
                {/* <a href="https://www.digitalatehabad.com/w">
							<div className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
								style="justify-content: center; width:22px; max-width:22px; height:30px; font-size: 14px; text-align:center; border: 1px groove #ffffff; color:black; background-color:white; ">
								W</div>&nbsp;
						</a> */}
                <a href="https://www.digitalatehabad.com/x">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    X
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/y">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    Y
                  </div>
                  &nbsp;
                </a>
                <a href="https://www.digitalatehabad.com/z">
                  <div
                    className="d-inline-block shadow-lg p-1 mb-1 rounded counter-item1 text-center"
                    style={{
                      justifyContent: "center",
                      width: "18px",
                      maxWidth: "18px",
                      height: "30px",
                      fontSize: "14px",
                      textAlign: "center",
                      border: "1px groove #ffffff",
                      color: "black",
                      backgroundColor: "#fffcc8",
                    }}
                  >
                    Z
                  </div>
                  &nbsp;
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="col-lg-12 col-sm-12 portfolio-item"
          style={{ marginTop: "-15px", fontSize: "15px" }}
        >
          <div className="card h-100" style={{background:'#f1f3f6'}}>
            <div className="card-body">
              <h1 style={{ color: "#0b5f90" }}>About Website</h1>
              <hr style={{ marginTop: "-1px" }} />
              <p style={{ marginTop: "-10px", textAlign: "left" }}>
                Fatehabad (<b>www.digitalatehabad.com</b>) Online Complete
                Information and Business Directory. Thanks for exploring this
                website. This website has tried to make available almost all
                Fatehabad Business dealers at a glance. We have tried our best
                to categorize all types of Business Dealers alphabetically so
                that search of your choice become easy.Now you need not to
                search anyone out of your house you just think about the person
                you want to deal and all his address,contact numbers,Email ID
                with Website will be at your computer,mobile &amp; tablet.
              </p>
              <hr style={{ marginTop: "-5px" }} />
              <h2 style={{ color: "#0b5f90", marginTop: "-12px" }}>
                <b>Category Wise Distribution of Buisness</b>
              </h2>
              <hr />
              <div style={{ textAlign: "left" }}>
                {categories.map((row) => (
                  <div
                    style={{
                      fontSize: "16px",
                      display: "inline-block",
                      marginLeft: "2px",
                      marginRight: "2px",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ color: "#0b5f90" }}>
                      <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </span>
                    &nbsp;
                    <Link to={`/subcategories/${row._id}`}>{row.name}</Link>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: "left" }}>
              <div
                class="col-lg-12 col-sm-12 portfolio-item"
                style={{ marginTop: "4px", fontSize: "15px" }}
              >
                <div class="card h-100">
                  <div class="card-body">
                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/academy">
                        Academy
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/banking-academy.html">
                        Bank Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ssc-institute.html">
                        SSC Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/nda-coaching.html">
                        NDA Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/defence-coaching-academy.html">
                        Defence Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/htet-institute.html">
                        HTET Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/stet-coaching.html">
                        STET Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/hssc-coaching.html">
                        HSSC Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/railway-exam-coaching.html">
                        Railway Exam Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/police-exam-coaching.html">
                        Police Exam Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/vlda-coaching.html">
                        VLDA Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/det-institute.html">
                        DET Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/leet-institute.html">
                        LEET Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/maths-academy.html">
                        Maths Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/jee-advanced-institute.html">
                        JEE-Advanced Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ca-institute.html">
                        CA Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cs-institute.html">
                        CS Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cpt-institute.html">
                        CPT Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/commerce-academy.html">
                        Commerce Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/biology-academy.html">
                        Biology Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/physics-academy.html">
                        Physics Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/chemistry-academy.html">
                        Chemistry Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ias-institute.html">
                        IAS Institute in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/hcs-institute.html">
                        HCS Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cat-coaching-institute.html">
                        Cat Entrance Exam in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/mat-coaching-institute.html">
                        Mat Entrance Exam in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/mba-entrance-exam-coaching-institute.html">
                        MBA Entrance Exam in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/mca-entrance-exam-coaching-institute.html">
                        MCA Entrance Exam in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/academy-coaching-7th-8th-9th-10th.html">
                        7th 8th 9th 10th Class Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/english-speaking-institute.html">
                        English Speaking Institute in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ielts-coaching.html">
                        Ielts Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/fine-arts-academy.html">
                        Fine Arts Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/computer-coaching-institute.html">
                        Computer Training Institute in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/fashion-designing-institute.html">
                        Fashion Designing Institute in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/hotel-management-institute.html">
                        Hotel Management Institute in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/interior-designing-course.html">
                        Interior Designing Institute in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/steno.html">
                        Short Hand Steno in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/share-market-institute.html">
                        Share Market Training in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/music-academy.html">
                        Music Centre in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/dance-academy.html">
                        Dance Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/handwriting-academy.html">
                        Handwriting Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ugc-net-jrf.html">
                        UGC NET JRF Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/gate-coaching.html">
                        Gate Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/jee-advanced-institute.html">
                        JEE Advanced Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/iit-advanced-coaching.html">
                        IIT Advanced Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/jee-mains-coaching.html">
                        JEE Mains Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/iit-mains-coaching.html">
                        IIT Mains Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/aipmt-coaching.html">
                        AIPMT Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/aieee-coaching.html">
                        AIEEE Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/pmt-coaching.html">
                        PMT Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/aiims-coaching.html">
                        AIIMS Coaching in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/neet-coaching.html">
                        NEET Coaching in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/accountant-and-ca">
                        Accountant &amp; CA
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/accountant.html">
                        Accountants in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ca.html">
                        Chartered Accountant in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/artists">
                        Artists
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/artist.html">
                        Artist in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/murtikar.html">
                        Murtikar in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/astrologers">
                        Astrologers
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/astrologer.html">
                        Astrologer in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/vastu-consultant.html">
                        Vastu Consultants in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/auto-mobile">
                        Auto Mobile
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/car-accessories.html">
                        Car Decor Accessory in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tyre-dealer.html">
                        Tyre Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/vehicle-washing-service-station.html">
                        Vehicle Washing in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/car-bazar.html">
                        Car Bazar in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/wheel-alignment.html">
                        Wheel Alignment in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/trucks-heavy-vehicle-dealers.html">
                        Trucks, Tractor Other Heavy vehicle Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/car-dealers.html">
                        Car dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/three-wheelers-dealers.html">
                        Three Wheeler Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/two-wheelers-dealers.html">
                        Bike Scooter Activa Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/car-driving-school.html">
                        Car Driving School in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/car-gas-kit.html">
                        Car Gas Kit in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/car-seat-cover-store.html">
                        Car Seat Cover in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/bag">Bag</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/suitcase-attachi-bag.html">
                        Suitcase Attachi Bag in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/jute-bags.html">
                        Jute Bag in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/school-college-bag.html">
                        School College Bag in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/purse-shops.html">
                        Purse Shops in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/banquet-halls">
                        Banquet Halls
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/community-centre.html">
                        Community Centre in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/banquet-halls.html">
                        Banquet Hall in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/dharamshala.html">
                        Dharamshala in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/book">Book</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/book-store-in-Fatehabad.html">
                        Book Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/stationary-store.html">
                        Stationary Store in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/book-binding-store.html">
                        book binding in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/copy-manufacture-house.html">
                        Copy Manufacture in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/building-material">
                        Building Material
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/builders.html">
                        Builders in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/bricks-company.html">
                        Bricks Company in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/malba-chkni-miti-balo-miti-dealer.html">
                        Chikni and Balu Mitti in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cement-dealers.html">
                        Cement Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/shuttering-store.html">
                        Shuttering Store in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/reta-crusher-bajri-dealers.html">
                        Reta Crusher Bajri in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/saria-dealers.html">
                        Saria Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/stone-crusher.html">
                        Stone Crusher in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/marbles.html">
                        Marble in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tiles.html">
                        Tiles in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/concrete-works.html">
                        Concrete Works in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/plaster-of-paris-pop-dealers.html">
                        Plaster of Paris (P.O.P. Dealers) in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/cloth">Cloth</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cloth-house.html">
                        Cloth House in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/garments-cloth-shops.html">
                        Cloth Garments Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cloth-collection-store.html">
                        Cloth Collection in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cloth-cover-shop-tv-freeze-dinning-table.html">
                        Cover Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/curtain-store.html">
                        Curtain Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cloths-embroidry.html">
                        Cloth Embroidery in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cloth-emporium-shops.html">
                        Cloth Emporium in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/khadi-store.html">
                        Khadi Store in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/handloom-shop.html">
                        Handloom Store in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cloth-hosiery.html">
                        Cloth Hosiery in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/kurta-house.html">
                        Kurta Retailers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ladies-suits.html">
                        Ladies Suits in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/kids-cloth-store.html">
                        Kids Cloth Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cloths-matching-centres-dupatta-palace.html">
                        Ladies Dupatta Palace &amp; Matching Centres in
                        Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/fancy-dress-on-rent.html">
                        Fancy Dress on Rent in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/lehenga-on-rent.html">
                        Lehenga on Rent in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/saree-on-rent.html">
                        Saree on Rent in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/sherwani-on-rent.html">
                        Sherwani on Rent in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/sarees.html">
                        Saree Retailers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cloths-textiles-store.html">
                        Cloth Textile in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/school-uniform-dress.html">
                        School Uniform in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/jeans-top-pent-shirts-store.html">
                        Boys (Jeans Pent Shirts) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/girls-wear-cloth-shop.html">
                        Girls Wear Cloth Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/dry-cleaner.html">
                        Dry Cleaners in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ladies-undergarments-hosiery-store.html">
                        Ladies Undergarments in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tailoring-computerised-embroidery-in-Fatehabad-city.html">
                        Tailor For Computerised Embroidery in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tailoring-material.html">
                        Tailoring Material in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tailoring-button-factory.html">
                        Button Factory in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tailors.html">
                        Tailors in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/boutique.html">
                        Boutique in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tailors-curtain.html">
                        Curtains Tailor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/woolen-knitwear-shops.html">
                        Woolen / Knitwear Shop in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/colleges">
                        Colleges
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/college.html">
                        College in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/law-college.html">
                        Law College in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/engineering-colleges.html">
                        Engineering College in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/mba-college.html">
                        MBA College in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/bed-jbt-college.html">
                        BED JBT College in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/iti-college.html">
                        ITI College in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/computer">
                        Computer
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cyber-internet-cafe.html">
                        Internet cafe in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/csc-centre.html">
                        CSC Centre in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/laptop-dealers.html">
                        Laptop Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/computer-dealers.html">
                        Computer Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/website-development.html">
                        Website Developer in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/software-company.html">
                        Software Company in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/consultants">
                        Consultants
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/consultancy-services.html">
                        Consultancy Services in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/immigration-consultants.html">
                        Immigration Consultants in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/investment-consultants.html">
                        Investment Consultants in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/electric">
                        Electric
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/amplifier-speaker-mic.html">
                        Amplifier, Speaker, Mic in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/air-cooler.html">
                        Air Cooler in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/steam-iron-press.html">
                        Steam Iron Press in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/dish-wire.html">
                        Dish Wires in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/electrician.html">
                        Electrician in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/fans.html">
                        Fan Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/electronic-gas-geyser.html">
                        Electric Geyser in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/electronics-components-dealers.html">
                        Electronics Components Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/washing-machine-dealers.html">
                        Washing Machine Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/fancy-and-led-lights.html">
                        Fancy Light in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/led-light-dealers.html">
                        LED Light Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/refrigerator-freeze-dealers.html">
                        Refrigerator Freeze Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/air-conditioner-dealers.html">
                        Air Conditioner Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/light-decoration-and-sound.html">
                        Light Decoration &amp; Sound in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/motor-winding.html">
                        Motor Winding in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/spare-parts-of-inverter-and-copper-wires.html">
                        Spare Parts of Inverter &amp; Copper Wires in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/refrigeration.html">
                        Refrigeration in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/solar-pannel-dealers.html">
                        Solar Pannel Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/lcd-tv-dealers.html">
                        LCD TV Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/electronics-service-centre.html">
                        Electronics (Service Centre) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ups-dealers.html">
                        UPS Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cvt-dealers.html">
                        CVT Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/electric-wire.html">
                        Electric Wire in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/electric-switch.html">
                        Electric Switch in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cfl-bulb-shops.html">
                        CFL Bulb Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cd-dvd-player.html">
                        CD DVD Player in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/dth-dealers.html">
                        DTH Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/water-cooler-dealers.html">
                        Water Cooler Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/fax-machine.html">
                        Fax Machine in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/fiber-sheet-works.html">
                        Fiber Sheet Works in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/inverter-battery.html">
                        Inverters Batteries Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/electric-works.html">
                        Electric Works in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/vaccum-cleaners.html">
                        Vaccum Cleaners in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/vending-machine.html">
                        Vending Machines (Tea, Coffee, Soda) in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/entertainment">
                        Entertainment
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cinema.html">
                        Cinema Hall in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/zoo.html">
                        Zoo in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/fish-and-pet">
                        Fish &amp; Pet
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/aquarium-fish-food.html">
                        Aquarium Fish Food in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/pet-shops.html">
                        Pet Shops in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/food">Food</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/caterers.html">
                        Cattering in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/chicken-corner.html">
                        Chicken Corner in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/egg-dealers.html">
                        Egg Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/bakery.html">
                        Bakery in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cake-shops.html">
                        Cake Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/bear-bar.html">
                        Bear Bar in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/bhojnalya.html">
                        Bhojnalya in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/buffet.html">
                        Buffet in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/coffee-chai.html">
                        Coffee &amp; Chai (Tea) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/confectionery.html">
                        Confectionery in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/fast-food.html">
                        Fast Food in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/restaurant.html">
                        Restaurant in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/fresh-fruit-and-mocktail-bar.html">
                        Fresh Fruit &amp; Mocktail Bar in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/food-products-dealers.html">
                        Food Products Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/vegetable-and-fruit.html">
                        Vegetable &amp; Fruit in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ice-cream-parlour.html">
                        Ice Cream Parlours in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/juice-corner.html">
                        Juice corner in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/pakora.html">
                        Pakora in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/pan-bhandar.html">
                        Pan Bhandar in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/soda-shop.html">
                        Soda shop in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/suplementry-foods.html">
                        Suplementry Foods in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/sweets-halwai.html">
                        Halwai in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/sweets-shop.html">
                        Sweets Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tiffin-services.html">
                        Tiffin Services in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/wine-shops.html">
                        Wine shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/honey-sahad.html">
                        Honey Sahad in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/pisai-centre.html">
                        Pisai Centre in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/footwear">
                        Footwear
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/footwear-shop.html">
                        Footwear Shoe Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/shoe-footwear-kids.html">
                        Shoe / Footwear (Kids) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/shoe-footwear-ladies.html">
                        Shoe / Footwear (Ladies) in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/function-party">
                        Function (Party)
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/event-planner.html">
                        Event Planner in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/orchestra-party.html">
                        Orchestra Party in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/magicians.html">
                        Magicians in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/band-baggi-dhol.html">
                        Band Baggi in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/dj-shop.html">
                        DJ in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/flower.html">
                        Flowers Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/marriage-bureau.html">
                        Marriage Bureau in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tent-house.html">
                        Tent House in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/wedding-planner.html">
                        Wedding Planner in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/furniture">
                        Furniture
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/iron-almiraha.html">
                        Iron Almirah in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/carpenter.html">
                        Carpenter in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/wooden-chaukhat-doors-windows.html">
                        Wooden Windows, Doors &amp; Chaukhat in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/furniture-foam.html">
                        Furnitue Foam in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/timber-merchant.html">
                        Timber Merchant in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/plywood-dealers.html">
                        Plywood Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/timber-fire-wood.html">
                        Timber fire wood in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/furniture-showroom.html">
                        Furniture Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/wooden-works.html">
                        Wooden Works in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/furniture-office-items.html">
                        Office Furniture Item in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/sofa-bed-dressing-table-furniture.html">
                        Sofa Bed Dressing Table in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/plastic-chair.html">
                        Plastic Chair in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/general-stores">
                        General Stores
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/general-store.html">
                        General Store in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/toy-store.html">
                        Toy Store in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/gift-store.html">
                        Gift Gallery in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/belt-shops.html">
                        Belt Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/bangle-store.html">
                        Bangle Store in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/generator">
                        Generator
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/generator-dealers.html">
                        Generator Dealers &amp; Spare Parts in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/generator-repair.html">
                        Generator Repair in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/govt">Govt.</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/police-station.html">
                        Police Station in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/post-office.html">
                        Post Office in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/grain-market">
                        Grain Market
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/bardana-dealer-commission-agents.html">
                        Bardana Dealer &amp; Commission Agents in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cotton-commission-agents.html">
                        Cotton &amp; Commission Agents in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/grain-merchant-commission-agents.html">
                        Grain Merchant &amp; Commission Agents in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/khal-binola-comission-agents.html">
                        Khal Binola &amp; Comission Agents in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/sugar-tea-and-commission-agents.html">
                        Sugar, Tea &amp; Commission Agents in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/hair-and-beauty">
                        Hair &amp; Beauty
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/beauty-parlour.html">
                        Beauty Parlour in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/beauty-products-supplier.html">
                        Beauty Products Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/hair-salon.html">
                        Hair Salon in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/health">
                        Health
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/gym.html">
                        Gym in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/health-fitness-equipment.html">
                        Fitness Equipment Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/meditation-centre.html">
                        Meditation Centre in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/yoga-classes.html">
                        Yoga Classes in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/hotels">
                        Hotels
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/lodge.html">
                        Lodge in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/hotels.html">
                        Hotel in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/guest-house.html">
                        Guest House in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/rest-house.html">
                        Rest House in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/ice">ICE</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ice-cube.html">
                        Ice Cubes in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ice-factory.html">
                        Ice Factory in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/iron-and-steel">
                        Iron &amp; Steel
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/iron-and-steel.html">
                        Iron and Steel in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/iron-store-tasla-balti-niwar.html">
                        Iron Store Tasla Balti Niwar in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/jewellery">
                        Jewellery
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/store-artificial-jewellery.html">
                        Artificial Jewellery in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/jewellery.html">
                        Jewellers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/jewellers-diamond.html">
                        Diamond Jewellers in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/kiryana">
                        Kiryana
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/kiryana-store.html">
                        Kiryana Store in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/dhoop-and-agarbati.html">
                        Dhoop &amp; Agarbati in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/biscuits-toffee-moongfali-gachak.html">
                        Biscuits Toffee Moongfali Gachak in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/candle-making.html">
                        Candle Maker in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/dall-mill.html">
                        Dall Mills in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/departmental-store.html">
                        Departmental Store in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/flour-mill.html">
                        Flour Mills in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ghee-dealers.html">
                        Ghee Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/matches-box.html">
                        Matches Box in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/oil-sarson-oil-mill.html">
                        Oil (Sarson Oil Mill) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/pickles-james-ketchup-muraba-dealers.html">
                        Pickles,James,Ketchup And Muraba Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/rice-mill.html">
                        Rice Mills in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/soap-shop-factory.html">
                        Soap Factory Shop in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/vanaspati-ghee.html">
                        Vanaspati Ghee Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tea-dealers.html">
                        Tea Dealers in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/kitchen">
                        Kitchen
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/disposable-crockery.html">
                        Disposable Crockery in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/bartan-store.html">
                        Bartan Store in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/crockery-shops.html">
                        Crockery Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/kitchen-home-appliance-dealers.html">
                        Kitchen Home Appliance Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/modular-kitchen-item.html">
                        Modular Kitchen Item in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/kitchen-plastic-items.html">
                        Kitchen Plastic Items in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/medical">
                        Medical
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ayurvedic-medicine-store-pansari.html">
                        Ayurvedic Store in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ayurvedic-doctor.html">
                        Ayurvedic Clinic in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/acupressure-doctor.html">
                        Accupressure Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ambulance.html">
                        Ambulance in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/anaesthesiologist-doctor.html">
                        Anaesthesiologists in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/blood-banks.html">
                        Blood Bank in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/burn-hospital-doctor.html">
                        Burn Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cardiology-heart-specialist.html">
                        Cardiology Heart Specialist in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/chest-specialist-doctor.html">
                        Chest Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/child-specialist-pediatrics-doctor.html">
                        Children Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/clinic-general-medicine.html">
                        Clinic in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/dentist-in-Fatehabad.html">
                        Dentist in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/labs-pathology-doctors.html">
                        Pathology Labs in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/ent-doctor.html">
                        Ent Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/physiotherapy-doctors.html">
                        Physiotherapists in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/eye-specialist-doctor-hospital.html">
                        Eye Hospital in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/general-surgery-doctors.html">
                        General Surgeon Doctors in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/general-surgery.html">
                        General Surgery in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/doctor-homoeopathic.html">
                        Homeopathic Clinic in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/doctors-jaundice.html">
                        Jaundice Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/psychiatrists-doctor.html">
                        Psychiatrists in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/doctors-nephrology-kidney-prostate-stone.html">
                        Nephrology Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/neuro-physician-doctors.html">
                        Neuro Physician in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/neuro-surgeon.html">
                        Neuro Surgeon in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/gynaecologist-obstetrician-doctors.html">
                        Gynaecologist Obstetrician Doctors in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/doctors-oncologist.html">
                        Oncologist in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/doctor-ophthalmology.html">
                        Ophthalmology Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/orthopedic-hospital-doctors-surgeon.html">
                        Orthopedic Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/doctors-ortho-general.html">
                        Ortho General Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/pediatrics-doctor.html">
                        Pediatrics in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/physician-doctors.html">
                        Physician in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/doctors-piles-bawasir.html">
                        Piles Bawasir Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/doctors-psychology-and-hypnosis.html">
                        Psychologist in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/radiology-mri-x-ray-ultra-sound-centre.html">
                        Radiology - MRI, X-Ray &amp; Ultra Sound in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/rehabilitation-centre.html">
                        Rehabilitation Centre in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/sexologist-doctor.html">
                        Sexologist in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/doctors-speech-therapy.html">
                        Speech Therapy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/hair-doctor.html">
                        Hair Care in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/skin-doctors-hospital.html">
                        Skin Doctor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/eye-bank.html">
                        Eye Bank in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/veterinary-doctor-hospital.html">
                        Veterinary Clinic in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/hospital-surgical-equipment-dealers.html">
                        Hospital &amp; Surgical Equipments in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/laboratory-scientific-equipments.html">
                        Laboratory Equipments / Scientific Equipments in
                        Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/medical-agencies.html">
                        Medical Agency in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/medical-hall-shops.html">
                        Medical Hall in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/pharma-company.html">
                        Pharmaceutical Company in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/mobile">
                        Mobile
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/mobile-service-centre.html">
                        Mobile Service Centre in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/mobile-network-customer-care.html">
                        Mobile Network Customer Care in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/internet-connection-provider.html">
                        Internet Connection in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/mobile-repair-shops.html">
                        Mobile Repair in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/mobile-shops.html">
                        Mobile Stores in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/money">Money</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/co-operative-society.html">
                        Co Operative Society in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/financial-agencies.html">
                        Financial Agencies in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/general-insurance-advisor.html">
                        General Insurance Advisor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/general-insurance.html">
                        General Insurance in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/health-insurance-advisor.html">
                        Health Insurance Advisor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/life-insurance-advisor.html">
                        Life Insurance Advisor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/insurance-surveyor-and-loss-assessor.html">
                        Insurance Surveyor &amp; Loss Assessor in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/insurance-advisor-academy.html">
                        Insurance Advisor Academy in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/insurance-company.html">
                        Insurance Companies in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/insurance-vehicle-company.html">
                        Vehicle Insurance in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/loan-finance-home-vehicle.html">
                        Loan Home &amp; Vehicle in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/loan-finance-private-persons.html">
                        Loan Private Persons in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/money-changer.html">
                        Money Changer in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/old-currency-ex-changer.html">
                        Old Currency Collection &amp; Ex-Changer in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/share-brokers.html">
                        Share Market Brokers in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/newspaper">
                        Newspaper
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/news-paper-agency.html">
                        News Paper Agency in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/news-paper-office.html">
                        News Paper Office in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/paint">Paint</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/paint.html">
                        Paint Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/painter-number-plate.html">
                        Number Plate Painter in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/painter-white-wash.html">
                        White Wash Painter in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/painting-maker.html">
                        Painting Maker in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/photo">Photo</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/video-mixing-photo-album-designing.html">
                        Photo Designing &amp; Video Mixing in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/photo-framing.html">
                        Photo Framing in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/picture-shops.html">
                        Picture Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/photographer.html">
                        Photographers in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/printing">
                        Printing
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/graphic-designer.html">
                        Graphic Designer in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/printing-image-scanning.html">
                        Printing ( Image Scanning ) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/printing-multicolor-cards.html">
                        Printing Multicolor Cards in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/poly-printing.html">
                        Poly Printing in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/screen-printing.html">
                        Screen Printing in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/printing-directory.html">
                        Printing (Directory) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/flex-fitting.html">
                        Flex Fitting in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/flex-printing.html">
                        Flex Printing in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/printing-press.html">
                        Printing Press in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/printing-glowsign-board.html">
                        Printing (Glowsign Board) in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/religious">
                        Religious
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/gurudwara.html">
                        Gurudwara in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/religious-palace.html">
                        Religious Palace in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/temple-mandir.html">
                        Temple (Mandir) in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/schools">
                        Schools
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/school-govt-schools.html">
                        Govt. Schools in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/school.html">
                        School in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cruch-schools.html">
                        Cruch Schools in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/play-school.html">
                        Play Schools in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/sports">
                        Sports
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/badminton-coach.html">
                        badminton Coach in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cricket-academy.html">
                        Cricket Coach in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/boxing-coach.html">
                        Boxing Coach in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/judo-coach.html">
                        Judo Coach in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/swimming-classes.html">
                        Swimming Classes in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/karate-training.html">
                        Karate Training in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/snooker-pool-table.html">
                        Snooker Pool Table Game in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/sports-shops.html">
                        Sports Shops in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/sports-wear.html">
                        Sports Wear in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/steel">Steel</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/steel-almiraha.html">
                        Steel Almiraha in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/steel-electrodes.html">
                        Steel Electrodes in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/steel-main-gate-grills.html">
                        Steel (Main Gate, Grills) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/steel-sheet.html">
                        Steel Sheet in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/steel-trunk.html">
                        Steel Trunk House in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/steel-works-railing-gates.html">
                        Steel (Railing, Gates) in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/tools">Tools</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tools-agricultural-products.html">
                        Tools (Agricultural Products) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tools-hand-power-tools.html">
                        Tools (Hand &amp; Power Tools) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tools-v-belt-pully-and-motors.html">
                        Tools (V Belt Pully &amp; Motors) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tools-patta-toka-chakki.html">
                        Tools (Patta, Toka, Chakki) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tools-pump.html">
                        Tools (Pump) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tools-tubewell-pvc-pipes-hand-pumps-and-saintary.html">
                        Tools (Tubewell, PVC Pipes, Hand Pumps &amp; Saintary)
                        in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tools-lawn.html">
                        Tools (Lawn) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tools-milk-products.html">
                        Tools (Milk Products) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tools-motors-electric-parts.html">
                        Tools (Motors, Electric Parts) in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/tour">Tour</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/bus-service.html">
                        Bus Rent Service in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/taxi-booking.html">
                        Taxi Booking in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/tour-and-travel.html">
                        Tour and Travel in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/water">Water</a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/cold-drink-dealers.html">
                        Mineral Water Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/water-filter.html">
                        Water Filters Purifier Dealers in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/water-park.html">
                        Water Park in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/filter-water-supplier.html">
                        Filter Water Supplier in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/water-tank-supplier.html">
                        Water Tank Supplier in Fatehabad
                      </a>
                    </p>
                    <hr />

                    <h3 style={{ color: "#0b5f90" }}>
                      <a href="https://www.digitalatehabad.com/welding">
                        Welding
                      </a>
                    </h3>
                    <hr />

                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/welding-repair-shatter.html">
                        Welding (Repair Shatter) in Fatehabad
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        display: "inline-block",
                        margin: "1px 5px",
                      }}
                    >
                      <span style={{ color: "#0b5f90" }}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </span>
                      &nbsp;
                      <a href="https://www.digitalatehabad.com/welding-works-shop.html">
                        Welding Works in Fatehabad
                      </a>
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
