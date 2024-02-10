import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const SubCategories = () => {
  const { id } = useParams();

  console.log(id);
  const [categories, setCategories] = React.useState([]);

  const fetchCategories = () => {
    axios
      .get(`https://digitalfatehabad-production.up.railway.app/categories/${id}/subcategoriesAll`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.subcategories ,">>>");
      
        setCategories(response.data.subcategories);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="mt-3 container">
      <h3 className="text-center">Sub Categories</h3>
      <div style={{ textAlign: "left", marginBottom: "1rem" }}>
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
            <Link to={`/Listing/${row._id}`}>{row.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategories;
