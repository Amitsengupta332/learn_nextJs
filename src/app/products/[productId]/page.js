import React from "react";

const DynamicPage = ({ params }) => {
  return (
    <div>
      <h1 className="text-7xl text-center underline">This is dynamic page</h1>
      <p className="text-3xl font-bold"> Product Id: {params.productId}</p>
    </div>
  );
};

export default DynamicPage;
