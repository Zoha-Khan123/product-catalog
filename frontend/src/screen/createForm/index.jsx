import React from "react";


const CreateForm = () => {
  return (
    <div>
      <h1>Create Form</h1>
      <input type="text" placeholder="Enter product name" />
      <input type="number" placeholder="Enter product quantity" />
      <input type="number" placeholder="Enter product price" />
      <input type="text" placeholder="Enter product category" />
      <input type="file" />
    </div>
  );
};

export default CreateForm;
