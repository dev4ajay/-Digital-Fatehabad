import axios from "axios";
import React  ,{useEffect ,useState}from "react";
import { Link, useParams } from "react-router-dom";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

function BusinessDetail() {
  const [categories, setCategories] = React.useState([]);
  const { id } = useParams();
const Id = localStorage.getItem("ListingId")
// console.log(Id ,"");
  const fetchCategories = () => {
    axios
      .get(`https://digitalfatehabad-production.up.railway.app/listings/${Id}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        // const setCategories = ;
        setCategories(response.data.filter((task) => task._id === id))
        // setCategories(response.data.setCategories);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    
  
      <div className="container">
        <div className="row">
         
         
             
                {categories?.map((row) => ( 
      <div className=" col-lg-12 col-sm-12 mt-4 portfolio-item">
      <div className="card h-100 " style={{border:'3px solid rgb(39 105 172)' ,padding:'2px' ,background:'#f1f3f6' ,fontSize:'17px' }}>
        <div className="card-body">
 
  
   <hr style={{marginBottom:"1px"}}/>  
  
   <p className="text-left p-1"> <i class="fa fa-user" aria-hidden="true"></i> {row.name}</p>   <hr style={{marginBottom:"1px"}}/>
   <p className="text-left p-1"><i class="fa-regular fa-envelope"></i> {row.email}</p>   <hr style={{marginBottom:"1px"}}/>
    <p className="text-left p-1"><i class="fa fa-user" aria-hidden="true"></i> {row.businessName}</p>
 
   <hr style={{marginBottom:"1px"}}/> 
 
     
     
   <p className="text-justify p-1"><i class="fa-solid fa-layer-group"></i> {row.description.substring(0, 100)}</p>
  
   
      <hr style={{marginBottom:"1px"}}/> <p className="text-left p-1"><i class="fa-solid fa-location-dot"></i> {row.address}</p>
    
      <hr style={{marginBottom:"1px"}}/> 
     
     <p className="text-left p-1"><i class="fa-solid fa-phone"></i> {row.mobile}</p>
     <hr style={{marginBottom:"1px"}}/> 
     <p className="text-left p-1"><i class="fa-brands fa-whatsapp"></i> {row.whatsappNo}</p>
     
    
     
     

      <hr style={{marginBottom:"1px"}}/> <p className="text-left p-1"><i class="fa-solid fa-globe"></i> {row.websiteUrl}</p>

   


 
</div>
</div>
</div>
         ))}
         </div>    
         
      
      </div>

  
  );
}

export default BusinessDetail;
