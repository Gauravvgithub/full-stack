import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [pro, setPro] = useState(null);
  useEffect(() => {
    const productfetch = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res);
        setPro(res.data);
      } catch (error) {
        console.log(error);
        setPro([]);
      }
    };
    productfetch();
  }, []);
  if (!pro) {
    return <p>loading...</p>;
  }
  if (pro.length == 0) {
    return <p>no products found</p>;
  }
  return (
    <div className="d-flex justify-content-around" style={{width: "250vw"}}>
      <h1>Products:</h1>
      {pro.map((item) => (
        <div className="card" key={item.id} style={{ width: "18rem" }}>
          <img
            src={item.image}
            className="card-img-top"
            alt={item.title}
            style={{ width: "100px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p>
              <strong>Price:</strong> ₹{item.price}
            </p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <p>
              <strong>Rating:</strong> {item.rating.rate} {item.rating.count}{" "}
              reviews
            </p>
            <a href="#" className="btn btn-dark">
              Add Cart
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
