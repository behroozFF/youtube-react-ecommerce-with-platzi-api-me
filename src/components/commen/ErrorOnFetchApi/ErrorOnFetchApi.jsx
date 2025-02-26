import React from "react";

                        //props: message
const ErrorOnFetchApi = ({ message = null }) => {
  return (
    <p className="bg-red-600 text-slate-50 text-center rounded-lg shadow-sm p-4 capitalize">
      {message ? message : "something went wrong, try again later"}
    </p>
  );
};

export default ErrorOnFetchApi;
