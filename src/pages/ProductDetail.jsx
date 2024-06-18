import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import Rating from '../components/Rating';

export default function ProductDetail() {


    let [cartItems, setCartItems] = useState([])
    const { id } = useParams();
    const [userid, setuserId] = useState("");
    const [userfeedback, setfeedback] = useState("");
    const [usernamefeedback, setUsernamefeedback] = useState("");
    const [userratings, setrating] = useState("");
    const [ProductId, setProductId] = useState("");
    const [products, setProducts] = useState([]);
    const [feedbackDetail, setfeedbackDetail] = useState([]);
    const [eror, setError] = useState("");
    const [feedbackDatetime, setfeedbackDatetime] = useState("");
    
    console.log(id,"ID  test");

    // const {id}= useParams()
    
    // const thisProduct = productsData.find(prod => prod.id === productId)
  
    const { state } = useLocation();
     // <-- access route state

    
    useEffect(() => {
      
        fetchProducts();
        fetch("http://localhost/backend/productdata.php")
        .then((data) => data.json())
        .then((data) => {
        //   // alert("Fatch call..");
        //   // console.log(data[0]);
          setProducts(data[0]);          
        });
        // let newDate = new Date();

        // let date = newDate.getDate();
        // let month = newDate.getMonth();
        // let getCurrentDateandTimes = month.toLocaleString() + Date().toLocaleString();
        // setuserId("1");
        // setrating("4");
        // setfeedbackDatetime(getCurrentDateandTimes);


        // SubmitProductsFeedBack();
        setProductId(id);
        fetchProductsFeedbackDetail();
          
 
       
    }, []);
    

    const handleInputChange = (e, type) => {
       
        switch(type){
         
            
            case "productfeedbackNameUser":
                setError("");
                setUsernamefeedback(e.target.value);
                if(e.target.value === ""){
                    setError("product feedback NameUser has left blank!");
                }
                break;
            case "productfeedback":
                setError("");
                setfeedback(e.target.value);
                if(e.target.value === ""){
                    setError("Email has left blank!");
                }
                break;

            case "rate":
                setError("");
                setrating(e.target.value);
                if(e.target.value === ""){
                    setError("Rating has left blank!");
                }
                break;
           
            default:
        }
    }

//    function getCurrentDate(separator=''){

//         let newDate = new Date()
//         let date = newDate.getDate();
//         let month = newDate.getMonth() + 1;
//         let year = newDate.getFullYear();
        
//         return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
//         }
   

      
    function handleSubmit(){


        let newDate = new Date();

        let date = newDate.getDate();
        let month = newDate.getMonth();
        // let getCurrentDateandTime = month.toLocaleString() + Date().toLocaleString();

        setuserId("1");
        // setrating("4");
        // setfeedbackDatetime(getCurrentDateandTime);
         
        // console.log("date and time ....",getCurrentDateandTime );
         
        // setSpinner(true);
        // setfeedbackDatetime(); 
        if(userfeedback !== "" ){
            //   alert("handleSubmit");
              
              var url = "http://localhost/backend/insertfeedback.php";
            
       
              var headers = {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
              };

              var Data = {
                  userid: ProductId,
                  usernamefeedback: usernamefeedback,
                  userfeedback: userfeedback,
                  userratings: userratings,
                //   feedbackDatetime: feedbackDatetime
              }
              
            //   console.log(' Feedback Data ---- ',Data);
      
  
              fetch(url, {
                  method: "POST",
                  headers: headers,
                  body: JSON.stringify(Data)
              })
              // .then((response) => response.json())
              .then((response) => {
                //   setSpinner(false);
                //   alert("Feedback Successfully");
                //   navigate("/login");
                  // debugger
  
                //   console.log("Response Latest: ", response);
                  // setMsg(response[0].result);
              }).catch((err) =>{
                // setSpinner(false);
                alert("Not Insert HS");
              //   debugger
            //   setSpinner(false);
                  setError(err);
                  console.log(err);
              });
  
  
            
              
              setuserId("");
              setfeedback("");
              setrating("");
              setfeedbackDatetime("");
  
              // sendEmailComfirm();
  
          }
          else{
              setError("All fields are required!");
          }
      }

    function fetchProducts() {
    //   alert("test");
        axios
        .get('http://localhost/backend/searchproductdata.php')
        .then((res) => {
        //   console.log(res,"Fatch request ID"); 
          setProducts(res.data);

        
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
    function fetchProductsFeedbackDetail() {
    //   alert("test");
        axios
        .get('http://localhost/backend/feedbackdetail.php')
        .then((res) => {
        //   console.log(res,"Fatch request ID"); 
        console.log("set feedback Detail --------------------",res.data);
        setfeedbackDetail(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function SubmitProductsFeedBack() {
       
    // alert("SubmitProductsFeedBack");
    setuserId("1");
    setrating("4");
    // setfeedbackDatetime(getCurrentDateandTime);
        }
    //  debugger
       let selected1 = 3;

    // console.log("Products Fatch ",products);
    // console.log("id",id);
    let selectedProduct = products.find(x=>x.id == id);
    
    console.log("feedbackDetail----------->>>-", selectedProduct);
    console.log("feedbackDetail-----------444-", feedbackDetail);
    let selectedFeedbackDetail  = feedbackDetail.find(x=>x.userId == id);
    console.log("selectedFeedbackDetail----1wwwwww-", selectedFeedbackDetail);
    
    // ?.map(sn => (
    
    //     <li>{sn.id}</li>
    // ));
    
    // console.log("Product 1w1 ",ss);
    // console.log("Testing Products ",selectedProduct);



  return (
    <>
        


        <div>


    
{/* 
            {products.find(x=>x.id==4).map((x)=>
         {
            <li>{x.id}</li>
         }
                
            )} */}
        </div>
        <div class="container my-5">
        <div class="row">

            <div class="col-md-5">
                <div class="main-img">
                {/* <img class="img-fluid" src={`http://localhost/backend/upload/${selectedProduct.pimg}`} alt="ProductS" /> */}
                    
                    <img class="img-fluid" src="https://placehold.co/600x400" alt="ProductS" />
                    {/* <div class="row my-3 previews">
                        <div class="col-md-3">
                            <img class="w-100" src="https://placehold.co/600x400/000000/FFFFFF/png" alt="Sale" />
                        </div>
                        <div class="col-md-3">
                            <img class="w-100" src="https://placehold.co/600x400/000000/FFFFFF/png" alt="Sale" />
                        </div>
                        <div class="col-md-3">
                            <img class="w-100" src="https://placehold.co/600x400/000000/FFFFFF/png" alt="Sale" />
                        </div>
                        <div class="col-md-3">
                            <img class="w-100" src="https://placehold.co/600x400/000000/FFFFFF/png" alt="Sale" />
                        </div>
                    </div> */}
                </div>
            </div>
            {selectedProduct? 
            <div class="col-md-7">
                <div class="main-description px-2">
                   
                    <div class="category text-bold">
                        Category:  {selectedProduct.pmname}
                    </div>
                   
                    {/* <h1>{productId}</h1>  */}
                    {/* <h1> Item ID: {id}</h1> */}
                    {/* <pre>params: {JSON.stringify(paramsId)}</pre> */}
                    <pre>params: {}</pre>

                    <div class="product-title text-bold my-3">
                    {selectedProduct.pname}
                    </div>


                    <div class="price-area my-4">
                        {/* <p class="old-price mb-1"><del>{selectedProduct.pmodel}</del> <span class="old-price-discount text-danger">(20% off)</span></p> */}
                        {/* <p class="old-price mb-1">{selectedProduct.pmodel}</del></p> */}
                        <p class="new-price text-bold mb-1"><strong>Modal</strong>:  {selectedProduct.pmodel}</p>
                        {/* <p class="text-secondary mb-1">(Additional tax may apply on checkout) </p> */}

                    </div>


                    <div class="buttons d-flex my-5">
                        {/* <div class="block">
                            <a href="#" class="shadow btn custom-btn ">Wishlist</a>
                        </div>
                        <div class="block">
                            <button class="shadow btn custom-btn">Add to cart</button>
                        </div> */}

                        <div class="block quantity">
                            <input type="number" class="form-control" id="cart_quantity" value="1" min="0" max="5" placeholder="Enter email" name="cart_quantity"/>
                        </div>
                    </div>




                </div>

                <div class="product-details my-4">
                    <p class="details-title text-color mb-1">Product Details</p>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi odio recusandae aliquid ad impedit autem commodi earum voluptatem laboriosam? </p>
                </div>
              
                         <div class="row questions bg-light p-3">
                    <div class="col-md-1 icon">
                        <i class="fa-brands fa-rocketchat questions-icon"></i>
                    </div>
                    <div class="col-md-11 text">
                        Have a question about our products at E-Store? Feel free to contact our representatives via  email.
                    </div>
                </div>

                <div class="delivery my-4">
                    <p class="font-weight-bold mb-0"><span><i class="fa-solid fa-truck"></i></span> <b>Delivery done in 3 days from date of purchase</b> </p>
                    <p class="text-secondary">Order now to get this product delivery</p>
                </div>
                <div class="delivery-options my-4">
                    <p class="font-weight-bold mb-0"><span><i class="fa-solid fa-filter"></i></span> <b>Delivery options</b> </p>
                    <p class="text-secondary">Cash on Delivery </p>
                </div>
                
            </div>
            :""}
        </div>
    </div>



    <div class="container similar-products my-4">
               
              <div>
              <p class="display-5"> Products Reviews</p>

               
            {/* {selectedFeedbackDetail.length = "" ? (
              selectedFeedbackDetail.map((productitemlist) => (
                <div className="card col-3 ">
                                  <h1>khdkjf</h1>
                  </div>
             
              ))
            ) : (
              <div>
                <div id="spinner" class="container">
                  <div class="loading"></div>
                </div>
              </div>
            )} */}
              </div>
               {console.log(feedbackDetail.length,"Selected Feedback Detail111111111111111111111111111")}
          
                  <div>
                  {feedbackDetail.length ? (
              feedbackDetail.map((productitemlist) => (

                <div>

            
              <div class="card mb-4 mt-2">
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-user-circle " style={{fontSize:"32px"}}></i> {productitemlist.usernamefeedback}</h5>
          <p class="card-text">{productitemlist.feedback}</p>
          
          
          <div className="rows">

<h1 class="heading"></h1>
<div class="rate">

    <label style={{color: selected1 >= 1 ? 'gold':''}} for="star5" title="text">5 stars</label>

    <label style={{color: selected1 >= 2 ? 'gold':''}} for="star4" title="text">4 stars</label>

    <label style={{color: selected1 >= 3 ? 'gold':''}} for="star3" title="text">3 stars</label>
   
    <label style={{color: selected1 >= 4 ? 'gold':''}} for="star2" title="text">2 stars</label>

    <label style={{color: selected1 >= 5 ? 'gold':''}} for="star1" title="text">1 star</label>
</div>

    </div>
          <hr/>


          <ul class="card-text list-inline">
            {/* <!-- Like --> */}
            <li class="list-inline-item">
             
              <i class="fa-solid fa-thumbs-down"></i> 88
        
            </li>
            {/* <!-- Dislike --> */}
            <li class="list-inline-item">
            
              <i class="fa-solid fa-thumbs-up"></i> 14
             
            </li>
            {/* <!-- Report --> */}
            <li class="list-inline-item">
              <a href="#">
                <i class="bi bi-flag"></i>
              </a>
            </li>
          </ul>


        
        </div>
      </div>
                </div>
              
              ))
            ) : (
              <div>
                <div id="spinner" class="container">
                  <div class="loading"></div>
                </div>
              </div>
            )}
                  </div>
             


           

 {/*
    </div>
      <div class="container similar-products my-4">
        {/* <hr> */}
        <p class="display-5 mt-5">Give feedback</p>

        {/* <div class="row">
            
            <div class="col-md-3">
                <div class="similar-product">
                    <img class="w-100" src="https://placehold.co/600x400" alt="Preview" />
                    <p class="title">Lovely black dress</p>
                    <p class="price">$100</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="similar-product">
                    <img class="w-100" src="https://source.unsplash.com/sg_gRhbYXhc" alt="Preview" />
                    <p class="title">Lovely Dress with patterns</p>
                    <p class="price">$85</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="similar-product">
                    <img class="w-100" src="https://source.unsplash.com/gJZQcirK8aw" alt="Preview" />
                    <p class="title">Lovely fashion dress</p>
                    <p class="price">$200</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="similar-product">
                    <img class="w-100" src="https://source.unsplash.com/qbB_Z2pXLEU" alt="Preview"/>
                    <p class="title">Lovely red dress</p>
                    <p class="price">$120</p>
                </div>
            </div>

        </div> */}
    </div>

            {/* -----------------fEEDBACK FoRM------------- */}

            <>
            {/* <div>
                <h1>1{userid?userid :""}   </h1>
                <h1>2{userfeedback?userfeedback :""}</h1>
                <h1>3{userratings?userratings :""}</h1>
                <h1>4{feedbackDatetime?feedbackDatetime :""}</h1>
            </div> */}

            </>
            <form class="container">
                <div className="rows">
                <div class="form-outline mb-4"><label class="form-label">Your Email</label>
                <input type="email" name="email" class="form-control form-control-lg"
                 value={usernamefeedback}
                 onChange={(e) => handleInputChange(e, "productfeedbackNameUser")}
                />

                </div>
                </div>
                <div className="rows">

            {/* <h1 class="heading">Give feedback</h1> */}
            {/* <div class="rate">
                <input type="radio" id="star5"  onChange={(e) => handleInputChange(e, "rate")} name="rate" value="5" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" onChange={(e) => handleInputChange(e, "rate")} name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" onChange={(e) => handleInputChange(e, "rate")} name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" onChange={(e) => handleInputChange(e, "rate")} name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" onChange={(e) => handleInputChange(e, "rate")} name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
            </div> */}

                </div>
            
            <div>
                ..
            </div>
            <div>
                ...
            </div>

            {/* <p class="para">What do you think of the issue with this pr?</p> */}

            {/* <div class="feedback-level">
                <div class="level">
                <i class="lar la-sad-tear"></i>
                </div>
                <div class="level">
                <i class="las la-frown"></i>
                </div>
                <div class="level">
                <i class="lar la-meh"></i>
                </div>
                <div class="level">
                <i class="lar la-smile"></i>
                </div>
                <div class="level">
                <i class="lar la-grin"></i>
                </div>
            </div> */}


            <div className="float-clears">

            </div>

            <div class="feedback-msg">
                <p class="para">
                What are the main reasons for your rating?
                </p>
                {userfeedback}
                <textarea     
                type="text"
                name="productfeedback"
                className="form-control form-control-lg"
                value={userfeedback}
                onChange={(e) => handleInputChange(e, "productfeedback")}
                ></textarea>
            </div>

            <div className="rows">

<h1 class="heading">Give feedback</h1>
<div class="rate">
    <h1>dledm</h1>
    <input type="radio" id="star5"  onChange={(e) => handleInputChange(e, "rate")} name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" onChange={(e) => handleInputChange(e, "rate")} name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" onChange={(e) => handleInputChange(e, "rate")} name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" onChange={(e) => handleInputChange(e, "rate")} name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" onChange={(e) => handleInputChange(e, "rate")} name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
</div>

    </div>

            <div class="buttons">
                <a href="javascript:alert('Thanks for submiting your feedback')" 
                className='btn btn-primary mt-3 text-white'
                onClick={handleSubmit}>Submit</a>

            </div>
            </form>
            {/* -----------------fEEDBACK FoRM------------- */}


    </>

 
  )
}
