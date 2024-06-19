import React from 'react'
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
// import   useState  from "react";
import { useState  , useRef , useEffect} from "react";

import  card1 from "./cardimg/Xiaomi Redmi 8 Original Global.jpg";
import  card2 from "./cardimg/FotoJet-209-635x430.jpg";
import  card3 from "./cardimg/PowerShot-SX240-HS_Fr.jpeg";
import  card4 from "./cardimg/Sennhei.png";
import  card5 from "./cardimg/apple-sport-gold-apple-watch.png";
import  card6 from "./cardimg/d9bbb5b06b5e4555adf4ee89ce047b77.png";
import  card7 from "./cardimg/t-shirt.jpg";
import  card8 from "./cardimg/tshirts.jpg";
import  logos1 from "./cardimg/onlinebazaar.png";
import  logos11 from "./cardimg/brand/barn.jpg";
import  logos12 from "./cardimg/brand/brand.jpg";
import  logos13 from "./cardimg/brand/campaign.jpg";
import  logos14 from "./cardimg/brand/rupixen.jpg";

export default function Home() {


  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerProductimage, setCustomerProductimage] = useState("");
  const [customerComplaint, setCustomerComplaint] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  
  const [ImagePerview, setImage] = useState("");
  
  const navigate = useNavigate()

  const routeChange = () =>{ 
    let path = `/searchproduct`; 
    navigate(path);
  }
  
  useEffect(() => {
    setTimeout(function(){
        setMsg("");
    }, 15000);
}, [msg]);


  let Username =  localStorage.getItem("items");


// ---------File Handling------------

const [selectedFile, setSelectedFile] = useState(null);

const [imageLink, setImageLink] = useState(null);

const [validationError, setValidationError] = useState(null);

const fileInputRef = useRef(null);

const handleFileChange = (event) => {
  // alert("file move fun call..");
  const file = event.target.files[0];
  if(file)
  {
    const allowedExtension = ['.jpg', '.png'];
    const selectedFileExtension = file.name.split('.').pop().toLowerCase();
    if(allowedExtension.includes('.' + selectedFileExtension))
    {
      setSelectedFile(file);
      setValidationError(null);
    }
    else
    {
      setSelectedFile(null);
      setValidationError('Invalid file extension. Please select a file with .jpg or .png extension.');
      fileInputRef.current.value = '';
    }
  }
  readImage(event, setImage);
};

async function readImage(e, func) {
  const file = e.target.files[0];
  const reader = new FileReader();
  console.log(file);
  reader.onload = function(e) {
    let binaryData = e.target.result;
    let base64String = window.btoa(binaryData);
    func(base64String);
  };

  let ImagePerview = reader.readAsBinaryString(file);
  console.log(reader);

  return ImagePerview;
}

const handleUpload = async(e) => {
  if(selectedFile)
  {
  
    e.preventDefault();
  const formData = new FormData();
  formData.append('file', selectedFile);

  try {
    const response = await fetch('http://localhost/backend/addproductcomplaint.php', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('File uploaded successfully');
    } else {
      console.error('File upload failed');
    }
  } catch (error) {
    console.error('Error uploading file:', error);
  }


  }
  else
  {
    setValidationError('Please select a file before uploading.');
  }
};

// ---------File Handling------------


  const handleInputChange = (e, type) => {
    // console.log(`Selected file - ${e.target.files[0].name}`);
  
      switch(type){
       
          case "customerName":
            setError("");
              setCustomerName(e.target.value);
              if(e.target.value === ""){
                
                  setError("CustomerName has left blank!");
              }
              break;
          case "customerEmail":
              setError("");
              setCustomerEmail(e.target.value);
              if(e.target.value === ""){
                  setError("Email has left blank!");
              }
              break;
          
         

          case "productimage":
              setError("");
              setCustomerProductimage(e.target.files[0].name);
              if(e.target.value === ""){
                  setError("productImg has left blank!");
              }
              handleFileChange(e);
              
              break;

              case "customerComplaint":
                setError("");
                setCustomerComplaint(e.target.value);
                if(e.target.value === ""){
                    setError("product type has left blank!");
                }
                break;
        
          default:
      }
  }
  
  function handleProductSubmit(){

    //  alert("ddd");
    // uploading-code-------------
    // handleUpload();
    // handleFileChange();
    // uploading-code-------------


if( customerName !== "" && customerEmail !== "" && customerComplaint !== ""  ){

    var url = "http://localhost/backend/addproductcomplaint.php";

    var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    };

    var Data = {

      customerName: customerName,
      customerEmail: customerEmail,
      customerProductimage: customerProductimage,
      customerComplaint: customerComplaint,


    }
  

    
    // alert(Data.productName);

//  console.log(Data.customerName);
//  console.log(Data.customerEmail);
//  console.log(Data.customerComplaint);


    fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data)
    })
    // .then((response) => response.json())
    .then((response) => {
        alert(" Your Complaint Submitted Successfully .!");
        
        // debugger

        console.log("Post ".response[0].result);
        console.log("Post psdppdppd".response[0]);
        setMsg("Yes, Add Product succeccfully.!");
    }).catch((err) =>{
        console.log("Post Error".err);
        console.log("Post Error----");
    });


    
    setCustomerName("");
    setCustomerEmail("");
    setCustomerProductimage("");
    setCustomerComplaint("");

  

}
else{
    setError("All fields are required!");
}

}


  
  return (
    <div>
        

<div class="container pt-3">

<div class="input-group">
   <a class="navbar-brand" href="#">
     <img class="me-3 me-md-5" style={{width: '40px'}} src={logos1} />  </a> 
<input type="text" id="input-form" class="form-control" placeholder="Search" aria-label="Text input with dropdown button" />
<button class="btn btn-outline-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">All type</button>
<button class="btn btn-primary d-none d-lg-block"><i class="fa-solid fa-magnifying-glass rounded d-none d-lg-block"></i></button>

<div class="ms-md-5 mt-2 mt-md-0">

{ Username ? <a type="button" class="btn btn-outline-primary fw-500 rounded ">
    <i class="fa-solid fa-user me-lg-2"></i><p class="d-none d-lg-inline" style={{marginRight: '12px'}}>Logout</p>
  </a> : <a type="button" class="btn btn-outline-primary fw-500 rounded ">
    <i class="fa-solid fa-user me-lg-2"></i><p class="d-none d-lg-inline" style={{marginRight: '12px'}}>Sign In</p>
  </a> }
  
  <a type="button" class="btn btn-outline-primary fw-500 rounded ml-2"  style={{marginLeft: '12px'}}>
    <i class="fa-solid fa-heart me-lg-2"></i><p class="d-none d-lg-inline" >Wishlist</p>
  </a>
  <a type="button" class="btn btn-outline-primary fw-500 rounded  ml-2" style={{marginLeft: '12px'}}>
    <i class="fa-solid fa-cart-shopping me-lg-2"></i><p class="d-none d-lg-inline">My Cart</p>
   
  </a>
  </div>

<ul class="dropdown-menu  dropdown-menu-start">
  <li><a class="dropdown-item" href="#">Best</a></li>
  <li><a class="dropdown-item" href="#">Special</a></li>
  <li><a class="dropdown-item" href="#">Latest</a></li>  
</ul>

</div>

</div>


<div class="container mt-3">
<nav class="navbar navbar-expand-lg navbar-light">

  <button class="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Categories</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Hot offers</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Gift boxes</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Projects</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Menu item</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Menu name</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Others
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      </ul>
</div>
</nav>
  </div>
    
    <div class="bg-primary py-5">
      <div class="container py-5 text-light">
        <h1 class="display-1">Best products & Brands in our store</h1>
        <p class="lead">Trendy Products, Factory Prices, Excellent Service</p>
        <a   onClick={routeChange} to="/Login" role="button" class="btn btn-warning fs-5  text-light "
        //  style="background-color:#ff8100;"
        >  Search Product  </a>
        <a  href="#" role="button" class="btn btn-light text-dark fs-5 m-2  ">Learn more</a>
      </div>
    </div>

     <div class="container">
       <h3 class="fw-bold mb-sm-3 mb-md-5 text-center text-md-start mt-5">New products</h3>
       
       <div class="row g-3 d-flex justify-content-evenly">
   <div class="card"  style={{width: '18rem'}}>
     <img class="img"   src={card2}
     width="100%" height="240px"></img>
<div class="card-body">

  <h5 class="card-title">$790.50</h5>
  <h6 class="card-subtitle mb-2 text-muted">GoPro HERO6 4K Action</h6>
  <h6 class="card-subtitle mb-2 text-muted">Camera - Black</h6>
   <a href="#" role="button" class="btn btn-primary card-link py-2 px-4">Add to card</a>
  <a href="#" class="btn btn-outline-primary card-link"> <i class="fa-solid fa-heart"></i></a>
</div>
</div> 

      
      
      <div class="card" style={{width: '18rem'}}>
        <img src={card1} width="100%" height="240px"></img>
   
<div class="card-body">
     
  <h5 class="card-title">$320.00</h5>
  <h6 class="card-subtitle mb-2 text-muted">Canon camera 20x zoom, Black</h6>
  <h6 class="card-subtitle mb-2 text-muted">color EOS 2000</h6>
  
  <a href="#" role="button" class="btn btn-primary card-link py-2 px-4">Add to card</a>
  <a href="#" class="btn btn-outline-primary card-link "> <i class="fa-solid fa-heart"></i></a>
</div>
</div>
 
    
 
    <div class="card" style={{width: '18rem'}}>
        <img src={card3} width="100%" height="240px"></img>
   
<div class="card-body">

  <h5 class="card-title">$120.00</h5>
  <h6 class="card-subtitle mb-2 text-muted">Xiaomi Redmi 8 Original Global</h6>
  <h6 class="card-subtitle mb-2 text-muted">Version 4GB</h6>
  
  <a href="#" role="button" class="btn btn-primary card-link py-2 px-4">Add to card</a>
  <a href="#" class="btn btn-outline-primary card-link "> <i class="fa-solid fa-heart"></i></a>
</div>
</div>
  
  

  <div class="card" style={{width: '18rem'}}>
        <img src={card4} width="100%" height="240px"></img>
   
<div class="card-body">
    
  <h5 class="card-title">$120.00</h5>
  <h6 class="card-subtitle mb-2 text-muted">Apple iPhone 12 Pro 6.1" RAM</h6>
  <h6 class="card-subtitle mb-2 text-muted">6GB 512GB Unlocked</h6>
  
  <a href="#" role="button" class="btn btn-primary card-link py-2 px-4">Add to card</a>
  <a href="#" class="btn btn-outline-primary card-link "> <i class="fa-solid fa-heart"></i></a>
</div>
</div>





 <div class="card" style={{width: '18rem'}}>
        <img src={card5} width="100%" height="240px"></img>
   
<div class="card-body">

  <h5 class="card-title">$120.00</h5>
  <h6 class="card-subtitle mb-2 text-muted">Apple Watch Series 1 Sport</h6>
  <h6 class="card-subtitle mb-2 text-muted">Case 38mm Black</h6>
  
  <a href="#" role="button" class="btn btn-primary card-link py-2 px-4">Add to card</a>
  <a href="#" class="btn btn-outline-primary card-link "> <i class="fa-solid fa-heart"></i></a>
</div>
</div>



<div class="card" style={{width: '18rem'}}>
        <img src={card6} width="100%" height="240px"></img>
   
<div class="card-body">
    
  <h5 class="card-title">$120.00</h5>
  <h6 class="card-subtitle mb-2 text-muted">T-shirts with multiple colors, for</h6>
  <h6 class="card-subtitle mb-2 text-muted">men and lady</h6>
  
  <a href="#" role="button" class="btn btn-primary card-link py-2 px-4">Add to card</a>
  <a href="#" class="btn btn-outline-primary card-link "> <i class="fa-solid fa-heart"></i></a>
</div>
</div>



<div class="card" style={{width: '18rem'}}>
        <img src={card7} width="100%" height="240px"></img>
   
<div class="card-body">
  
  <h5 class="card-title">$99.50</h5>
  <h6 class="card-subtitle mb-2 text-muted">Gaming Headset 32db Black</h6>
  <h6 class="card-subtitle mb-2 text-muted">built in mic</h6>
  
  <a href="#" role="button" class="btn btn-primary card-link py-2 px-4">Add to card</a>
  <a href="#" class="btn btn-outline-primary card-link "> <i class="fa-solid fa-heart"></i></a>
</div>
</div>


<div class="card" style={{width: '18rem'}}>
        <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.jpg" width="100%" height="240px"></img>
   
<div class="card-body">
   
  <h5 class="card-title">$120.00</h5>
  <h6 class="card-subtitle mb-2 text-muted">T-shirts with multiple colors, for</h6>
  <h6 class="card-subtitle mb-2 text-muted">men and lady</h6>
  
  <a href="#" role="button" class="btn btn-primary card-link py-2 px-4">Add to card</a>
  <a href="#" class="btn btn-outline-primary card-link "> <i class="fa-solid fa-heart"></i></a>
</div>
</div>
</div>
</div>


<div class="py-5 px-3">
<div class="container py-5">
<h3 class="fw-bold  text-center text-md-start mb-3">Why choose Us?</h3>
<div class="row">
    
<div class="col-lg-4 col-md-6 d-flex align-items-center">

  <div class="bg-white shadow-sm rounded-circle p-3">
  <i class="fa-solid fa-money-bill fs-1 text-primary"></i>
</div>
  
  <div class="ms-3 mt-md-5">
    <h6 class="h6 fw-bold">Reasonable prices</h6>
    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
  </div>
</div>
       
    
<div class="col-lg-4 col-md-6 d-flex align-items-center">

  <div class="bg-white shadow-sm rounded-circle p-3">
  <i class="fa-solid fa-star  fs-1 text-primary"></i>
</div>
  
  <div class="ms-3 mt-md-5">
    <h6 class="h6 fw-bold">
Best quality</h6>
    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
  </div>
</div>
  
    
<div class=" col-lg-4 col-md-6 d-flex align-items-center">

  <div class="bg-white shadow-sm rounded-circle p-3">
 <i class="fa-solid fa-plane  fs-1 text-primary"></i>
</div>
  <div class="ms-3 mt-md-5">
    <h6 class="h6 fw-bold">Worldwide shipping</h6>
    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
  </div>
</div>
    
    
<div class="col-lg-4 col-md-6 d-flex align-items-center">

  <div class="bg-white shadow-sm rounded-circle p-3">
 <i class="fa-solid fa-users  fs-1 text-primary"></i>
</div>
  <div class="ms-3 mt-md-5">
    <h6 class="h6 fw-bold">Customer satisfaction</h6>
    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
  </div>
</div>
   
    
<div class="col-lg-4 col-md-6 d-flex align-items-center">

  <div class="bg-white shadow-sm rounded-circle p-3">
<i class="fa-solid fa-thumbs-up  fs-1 text-primary"></i>
</div>
  <div class="ms-3 mt-md-5">
    <h6 class="h6 fw-bold">Happy customers</h6>
    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
  </div>
</div>
 
  <div class="col-lg-4 col-md-6 d-flex align-items-center">

  <div class="bg-white shadow-sm rounded-circle p-3">
<i class="fa-solid fa-box-open fs-1 text-primary"></i>
</div>
  <div class="ms-3 mt-md-5">
    <h6 class="h6 fw-bold">Thousand items</h6>
    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
  </div>
</div>
  

</div>

</div>
</div>


<div class="pb-5">
<div class="container py-5">
  <h3 class="h3 fw-bold mb-3 text-center text-md-start mb-3">Blog posts</h3>
 <div class="row mt-md-5">
   
   <div class="col-sm-6 col-md-6 col-lg-3">
     <img class="bg rounded" src={logos12} width="250" height="200"  />
     <div class="mt-3">
       <a href="#"  class="fw-bold">How to promote brands</a>
       <p class="text-muted">When you enter into any new area of science, you almost reach</p>
     </div>
   </div>
   
    <div class="col-sm-6 col-md-6 col-lg-3">
     <img class="bg rounded" src={logos14} width="250" height="200"  />
     <div class="mt-3">
       <a class="fw-bold">How we handle shipping</a>
       <p class="text-muted">When you enter into any new area of science, you almost reach</p>
     </div>
   </div>
   
    <div class="col-sm-6 col-md-6 col-lg-3">
     <img class="bg rounded" src={logos13} width="250" height="200"  />
     <div class="mt-3">
       <a class="fw-bold">How to promote brands</a>
       <p class="text-muted">When you enter into any new area of science, you almost reach</p>
     </div>
   </div>
   
    <div class="col-sm-6 col-md-6 col-lg-3">
     <img class="bg rounded" src={logos11} width="250" height="200"  />
     <div class="mt-3">
       <a class="fw-bold">Success story of sellers</a>
       <p class="text-muted">When you enter into any new area of science, you almost reach</p>
     </div>
   </div>
   
  </div>
  
</div>
</div>




<div class="py-5 border-1 footer-wrapepr">
<div class="container">
  
<div class="row d-flex">
  
  <div class="col-md-12 col-lg-3 mb-3">
 
  <img src={logos1} style={{width: '6rem'}}></img>
  <p class="mt-4 text-muted">© 2018- 2024  <a href="https://a-rehman.com/">a-rehman.com</a>.</p>

  </div>
  <div className='col-lg-9 '>
    <h2 className='mb-3'>Submit Complaint Form</h2>
  <div className='row '>

  <div class="col-md-6">

    <label class="d-block mb-4">
          <span class="d-block mb-2">Your name</span>
          <input
            name="customerName"
            type="text"
            class="form-control"
            placeholder="Joe Bloggs"
            onChange={(e) => handleInputChange(e, "customerName")}
          />
        </label>
    
  </div>

  <div class="col-md-6">
  <label class="d-block mb-4">
          <span class="d-block mb-2">Email address</span>
          <input
            name="customerEmail"
            type="text"
            class="form-control"
            placeholder="Joe Bloggs"
            onChange={(e) => handleInputChange(e, "customerEmail")}
          />
        </label>
  </div>
  {/* <div class="col-md-4">
  <label class="d-block mb-4">
          <span class="d-block mb-2">Picture</span>
          <input
            name="name"
            type="file"
            class="form-control"
            placeholder="Joe Bloggs"
            onChange={(e) => handleInputChange(e, "productImage")}
          />
        </label>
  </div> */}
  </div>
  <div className='row '>
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" name='customerComplaint' id="floatingTextarea2" 
    onChange={(e) => handleInputChange(e, "customerComplaint")}
  style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2" className='p-3 m-1'>Please discribe the problem</label>
</div>

  </div>
<div className='d-flex justify-content-center '>
{/* <button class="btn btn-primary " style={{ width:"522px",}} onSubmit={handleProductSubmit}  type="submit">Button</button> */}
  </div>
  <div className="d-flex justify-content-end mt-3">
                          <input 
                                type="submit"
                                defaultValue="Submit"
                                className="btn btn-info text-white btn-block btn-upload btn-lg gradient-custom-4 text-body"
                                onClick={handleProductSubmit}
                            />
                        </div>
  </div>


  {/* <div class="col-6 col-sm-6 col-md-4 col-lg-2">
      
    <h6 class="h6 fw-bold">Store</h6>

      <a 
         href="#" class="text-decoration-none text-muted">About us</a>
     <a 
        href="#" class="text-decoration-none text-muted">Find stories</a>
     <a 
        href="#" class="text-decoration-none text-muted">Categories</a>
     <a 
        href="#" class="text-decoration-none text-muted">Blogs</a>
  </div>
  
  <div class="col-6 col-sm-6 col-md-4 col-lg-2">
    <h6 class="h6 fw-bold">Information</h6>
    <a href="#" class="text-decoration-none text-muted">About us</a>
     <a href="#" class="text-decoration-none text-muted">Find stories</a>
     <a href="#" class="text-decoration-none text-muted">Categories</a>
     <a href="#" class="text-decoration-none text-muted">Blogs</a>
  </div>
  
  <div class="col-6 col-sm-6 col-md-4 col-lg-2 mt-3 mt-md-0">
    <h6 class="h6 fw-bold">Support</h6>
    <a href="#" class="text-decoration-none text-muted">About us</a>
     <a href="#" class="text-decoration-none text-muted">Find stories</a>
     <a href="#" class="text-decoration-none text-muted">Categories</a>
     <a href="#" class="text-decoration-none text-muted">Blogs</a>
  </div>
  
  <div class="col-lg-3 mt-3 mt-lg-0">

    <h6 class="h6 fw-bold">Newsletter</h6>
    <p class="text-muted">Stay in touch with latest updates about our products and offers</p>

    <div class="input-group">
<input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2"/>
<div class="input-group-append">
  <button class="btn btn-secondary" type="button">Join</button>
</div>
</div>
  </div> */}

  
  
</div>



</div>
</div>

<div>
  <div>


  </div>
<div class="containerss">
  <div class="row mx-0 justify-content-centers">
    <div class="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0">
      {/* <form
        method="POST"
        class="w-100 rounded p-4 border bg-white"
        action="https://herotofu.com/start"
        enctype="multipart/form-data"
      >
        

        <label class="d-block mb-4">
          <span class="d-block mb-2">Email address</span>
          <input
            name="email"
            type="email"
            class="form-control"
            placeholder="joe.bloggs@example.com"
          />
        </label>

        <div class="mb-4">
          <label class="d-block mb-2">Receipt</label>
          <div class="form-control h-auto">
            <input name="receipt" type="file" class="form-control-file" />
          </div>
        </div>

        <label class="d-block mb-4">
          <span class="d-block mb-2">What's wrong?</span>
          <textarea
            name="message"
            class="form-control"
            rows="3"
            placeholder="Please describe your problem"
          ></textarea>
        </label>

        <div class="mb-3">
          <button type="submit" class="btn btn-primary px-3">Submit</button>
        </div>

       
      </form> */}
    </div>
  </div>
</div>

</div>
</div>
  
  
  
  
  )
}
