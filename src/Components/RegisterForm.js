import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
   const [data ,setData] = useState([])
    const [business, setBusiness] = useState("");
    const [category, setCategory] = useState("");
    const [mobile, setMobile] = useState("");
    const [Whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
       
        axios.post("https://digitalfatehabad-production.up.railway.app/businesses/register", {
          Name: name,
          businessName: business,
          BusinessCategory: category,
          mobileNo: mobile,
          WhatsappNo: Whatsapp,
          websiteUrl: website,
          description: message,
          email: email,
        })
        .then((response) => {
            console.log(response);
            if (response.status === 201) {
                navigate("/")
                Swal.fire({
            icon: "success",
            text: `!!Form Submit Successfully !!`,
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false,
          });
            } 
            setName("");
            setBusiness("");
            setCategory("");
            setMobile("");
            setWhatsapp("");
            setWebsite("");
            setMessage("");
            setEmail("");
            setData(response.data);
           
          })
          
      };
      

    return (
        <div>
            <br />
            <div class="container">

                <div class="row">
                    <div class="col-lg-12 col-sm-6 portfolio-item">
                        <h5>Register Your Business - Its Free.. </h5>
                        <hr />
                    </div>
                    <div class="col-lg-12 col-sm-6 portfolio-item" style={{marginTop:"-15px"}}>
                        <div class="card h-100" style={{background:'#f1f3f6'}}>
                            <div class="card-body">
                                <form  onSubmit={handleSubmit} method="post">

                                    <div class="form-row" >

                                        <div class="form-group col-md-4">
                                            <label for="Entry_Person_Name"><b>Your Name *</b></label>
                                            <input type="text" id="Entry_Person_Name" name="Entry_Person_Name" value={name} class="form-control" placeholder="Enter Your Name" required="" onChange={(e)=>setName(e.target.value)}/>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="Business_Name"><b>Business Name *</b></label>
                                            <input type="text" id="Business_Name" value={business} name="Business_Name" class="form-control" placeholder="Enter Business Name" required="" onChange={(e)=>setBusiness(e.target.value)}/>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="Business_Category"><b>Business Category *</b></label>
                                            <input type="text" id="Business_Category" name="Business_Category" value={category} class="form-control" placeholder="Enter Business Category" required="" onChange={(e)=>setCategory(e.target.value)}/>
                                        </div>
                                     

                                    </div>

                                 

                                  

                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <label for="Mobile_Number"><b>Mobile Number *</b></label>
                                            <input type="text" id="Mobile_Number" name="Mobile_Number" class="form-control" value={mobile} placeholder="Enter Mobile Number" required="" onChange={(e)=>setMobile(e.target.value)}/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="Alternate_Mobile_Number"><b> Whatsapp No</b></label>
                                            <input type="text" id="Alternate_Mobile_Number" name="Alternate_Mobile_Number" value={Whatsapp} class="form-control" placeholder="Enter Whatsapp Number" onChange={(e)=>setWhatsapp(e.target.value)}/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="Email"><b>Email</b></label>
                                            <input type="text" id="Email" name="Email" class="form-control" value={email} placeholder="Enter Email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" title="Wrong Email Id" onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="Website"><b>Website</b></label>
                                            <input type="text" id="Website" name="Website" class="form-control" value={website} placeholder="Enter Website" onChange={(e)=>setWebsite(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="Message"><b>Description</b></label>
                                        <textarea class="form-control" id="Message" name="Message" rows="3" value={message} placeholder="Enter Your Description" onChange={(e)=>setMessage(e.target.value)}></textarea>
                                    </div>

                                    <input type="hidden" name="Unique_ID" value="061fb88de4dbc4247402f42ab0673eee" />
                                    <span class="form-group">
                                        <button class="btn btn-primary text-white" name="submit" value="button" type="submit" >Register Business</button>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <br></br>


        </div>
    )
}

export default RegisterForm



