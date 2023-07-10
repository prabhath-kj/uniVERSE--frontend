import { useRouteError } from "react-router-dom";
import { useState } from "react";

const ErrorElement = () => {
  const [{ error }] = useState<any>(useRouteError());

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="alert alert-info px-4 py-3 rounded-lg w-80 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current inline-block w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="font-bold">{error?.status}</span>
        <span className="ml-1">{error?.message}</span>
      </div>
    </div>
  );
};

export default ErrorElement;
