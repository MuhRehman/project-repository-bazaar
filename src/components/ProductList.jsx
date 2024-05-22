import Product from "./Product";

// ProductList component to display multiple products
export default  ProductList = ({ onAddToCart }) => {
    // Sample list of products
    const products = [
      { id: 1, name: "Product 1", price: "$10" },
      { id: 2, name: "Product 2", price: "$15" },
      { id: 3, name: "Product 3", price: "$20" },
    ];
  
    return (
      <div>
        <h1>test</h1>
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    );
  };