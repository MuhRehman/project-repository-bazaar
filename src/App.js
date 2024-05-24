import Registration from "./components/Registration.jsx";
import "./App.css";
import Login from "./components/Login.jsx";
import ProductInfo from "./pages/ProductInfo.jsx";
import Admin from "./pages/admin.jsx";
import Searchproduct from "./pages/Searchproduct.jsx";
import Contacting from "./components/Contacting.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ProductDetail from "./pages/ProductDetail.jsx";
import Home from "./pages/Home.jsx";
import { useState, useEffect, useRef } from "react";
import ShopCart from "./components/ShopCart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Seller from "./pages/Seller.jsx";
import Feedbackdashboard from "./pages/Feedbackdashboard.jsx";
import UsersManagement from "./pages/UsersManagement.jsx";

export const BooksContext = createContext(undefined);

function App() {
  const [dropdownState, setDropdownState] = useState(true);
  const [dropdownValue, setDropdownValue] = useState("");

  const [showLogout, setShowLogout] = useState(false);
  const onClick = () => setShowLogout(true);

  const [isAdmin, setIsAdmin] = useState();
  const [isOpen, setIsOpen] = useState();
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const context = useContext(BooksContext);
  const [productsItem, setproductsItem] = useState("");
  const [productsSearchResult, setproductsSearchResult] = useState("");

  let readrole = localStorage.getItem("roles");
  // let readrole1 = localStorage.getItem('roles')=== "3"?  alert("admin") : alert("Not ");

  console.log("role role ", readrole);
  let Username1 = localStorage.getItem("items");
  // alert(readrole);
  // alert(Username1);
  var readToken = localStorage.getItem("token");
  // if (readEmail == "" || readEmail == null || readToken == "" || readToken == null) {
  //   $(".btn-logout").hide();
  //   $(".btn-login").show();
  // } else {
  //   $(".btn-login").hide();
  //   $(".btn-logout").show();
  // }

  // const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // -----------cart-----------
    // console.log(products1);
    // getUsers(userList);

    fetch("http://localhost/backend/productdata.php")
      .then((data) => data.json())
      .then((data) => {
        // alert("Fatch call..");
        // console.log(data[0]);
        setproductsItem(data[0]);
        setproductsSearchResult(data[0]);
      });
    // -----------cart-----------

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ---------------shopping-cart-------------
  // console.log("context.state.cart", state.cart[0]);
  const data = [
    {
      id: 1,
      name: "Simyacı",
      author: "Paulo Coelho",
      price: 9.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      name: "Yüzyıllık Yalnızlık",
      author: "Gabriel García Márquez",
      price: 19.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51A1ZxGf94L._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    },
    {
      id: 3,
      name: "Annemi Bir Kez Daha Görebilsem",
      author: "Zana Muhsen",
      price: 16.99,
      image:
        "https://content.babil.com/urun/13df0fdbdfbe477d8c8ee30d2e15292c/Front/Big",
    },
    {
      id: 4,
      name: "Ekmek Kavgası",
      author: "Orhan Kemal",
      price: 19.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41BJdviD3TL._SX340_BO1,204,203,200_.jpg",
    },
    {
      id: 5,
      name: "Aşk",
      author: "Elif Şafak",
      price: 25.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/414N7XbRE%2BL._SX344_BO1,204,203,200_.jpg",
    },
  ];

  const [state, setState] = useState({
    booklist: productsSearchResult,
    cart: [],
  });

  console.log("productsSearchResult", productsSearchResult);
  console.log("data", data);

  const addToCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });
  };

  // const removeFromCart = (id) =>
  //   setState({
  //     ...state,
  //     cart: state.cart.filter((cartItem) => cartItem.id !== id)
  //   });
  const removeFromCarts = (id) =>{

    alert(id);
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });
  }
    

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  const totalCartCount = state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  console.log("state.cart", state.cart);
  // ---------------shopping-cart-------------

  const productData = [
    {
      id: 1,
      image: "http://dummyimage.com/440x620.png/cc0000/ffffff",
      name: "Coke - Diet, 355 Ml",
      price: 120,
      qty: 1,
    },
    {
      id: 2,
      image: "http://dummyimage.com/440x620.png/dddddd/000000",
      name: "Pork - Hock And Feet Attached",
      price: 150,
      qty: 1,
    },
    {
      id: 3,
      image: "http://dummyimage.com/440x620.png/cc0000/ffffff",
      name: "Veal - Jambu",
      price: 135,
      qty: 1,
    },
    {
      id: 4,
      image: "http://dummyimage.com/440x620.png/dddddd/000000",
      name: "Almonds Ground Blanched",
      price: 110,
      qty: 1,
    },
    {
      id: 5,
      image: "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
      name: "Passion Fruit",
      price: 80,
      qty: 1,
    },
  ];

  const [products, SetProducts] = useState(productData);

  // -------------------Cart--
  // -----Increment Event------
  const increaseQuantity = (i) => {
    SetProducts((preValue) =>
      preValue.map((data, o) => {
        if (i === o) {
          return {
            ...data,
            qty: data.qty + 1,
          };
        }
        return data;
      })
    );
  };

  // -----Decrement Event------
  const decreaseQuantity = (i) => {
    SetProducts((preValue) =>
      preValue.map((data, o) => {
        if (i === o) {
          if (data.qty > 1) {
            return { ...data, qty: data.qty - 1 };
          } else {
            return data;
          }
        }
        return data;
      })
    );
  };

  // -----Remove Event------
  const removeFromCart = (i) => {
    if (window.confirm("Are you sure you want to remove into your cart?")) {
      SetProducts((prevCart) =>
        prevCart.filter((item, o) => {
          return i !== o;
        })
      );
    } else {
      // alert('No');
    }
  };

  // -empty-cart--------
  const emptycart = () => {
    if (window.confirm("Remove all items into your cart?")) {
      SetProducts([]);
    } else {
      // alert('No');
    }
  };
  const checkoutcart = () => {
    if (window.confirm("Remove all items into your cart?")) {
      SetProducts([]);
    } else {
      // alert('No');
    }
  };

  // ------Total Product Incart and Total Price of cart
  const cartTotalQty = products.reduce((acc, data) => acc + data.qty, 0);
  const cartTotalAmount = products.reduce(
    (acc, data) => acc + data.price * data.qty,
    0
  );

  let Username = localStorage.getItem("items");

  console.log("Login main local storage ", Username);

   
  // -------------------Cart--
  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };

  const handleSetDropdownValue = (value) => {
    setDropdownValue(value);
    setDropdownState(!dropdownState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleClickOutlogout = (event) => {
    localStorage.removeItem("items");

    // navigate("/login");
  };

  return (
    <div>
      <BooksContext.Provider
        value={{
          state,
          addToCart,
          increase,
          decrease,
          removeFromCart,
          totalCartCount,
        }}
      >
        <nav class="" data-bs-theme="white" ref={dropdownRef}>
          <Router>
            <ul className="Navbar-link   d-flex">
              {/* <ul className="Navbar-link bg-primary d-flex"> */}

              <li>
                <Link to="/registration" className="fw-bolder">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/login" className="fw-bolder">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/productinfo" className="fw-bolder">
                  Add Product Info
                </Link>
              </li>
              <li>
                <Link to="/searchproduct" className="fw-bolder">
                  Search Product
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="fw-bolder">
                  Contacting
                </Link>
              </li>
              <li>
                <Link to="/productdetail/id" className="fw-bolder">
                  Product Detail
                </Link>
              </li>
              <li>
                <Link to="/home" className="fw-bolder">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shoppingcart" className="fw-bolder">
                  shoppingcart
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="fw-bolder">
                checkout
                </Link>
              </li>
              <li>
                <Link to="/seller" className="fw-bolder">
                Seller Panel
                </Link>
              </li>
              {readrole == '"3"' ? (
                <li>
                  <Link to="/admin" className="fw-bolder">
                    Admin
                  </Link>
                </li>
              ) : (
                <p>Not Admin {readrole} </p>
              )}

              {/* <div className="dropdown">
    <button className="dropdown-toggle" >
        Dropdown
    </button>
        </div>  */}

              {Username ? (
                <a
                  type="button"
                  class="btn btn-outline-primary fw-500 rounded "
                >
                  <i class="fa-solid fa-user me-lg-2"></i>
                  <p
                    class="btn border border-white border-3 text-bg-light fw-bolder mt-1 "
                    style={{ marginRight: "12px" }}
                  >
                    Logout
                  </p>
                </a>
              ) : (
                <a
                  type="button"
                  class="btn btn-outline-primary fw-500 rounded "
                >
                  <i class="fa-solid fa-user me-lg-2"></i>
                  <p
                    class="btn border border-white border-3 text-bg-light fw-bolder "
                    style={{ marginRight: "12px" }}
                  >
                    Sign In
                  </p>
                </a>
              )}
              {/* <div class="avatar-group">
  <div class="btn border border-white border-3 text-bg-light fw-bolder " onClick={handleClickOutlogout}>
              Log out
    </div>
  </div> */}
              <div class="avatar-group">
                <div class="avatar">
                  <span class="avatar-name">{Username}</span>
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="cart-container dropdown">
                {/* <a type="button" className="btn  fw-500 rounded  ml-2" onClick={handleDropdownClick} > */}
                <a
                  type="button"
                  className="btn  fw-500 rounded  ml-2"
                  onClick={toggleDropdown}
                >
                  <i
                    class="fa-solid fa-cart-shopping me-lg-2"
                    aria-hidden="true"
                  ></i>
                  <p class="d-none d-lg-inline">My Cart {totalCartCount}</p>
                </a>
                {/* -------------shopping-cart */}
            
                {/* <div>
                  {context.state.cart.map((book) => (
                    <div className="book" key={book.id}> */}
                {/* <img src={book.image} alt={book.name} /> */}
                {/* <div> */}
                {/* <h4>{book.name}</h4>
                        <p>Author: {book.author}</p>
                        <p>Price: &#8378;{book.price}</p>
                        <p>
                          Total: &#8378;{(book.price * book.count).toFixed(2)}
                        </p> */}
                {/* <p>You have a total of {book.count} in your cart.</p>
                        <button onClick={() => context.decrease(book.id)}>
                          -
                        </button>
                        <button onClick={() => context.removeFromCart(book.id)}>
                          Remove
                        </button>
                        <button onClick={() => context.increase(book.id)}>
                          +
                        </button> */}
                {/* </div>
                    </div>
                  ))}
                </div> */}
                {/* -------------shopping-cart */}
                <div>
                  {isOpen && (
                    <div className="dropdown-menus dropdown-menu-custom">
                      <div className="row justify-content-center m-0">
                        <div>
                      
                          {/* <ShopCart></ShopCart> */}

                          {/* shoppingcart----------- */}
                          {/* <div>
                            {state.cart.map((product) => (
                              <div className="book" key={product.id}>
                                <h1>{product.id}</h1>
                                <h1>{product.pname}</h1>
                                <h1>{product.pnname}</h1>
                                <h1>{product.pprice}</h1>
                              </div>
                            ))}
                          </div> */}
                          {/* shoppingcart----------- */}
                        </div>

                        <div className="">
                          <div className="card">
                            <div className="card-header bg-dark p-3">
                              <div className="card-header-flex">
                                <h5 className="text-white m-0">
                                  Cart Calculation{" "}
                                  {state.cart.length > 0
                                    ? `(${state.cart.length})`
                                    : ""}
                                </h5>
                                {state.cart.length > 0 ? (
                                  <button
                                    className="btn btn-danger mt-0 btn-sm"
                                    onClick={() => emptycart()}
                                  >
                                    <i className="fa fa-trash-alt mr-2"></i>
                                    <span>Empty Cart</span>
                                  </button>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div className="card-body p-0">
                              {state.cart.length === 0 ? (
                                <table className="table cart-table mb-0">
                                  <tbody>
                                    <tr>
                                      <td colSpan="6">
                                        <div className="cart-empty">
                                          <i className="fa fa-shopping-cart"></i>
                                          <p>Your Cart Is empty</p>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              ) : (
                                <table className="table cart-table mb-0">
                                  <thead>
                                    <tr>
                                      <th>Action</th>
                                      <th>Product ID</th>
                                      <th>Name</th>
                                      <th>Price</th>
                                      {/* <th>Qty</th> */}
                                      {/* <th className="text-right">
                                        <span id="amount" className="amount">
                                          Total Amount
                                        </span>
                                      </th> */}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {state.cart.map((data, index) => {
                                      const { id, image, pname, pprice, qty } =
                                        data;
                                      return (
                                        <tr key={index}>
                                          <td>
                                            <button
                                              className="prdct-delete"
                                              onClick={() =>
                                                removeFromCarts(id)
                                              }
                                            >
                                              
                                              <i className="fa fa-trash-alt"></i>
                                            </button>
                                          </td>
                                          <td>
                                            <div className="product-img">
                                            {id}
                                              {/* <img src={image} alt="" /> */}
                                            </div>
                                          </td>
                                          <td>
                                            <div className="product-name">
                                              <p>{pname}</p>
                                            </div>
                                          </td>
                                          <td>${pprice}</td>
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
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                   
                                      <th colSpan="3">&nbsp;</th>
                                      <th>
                                        Items in Cart
                                        <span className="ml-2 mr-2">:</span>
                                        <span className="text-danger">
                                          {cartTotalQty}
                                        </span>
                                      </th>
                                      <th className="text-right">
                                        Total Price
                                        <span className="ml-2 mr-2">:</span>
                                        <span className="text-danger">
                                          $ {cartTotalAmount.toFixed(0)}
                                        </span>
                                      </th>
                                      <th>
                                      <Link to="/checkout" className="fw-bolder">
              
                                         <button
                                          className="btn btn-primary mt-0 btn-sm"
                                          onClick={() => checkoutcart()}
                                         >
                                          <i className="fa fa-cart-shopping m-2"></i>
                                          <span className="text-white" >Checkout 1</span>
                                          
                                         </button>
                                         </Link>
              
                                         
                                  </th>
                                    </tr>
                                  </tfoot>
                                </table>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ul>
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/productinfo" element={<ProductInfo />} />
              <Route
                path="/searchproduct"
                element={
                  <Searchproduct
                    productDataObj={productsSearchResult}
                    size={100}
                  />
                }
              />
              <Route path="/contacts" element={<Contacting />} />
              {/* <Route path='/productdetail' element={ <ProductDetail />} /> */}
              <Route path="/home" element={<Home />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/seller" element={<Seller />} />
              <Route path="/feedbackdashboard" element={<Feedbackdashboard />} />
              <Route path="/usersmanagement" element={<UsersManagement />} />
              <Route path="/checkout" element={<Checkout    checkoutdata={state.cart}/>} />
              {/* <Route path="/checkout" element={<Checkout />} /> */}
              <Route
                // exact
                // path="/page/:id"
                // path="/:id/productdetail"
                // path="/portfolio/:id/"
                // path="/productdetail"
                path="/productdetail/:id"
                element={<ProductDetail />}
                // render={({ match }) => (
                //     // <ProductDetail item={data.find((item) => String(item.id) === String(match.params.id))} />
                // )}
              />
            </Routes>
          </Router>
        </nav>
      </BooksContext.Provider>
    </div>
  );
}

export default App;
