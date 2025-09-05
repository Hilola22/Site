import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => setErr(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (err) return <p className="text-center mt-10 text-red-500">{err}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 pt-30">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-[400px] rounded-xl mx-auto mb-4 object-cover"
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-gray-600 mb-2">Category: {product.category}</p>
      <p className="text-green-600 mb-2">Price: ${product.price}</p>
      <p className="text-red-400 mb-2">
        Discount: {product.discountPercentage}%
      </p>
      <p className="text-gray-600">Rating: {product.rating} ⭐</p>

      <Link
        to="/products"
        className="text-blue-600 underline mb-4 inline-block mt-20"
      >
        ← Back
      </Link>
    </div>
  );
};

export default ProductDetail;
