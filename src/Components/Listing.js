import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Listing = () => {
  const { id } = useParams();
  // console.log(id ,">>");
  localStorage.setItem("ListingId" ,id);
 
  const [categories, setCategories] = React.useState([]);



  const fetchCategories = () => {
    axios
      .get(`https://digitalfatehabad-production.up.railway.app/listings/${id}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setCategories(response.data)
        // setCategories(response.data.setCategories);
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="mt-5 mb-3 container">
      <h3 className="text-center">Listing</h3>
      <div className="container">
        <div className="row">
        
            
        {categories?.map((row) => ( 
          <>
         <div className=" col-lg-4 col-sm-6 portfolio-item mt-3">
            <div className="card h-100 " style={{border:'3px solid rgb(39 105 172)' ,padding:'2px' ,background:'#f1f3f6' ,fontSize:'17px'}}>
              <div className="card-body">
       
         <Link style={{fontSize:'25px',color:'#1a538e' }} to={`/single-business/${row._id}`}  >{row.name}</Link>
         <hr style={{marginBottom:"1px"}}/>  
        
         <p className="text-left p-1 "> <i class="fa fa-user" aria-hidden="true"></i> {row.name}</p>
         <hr style={{marginBottom:"1px"}}/> 
         <p className="text-left p-1"><i class="fa-regular fa-envelope"></i> {row.email}</p>
          
     
       
           
           
        {/* <p className="text-justify p-1"><i class="fa-solid fa-layer-group"></i> {row.description.substring(0, 100)}</p>  */}
     
         
            <hr style={{marginBottom:"1px"}}/> <p className="text-left p-1"><i class="fa-solid fa-location-dot"></i> {row.address}</p>   <hr style={{marginBottom:"1px"}}/> 
            <p className="text-left p-1"><i class="fa fa-user" aria-hidden="true"></i>{row.businessName}</p>
              <hr style={{marginBottom:"1px"}}/>

          
           <p className="text-left p-1"><i class="fa-solid fa-phone"></i> {row.mobile}</p>    <hr style={{marginBottom:"1px"}}/> <p className="text-left p-1"><i class="fa-brands fa-whatsapp"></i> {row.whatsappNo}</p>
        
          
           
           

            <hr style={{marginBottom:"1px"}}/>
             {/* <p className="text-left p-1"> {row.websiteUrl}</p>  */}
   
         


       
 </div>
 </div>
</div>
<br></br>
</>
         ))}
         </div>
         </div>
         </div>
       
       
        
    
    
   
  );
};

export default Listing
