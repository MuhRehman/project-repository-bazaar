import React, { useEffect, useState }  from 'react'
import { BrowserRouter as Router,  Link } from "react-router-dom";

export default function UpdateProductInfo() {

    const [productsinfo, setproductsinfo] = useState("");
    const [productsid, setproductsid] = useState("");

    useEffect(() => {

        // fetchProductsinfo();
        fetch("http://localhost/backend/productdata.php")
          .then((data) => data.json())
          .then((data) => {
            // alert("Fatch call..");
            // console.log(data[0]);
            setproductsinfo(data[0]);
           
            
            console.log("productsinfo - - 1",productsinfo);
          });
    
        //   setTimeout(function() { setproductsSearchResult(productDataObj) }, 1000);
    
      }, []);




      function handleDeleteSubmits(productIds){
                alert("Delete the Record Successfully..!");
        // console.log(productIds,"productId === ===");
     
        if( productIds !== "" ){
            var url = "http://localhost/backend/delete.php";
            
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            
            var Data = {
                
                productIds: productIds
            };


            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
             })
            // .then((res) => res.json())
            .then((res) => {
          
                    // alert("sss");
                   //  if (res[0].result == "login") {
                //  if (res[0].result[2] == email ) {

                  console.log(res[0],'Delete---1------------');
                  console.log(res[0].result,'Delete------2---------');
                  console.log(res[0].result[2],'Delete----3-----------');
                //  setMsg(res[0].result);
                

                    alert("Delete Record Successfully...!");

                 
                //  } else {
                //      setError(res[0].result);
                //  }

            //   console.log(res[0].result);
            })
            .catch((error) => {
            //   setError(error);
              console.log(error)
            });
            

        }
        
        setTimeout(() => {
           window.location.reload(true);
          }, 3000);
    }


    return (
        <>
        
        <div class="container-fluid">
    
      <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div class="position-sticky pt-3">
          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Seller Panel</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </a>
        </h6>
        <ul class="nav flex-column">
        {/* <Link to="/usersmanagement" className="fw-bolder">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Users Management 
            </a>
          </li>
          </Link> */}
              
          <Link to="/productinfo" className="fw-bolder">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Add Product
            </a>
          </li>
          </Link>
          <Link to="/updateproductinfo" className="fw-bolder">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
            
            
            <svg xmlns="http://www.w3.org/2000/svg" className="p-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            
              Update Product Info 
            </a>
          </li>
          </Link>
             
          
        </ul>
    
            {/* <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a class="link-secondary" href="#" aria-label="Add a new report">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Last quarter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Social engagement
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Year-end sale
                </a>
              </li>
            </ul> */}
          </div>
        </nav>
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Update Product Informatoin </h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group me-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                This week
              </button>
            </div>
          </div>
    
          {/* <h2>Users Management</h2> */}
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Model Name</th>
                  <th scope="col">Model </th>
                  <th scope="col">Type</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                
                {/* {     console.log("--------------------1userNameResult", userNameResult)} */}
          {/* { userNameResult.length }ddd */}
          {productsinfo.length ? (
               productsinfo.map((productsinfos) => (
               
              <tr>
              <td>{productsinfos.id}</td>
              <td>{productsinfos.pname}</td>
              <td>{productsinfos.pmname}</td>
              <td>{productsinfos.pmodel}</td>
              <td>{productsinfos.ptype}</td>
              <td>{productsinfos.pprice}</td>
              <td>   <img
                      className="image-thumbnail"
                      src={`http://localhost/backend/upload/${productsinfos.pimg}`}
                      alt=""
                    /></td>
            <td>
              {/* <button type="button" class="btn btn-primary p-1 m-1"><i class="far fa-eye"></i></button> */}
              {/* <Link to="/Productupdate" className="fw-bolder"> */}
              <Link to={`/Productupdate/${productsinfos.id}`} className="fw-bolder">
              <button type="button" class="btn btn-success p-1 m-1"><i class="fas fa-edit"></i></button>
              </Link>
            <button 
             onClick={() => {handleDeleteSubmits(productsinfos.id)}}
            //  onClick={handleDeleteSubmits(productsinfos.id)}
             type="button" class="btn btn-danger p-1 m-1">
                <i class="far fa-trash-alt"></i></button>
                {/* <input 
                                type="submit"
                                defaultValue="Submit"
                                className="btn btn-primary text-white btn-block btn-upload btn-lg gradient-custom-4 text-body"
                                onClick={handleDeleteSubmits}
                            /> */}
            </td>
            </tr>
              ))
            ) : (
              <div>
                <div id="spinner" class="container">
                  <div class="loading">ddd</div>
                </div>
              </div>
            )}
           

              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
        </>
      )
}
