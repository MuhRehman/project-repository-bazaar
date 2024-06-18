import React from 'react'

export default function EditProductInformatoin() {
  return (


    
    <section className="vh-100 bg-image" >
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{borderRadius: 15}}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Enter  Product Information  </h2>
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
                          value={productName}
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
                          value={menufacturerName}
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
                          value={modelName}
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
                          value={productPrice}
                          onChange={(e) => handleInputChange(e, "productprice")}
                      />
                  </div>
                 
                  <div class="form-outline mb-4">
                  <label className="form-label">Product type</label>
                    <select class="form-control form-control-lg"   
                    name="producttype"
                    
                     onChange={(e) => handleInputChange(e, "producttype")}
                    >
                      <option  value={productType}>Choose Product Type</option>
                      <option value="movies">Movies</option>
                      <option value="games">Games</option>
                      <option value="shows">Shows</option>
                      <option value="gadgets">gadgets</option>
                      <option value="cloth">cloth</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-outline mb-4">
                 
                  <div className="form-outline mb-4">
                      <label className="form-label">Product Image</label>
                   <div>
          
                   </div>
                   <div className="col col-12 d-flex justify-content-between">
                      <input type="file" 
                    className="form-control form-control-lg"
                     name="productimage"
                     ref={fileInputRef} 
                     onChange={(e) => handleInputChange(e, "productimage")}    
                    // onChange={handleFileChange} 
                    />
                
                      <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
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
          </div>
        </div>
      </div>
    </div>

    
  </section>
  )
}
