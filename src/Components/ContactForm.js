import axios from 'axios'
import React, { useState } from 'react'


function ContactForm() {

const [reason, setReason] = useState("");
const [name, setName] = useState("");
const [owner, setOwner] = useState("");
const [business, setBusiness] = useState("");
const [category, setCategory] = useState("");
const [address, setAddress] = useState("");
const [state, setState] = useState("");
const [city, setCity] = useState("");
const [pin, setPin] = useState("");
const [mobile1, setMobile1] = useState("");
const [mobile2, setMobile2] = useState("");
const [email, setEmail] = useState("");
const [website, setWebsite] = useState("");
const [message, setMessage] = useState("");

const header= {"Access-Control-Allow-Origin": "*"}

const handleSubmit =(e) =>{
    e.preventDefault()
        axios.post("https://64ce71800c01d81da3eed391.mockapi.io/contact-form",
        {
            reason: reason,
            name: name,
            owner: owner,
            business:business,
            category: category,
            address: address,
            state: state,
            city: city,
            pin: pin,
            mobile1: mobile1,
            mobile2: mobile2,
            website:website,
            message: message,
            email: email,

            header,
        }

)
}

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-6 portfolio-item">
                        <h5>Contact Us </h5>
                        <hr />
                    </div>
                    <div className="col-lg-12 col-sm-6 portfolio-item" style={{ marginTop: "-15px" }}>
                        <div className="card h-100" style={{background:'#f1f3f6'}}>
                            <div className="card-body">
                                <form action="https://www.digitalFatehabd.com/thanks" method="post">
                                    <div className="form-group">
                                        <label for="Reason_For_Contact" ><b>First Select Reason For Contact *</b></label>
                                        <select className="form-control" id="Reason_For_Contact" name="Reason_For_Contact" onChange={(e)=>setReason(e.target.value)}>
                                            <option value="You Want To Register Your Business Listing (Free Of Cost)">You Want To Register Your Business Listing (Free Of Cost)</option>
                                            <option value="Update in Your Business Listing (Change of Address,Mobile,Name Correction other etc.)">Update in Your Business Listing (Change of Address,Mobile,Name Correction other etc.)</option>
                                            <option value="Remove Your Business Listing">Remove Your Business Listing</option>
                                            <option value="Business Listing Information Are Wrong">Business Listing Information Are Wrong</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-row">

                                        <div className="form-group col-md-3">
                                            <label for="Entry_Person_Name"><b>Your Name *</b></label>
                                            <input type="text" id="Entry_Person_Name" name="Entry_Person_Name" className="form-control" placeholder="Enter Your Name" required="" onChange={(e)=>setName(e.target.value)}/>
                                        </div>

                                        <div className="form-group col-md-3">
                                            <label for="Are_You_Business_Owner" ><b>Are You Business Owner*</b></label>
                                            <select className="form-control" id="Are_You_Business_Owner" name="Are_You_Business_Owner" onChange={(e)=>setOwner(e.target.value)}>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-3">
                                            <label for="Business_Name"><b>Business Name *</b></label>
                                            <input type="text" id="Business_Name" name="Business_Name" className="form-control" placeholder="Enter Business Name" required="" onChange={(e)=>setBusiness(e.target.value)}/>
                                        </div>

                                        <div className="form-group col-md-3">
                                            <label for="Business_Category"><b>Business Category *</b></label>
                                            <input type="text" id="Business_Category" name="Business_Category" className="form-control" placeholder="Enter Business Category" required="" onChange={(e)=>setCategory(e.target.value)}/>
                                        </div>

                                    </div>

                                    <div className="form-group">
                                        <label for="Address" ><b>Address *</b></label>
                                        <textarea id="Address" name="Address" className="form-control" placeholder="Enter Address" required="" onChange={(e)=>setAddress(e.target.value)}></textarea>
                                    </div>

                                    <div className="form-row">

                                        <div className="form-group col-md-4">
                                            <label for="State"><b>State *</b></label>
                                            <input type="text" id="State" name="State" className="form-control" placeholder="Enter State" required="" onChange={(e)=>setState(e.target.value)}/>
                                        </div>

                                        <div className="form-group col-md-4">
                                            <label for="City"><b>City *</b></label>
                                            <input type="text" id="City" name="City" className="form-control" placeholder="Enter City" required="" onChange={(e)=>setCity(e.target.value)}/>
                                        </div>

                                        <div className="form-group col-md-4">
                                            <label for="Pincode"><b>Pincode *</b></label>
                                            <input type="text" id="Pincode" name="Pincode" className="form-control" placeholder="Enter Pincode" required="" onChange={(e)=>setPin(e.target.value)}/>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label for="Mobile_Number"><b>Mobile Number *</b></label>
                                            <input type="text" id="Mobile_Number" name="Mobile_Number" className="form-control" placeholder="Enter Mobile Number" required="" onChange={(e)=>setMobile1(e.target.value)}/>
                                        </div>

                                        <div className="form-group col-md-3">
                                            <label for="Alternate_Mobile_Number"><b>Mobile Number (Alternate)</b></label>
                                            <input type="text" id="Alternate_Mobile_Number" name="Alternate_Mobile_Number" className="form-control" placeholder="Enter Alternate Mobile Number" onChange={(e)=>setMobile2(e.target.value)}/>
                                        </div>

                                        <div className="form-group col-md-3">
                                            <label for="Email"><b>Email</b></label>
                                            <input type="text" id="Email" name="Email" className="form-control" placeholder="Enter Email" pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" title="Wrong Email Id" onChange={(e)=>setEmail(e.target.value)} />
                                        </div>

                                        <div className="form-group col-md-3">
                                            <label for="Website"><b>Website</b></label>
                                            <input type="text" id="Website" name="Website" className="form-control" placeholder="Enter Website" onChange={(e)=>setWebsite(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="Message"><b>Message</b></label>
                                        <textarea className="form-control" id="Message" name="Message" rows="3" placeholder="Enter Your Message" onChange={(e)=>setMessage(e.target.value)}></textarea>
                                    </div>

                                    <input type="hidden" name="Unique_ID" value="c7666df116407bd08c0e5d3f6f304c41" />
                                    <span className="form-group">
                                        {/* {reason}
                                        {name}
                                        {owner}
                                        {business}
                                        {category}
                                        {address}
                                        {state}
                                        {city}
                                        {pin}
                                        {mobile1}
                                        {mobile2}
                                        {email}
                                        {website}
                                        {message}
                                         */}
                                        <button className="btn btn-primary text-white" name="submit" value="button" type="submit" onClick={handleSubmit}>Register Business</button>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        
        </div>
    )
}

export default ContactForm
