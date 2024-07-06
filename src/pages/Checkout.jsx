import React, { useState, useEffect, useRef } from "react";

export default function Checkout(checkoutdata) {
  const [fname, setFullName] = useState("");
  const [orderemail, setOrderEmail] = useState("");
  const [orderaddress, setOrderAddress] = useState("");
  const [Showdata, setShowdata] = useState("");
  const [Error, setError] = useState("");
  const [ spinner, setSpinner ] = useState(true);
  // const [total, setTotal] = useState(0);

  // console.log("checkoutdata_id", checkoutdata);
  // console.log("checkoutdata_id", checkoutdata.checkoutdata[0].id);

  useEffect(() => {
    console.log(checkoutdata, " ---------checkoutdata Use Effect");
    //   window.localStorage.setItem('MY_APP_STATE', JSON.stringify(checkoutdata));
    //   const data = window.localStorage.getItem('MY_APP_STATE');
    // if ( data !== null ) setShowdata(JSON.parse(data));
    // console.log("Showdata",Showdata);
    // console.log("Showdata local ",Showdata.checkoutdata[0].id);

    //  console.log(checkoutdata[0].id, " ---------checkoutdata Use Effect");
    //  console.log(checkoutdata.checkoutdata[0].id, " ---------checkoutdata Use Effect");
  }, [checkoutdata]);

  let total1 = 0;

  const handleInputChange = (e, type) => {
    switch (type) {
      case "fname":
        setError("");
        setFullName(e.target.value);
        if (e.target.value === "") {
          setError("Full name has left blank!");
        }
        break;
      case "orderemail":
        setError("");
        setOrderEmail(e.target.value);

        if (e.target.value === "") {
          setError("Email has left blank!");
        }
        break;
      case "orderaddress":
        setError("");
        setOrderAddress(e.target.value);
        if (e.target.value === "") {
          setError("Address has left blank!");
        }
        break;

      default:
    }
  };

  function handleSubmit() {
    setSpinner(false);

    if (orderemail !== "" && orderaddress !== "") {
      var url = "http://localhost/backend/mailer/orderconfirmcopy.php";

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        fname: fname,
        orderemail: orderemail,
        orderaddress: orderaddress,
      };

      console.log("Order Data", Data);

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        // .then((response) => response.json())
        .then((response) => {
          // setSpinner(false);
          alert("The order has been successfully placed.!");
          // navigate("/login");
          // debugger
          setSpinner(true);
          console.log("Response Order: ", response);
          
         window.location.replace("http://localhost:3000/home");
          // setMsg(response[0].result);
        })
        .catch((err) => {
          // setSpinner(false);
          alert("Order Failed..! ");
          //   debugger
          // setSpinner(false);
          setError(err);
          console.log(err);
        });

      setFullName("");
      setOrderEmail("");
      setOrderAddress("");

      // sendEmailComfirm();
    } else {
      setError("All fields are required!");
    }
  }

  return (
    <>
      {/* {<h1> {checkoutdata.checkoutdata[0].id}</h1>}
      
      
         {Showdata.checkoutdata.map((data, _index) => {
           <h1>sdsdsdskfdsfn{data.name}</h1>;
         })
      } */}

      {/* {checkoutdata.map((datainput, index) => { const { id, image, pname, pprice, qty } = data;
                                      return (
                                        
                                        <h1 >{datainput.id}</h1>
                                        // <h1>{pname}</h1>
                                      );
                })} */}
      <section class="cart">
        {/* <div class="cart-item">
			<img src="https://cdn.shopify.com/s/files/1/0814/1617/products/IMG_0716_1024x1024.png" class="image"/>
			<p class="title">Lorem ipsum dolor <span>2.5cm &times; 2.8cm</span></p>
			<p class="currency">CHF</p>
			<p class="price">4.25</p>
		</div>
		<div class="cart-item">
			<img src="https://cdn.shopify.com/s/files/1/0814/1617/products/IMG_2760_1024x1024.png" class="image"/>
			<p class="title">Sit amet <span>2.4cm &times; 2.8cm</span></p>
			<p class="currency">CHF</p>
			<p class="price">4.25</p>
		</div>
		<div class="cart-item">
			<img src="https://cdn.shopify.com/s/files/1/0814/1617/products/IMG_2766_1024x1024.png" class="image" />
			<p class="title">Consectetur adipiscing elit <span>2.7cm &times; 2.3cm</span></p>
			<p class="currency">CHF</p>
			<p class="price">5.60</p>
		</div>
		<div class="shipping">
			<p class="title">Shipping</p>
			<p class="currency">CHF</p>
			<p class="price">2.70</p>
		</div>
		<div class="total">
			<p class="title">Total</p>
			<p class="currency">CHF</p>
			<p class="price">16.80</p>
		</div> */}
      </section>
      <section class="checkout">
        <header>
          <div>
            {/* <table>
            <tbody>
                                    {checkoutdata.map((data, index) => {
                                      const { id, image, pname, pprice, qty } =
                                        data;
                                      return (
                                        <tr key={index}>
                                          <td>
                                            <button
                                              className="prdct-delete" 
                                            //   onClick={() =>
                                            //     removeFromCarts(id)
                                            //   }
                                        //     >
                                              
                                        //       <i className="fa fa-trash-alt"></i>
                                        //     </button>
                                        //   </td>
                                        //   <td>
                                        //     <div className="product-img">
                                        //     {id}
                                              {/* <img src={image} alt="" /> */}
            {/* </div>
                                          </td>
                                          <td>
                                            <div className="product-name">
                                              <p>{pname}</p>
                                            </div>
                                          </td>
                                          <td>${pprice}</td> */}
            {/* <td>
                                            <div className="prdct-qty-container">
                                              <button
                                                className="prdct-qty-btn"
                                                type="button"
                                                onClick={() =>
                                                  decreaseQuantity(index)
                                                }
                                              >
                                                <i className="fa fa-minus"></i>
                                              </button>
                                              <input
                                                type="text"
                                                name="qty"
                                                className="qty-input-box"
                                                value={qty}
                                                disabled
                                              />
                                              <button
                                                className="prdct-qty-btn"
                                                type="button"
                                                onClick={() =>
                                                  increaseQuantity(index)
                                                }
                                              >
                                                <i className="fa fa-plus"></i>
                                              </button>
                                            </div>
                                          </td> */}
            {/* <td className="text-right">
                                            ${(qty * pprice).toFixed(0)}
                                          </td> */}
            {/* </tr> */}
            {/* ); */}
            {/* })} */}
            {/* </tbody> */}
            {/* </table> */}
          </div>

          <p>by</p>

          <div>
          
            {checkoutdata.checkoutdata.map((data, _index) => {
            //  return   <h1>sdsdsdskfdsfn ---{data.name}</h1>;
            })}
          </div>
        </header>
        {  spinner ? (
                <div>
                  {/* <h1>{spinner}</h1> */}
                  <div class="container">
                  <div class="table-responsive">
                    <table class="table table-bordered   table-striped">
                      <thead class="table__head">
                        <tr class="winner__table">
                          <th>S/N</th>
                          <th>
                            <i class="fa fa-user" aria-hidden="true"></i> Product ID
                          </th>
                          <th>
                            <i class="fa fa-product-hunt" aria-hidden="true"></i>{" "}
                            Product Name
                          </th>
                          <th>
                            <i class="fa fa-money" aria-hidden="true"></i>
                            Price
                          </th>
                          <th>
                            <i class="fa fa-calendar-o" aria-hidden="true"></i>{" "}
                            Manufacture Date
                          </th>
                          <th>
                            {" "}
                            <i class="fa  fa-list-alt" aria-hidden="true"></i> Category
                          </th>
                          <th>
                            <i class="fa fa-trophy" aria-hidden="true"></i>{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {checkoutdata.checkoutdata.length > 0
                          ? checkoutdata.checkoutdata.map((productData, index) => {
                              // <h1>sdsdsdskfdsfn{productData.name}</h1>
                              return (
                                <tr class="winner__table">
                                  <td>{productData.id}</td>
                                  <td>{productData.pname}</td>
                                  <td>{productData.pprice}</td>
                                  <td>{productData.pmname}</td>
                                  <td>{productData.pmodel}</td>
                                  <td>{productData.ptype}</td>

                                  <th>
                                    Gold Coin{" "}
                                    <span className="d-none">
                                      {" "}
                                      {(total1 = total1 + parseInt(productData.pprice))}
                                    </span>
                                    <img
                                      src="https://batafestivepromo.bigcityexperience.com/assets/frontend/img/g_coin.png"
                                      class="coin"
                                    />
                                  </th>
                                </tr>
                              );
                            })
                          : <div className="empty-custom"><h1 className="d-flex text-center">Empty</h1></div> }

                        <div className="d-flex justify-content-end">
                          <h6 className="ml-auto">
                            Total <span className="m-1"> {total1} </span>
                          </h6>
                        </div>
                      </tbody>
                    </table>
                  </div>
                 </div>

                 <div>
                  <form action="post">
                    <div class="input-group">
                      <div class="label">
                        <label for="name">Full Name</label>
                      </div>
                      <div class="input">
                        <input
                          type="text"
                          id="fullname"
                          name="fname"
                          placeholder="Name"
                          value={fname}
                          onChange={(e) => handleInputChange(e, "fname")}
                          required
                        />
                      </div>
                    </div>
                    <div class="input-group">
                      <div class="label">
                        <label for="number">Email</label>
                      </div>
                      <div class="input numbers">
                        <input
                          type="email"
                          id="orderemail"
                          name="orderemail"
                          placeholder="Email"
                          value={orderemail}
                          onChange={(e) => handleInputChange(e, "orderemail")}
                          required
                        />
                      </div>
                    </div>
                    <div class="input-group">
                      <div class="label">
                        <label for="cvc">Address</label>
                      </div>
                      <div class="input">
                        <input
                          type="text"
                          id="address"
                          name="orderaddress"
                          placeholder="Address"
                          value={orderaddress}
                          onChange={(e) => handleInputChange(e, "orderaddress")}
                          required
                        />
                      </div>
                    </div>
                    <div class="input-group">
                      <button onClick={handleSubmit}>Confirm my order</button>
                    </div>
                  </form>
                </div>
                </div>

                    )  : (
              <div>
                <div id="spinner" class="container">
                  <div class="loading"></div>
                </div>
              </div>
            )}
        <div></div>
      </section>
    </>
  );
}