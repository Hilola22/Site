import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import product_img from "../../../assets/product.jpg";

const ProductHero = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data))
      .catch((err) => setErr(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mt-20 text-center text-black text-3xl font-bold">
          Products
        </h2>
        {loading && <p className="text-center">Loading...</p>}
        {err && <p className="text-red-500 text-center">{err}</p>}

        <div className="wrapper pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {data?.products?.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col h-full min-h-[250px] w-full">
                <div className="mx-auto">
                  <img
                    className="w-[200px] h-[200px] object-cover"
                    src={product.images[0]}
                    alt={product.title}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h2>
                  <p className="text-green-600 font-bold text-sm overflow-hidden">
                    ${product.price}
                  </p>
                  <p className="text-gray-600 font-bold text-sm overflow-hidden bg-gray-200 p-1 inline-block rounded-2xl mt-2">
                    {product.category}
                  </p>
                  <p className="flex text-gray-600 font-bold text-sm mt-2">
                    {product.rating} ⭐
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
