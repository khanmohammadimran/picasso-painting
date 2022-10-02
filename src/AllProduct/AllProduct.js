import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const [tools, setTools] = useState([]);
  const navigate = useNavigate();
  const navigateToToolsDetail = (_id) => {
    navigate(`/purchase/${_id}`);
  };
  useEffect(() => {
    fetch("https://mighty-everglades-23547.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-8 py-8">
      {tools.map((tool) => (
        <div
          key={tool._id}
          className="card w-96 mx-auto bg-base-100 shadow-xl border-2"
        >
          <figure>
            <img src={tool.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-raleway">Name: {tool.name}</h2>
            <p className="font-raleway">
              <strong>Description:</strong> {tool.description}
            </p>
            <p className="font-sans">
              <strong>Minimum Quantity:</strong> {tool.minimumOrderQuantity}
            </p>
            <p className="font-sans">
              <strong>Available Quantity:</strong> {tool.availableQuantity}
            </p>
            <p className="font-sans">
              <strong>Price:</strong> ${tool.price}
            </p>
            <div className="card-actions justify-start">
              <button
                onClick={() => navigateToToolsDetail(tool._id)}
                className="btn btn-ghost border-0 font-sans text-white w-full max-w-xs bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
