import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductHero = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data))
      .catch((err) => setErr(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-8 pt-30 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="wrapper">
          {data?.map((product) => (
            <div className="card w-[300px] h">
              <div>
                <img src={product.image} alt="" />
              </div>
                  <div>
                      <h2>{product.title}</h2> 
                      <p>{ product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
