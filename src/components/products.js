import { productsData } from "@/data/products";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <section id="products" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Premium Selection
        </h2>

        {productsData.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-indigo-600 border-b-2 border-indigo-200 pb-2">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {category.products.map((product, productIndex) => (
                <div
                  key={productIndex}
                  className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  {/* <Image
                    src="/images/chicken.jpg"
                    alt={product.name}
                    height={200}
                    width={250}
                    className="w-full h-64 object-cover"
                  /> */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-2xl font-semibold mb-2">
                      {product.name}
                    </h4>
                    <p className="text-neutral-600 mb-4">
                      {product.description}
                    </p>
                    <span className="text-xl font-bold text-indigo-600">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
