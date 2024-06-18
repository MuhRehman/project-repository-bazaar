import React, { useState ,useEffect , useRef} from "react";

//For Image Upload
// import ImageUploading from "react-images-uploading";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Productupdate() {


  const { id } = useParams();

  
  const [dataId, setdataId] = useState("");
  const [productName, setProductName] = useState("");
  const [valueState, setvalueState] = useState(false);
  const [menufacturerName, setMenufacturerName] = useState("");
  const [modelName, setModelName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productType, setProductType] = useState("");
  const [productsUpdateinfo, setProductsUpdateinfo] = useState([]);
  // const [productImgs, setProductImg] = useState("");
  const [productimage, setProductimage] = useState("");
  const [Spinners, setSpinners] = useState(false);
  // const [productfilepath, setProductfileimage] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [ImagePerview, setImage] = useState("");

  useEffect(() => {
    fetchProductsinfo();

    fetch("http://localhost/backend/productdata.php")
    .then((data) => data.json())
    .then((data) => {
      // alert("Fatch call..");
      console.log(data[0]);
      // setProductsUpdateinfo(data[0]);
     
      
      // console.log("Products info",productsUpdateinfo);
      });
      setdataId(id);
    // axios
    // .get('http://localhost/backend/productdata.php')
    // .then((res) => {
    // //   console.log(res,"Fatch request ID"); 
    //   // setProducts(res.data);
    //   setProductsUpdateinfo(res.data[0]);
    
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
      }, []);


      function fetchProductsinfo() {
          // alert("test");
            axios
            .get('http://localhost/backend/searchproductdata.php')
            .then((res) => {
            //   console.log(res,"Fatch request ID"); 
            setProductsUpdateinfo(res.data);
            setSpinners(true)
            
            })
            .catch((err) => {
              console.log(err);
            });
        }


          let selectedProductInfo = productsUpdateinfo.find( x => x.id == id);
        console.log(selectedProductInfo,"selectedProductInfo");

        // selectedProductInfo ? 
        //     setValues({...values, name})
        // : setSpinners(false);
// -----------------------testing------------
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
      const response = await fetch('http://localhost/backend/fileupload.php', {
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

        // alert("Move to Upload Dir....!");

        // fetch('http://localhost/backend/addproductinfo.php', {
        //     method: "POST",
        //     body: formData,
        // })
        // .then((response) => response.json())
        // .then((response) => {
        //     alert(" Successfully Upload");
            
        //     // debugger

        //     console.log(response[0].result);
        //     setMsg(response[0].result);
        //     }).catch((err) =>{
        //       alert("Failed Upload.. ");
        //     //   debugger
        //         setError(err);
        //         console.log(err);
        //     });




		}
		else
		{
			setValidationError('Please select a file before uploading.');
		}
	};
// -----------------------testing------------
//  alert()
  const [file, setFile] = React.useState(null)
    
    const fileHandler = (e) => {
        setFile(e.target.files[0])
        
    }

  const  onChangess = (imageList) => {
      // data for submit
      
      // Create an object of formData 
      const formData = new FormData(); 
      
      // Update the formData object 
      formData.append( 
        "myFile", 
        imageList[0].file, 
        imageList[0].file.name
      ); 
     
      // Details of the uploaded file 
      console.log(imageList[0].file); 
     
      // Request made to the backend api 
      // Send formData object to my php file for save in folder
      axios.post("http://localhost/backend/reactimageupload.php", formData); 
    }; 
  const handleInputChange = (e, type) => {
    // console.log(`Selected file - ${e.target.files[0].name}`);
  
      switch(type){
       
          case "productname":
            setError("");
              setProductName(e.target.value);
              
                setvalueState(true);
              
              if(e.target.value === ""){
                
                  setError("Username has left blank!");
              }
              break;
          case "menufacturername":
              setError("");
              setvalueState(true);
              setMenufacturerName(e.target.value);
              if(e.target.value === ""){
                  setError("Email has left blank!");
              }
              break;
          case "productmodel":
              setError("");
              setvalueState(true);
              setModelName(e.target.value);
              if(e.target.value === ""){
                  setError("Password has left blank!");
              }
              break;
          case "producttype":
              setError("");
              setvalueState(true);
              
              setProductType(e.target.value);
              if(e.target.value === ""){
                  setError("product type has left blank!");
              }
              break;
          case "productimage":
              setError("");
              setvalueState(true);
              // setProductfileimage(e.target.files[0].name);
              setProductimage(e.target.files[0].name);
              // alert("Dddd--------------");
              // setProductimage(e.target.value);
              if(e.target.value === ""){
                  setError("productImg has left blank!");
              }
              handleFileChange(e);
              // handleUpload(e);
              
              break;
          case "productimageTest":
              setError("");
              // setProductfileimage(e.target.files[0].name);
              // setProductimage(e.target.value);
              if(e.target.value === ""){
                  setError("productImg has left blank!");
              }
              break;
          case "productprice":
              setError("");
              setProductPrice(e.target.value);
              if(e.target.value === ""){
                  setError("Confirm password has left blank!");
              }
              
              break;
          default:
      }
  }



  function handleProductSubmit(){

       
        // uploading-code-------------
        // handleUpload();
        // handleFileChange();
        // uploading-code-------------
  

    if(productName !== "" ){
    
        var url = "http://localhost/backend/updateproductinfo.php";
 
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        console.log("dataId",dataId);   
        alert("ddd");

        var Data = {

          productName: productName,
          menufacturerName: menufacturerName,
          modelName: modelName,
          productPrice: productPrice,
          productImg: productimage,
          productType: productType,
          dataId: dataId

        }
      
              
        // alert(Data.productName);

     console.log(Data.productName);
   
  
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        })
        // .then((response) => response.json())
        .then((response) => {
            alert(" Yes, Enter Product Succeccfully.!");
            
            // debugger

            // console.log("Post ".response[0].result);
            console.log("Post psdppdppd".response[0]);
            setMsg("Yes, Add Product succeccfully.!");
        }).catch((err) =>{
          // alert("Not");
            
        //   debugger
            // setError(err);
            console.log("Post Error".err);
            console.log("Post Error----");
        });


        
        setProductName("");
        setMenufacturerName("");
        setModelName("");
        setProductPrice("");
        setProductimage("");

      

    }
    else{
        setError("All fields are required!");
    }

}


// console.log(,"dddddddddddddddddddddd");

  return (


    <>
      <section className="vh-100 bg-image" >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  {/* { selectedProductInfo.length ? <h1>tesjkb {selectedProductInfo.id}</h1> : <h1>e</h1> } */}
                  {/* { selectedProductInfo.length ? ( */}
                  {/* { selectedProductInfo.length ? ( */}
               {/* ): ("")} */}
             {  Spinners   ?  (
              <div className="card" style={{borderRadius: 15}}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">Update Product Information  </h2>
                      <p>
                          {
                              msg !== "" ?

                              <span className="success">{msg}</span> :
                              <span className="error">{error}</span>
                          }
                       
                     
                      </p>
                    
                      
                        <div className="form-outline mb-4">
                            <label className="form-label">Product Name</label>
                          <input 
                                type="text"
                                name="productname"
                                className="form-control form-control-lg"
                                 
                                value={valueState ? (productName) : (selectedProductInfo.pname)}
                                defaultValue={selectedProductInfo.pname}
                                onChange={(e) => handleInputChange(e, "productname")}
                              
                              //  onBlur={checkPassword}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Menufacturer's Name </label>
                          <input 
                                type="text"
                                name="menufacturername"
                                className="form-control form-control-lg"
                                // value={selectedProductInfo.pmname}
                                value={valueState ? (menufacturerName) : (selectedProductInfo.pmname)}
                                onChange={(e) => handleInputChange(e, "menufacturername")}
                               // onBlur={checkPassword}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Model </label>
                          <input 
                                type="text"
                                name="productmodel"
                                className="form-control form-control-lg"
                                // value={selectedProductInfo.pmodel}
                                value={valueState ? (modelName) : (selectedProductInfo.pmodel)}
                                onChange={(e) => handleInputChange(e, "productmodel")}
                               // onBlur={checkPassword}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label">Product Price</label>
                          <input 
                                type="text"
                                name="productprice"
                                className="form-control form-control-lg"
                                value={valueState ? (productPrice) : (selectedProductInfo.pprice)}
                                // value={selectedProductInfo.pprice}
                                onChange={(e) => handleInputChange(e, "productprice")}
                               // onBlur={checkEmail}
                            />
                        </div>
      
                        <div class="form-outline mb-4">
                        <label className="form-label">Product type</label>
                          <select class="form-control form-control-lg"   
                          name="producttype"
                          
                          // value={selectedProductInfo.ptype}
                           onChange={(e) => handleInputChange(e, "producttype")}
                          >
                            <option  value={valueState ? (productType) : (selectedProductInfo.ptype)}>Choose Product Type</option>
                            <option value="movies">Movies</option>
                            <option value="games">Games</option>
                            <option value="shows">Shows</option>
                            <option value="gadgets">gadgets</option>
                            <option value="cloth">cloth</option>
                            <option value="other">Other</option>
                          </select>
                          
                        </div>
                        <div className="form-outline mb-4">
                      
                        </div>
                        <div className="form-outline mb-4">
                            {/* <label className="form-label">Product Image</label> */}
                          {/* <input  
                                // type="file"
                                // name="productimage"
                                // className="form-control form-control-lg"
                                
                                // ref={fileInputRef}
                                // value={productimage}  
                                // value={selectedProductInfo.ptype}
                                // onChange={(e) => handleInputChange(e, "productimage")}
                              // onBlur={checkEmail}
                           />   */}
                         <div>
         
                         </div>
              

                        </div>
                      <div>
                    
                      </div>
                        <div className="d-flex justify-content-center">
                          <input 
                                type="submit"
                                defaultValue="Submit"
                                className="btn btn-primary text-white btn-block btn-upload btn-lg gradient-custom-4 text-body"
                                onClick={handleProductSubmit}
                            />
                        </div>

                    </div>
                  </div>
            ) : (
              <div>
                <div id="spinner" class="container">
                  <div class="loading"></div>
                </div>
              </div>
            )}
                </div>
              </div>
            </div>
          </div>


          {/* productsUpdateinfo */}


          {/* {productsUpdateinfo.length ? (
              productsUpdateinfo.map((productitemlist) => (
                <div className="card col-3 ">
               <img
                      className="card-img-top"
                      src={`http://localhost/backend/upload/${productitemlist.pimg}`}
                      alt=""
                    />
          
                   <div className="card-body">
                    <h3>Name  : <span>{productitemlist.pname}</span></h3>
                    <p> Brand : <span>{productitemlist.pmname}</span></p>
                    <p> Price :<span>{productitemlist.pprice}</span></p>
                    <h6>Type  : {productitemlist.ptype}</h6>
           
                   </div>
                  
                  </div>
             
              ))
            ) : (
             ""
            )} */}
    
          
        </section>
    </>
  )
}
