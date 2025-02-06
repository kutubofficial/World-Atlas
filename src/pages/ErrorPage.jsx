import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="font-bold mt-10 my-5 ml-20 text-red-800">
      <h1 className="m-5">Opps.! An error occurred..</h1>
      {error && <pre>{error.data}</pre>}
    </div>
  );
};

export default ErrorPage;
