import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Complaints() {



  const [complaint, setcomplaint] = useState("");

  const [ spinner, setSpinner ] = useState(false);

  useEffect(() => {
      
    axios
    .get('http://localhost/backend/getcomplaints.php')
    .then((res) => {
      console.log(res.data[0].result  ,"Fatch request ID"); 
      setcomplaint(res.data[0].result);
    
       
    })
    .catch((err) => {
      console.log(err);
    });
   
}, []);

  return (
    <>
    
    <div class="container-fluid">'

  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">

          <Link to="/admin" className="fw-bolder"  style={{ textDecoration: 'none' }}>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Users Management 
            </a>
          </li>
          </Link>
              
          <Link to="/productinfo" className="fw-bolder" style={{ textDecoration: 'none' }}>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
            
              Add Product
            </a>
          </li>
          </Link>

          <Link to="/feedbackdashboard" className="fw-bolder" style={{ textDecoration: 'none' }}>
          <li class="nav-item">
            <div class="nav-link active" aria-current="page" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            Feedback
            </div>
          </li>
          </Link>

          <Link to="/complaints" className="fw-bolder" style={{ textDecoration: 'none' }}>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              Complaint 
            </a>
          </li>
          </Link>

        </ul>

       
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Total Complaints {complaint.length}  </h1>
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

      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name </th>
              <th scope="col">Email</th>
              <th scope="col">Complaint</th>
            </tr>
          </thead>
          <tbody>

      
             {complaint.length ? (
               complaint.map((complaintlist) => (
               
              <tr>
              <td>{complaintlist.id}</td>
              <td>{complaintlist.cname}</td>
              <td>{complaintlist.cemail}</td>
              <td>{complaintlist.ccomplaint}</td>
              
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
